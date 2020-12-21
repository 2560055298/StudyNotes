1、SpringMVC需要学习什么？

~~~
1、MVC是什么？
2、SpringMVC是什么？
3、SpringMVC的执行流程
4、
~~~



# 2、MVC：概念讲解

~~~
1、概念：
	MVC模式（Model–view–controller）是软件工程中的一种软件架构模式，把软件系统分为三个基     	   本部分：模型（Model）、视图（View）和控制器（Controller）。
	
2、背景：
 	MVC模式最早由Trygve Reenskaug在1978年提出，是施乐帕罗奥多研究中心（Xerox PARC）在         20世纪80年代为程序语言Smalltalk发明的一种软件架构。
 	
3、MVC模式的目的：
		实现一种（动态的程序设计），使后续对程序的修改和扩展简化，并且使程序某一部分的重复利用         成为可能。
		
4、作用：
		1、实现了：View（表现层） 和 Model(持久层、业务层)的分离
		2、可以让：切换（持久层数据库），不影响表现层， 比如：mysql、Oracle等进行切换
		3、可以让：一个Model
5、注意：
		MVC是一种设计思想， 任何语言都可以应用。不仅仅是JAVA
~~~



## 2.1、M、V、C三个字母分别代表什么？

~~~
1、模型(Model)概念：
	是什么? （持久层dao、mapper）和（业务层service）
    做什么？ 
    	持久层：实现数据库的 CRUD 
    	业务层：调用CRUD + 相应逻辑， 实现功能（比如：转账）
	
2、视图（View）概念：
	是什么？ (jsp、html)
	做什么？ 做展示
	
3、控制器（Controller）概念:
    是什么？ servlet
	做什么？ 
			1、用户发出请求（用户操作的可能是：app、游览器等）
			2、Servlet(控制器)接收请求数据：并调用（模型Model）对应的业务逻辑方法
			3、模型（Model）处理完数据后， 返回(更新后)的(数据)给servlet
			4、控制器（Controller）调用相应视图（View）进行展示(更新后的页面)
			
	总结一句话：（转发请求，对请求进行处理） --->>> 体现了（动态性）静态页面：动起来了
~~~

==如下图：==

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201218164236342.png" alt="image-20201218164236342" style="zoom:50%;" />

---

## 2.2、JS实现MVC

![image-20201218163614403](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201218163614403.png)

# 3、复习Servlet，为学习SpringMVC做铺垫

## 3.1、建1个Maven工程当做父工程，(删除src)添加公共依赖

~~~
1、springMVC
2、servlet
3、jsp
4、jstl
5、junit
~~~

![image-20201218172154534](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201218172154534.png)

---

## 3.2、建立一个maven的（model）

### 3.2.1、添加Web app的支持！

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201218172856096.png" alt="image-20201218172856096" style="zoom:50%;" />



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201218180640260.png" alt="image-20201218180640260" style="zoom:50%;" />

---

### 3.2.2、添加自己的：依赖（尽管公共有了， 也养成好习惯）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201218173255871.png" alt="image-20201218173255871" style="zoom:50%;" />

---



## 3.3、写一个控制器：servlet

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219160733991.png" alt="image-20201219160733991" style="zoom: 50%;" />

## 3.4、写一个:显示页面

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201218193809590.png" alt="image-20201218193809590" style="zoom: 50%;" />

---

## 3.5、在web.xml配置servlet  (控制器)

![image-20201218194426067](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201218194426067.png)

## 3.6、写一个主页用来给用户：提交表单

![image-20201219161730260](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219161730260.png)

## 3.7、配置tomcat

![image-20201219161816123](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219161816123.png)

## 3.8、访问页面

![image-20201219162438009](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219162438009.png)

> 注意参考自己的博客：servlet执行流程
>
> https://www.cnblogs.com/yangzaikongzhongfei/p/14159450.html



# 4、什么是：SpringMVC?

## 4.1、Spring介绍

~~~
一、概念：
	Spring MVC是Spring Framework的一部分，是基于Java实现MVC的轻量级Web框架。

