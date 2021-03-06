# 1、Nodejs快速入门

## 1.1、安装

> 官网：https://nodejs.org/zh-cn/download/     一路next安装即可

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222215532132.png" alt="image-20210222215532132" style="zoom:50%;" />

---

> cmd查看（是否）安装成功	

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222215857936.png" alt="image-20210222215857936" style="zoom: 67%;" />

---



## 1.2、什么是Nodejs

> 注意：ES6语法完全兼容。

![image-20210222220335723](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222220335723.png)

---



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222220258636.png" alt="image-20210222220258636" style="zoom:50%;" />

---



## 1.3、第一个Nodejs程序

> 1、建立一个项目文件夹， 并建立hello.js文件的hello world

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222223051858.png" alt="image-20210222223051858" style="zoom: 67%;" />



> 2、启动终端：ctrl + shift + y

`或者：点击左边`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222224319326.png" alt="image-20210222224319326" style="zoom: 50%;" />

---

> 3、解释运行：node hello.js				(注意：dir看目录地址， 要当前目录才行)



## 1.4、第二个Nodejs程序

> 证明：Nodejs是一门（服务端语言）
>
> API：http://nodejs.cn/api/

~~~
建立：httpserver.js文件， 使用node httpserver.js在服务端监听8888端口
~~~

~~~javascript
// 导入模块是：require 类似于import java.io
const http = require('http');       //看文档    http://nodejs.cn/api/

// 1、创建一个httpserver服务
// 2、监听端口8888
// 3、启动运行服务 node httpserver.js
// 4、在游览器访问http://localhost:8888
http.createServer(function(request, response){
    //告诉游览器：响应规范
    response.writeHead(200, {'Content-type':'text/html'});      //成功时，游览器用text解析
    response.end("<strong>hello server !!!</strong>");
}).listen(8888);

console.log("你启动的服务是：http://localhost:8888以启动成功！！！")
~~~



## 1.5、Nodejs操作mysql

### 1.5.1、安装mysql依赖

> 查API操作mysql：https://www.npmjs.com/package/mysql

> vscode终端执行：npm install mysql

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210223083651475.png" alt="image-20210223083651475" style="zoom:50%;" />

---

### 1.5.2、对mysql表进行查询

> 创建一个：db.js文件 （内容如下）

~~~javascript
// 1、导入mysql包
var mysql      = require('mysql');  

// 2、配置数据库连接信息       
var connection = mysql.createConnection({   
  host     : '127.0.0.1',
  port     : '3306',
  user     : 'root',
  password : '123456',          
  database : 'spring',
});
 
// 3、获取数据库：连接对象
connection.connect();                       
 
