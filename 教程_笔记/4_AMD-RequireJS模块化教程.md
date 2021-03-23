## require.js使用教程
1. 下载require.js
  * 官网: http://www.requirejs.cn/
  * github : https://github.com/requirejs/requirejs
  * 将require.js导入项目: js/libs/require.js 
2. 创建项目结构
  ```js
  |-js
    |-libs
      |-require.js
    |-modules
      |-loger.js
      |-dataService.js
    |-main.js
  |-index.html
  ```
3. 定义require.js的模块代码
  * dataService.js\
    
      * <span style="color:red;font-weight:bold">无依赖模块定义</span>
      
      * ```js
        define(function(){
        	return 模块;
        })
        ```
      
      * 
      
    ```js
    define(function () {
      let msg = 'atguigu.com'
    
      function getMsg() {
        return msg.toUpperCase()
      }
      function setMsg(messag){
          msg = messag;
      }
    
      return {getMsg,setMsg1}
    })
    ```
    
  * loger.js
    
      * <span style="color:red;font-weight:bold">有依赖模块定义</span>
      
      * ```js
        define(['module1', 'module2'], function(m1, m2){
        	return 模块
        }) 
        ```
      
      * <span style="color:orange;font-weight:bold">其中依赖的``module1``和``module2``就是要依赖的模块名，这个名称可以不根据模块文件名，可以随便写，但是后边再配置文件中要对应清楚。回调函数内的形参名则可随意。</span>
      
    ```js
    define(['dataService', 'jquery'], function (dataService, $) {
      let name = 'Tom2'
    
      function showMsg() {
        $('body').css('background', 'gray')
        console.log(dataService.getMsg() + ', ' + name)
      }
    
      return {showMsg}
    })
    ```
4. 应用主(入口)js: main.js
    - <span style="color:red;font-weight:bold">配置文件中，模块地址一定不能加.js后缀</span>
    - <span style="color:red;font-weight:bold">baseUrl是一个可选配置项，这里边有很多坑：</span>
        - baseUrl用于提取出后边paths中公共的路径
        - 不用baseUrl的时候，后边的paths里边路径，就可以是基于现在的main.js的相对路径。
        - 但是，当使用了baseUrl的时候，相对路径的起始地址已经不是现在这个main.js所在的文件夹了，而是引入该main.js的html文件所在的文件夹。
        - 而且，公共的斜杠必须写在baseUrl后边，不能放在paths内路径的前边。
  ```js
requirejs.config({
	//baseUrl是一个可选配置，这里边有很多坑。
    
    baseUrl: "js/xx/",


    //模块标识名与模块路径映射
    paths: {
        "loger": "modules/loger",//.js后缀一定不能加
        "dataService": "modules/dataService",
        "jquery": "地址"
    }
})

//引入使用模块
requirejs( ['loger',"jquery"], function(loger,$) {
    loger.showMsg();
    $("body").css("backgroundColor","skyblue");
})
    
  ```

5. <span style="color:red;font-weight:bold">页面使用模块:</span>
    - 在html文件中引入

  <span style="color:red;font-weight:bold">```<script data-main="js/main.js" src="js/libs/require.js"></script>```</span>
    

6. 使用第三方基于require.js的框架(jquery)
  * 将jquery的库文件导入到项目: 
    
    * js/libs/jquery-1.10.1.js
  * 在main.js中配置jquery路径
    ```js
    paths: {
              'jquery': 'libs/jquery-1.10.1'
          }
    ```
  * 在loger.js中使用jquery
    ```js
    define(['dataService','jquery'],function (dataService,$) {
      function showMsg() {
        console.log(dataService.getData());
        $('body').css('background','skyblue')
      }
      return {showMsg}
    })
    ```
  * 备注：<span style="color:orange">define中的要写jquery不可以写jQuery，因为jQuery源码已经对AMD模块化进行了适配，已经定义好了"jquery"</span>

