# 1、SpringMVC需要学习什么？

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

~~~

~~~