// 4、查询
connection.query('select * from user', function (error, results, fields) {   
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
// 5、关闭连接
connection.end();                           

// 6、控制台：node db.js 执行
~~~

> 注意：运行时，可能出现

![image-20210223090751629](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210223090751629.png)

>解决方法：mysql中执行
>
>
>
>ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

---

![image-20210223090913041](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210223090913041.png)

---





# 2、NPM包管理器

## 2.1、简介

~~~
NPM全称：Node Package Manager， 是Node.js包管理工具， 是（全球最大）的（模块生态系统），    		里面所有的模块都是（开源免费的）； 也是Node.js的包管理工具， 相当于后端的Mavean.

作用：
	1、快速构建nodejs工程
	2、快速安装和依赖第三个模块。比如 npm install mysql / redis 等等

NPM版本查询：
		cmd中输入：npm -v		
~~~



## 2.2、获取模块官网

> https://www.npmjs.com/





## 2.3、快速构建nodejs工程

> 终端输入：npm init                 

`将会获取到如下：package.json文件`

~~~json
快速构建nodejs工程生成文件：package.json讲解
此文件类似于：pom.xml文件， 用来管理依赖
{   
  "name": "npmpro",             //工程名
  "version": "1.0.1",           //版本
  "description": "my first nodejs project",
  "main": "index.js",           //入口js
  "scripts": {                  //运行脚本
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jiankebaiding",    //开发者
  "license": "ISC"              //授权协议
}
~~~

## 2.4、总结：搭建过程

- 1、快速构建nodejs工程命令

> npm init / npm init -y



- 2、安装依赖

> npm install 依赖名1 依赖名2

> 如果：速度太慢，可以搜索（npm 淘宝镜像）



- 3、安装模块导入

> const 常量名 = require('依赖名/模块名')



- 4、导入后如何使用：查看官方文档

> 搜索：npm官网
>
> https://www.npmjs.com/package/mysql



- 5、执行文件

> 控制台：node 文件名.js         (不加.js也可以运行)



- 6、卸载模块

> npm uninstall  模块名1 模块名2



- 7、补充：复用模块

> 将该工程的package.json文件复制到， （新工程）后， 终端执行 npm install





## 2.5、附上老师笔记

![image-20210223222117445](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210223222117445.png)

---

![image-20210223222136296](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210223222136296.png)

---

![image-20210223222154612](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210223222154612.png)

---

![image-20210223222213666](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210223222213666.png)

---



# 3、Babel

## 3.1、简介

![image-20210223223515802](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210223223515802.png)

---



## 3.2、安装方法

> npm install -g babel-cli				//官网：安装命令
>
> cnpm install -g babel-cli			  //阿里镜像：安装命令
>
> babel --version							//查看是否安装成功





## 3.3、babel==转换步骤==

`第一步：创建babel文件夹`

![image-20210223225559451](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210223225559451.png)

---

`第二步：初始化项目`

~~~
npm init -y
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210223225730112.png" alt="image-20210223225730112" style="zoom:50%;" />

---

`第三步：创建src/example.js`

> 可以使用node example.js  运行一下

~~~javascript
//转码前
let arr = [1, 2, 3, 4, 5];

input = array.map(ele=>ele * 2);
console.log(input);
~~~

`第四步：配置.babelrc`

> Babel的配置文件是.babelrc， 存放在项目的根目录下， 该文件用来设置（转码规则和插件）如下：

~~~
{
	"presets":["es2015"],
	"plugins":[]
}
~~~



`第五步：（根目录下）安装转换器`

~~~
cnpm install --save-dev babel-preset-es2015
~~~



`第六步：用babel转换器，转换整个src目录到dist目录`

~~~
babel src -d dist		//利用babel转换器，将src目录下的所有文件， 转换到dist目录
~~~



`补充：自定义脚本转换（也需要安装：转换器）`

![](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210223233833502.png)







# 4、模块化

## 4.1、模块化产生的背景

~~~
1、时代趋势：
	网站逐渐变成“互联网应用程序”， 嵌入网页的Javascript代码越来越庞大， 越来越复杂。

2、产生需求：
	JavaScript模块化编程， 已经成为了一个迫切的需求。

3、其中阻碍：
	理想条件下，开发者只需要实现（核心业务逻辑）， 其余可以加载别人的模块，但是JavaScript
	不是一种（模块化编程语言）， 它不支持“类”class, "包"package概念， 也不支持“模块module.
	
4、最终结果：
	产生了模块化规范：CommonJs模块化规范、ES6模块化规范
~~~



## 4.2、CommonJS规范

> 导出（已写好的）模块： module.exports = {key:value}

> 导入（已导出的）模块：const m = require("文件名");

- `导出代码`：导出模块.js文件

~~~javascript
//加法
const sum = function(a, b){
    return a + b;
}   

//减法
const sub = function(a, b){
    return a - b;
}


//导出模块
module.exports = {
    sum,
    sub
}
~~~



- `导入代码：`导入模块.js文件

~~~javascript    
//导入模块
const m = require("./导出模块");

//调用：加法
console.log(m.sum(1, 2));

//调用：减法
console.log(m.sub(1, 2));
~~~



## 4.3、ES6规范（推荐这种）

`方法一：（传统方法）`

![image-20210224114026769](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210224114026769.png)



`方法二：简写方法（推荐）`

![image-20210224114056604](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210224114056604.png)



`注意：不支持ES6报错内容，需要转ES5`

![image-20210224114944102](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210224114944102.png)





# 5、Webpack

> 官方文档：https://www.webpackjs.com/concepts/

## 5.1、简介

![image-20210224121618844](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210224121618844.png)





## 5.2、Webpack安装

1、全局安装

> npm install  webpack -g  					//打包工具
>
> npm install  webpack-cli -g				//webpack客户端



2、安装后查看版本号

> webpack -v					//用这两个中的：谁都会显示（二者版本）
>
> webpack-cli -v



## 5.3、使用Webpack==打包js==

- `总步骤:概括`

~~~
1、创建一个nodejs项目： npm init -y
2、创建一个src目录
3、在src存放两个需要合并的js文件：util.js、common.js   
4、准备一个：入口文件main.js, 其实就是（将模块集中）引入
5、JS打包：
	在（根目录）下定义一个 webpack.config.js文件配置打包的规则
	执行webpack查看效果：终端执行 webpack
	webpack -w可以实现监听
~~~

![image-20210224154530001](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210224154530001.png)

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210306205743081.png" alt="image-20210306205743081" style="zoom:50%;" />

---

- `第一步：webpack文件夹下，构建nodejs项目`

> 终端输入：npm init -y



- `第二步：在src目录下，创建common、util、main 三个js文件`

  > 注意：exports导出， require导入关键字

  ![image-20210224161249841](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210224161249841.png)

  

- `第三步：（根目录）下创建，webpack.config.js`

![image-20210224161504007](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210224161504007.png)

- `第四步：根目录执行命令`

> 打包：webpack
>
> 监听：webpack -w



- `第五步：测试`

> 创建一个html文件，引入打包好的js文件。





## 5.4、使用Webpack==打包css==

- `第一步：安装style-loader 和css-loader`

![image-20210224162730508](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210224162730508.png)

> npm install --save-dev style-loader css-loader



- `第二步：修改webpack.config.js文件`

~~~javascript
//导入path模块， path模块是nodejs的内置模块
const path = require('path');

//定义打包规则
module.exports = {
    //1、入口函数从哪里：开始打包编译
    entry: "./src/main.js",
    //2、编译成功后要把内容输出到哪里去
    output:{
        //2-1、定义输出的指定目录， __dirname是当前项目（根目录）
        path:path.resolve(__dirname, "./dist"),
        filename:"bundle.js"
    },

    //CSS打包规则：配置
    module:{
        rules:[
            {
                test:/\.css$/, //打包规则应用到：所有css结尾的文件上(目录同上js目录)
                use:['style-loader', 'css-loader']
            }
        ]
    }
}
~~~



- `第三步：src下创建style.css文件`

~~~css
body{
    background: red;
    font-size: 33px;
}
~~~



- `第四步：main.js中引入style.js文件`

~~~javascript
//导入：common、util模块
const common = require("./common.js");	
const util = require("./util.js");

//引入：style.css文件
require("./style.css")              //主要是这里！！！！

//先做100 + 200的加法， 然后显示到（控制台、游览器）
common.info("最终的值：" + util.add(100, 200));
common.info("最终的值：" + util.sub(200, 200));
~~~



- `第五步：根目录下打包, 监听`

> webpack -w



- `拓展：可用（脚本）代替webpack -w`

> package.json中：添加key : value         例如：dev : "webpack -w"

~~~javascript
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"webpack -w"
  },
~~~

> 配置好后终端输入：npm run dev





# 6、Vue-Element-admin

> 官网：https://panjiachen.gitee.io/vue-element-admin-site/zh/

## 6.1、简介

~~~
vue-element-admin 是一个后台前端解决方案，它基于 vue 和 element-ui实现。它使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。
~~~



## 6.2、下载该项目

> google：Vue-Element-admin  （去gitHub下载）



## 6.3、==切换中文==，运行

- 第一步：git配置好（环境变量）
- 第二步：VScode打开克隆好的（项目）
- 第三步：切换到18i版本，就有中文版本

> 终端执行：git checkout i18n



- 第四步：npm包依赖下载

> npm install 
>
> npm install --registry=https://registry.npm.taobao.org   阿里镜像



- 启动项目：

> npm run dev





## 6.4、需要记住

![image-20210224175523627](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210224175523627.png)