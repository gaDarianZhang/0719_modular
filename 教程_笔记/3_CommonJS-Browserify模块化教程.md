## CommonJS浏览器端模块化教程
### 1. 创建项目结构

- 这个目录结构也不是强制的

  ```json
  |-js
    |-dist //生成编译完js的目录
    |-src //源码所在的目录（我们编写的、没经过工具处理的代码，叫做源码）
      |-module1.js
      |-module2.js
      |-module3.js
      |-app.js
  |-index.html
  |-package.json
    {
      "name": "test-0719",
      "version": "1.0.0"
    }
  ```

### 2. 模块化编码

- 模块化这一部分还是像在CommonJS  Node服务器端使用一样

  * module1.js
    ```js
    module.exports = {
      foo() {
        console.log('moudle1 foo()')
      }
    }
    ```
  * module2.js
    ```js
    module.exports = function () {
      console.log('module2()')
    }
    ```
  * module3.js
    ```js
    exports.foo = function () {
      console.log('module3 foo()')
    }
    
    exports.bar = function () {
      console.log('module3 bar()')
    }
    ```
  * 下载第三方模块uniq：打开左下角的Terminal，cd到02_CommonJS-Node路径，输入命令：```npm install uniq```
  
  * app.js
    ```js
    //引用模块
    let module1 = require('./module1')
    let module2 = require('./module2')
    let module3 = require('./module3')
    
    let uniq = require('uniq')
    
    //使用模块
    module1.foo()
    module2()
    module3.foo()
    module3.bar()
    
    console.log(uniq([1, 3, 1, 4, 3]))
    ```

### 3. 下载browserify

> browserify：用于把CommonJS的模块化语法，翻译成浏览器认识的语法，是一个“翻译官”。要不然例如在index.html中引入了app.js，但是app.js中引入模块的函数require函数浏览器是不认识的。

  * <span style="color:orange">全局安装browserify，命令: ```npm install browserify -g```</span>
    备注：若此步骤报错，请使用管理员身份打开webstorm，再次执行即可；或使用管理员身份打开cmd执行。
  * 这样之后可能还是无法编译，报错``browserify : 无法加载文件  xxxxx\xxxx\npm\browserify.ps1，因为在此系统上禁止运行脚本``，这时以管理员身份打开powershell，执行``set-ExecutionPolicy RemoteSigned``，并选择A或Y

### 4. 执行处理命令
  * 第一步，cd到指定文件夹（03_CommonJS-Browserify）即：app.js所在的文件夹
  * <span style="color:orange">第二步，输入命令```browserify js/src/app.js -o js/dist/bundle.js```</span>

### 5. 页面使用引入:
  ```js
  <script type="text/javascript" src="js/dist/bundle.js"></script> 
  ```