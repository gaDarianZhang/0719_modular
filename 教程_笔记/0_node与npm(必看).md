## 模块化课程Node相关知识铺垫

### 1. Node是什么？
> 是一个js运行环境

### 2.Node与npm是什么关系？
> 我们在开发时，经常会用到很多别人已经写好的代码或第三方库，我们一般会这样操作：搜索，下载，解压，引入。如果每次都这么做势必很麻烦，于是Node.js的设计者打造了一个包管理器：npm，一些第三方库的作者把代码放在npm上。当我们想要使用时，直接通过npm命令去安装即可，不用去理会应该下载什么？放在哪里？一切都处理好。<span style="color:orange">而且如果我们要用的模块A，而模块A又依赖模块B，模块B又依赖模块C和D，那么npm会根据依赖关系，把所有依赖的包都下载下来并且管理起来。</span>

1. npm全称：Node package manager(Node包管理器)，安装了Node就自动安装好了npm。
2. 包（库、项目）：电脑上的一个普通文件夹，包含了package.json，就变成了一个符合npm规范的包。
3. <span style="color:orange">使用命令：```npm init ```把一个普通的文件夹变成一个包，即自动生成package.json</span>

查看自己node的版本命令：```node -v```
查看自己npm的版本命令：```npm -v```

【版本要求】：
1. node版本：最低是10
2. npm版本：最低是6
3. <font color=red>为了让你的npm下载东西更迅速，请务必执行以下命令！！！（后期会讲解该命令的含义）</font>
```npm config set registry http://registry.npm.taobao.org/```
### 3.包名的要求：
> 不能有中文
<span style="color:orange">不能有大写字母</span>
不能与npm上已经存在的包重名，例如：(axios、jquery、less等)

### 4.安装包的命令
- ```npm install xxxx```或者```npm i XXX ```
- 使用npm命令安装完包之后，会在package.json文件中自动添加上已安装的包的名称，同时也会在package-lock.json中添加上包的详细信息。同时还有一个node_modules文件夹，里面存的就是下载的这些包。
- 所以，<span style="color:orange">当拷贝这份代码的时候，不需要拷贝node_modules这个文件夹里的包，只用带上package.json文件，然后使用``npm install``即可自动安装这些依赖包</span>



