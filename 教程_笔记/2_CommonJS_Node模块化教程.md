## CommonJS服务端模块化教程(Node.js模块化教程)
### 1. 安装Node.js

### 2. 创建项目结构

- 这个结构也是根据个人习惯来的。

  ```json
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
  |-app.js
  |-package.json
    {
      "name": "test-0719",
      "version": "1.0.0"
    }
  ```
### 3. 模块化编码：

  * module1.js
    ```js
    module.exports = {
      data:'module1',
      foo(){
        console.log('foo()------',this.data);
      },
      bar(){
        console.log('bar()------',this.data);
      }
    }
    ```
    
  * module2.js
    ```js
    module.exports = function () {
      console.log('module2');
    }
    ```
    
  * module3.js
    ```js
    exports.foo = function () {
      console.log('foo()  module3');
    }
    
    exports.bar = function () {
      console.log('bar()  module3');
    }
    ```
    
  * 下载第三方模块uniq：打开左下角的Terminal，cd到02_CommonJS-Node路径，输入命令：```npm install uniq```

  * <span style="color:red;font-weight:bold">引入模块时``let module1 = require(地址)；``如果引入第三方模块，直接写入模块名，如果引入自定义模块，必须填写路径，而且不能省略前边的"./"</span>

  * app.js 
    ```js
    let module1 = require('./modules/module1')
    let module2 = require('./modules/module2')
    let module3 = require('./modules/module3')
    let a = require('uniq')
    
    module1.foo()
    module1.bar()
    module2()
    module3.foo()
    module3.bar()
    
    let arr = [1,11,2,2,2,5,5,5,3,4,6,6,9,7,8]
    console.log(a(arr));
       
    ```
    ### 4. 在node环境下运行app.js的两种方法(任选其一)：

  * 第一种方法：用命令启动: ```node app.js```

  * 第二种方法：用工具启动: 右键 --> Run 'xxxxx.js'

### <span style="color:red;">5. CommonJS的内置关系</span>

- ``module.exports = exports = {}``，也就是说exports是一个对象，暴露的时候``let module1 = require('./modules/module1')``就是让新对象module1指向module.exports指向的那块内存空间。
- <span style="color:red;font-size:20px;font-weight:bold">但是，``module.exports``和``exports``并不是一个对象，只不过他俩刚开始都指向一块预先分配好的要暴露出去的那个对象的地址。如果使用``module.exports = 对象/函数等``，那么要暴露的地址就变成了``module.exports``重新指向的这块内存。也就是说``module.exports``指向的这块内存才是要暴露出去的，只不过刚开始自动地把``exports``也指向了``module.exports``所指向的内存，因此要注意``module.exports``指向内存的改变。</span>

![2_CommonJS内置关系](2_CommonJS_Node模块化教程.assets/2_CommonJS内置关系.png)