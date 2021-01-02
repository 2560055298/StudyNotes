~~~
立志做一名优秀的开源社区程序员。					---老洋
~~~

# 主题：doget()、doPost()、service（）关系

## 1、首先：先明白Servlet体系结构

~~~
一、Servlet 接口
二、GenericServlet 抽象类
	 1、实现了：Servlet接口
	 2、将Servlet接口中其他的方法：默认做了（空实现），只将service()方法作为抽象
	 3、如何实现它?
	 	定义：Servlet类时， 可直接继承GenericServlet，实现service（）方法即可
	 
三、HttpServlet 抽象类
	1、孙子类（继承了：GenericServlet）
	2、HttpServlet：是对http协议的一种封装，简化操作
	3、如何使用它？
		定义类继承：HttpServlet
		复写doGet/doPost方法
		service：会根据,method是：get或post等类型，自动调用
~~~

- **层次图**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219093810593.png" alt="image-20201219093810593" style="zoom:50%;" />



## 2、正题：它们内部的方法

- **Servlet(接口)**

![image-20201219094252855](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219094252855.png)

- **GenericServlet(抽象类)**

![image-20201219095417792](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219095417792.png)

- **HttpServlet(抽象类)**

  - **拥有的方法**

  ![image-20210102075552895](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210102075552895.png)

  - **doGet方法（）**

  ![image-20201219113601254](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219113601254.png)

  

  - **doPost方法（）**

  ![image-20201219113816386](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219113816386.png)

  

  - **service方法（）有两个**

  ![image-20210102081155077](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210102081155077.png)

<span style='color:black;background:PaleTurquoise;font-size:18px;font-family:微软雅黑;'>第一个：HttpServlet自己创建的protected修饰的service()</span>

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219114650852.png" alt="image-20201219114650852" style="zoom: 50%;" />

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219114736696.png" alt="image-20201219114736696" style="zoom: 67%;" />



<span style='color:black;background:PaleTurquoise;font-size:18px;font-family:微软雅黑;'>第二个：HttpServlet（继承父类）GenericServlet的， 但是这个service()方法，起源于Servlet接口</span>

![image-20201219115248023](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219115248023.png)



## 3、总结：三者执行的顺序

~~~
一、当客户端发送请求：比如在游览器（提交表单）
二、服务器会接收到信息， 通过表单的action="定位servlet地址"  找到servlet
三、然后默认会去找：public修饰的service()方法：
	1、当重写了(父类)HttpServlet的public修饰的service方法时：
			只执行（重写的service方法的内容）
			
    2、当(没有)重写了(父类)HttpServlet的public修饰的service方法时:
    	会自动调用HttpServlet中的service()方法, 这个方法最终会调用：HttpServlert中的
    	protected service(HttpServletRequest req, HttpServletResponse resp)方法，
        进而会依次找doGet()、doPost()方法	
四、当提交表单时
	1、若使用get方式提交， 若没有重写doGet()方法， 那么会报错。
	2、若使用post方式提交，若没有重写doPost()方法，那么也会报错。

五、所以很多（老师）推荐：
		1、不去重写（父类public修饰的）service（）方法,直接写doGet()、doPost()方法。
		2、因为（不重写）public修饰的service()方法，
				会（先调用）（HttpService抽象类的) public的service()方法
				(在调用)其protected 修饰的 service()方法。	     			
~~~

<span style='color:black;background:PaleTurquoise;font-size:18px;font-family:微软雅黑;'>调用顺序：如下图</span>

![image-20201219152630547](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219152630547.png)

![image-20201219152916682](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219152916682.png)

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201219154859098.png" alt="image-20201219154859098" style="zoom: 200%;" />



## 4、问题：联系方式

~~~
若有问题:请联系qq2560055298 						---老洋
~~~