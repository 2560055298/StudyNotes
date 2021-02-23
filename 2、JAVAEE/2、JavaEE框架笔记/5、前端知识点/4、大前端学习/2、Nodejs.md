

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



`第五步：安装转换器`

~~~
cnpm install --save-dev babel-preset-es2015
~~~



`第六步：用babel转换器，转换整个src目录到dist目录`

~~~
babel src -d dist		//利用babel转换器，将src目录下的所有文件， 转换到dist目录
~~~



`补充：自定义脚本转换`

![](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210223233833502.png)