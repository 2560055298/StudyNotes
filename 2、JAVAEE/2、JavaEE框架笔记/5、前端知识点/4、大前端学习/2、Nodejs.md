# 1、安装

> 官网：https://nodejs.org/zh-cn/download/     一路next安装即可

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222215532132.png" alt="image-20210222215532132" style="zoom:50%;" />

---

> cmd查看（是否）安装成功	

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222215857936.png" alt="image-20210222215857936" style="zoom: 67%;" />

---



# 2、什么是Nodejs

![image-20210222220335723](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222220335723.png)

---



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222220258636.png" alt="image-20210222220258636" style="zoom:50%;" />

---



# 3、第一个Nodejs程序

> 1、建立一个项目文件夹， 并建立hello.js文件的hello world

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222223051858.png" alt="image-20210222223051858" style="zoom: 67%;" />



> 2、启动终端：ctrl + shift + y

`或者：点击左边`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210222224319326.png" alt="image-20210222224319326" style="zoom: 50%;" />

---

> 3、解释运行：node hello.js				(注意：dir看目录地址， 要当前目录才行)



# 4、第二个Nodejs程序

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