二、为什么要学它（从它功能讲起）：
	1、轻量级，简单易学
	2、高效,基于请求响应的MVC框架
    3、与Spring兼容性好，无缝结合
    3、约定优于配置
	4、功能强大：RESTful、数据验证、格式化、本地化、主题等
	5、简洁灵活

三、SpringMVC的核心：
	Spring的web框架围绕DispatcherServlet [ 调度Servlet ] 设计。
	
四、官方文档：
	1、老版本地址：(有图)
		https://docs.spring.io/spring-framework/docs/4.3.24.RELEASE/spring-				framework-reference/
		
	2、新版本地址：就在spring的core的下面
	
五、重点看狂神老师的总结：
	https://mp.weixin.qq.com/s/yuQqZzAsCefk9Jv_kbh_eA   
~~~



## 4.2、SpringMVC快速搭建

### 4.2.1、看老师笔记：

> 搭建流程 https://mp.weixin.qq.com/s/8ddT6FD0Y4f3XdbEz0aqpQ

### 4.2.2、总结：SpringMVC实现流程

> 原理分析 https://mp.weixin.qq.com/s/yuQqZzAsCefk9Jv_kbh_eA

> ![image-20201220191526083](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201220191526083.png)

图为SpringMVC的一个较完整的流程图，实线表示SpringMVC框架提供的技术，不需要开发者实现，虚线表示需要开发者实现。

**简要分析执行流程**

1. DispatcherServlet表示前置控制器，是整个SpringMVC的控制中心。用户发出请求，DispatcherServlet接收请求并拦截请求。

   我们假设请求的url为 : http://localhost:8080/SpringMVC/hello

   

   **如上url拆分成三部分：**

   http://localhost:8080服务器域名

   SpringMVC部署在服务器上的web站点

   hello表示控制器

   通过分析，如上url表示为：请求位于服务器localhost:8080上的SpringMVC站点的hello控制器。

2. HandlerMapping为处理器映射。DispatcherServlet调用HandlerMapping,HandlerMapping根据请求url查找Handler。

3. HandlerExecution表示具体的Handler,其主要作用是根据url查找控制器，如上url被查找控制器为：hello。

4. HandlerExecution将解析后的信息传递给DispatcherServlet,如解析控制器映射等。

5. HandlerAdapter表示处理器适配器，其按照特定的规则去执行Handler。

6. Handler让具体的Controller执行。

7. Controller将具体的执行信息返回给HandlerAdapter,如ModelAndView。

8. HandlerAdapter将视图逻辑名或模型传递给DispatcherServlet。

9. DispatcherServlet调用视图解析器(ViewResolver)来解析HandlerAdapter传递的逻辑视图名。

10. 视图解析器将解析的逻辑视图名传给DispatcherServlet。

11. DispatcherServlet根据视图解析器解析的视图结果，调用具体的视图。

12. 最终视图呈现给用户。



### 4.2.3、总结：搭建时易错点

- **第一个：建立maven项目更好，而不是maven-web项目， 但是要注意：添加web**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201220193719142.png" alt="image-20201220193719142" style="zoom:50%;" />

- **第二个：添加web后，注意观察web是否（有小蓝点）**

![image-20201220194738349](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201220194738349.png)

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201220194628800.png" alt="image-20201220194628800" style="zoom: 33%;" />

---

- **第三个：编译后，out中是否有lib包，没有报404**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201220194922026.png" alt="image-20201220194922026" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201220195136962.png" alt="image-20201220195136962" style="zoom: 50%;" />

---

- **第四个：出现500的情况，可能是target没有生成。**

~~~
解决办法：重新建项目。
~~~



- **第五个：pox.xml画了横线**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201220195528957.png" alt="image-20201220195528957" style="zoom: 50%;" />

---



- **虚拟项目名修改**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201220195658261.png" alt="image-20201220195658261" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201220195731968.png" alt="image-20201220195731968" style="zoom: 33%;" />

---

- **用 / 不拦截.jsp的原因***

  ![image-20201220202340579](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201220202340579.png)

---