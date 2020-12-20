# JAVA框架

## 补充

### 1、什么框架？

- 软件的半成品， 为（解决问题）制定的一套约束，在提供功能基础上进行（扩充）

### 2、为什么要使用框架？

- 提高：开发效率

### 3、框架不能（封装的）内容怎么处理？

- 通过：xml外部引入

	- 为什么要用xml引入？

		- 因为框架是：.class文件了，其中提供了一些接口（只能用xml），并且（位置、名称）可能限定

- 1、如果（类固定）只需要使用xml解析
- 2、如果（类和属性）不固定， 需要使用（反射）

### 4、区分：类库（和）框架

- 1、类库

	- 相当于：名句， 引入即可

- 2、框架

	- 相当于：填空

		- 引入：包含约束

### 5、数据库连接池

- 1、概念

	- 本质上是一个容器，存放数据库（连接对象）的容器

- 2、原理

	- 1、在内存中：开辟一块空间， 存放多个（数据库连接对象）
	- 2、连接的方式多种

		- 此处以：JDBC Tomcat Pool 为例
		- 直接由tomcat产生数据库：连接池

	- 3、数据库连接对象：状态

		- active

			- 当前连接对象，被应用程序使用中

		- idle

			-  无意义的; 空闲的; 懒惰的; 无根据的;
			- 空闲状态：等待应用程序使用

	- 4、使用数据库连接池的：目的

		- 1、在（高频率）访问数据库时

			- 使用（数据库连接池）技术可以（降低） 服务器系统（压力），提升程序运行效率

		- 2、小型项目：

			- 无需使用：数据库连接池

- 3、好处

	- 1、节省资源

		- 节省了：重复请求连接数据库， 和释放数据库连接的开销

	- 2、提供用户访问效率

- 4、实现方式

	- 在javax.sql下（提供了）一个数据库（连接池）的接口：DataSource
	- DataSource有两个方法

		- getConnection()

			- 从连接池中（获取）连接对象

		- close()

			- 将连接对象（归还）连接池

### 6、web内容

- 补充

	- 1、软件架构

		- C / S
		- B / S

	- 2、资源分类

		- 1、静态资源

			- 1、概念

				- 所有用户访问(同样的资源)，得到的结果（都是一样的）， 称为（静态资源）， 静态资源可以（直接）被游览器解析
				- 游览器有：静态资源解析引擎

			- 2、举例

				- html
				- css
				- JavaScript

		- 2、动态资源

			- 1、概念

				- 每个用户访问（相同）资源后，得到的结果（可能）不一样。称为动态资源
				- 动态资源被访问后，需要先转换为静态资源，再返回给游览器

			- 2、举例

				- servlet / jsp
				- php
				- asp

	- 3、网络通信三要素

		- IP

			- 电子设备在网络中的唯一标识

				- 电子设备：计算机

		- 端口

			- 应用程序（在）计算机中的（唯一）标识

		- 传输协议

			- 1、概念

				- 数据传输的规则

			- 2、基础协议

				- TCP

					- 安全协议，三次握手。速度稍慢

				- UDP

					- 不安全协议，速度快

	- 4、web服务器软件

		- 服务器

			- （安装了）服务器（软件）的计算机：称为（服务器）

		- 服务器软件

			- 1、功能

				- 接收请求
				- 处理请求
				- 做出响应

			- 2、分类

				- 1、web服务器

					- 1、web服务器软件

						- 1、普遍功能

							- 1、接收用户请求
							- 2、处理用户请求
							- 3、做出响应

						- 2、还可做什么？

							- 可以（部署）web项目， 让用户通过（游览器）来访问，这些项目
							- web容器

					- 2、常见的java相关：web服务器软件

						- 补充：

							- JavaEE：Java语言在企业级开发中使用：技术规范的总和， 一共规定了13项大的规范

						- webLogic

							- oracle公司， 大型JavaEE服务器， 支持所有的JavaEE规范，收费的

						- websphere

							- IBM公司，大型的JavaEE服务器，支持所有的JavaEE规范，收费的

						- JBOSS

							- JBOSS公司， 大型的JavaEE服务器，支持所有的JavaEE规范， 收费的

						- Tomcat

							- Apache基金组织，中小型的JavaEE服务器， 仅仅支持少量的JavaEE规范Servlet / jsp 
							- 开源的， 免费的

				- 2、数据库服务器

	- 5、Tomcat

		- 1、是什么？

			- web服务器软件

		- 2、如何使用？

			- 1、下载

				- http://tomcat.apache.org/

			- 2、安装

				- 解压安装包即可
				- 注意：安装目录建议（不要）有空格

			- 3、卸载

				- 删除目录就行

			- 4、启动

				- bin / startup.bat

					- 双击运行即可

				- 访问：

					- 游览器访问：自己

						- http://localhost:8080

					- 游览器访问：他人

						- http://别人的IP:8080

			- 5、关闭

				- 1、非正常关闭

					- 通过×关闭

				- 2、正常关闭

					- 通过shutdown.bat

			- 6、部署方式

				- 1、直接将项目放到：webapps目录下即可

					- /hello

						- 项目的访问路径

							- 虚拟目录

					- 简化部署

						- 把文件压缩， 打成war包， 再讲war包放置到webapps目录下
						- war包会自动解压缩

				- 2、在conf\Catalina\localhost创建任意名称的xml文件。在文件中编写<Context docBase="D:\hello"/> 
				- 3、动态项目和静态项目

					- 动态项目

						- 项目名称

							- web-INF

								- web.xml

									- 该项目的（核心）配置文件

								- classes目录

									- 放置字节码文件

								- lib目录

									- 放置项目依赖的jar包

					- 将Tomcat集成到IDEA中， 并且创建JavaEE的项目，部署项目

			- 7、其中可能遇到的问题？

				- 1、bin/startup.bat ：一闪而过

					- 原因：没有正确配置  JAVA_HOME

						- 因为：tomcat是Java写的，需要JDK运行环境

					- 解决方法：

						- 环境变量中增加：

							- JAVA_HOME=JDK大目录

						- path中添加：

							- %JAVA_HOME%

				- 2、启动报错（端口占用）

					- 1、暴力

						- 找到占用的：端口号，通过杀死（线程）解决
						- netstat- ano

					- 2、温柔

						- 修改自身：端口号

- 1、Servlet

	- 补充：

		- 因为，动态资源是有：逻辑性的（代码）
		- 编写的Java代码，想要被服务器（识别）必须（遵循）tomcat的（规则）， 也就是某个（接口）
		- 此处接口是（Servlet）

	- 1、概念

		- Server applet
		- 运行服务器的：小程序

	- 2、快速入门

		- 1、创建JaveEE项目
		- 2、定义一个类：实现Servlet(接口)
		- 3、实现（接口）中的（方法）
		- 4、配置Servlet

			- 也是配置WEB-INF下的：web.xml

				- <servlet>     <servlet-name>   <servlet-class>    <servlet>
				- <servlet-mappign>   <servlet-name> <url-partten>  <servlet-mapping>

	- 3、交互流程

		- 1、客服端：发出请求

			- 带有URL

		- 2、服务器：接收请求

			- 解析URL

				- 1、根据虚拟目录：去tomcat下的webapps寻找（项目）
				- 2、根据资源路径：在（项目的）WEB-INF下找到对应的（url-partten）
				- 3、通过servlet-name找到其：全限定路径
				- 4、利用：反射机制， 将字节码加载进内存， 并创建：实例化对象
				- 5、通过对象调用：service方法

		- 3、处理完成后， 将处理结果：响应给客服端

	- 4、Servlet中的生命周期

		- 1、被创建时

			- 执行init方法

				- 只执行一次

			- Servlet什么时候被创建？

				- 1、默认情况是：第一次访问时，Servlet被创建
				- 2、也可以更改为：服务器启动时创建

					- <load-on-startup>值<load-on-startup>
					- 值为负：

						- 第一次访问才被创建

					- 值为0或正数

						- 服务器加载时就被创建

			- Servlet的init方法：只执行一次，意味着什么？

				- 说明内存中：只存在一个Servlet对象

					- 是单例的

				- 多个用户同时访问时， 可能存在（线程安全）问题
				- 解决：尽量不要在Servlet中定义成员变量。即使定义了成员变量，也不要对其修改（值）

		- 2、提供服务

			- 执行service方法， 执行多次

		- 3、被销毁：执行destroy方法， 执行一次

			- 只有服务器正常关闭时， 才会执行destroy方法
			- destroy方法在Servlet（被销毁）之前执行，一般用于释放资源

	- 5、Servlet 3.0

		- 1、有什么好处？

			- 支持（注解配置）， 可以不需要web.xml

		- 2、搭建步骤

			- 1、创建JavaEE项目， 选择Servlet的版本3.0以上，可以不创建web.xml
			- 2、定义一个类

				- 实现Servlet接口

			- 3、复写方法
			- 4、在类上使用@WebServlet注解， 进行配置

				- @WebServlet("资源路径")

		- 注意：WEB-INF下的资源，不能被（直接访问）

			- 因为web-inf下,应用服务器把它指为禁访目录,即直接在浏览器里是不能访问到的.
			- 但是可以让servlet进行访问,如web-inf下有a.jsp则可以用request.getrequestdispatcher("/web-inf/a.jsp").forward(request,response);  
			- 如果你想访问web-inf下的htm文件的话，用request.getrequestdispatcher("/web-inf/a.htm").forward(request,response);是访问不了的。
			- 原因很简单，jsp就是servlet，会被编译成class文件，而htm的就不行了。
			- 所以需要配置以下conf下的web.xml文件才能去访问htm。
			- 通常把那些限制访问的资源（比如说jsp源代码）放到Web应用的WEB-INF目录下，对于/web-INF/及其子目录，不允许直接的公共访问，所以就可以起到保护这些代码未经授权的访问和窥视，更好的保护了源代码。为了减少风险，可以把这些页面文件移到WEB-INF 目录下。基于Servlet的声明，WEB-INF不作为Web应用的公共文档树的一部分。因此，WEB-INF 目录下的资源不是为客户直接服务的。我们仍然可以使用WEB-INF目录下的JSP页面来提供视图给客户，客户却不能直接请求访问JSP。

	- 6、Servlet的体系结构

		- Servlet 接口
		- GenericServlet 抽象类

			- 子类(继承了：Servlet接口）
			- 将Servlet接口中其他的方法：默认做了（空实现），只将service()方法作为抽象
			- 将来定义：Servlet类时， 可直接继承GenericServlet，实现service（）方法即可

		- HttpServlet 抽象类

			- 孙子类（继承了：GenericServlet）
			- HttpServlet：是对http协议的一种封装，简化操作

				- 定义类继承：HttpServlet
				- 复写doGet/doPost方法

			- service：会根据,method是：get或post等类型，自动调用

	- 7、Servlet相关配置

		- urlPartten

			- 1、概念

				- Servlet的访问路径

			- 2、一个servlet可以定义多个访问路径

				- @WebServlet({"/路径 ", "/路径2",  "/路径3"})

			- 3、路径定义规则

				- /xxx
				- /xxx/xxx

					- 多层路径， 目录结构

				- *.do

- 2、http

	- 1、概念

		- Hyper Text Transfer Protocol

			- 超文本传输协议

	- 2、什么是传输协议？

		- 定义了，客服端（和）服务器端（通信时），发送数据的（格式）

	- 3、特点

		- 1、基于TCP/IP的高级协议
		- 2、默认端口号：80
		- 3、基于请求/响应模型的：一次请求（对应）一次响应
		- 4、无状态的：每次请求之间是（相互独立）， 不能交互数据

	- 4、历史版本

		- 1.0

			- 每一次请求响应都会，建立新的连接

		- 1.1

			- 复用：连接

	- 5、请求数据格式

		- 1、请求行

			- 1、包含内容

				- 请求方式、请求url、请求协议/版本

			- 2、请求方式

				- 1、HTTP协议中（有7种）请求方式， 常用2种
				- 2、常用2种方式

					- 1、GET

						- 1、请求参数在（请求行中的url）后
						- 2、请求的url长度（有限制）
						- 3、相对而言：不太安全

					- 2、POST

						- 1、请求参数在：请求体中
						- 2、请求的url长度（没有限制）
						- 3、相对而言：安全

		- 2、请求头

			- 1、概念

				- 客服端（游览器）告诉（服务器）的一些信息

			- 2、格式

				- 请求头名称 ： 请求头值

			- 3、常见的：请求头

				- User-Agent

					- 游览器（告诉）服务器，我访问你（使用的）游览器（版本信息）

				- Referer

					- 1、概念

						- 告诉（服务器），我（当前请求） 从哪里来？

							- Chrome
							- Firefox
							- IE

						- http://localhost/login.html

					- 2、作用

						- 1、防盗链

							- 指的是：盗用（超链接），白嫖

						- 2、统计工作

							- 通过if, else

		- 3、请求空行

			- 空行， 就是用于分割（POST）请求头（和）请求体的

		- 4、请求体

			- 正文，封装了POST请求消息的（请求参数）

- 3、request 和 response

	- web访问tomcat总结

		- 1、web通过url发送：请求消息， 给tomcat下的内容
		- 2、tomcat服务器会根据请求url中的资源路径， 创建对应的：处理请求对象
		- 3、tomcat服务器，会创建request和response对象，request对象中封装请求消息数据
		- 4、tomcat将request和response两个对象传递给service方法，并调用service方法
		- 5、程序员，可以通过request对象获取（请求信息数据），通过response对象设置（消息数据）
		- 6、服务器在给（游览器）做出响应之前，会从response对象中拿（程序员）设置响应消息数据

	- 1、request

		- 1、原理

			- request对象是来：获取请求信息的

		- 2、对象继承体系结构

			- ServletRequest 

				- 接口（基类）

			- HttpServletRequest

				- 接口（集成：基类）

			- org.apache.catalina.connector.RequestFacade

				- 集成HttpServletRequest
				- 由：tomcat创建

		- 3、功能

			- 1、获取（请求行）数据

				- 请求行：组成

					- 请求方法 、url、http版本号

				- 1、获取虚拟目录：/设置tomcat项目名

					- String getContextPath()

				- 2、获取请求URI：/day14/demo1

					- String getRequestURI()

				- 3、获取请求URL：http://localhost/day14/demo1

					- String getRequestURL()

				- 4、其他：查相关API(客服机IP、协议版本、请求方式)

			- 2、获取（请求头）数据

				- 请求头部（通知）服务器有关于（客户端）请求的信息：键值对

					- User-Agent：产生请求的浏览器类型。
					- Accept：客户端可识别的内容类型列表。
					- Host：请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。

				- 1、通过请求头的（名称）获取值

					- String getHeader(String name)

				- 2、获取（所有请求头）名称

					- Enumration<String>  getHeaderNames()

			- 3、获取请求体数据

				- 请求体：只有Post请求方式，才有
				- 步骤

					- 1、获取流对象

						- 补充：因为传输通过：IO流形式
						- 两种方式获取流：

							- BufferedReader  getReader()

								- 获取字符输入流，只能操作字符数据

							- ServletInputStream getInputStream()

								- 获取字节输入流，可以操作所有类型数据

					- 2、再从流对象中：拿数据

			- 4、其他功能

				- 补充：request（获取参数）中文乱码问题

					- get方式

						- tomcat 8 已经将get方式（问题：解决了）

					- post方式

						- 会乱码
						- 解决：在获取参数前设置

							- request.setCharacterEncoding("utf-8");

				- 1、获取请求参数通用方式

					- String getParameter(String name)

						- 根据参数名称：获取参数值

							- 比如：游览器键入的（username = 张三' & password = 123）

					- String[] getParameterValues(String name)

						- 根据参数名称：获取参数值

							- 比如：hobby = 打篮球 & hobby = 看电视

					- Enumeration<String> getParameterNames()

						- 获取所有请求的：参数名称

					- Map<String, String[]> getParameterMap()

						- 获取所有参数Map集合

				- 2、请求转发

					- 1、概念

						- 一种在（服务器内部）的资源跳转方式

					- 2、步骤

						- 1、通过request对象获取请求（转发器对象）：

							- RequestDispatcher getRequestDispatcher(String path)

						- 2、使用RequestDispatcher对象来进行转发：

							- forward(ServletRequest request, ServletResonse response)

					- 3、特点

						- 1、游览器地址栏路径：不发生变化
						- 2、只能转发到：当前服务器（内部资源）中
						- 3、转发是一次请求

				- 3、共享数据

					- 1、域对象

						- 一个有作用范围的对象， 可以在范围内：共享数据

					- 2、request域

						- 代表一次请求范围，一般用于（请求转发）多个资源中（共享数据）

					- 3、方法

						- void setAttribute(String name, Object obj)

							- 存储数据

						- Object getAttribute(String name)

							- 通过键：获取值

						- void removeAttribute(String name)

							- 通过键：移除键值对

				- 4、获取ServletContext
				- 5、login.html中form表单的action路径写法

					- 虚拟目录 + servlet的资源路径

				- 6、BeanUtils工具类

					- 1、作用

						- 简化数据封装

					- 2、JavaBean：标准的Java类

						- 1、要求

							- 1、类必须被public修饰
							- 2、必须提供（空参）的构造器
							- 3、成员变量必须使用：private 修饰
							- 4、提供公共的：setter 和getter方法

						- 2、功能

							- 封装数据

					- 3、BeanUtils的包

						- 数据封装

	- 2、response

		- 补充：

			- HTTP协议

				- 1、请求消息：

					- 1、概念

						- 客服端（发送给）服务器端的数据

					- 2、数据格式

						- 1、请求行
						- 2、请求头
						- 3、请求空行
						- 4、请求体

				- 2、响应消息

					- 1、概念

						- 服务器（发送给）客服端的数据

					- 2、数据格式

						- 1、响应行

							- 协议/版本 、状态码、状态码描述

								- 1、响应状态码

									- 服务器（告诉）客服端（请求和响应的一个）状态

								- 2、分类

									- 1、1xx

										- 服务器就收客服端消息，但没有接受完成，等待一段时间后，发送1xx状态码

									- 2、2xx

										- 成功 

											- 代表：200

									- 3、3xx

										- 重定向

											- 代表

												- 302（重定向）
												- 304（访问缓存）

									- 4、4xx

										- 客服端错误

											- 代表

												- 404（请求路径没有对应的：资源）
												- 405（请求方式没有对应的：doXxx方法）

									- 5、5xx

										- 服务器错误

											- 代表

												- 500（服务器内部出现异常）

						- 2、响应头

							- 1、格式

								- 头名称 ： 值

							- 2、常见的响应头

								- 1、Content-Type

									- 服务器（告诉）客服端：本次响应体的（数据格式） 和 （编码格式）

								- 2、Context-disposition

									- 1、概念

										- 服务器告诉客服端以：什么样的格式，打开响应数据

									- 2、值

										- in-line

											- 默认值，在当前页面内打开

										- attachment；filename=xxx ：以附件形式打开响应体。文本下载

						- 3、响应空行
						- 4、响应体

							- 页面

		- response对象

			- 1、功能：设置响应消息
			- 2、分类

				- 1、设置响应行

					- 1、格式

						- HTTP / 1.1    200  ok

					- 2、设置状态码

						- setStatus(int sc)

				- 2、设置响应头

					- setHeader(String name, String value)

				- 3、设置响应体

					- 使用步骤

						- 1、获取输出流

							- 方法一：

								- 字符输出流：PrintWriter getWriter()

							- 方法二：

								- 字节输出流：

									- ServletOutputStream()

						- 2、使用输出流，将数据输出到（客服端）游览器

- 4、会话技术

	- 补充

		- 1、会话

			- 1、概念

				- 会话

					- 一会话中， 包含多次请求和响应

						- 相当于：一次谈话

				- 一次会话

					- 游览器（第一次）给服务器资源，发送请求， （会话建立）， 直到有一方（断开）， 一次会话终止

			- 2、功能

				- 在一次会话的（范围内）， 多次请求间， （数据共享）

	- 1、Cookie

		- 1、概念

			- 客服端：会话技术， 将数据（保存到）客服端

		- 2、（使用步骤）

			- 1、创建Cookie对象， 绑定数据

				- new Cookie(String name, String value)
				- 注意：value不能含（空格）， 否则需要URL编/解 码

			- 2、发送Cookie对象

				- response.addCookie(Cookie cookie)

			- 3、获取Cookie， 拿到数据

				- Cookie[]  request.getCookies()

		- 3、实现原理

			- 服务器在响应头：设置cookie, 发送给游览器

				- set-cookie

			- 游览器在请求头：传递cookie，给服务器

				- cookie

		- 4、cookie的细节

			- 1、一次可以发送（多个）cookie吗？

				- 当然可以， new Cookie多个即可， 通过response.addCookie（cookie对象）发送

			- 2、cookie在游览器（保存时长）是多久？

				- 1、默认情况下，当游览器关闭后，cookie数据被销毁
				- 2、持久化存储

					- 通过：cookie.setMaxAge(int seconds) 方法实现
					- 1、正数

						- 将Cookie数据写到：硬盘的文件中（持久化存储）， 整数为（存储时间）

					- 2、负数

						- 为：游览器关闭销毁， 默认即为（此操作）

					- 3、零

						- 删除：已存在的cookie信息

			- 3、cookie的值能不能存：中文？

				- 1、在tomcat 8之前 cookie不能直接存储（中文） ，需要URL 编/解 码
				- 2、在tomcat 8 之后， cookie支持中文数据

					- 但是不支持：空格 = 这些符号
					- 若要设置：也需要URL 编/解 码

			- 4、共享cookie?

				- 1、假设在一个tomcat服务器，部署了多个web项目， cookie能否（共享？）

					- 1、默认情况下：不能共享
					- 2、通过设置cookie.setPath("/")

						- 可以实现共享

				- 2、不同的tomcat服务器间：cookie如何实现共享？

					- 通过setDomain(String path)

						- 如果设置了：一级域名相同，那么多个（服务器）之间cookie就可以共享了
						- setDomain(".baidu.com")

							- 如下：可以共享
							- tieba.baidu.com
							- news.baidu.com

		- 5、Cookie的特点和作用

			- 1、特点

				- 1、cookie存储数据在：客服端（游览器）
				- 2、游览器对于（单个cookie）的大小有（限制4kb）, 以及同一个域名下，总的cookie数量也有限制（20个）

			- 2、作用

				- 1、cookie一般用于存取：少量不太敏感的数据
				- 2、在不登录的情况下，完成（服务器）对（客服端）的身份识别

	- 2、Session

		- 1、概念

			- 服务器端（会话）技术，在一次会话的（多次请求间），共享数据， 将数据保存在（服务器）端对象中。HttpSession

		- 2、session的特点

			- 1、session用于存储（一次会话）的，多次请求（数据）， 存储在（服务器）
			- 2、session可以存储任意类型， 任意大小的数据

		- 3、快速入门

			- 1、获取HttpSession对象

				- HttpSession session = request.getSession()

			- 2、使用HttpSession对象

				- Object getAttribute(String name)
				- void setAttribute(String name, Object value)
				- void removeAttribute(String name)

		- 4、原理

			- 总结：session的（实现）依赖于：cookie
			- 详细

				- 1、客服端：请求服务器资源， 起初cookie中并没有JSESSIONID=值
				- 2、通过在服务器：HttpSession session = request.getSession()   获取了一个session对象
				- 3、此session对象， 被分配了一块存储空间在：内存中
				- 4、可以通过：session.setAttribute(String name , Object obj)   存储（不同请求间）共享内容
				- 5、此：JSESSIONID 会通过（响应头）set-cookie的方式， 传递给（客服端）
				- 6、下一次：（客服端）请求服务器（资源），就会通过（请求头）cookie 带上：JSESSIONID
				- 7、通过在服务：调用session.getAttribute(String name)就可以实现：存储在服务器端的（不同请求间）的数据共享问题了

		- 5、疑问解决

			- 1、当客服端（关闭后）， 服务器（不关闭）， 两次获取的session是否是（同一个）？

				- 1、默认情况下：不是同一个
				- 2、如果需要相同操作如右:

					- 1、创建Cookie， 键为JSESSIONID， 值为：session.getId();
					- 2、设置cookie存活时间：cookie.setMaxAge(时间)
					- 3、通过repsonse.addCookie(cookie)，  传递给游览器即可

			- 2、客服端（不关闭）， 服务器（关闭）， 两次获取的session是同一个吗？

				- 1、不是同一个session了
				- 2、如果要：保证（数据不丢失）的方法是？

					- session的钝化

						- 在服务器（正常关闭）之前，将session对象（系列化）到硬盘上

					- session的活化

						- 在服务器（启动后）， 将session文件转化为内存中的（session对象）即可

					- 操作：

						- 1、去IDE下源码下的out目录下：拷贝目录
						- 2、进入目录内容：将内容压缩，并改为.war
						- 3、通过将该：压缩包.war 复制到 tomcat下的webapps 
						- 4、用tomcat下bin目录startup.bat启动tomcat
						- 5、游览器进行测试即可
						- 6、若要关闭服务器，用shutdown.bat正常关闭
						- 补充

							- 注意：session内容关闭服务器，后存储再tomcat的work目录下
							- 如果是IDE：只有活化， 不能钝化， 因为其目录，服务器重启会，重新生成

			- 3、session什么时候（被销毁）？

				- 1、服务器关闭
				- 2、session对象调用invalidate()
				- 3、session默认失效时间：30分钟

					- 可以tomcat下的conf去web.xml配置

						-     <session-config>
						-         <session-timeout>30</session-timeout>
						-     </session-config>

		- 6、session和cookie的区别

			- 1、session存储数据在（服务器）端；    cookie：在客服端
			- 2、session没有数据（大小限制），   cookie有
			- 3、session数据安全， cookie相对不安全

- 5、JSP

	- 1、概念

		- JSP = Java Server Pages

			- java 服务器端页面

		- 是一个特殊的页面：既可以写html标签， 又可以定义java代码

	- 2、作用

		- 可以简化书写：html 、java代码

	- 3、原理

		- JSP本质就是一个：Servlet

			- 因为间接：继承了HttpServlet

	- 4、JSP脚本

		- 三种方式

			- <% 代码 %>：定义的java代码， 在service方法中， service方法中，可以定义什么，该脚本就可以定义什么
			- <%!  代码  %>

				- 定义的java代码， 在jsp转换后的java类成员位置

			- <%= 代码 %>

				- 定义的java代码，会输出到页面上。输出语句中可以定义什么， 该脚本中就可以定义什么

	- 5、JSP的内置对象

		- 什么是内置对象？

			- 在jsp页面中，不需要（获取和创建）， 可以直接使用的对象

		- jsp一共有9个内置对象

			- 1、request
			- 2、response
			- 3、out

				- 字符输出流对象， 可以将数据输出到（页面上）。和response.getWriter()类似
				- response.getWriter()  和 out.write()的区别

					- 在tomcat服务器， 真正给客服端做出响应之前，会先找response缓冲区数据， 再找out缓冲区数据
					- response.getWriter()数据输出：永远在out.write()之前

		- 

### 7、javac

- 1、概念

	- javac是java语言编程的：编译器
	- 全称为：java compiler

- 2、作用

	- javac工具读取：java语言编写的（类和接口）的定义，并将它们编译成（字节代码的 class文件）

- 3、编译程序的流程

	- 1、词法分析器

		- 读取源码，一个字节，一个字节的读，检查关键字是否合法

	- 2、语法分析器

		- 检查关键字：组合起来，符不符合java规范，比如：if中只能存在boolean判断

	- 3、语义分析器

		- 所有代码是否可以：进行编码为class字节码？

	- 4、字节码生成器

		- 通过字节码生成器：生成字节码

- 4、注意

	- javac可以隐式编译一些没有在（命令行）提及的（源文件）

### 7、JVM的基础入门

- 1、概念

	- JVM （Java Virture Machine）java虚拟机
	- Java虚拟机不仅是一种跨平台的软件，而且是一种新的网络计算平台。
	- 加载.class文件， 与java没有直接关系

- 2、作用

	- 能够将：字节码文件，跨平台运行

		- linux
		- unix
		- windows
		- mac
		- android
		- 

- 3、Java虚拟机组成的（5大）模块

	- 类装载器：子系统
	- 运行时数据区
	- 执行引擎
	- 本地方法接口
	- 垃圾收集模块

		- 例如GC

			- what is grabage ?

				- 没有存在的意义的：数据

			- how to find it

				- reference count (引用计数)

					- 当为0时， 就是垃圾了

				- Root Searching（根搜索）

					- 当根不能：追踪遍历，则为垃圾

			- GC algorithms

				- Mark-Sweep（标记清除）

					- 1、实现步骤

						- 标记阶段：遍历所有的对象，在活动的对象头打上活动的标记
						- 清除阶段：再次遍历对象，检查对象头，对于没有活动标记的对象，将其内存空间释放；对于有活动标记的对象，去掉标记

					- 2、优缺点

						- 优点：算法简单，易于实现
						- 缺点：内存碎片化
						- 

							- 

				- Copying（拷贝）

					- 1、实现步骤

						- 1、内存为两个区
						- 2、找出所有活动的对象，复制到其中一个区
						- 3、然后：清空另一个区

					- 2、优缺点

						- 优点

							- 不会发生碎片化

						- 缺点：空间浪费

				- Mark-Compact(标记压缩)

					- 缺点：效率低

			- Available Collectors
			- tuning

- 4、注意

	- 1、java不是真实的（物理机）， 没有寄存器
	- 2、常见的java虚拟机实现：oracle用的是(Hotspot)
	- 3、CMS

		- 全称为：Current  Mark Sweep(并发标志清除)

	- 4、PS

		- 全称：Parallel Scavenge（多线程清除）

	- 5、什么是JVM调优？

		- 1、根据需求进行JVM规划（和）预处理
		- 2、优化运行JVM运行环境（慢、卡顿）
		- 3、解决JVM运行过程出现的各种问题

### 8、多表查询

- 补充：

	- 1、笛卡尔积

		- A表 * B表

	- 2、sql语句执行顺序

		- 1、顺序

			- (8) SELECT (9)DISTINCT<select_list>
			- (1) FROM <left_table>
			- (3) <join_type> JOIN <right_table>
			- (2)         ON <join_condition>
			- (4) WHERE <where_condition>
			- (5) GROUP BY <group_by_list>
			- (6) WITH {CUBE|ROLLUP}
			- (7) HAVING <having_condition>
			- (10) ORDER BY <order_by_list>
			- (11) LIMIT <limit_number>

		- 2、讲解

			- (1) FROM:对FROM子句中的左表<left_table>和右表<right_table>执行笛卡儿积，产生虚拟表VT1;
			- (2) ON: 对虚拟表VT1进行ON筛选，只有那些符合<join_condition>的行才被插入虚拟表VT2;
			- (3) JOIN: 如果指定了OUTER JOIN(如LEFT OUTER JOIN、RIGHT OUTER JOIN)，那么保留表中未匹配的行作为外部行添加到虚拟表VT2，产生虚拟表VT3。如果FROM子句包含两个以上的表，则对上一个连接生成的结果表VT3和下一个表重复执行步骤1~步骤3，直到处理完所有的表;
			- (4) WHERE: 对虚拟表VT3应用WHERE过滤条件，只有符合<where_condition>的记录才会被插入虚拟表VT4;
			- (5) GROUP By: 根据GROUP BY子句中的列，对VT4中的记录进行分组操作，产生VT5;
			- (6) CUBE|ROllUP: 对VT5进行CUBE或ROLLUP操作，产生表VT6;
			- (7) HAVING: 对虚拟表VT6应用HAVING过滤器，只有符合<having_condition>的记录才会被插入到VT7;
			- (8) SELECT: 第二次执行SELECT操作，选择指定的列，插入到虚拟表VT8中;
			- (9) DISTINCT: 去除重复，产生虚拟表VT9;
			- (10) ORDER BY: 将虚拟表VT9中的记录按照<order_by_list>进行排序操作，产生虚拟表VT10;
			- (11) LIMIT: 取出指定街行的记录，产生虚拟表VT11，并返回给查询用户

- 1、笛卡尔积不好吗？为什么还要出多表查询？

	- 笛卡尔积：查出来很多垃圾数据
	- 我很希望数据：得到筛选， 所以有了多表查询操作

- 2、多表查询分类

	- 1、内连接查询

		- 内连接查询的步骤：

			- 1、从哪些表中：查询数据？
			- 2、条件是什么？
			- 3、查询哪些字段？

		- 1、隐式内连接

			- 1、概念：使用where 条件消除：无用数据
			- 2、例子

				- select * from  student, teacher where s_tid = tid

		- 2、显示内连接

			- 1、语法

				- select 字段列表 from 表名1 [inner] join 表名2  on s_tid = tid

	- 2、外连接查询

		- 1、左外连接

			- 1、概念

				- 查询的是：左表（所有数据）以及其（交集部分）

			- 2、语法

				- select  字段列表 from 表1 left [outer] join 表2 on 条件
				- select * from student left outer join teacher on s_tid = tid

		- 2、右外连接

			- 1、概念

				- 查询的是右表（所有数据）以及（交集部分）

			- 2、语法

				- select * from student right outer join teacher on s_tid = tid

	- 3、子查询

		- 表嵌套表

## 1、MyBatis

### 补充

- 1、service中抛出异常， 数据访问层、控制器层处理
- 2、构建者设计模式的意义

	- 简化对象实例化：过程

- 3、注解

	- 大部分注解都有（默认属性）， 如果注解只给（默认属性赋值）， 可以省略（属性名）
	- 否则：注解（属性名 = 属性值） 格式
	- 如果一个属性是（数组）类型格式

		- 属性名 = {值， 值}

			- 如果数组只有一个值，可以省略{ }

	- 如果类（不是）基本数据类型（或）String， 而是一个（类）类型

		- 语法：属性名= @类型

	- 注解中@表示引用注解声明
	- 例如：value

		- 它是一个String[]

			- 所以：value={属性值1， 属性值2}
			- 当只有一个值时，可以省略{ }

				- value=属性值

			- 又因为一个值时，可以省略：属性名

				- ("属性值")

- 4、相对路径

	- 只要不以 / 开头

		- 都是相对路径， 相对路径从：当前资源出发找到其他资源的过程

- 5、全路径

	- 只要路径中以 / 开头

		- 都叫全路径， 从项目根目录（WebContent）触发找到其他资源的过程

- 6、如果请求转发 /  表示WebContent目录
- 7、除了请求转发， /都代表是：tomcat下的webapps 目录下找

	- 服务器根目录

### 1、MyBatis简介

- 1、开源免费框架

	- 原名：iBtis

		- 2010年在Google code

			- 2013年迁移到gitHub

	- mybatis是一个（持久层框架）， 用java编写的
	- 它（封装了JDBC）操作的很多细节， 使开发者（只需关注sql语句本身）， 而无需关注：（注册驱动， 创建连接）等繁杂的过程

- 2、作用

	- 数据访问层框架

		- 底层是对：JDBC的封装

- 3、优点

	- 使用mybatis时， 不需要编写（实现类），只需要写需要执行的（sql命令）

### 2、MyBatis环境搭建

- 1、导入jar包

	- 1、mybatis.jar
	- 2、cjlib

		- 动态代理

	- 3、asm

		- cjlib依赖的包

	- 4、javaassist

		- Java 字节码以二进制的形式存储在 .class 文件中，每一个 .class 文件包含一个 Java 类或接口。Javaassist 就是一个用来 处理 Java 字节码的类库。它可以在一个已经编译好的类中添加新的方法，或者是修改已有的方法，并且不需要对字节码方面有深入的了解。同时也可以去生成一个新的类对象，通过完全手动的方式。

			- cjlib所依赖的包

	- 5、log4j/slf4g

		- 日志包

- 2、配置xml资源文件

	- 1、mybatis.xml

		- 1、导入DTD

			- 若无法加载：用SystemID(本地)

		- 2、实现根元素： <configuration>
		- 3、实现根元素下的：<environments> -> <environment> -> <transacation> 和 <dataSource type="POOLED"> 参数
		- 4、实现mapper包扫描：

			- 1、扫描：mapper下的单个xml

				- <mappers> -->> <mapper resource =" 文件全路径（/为符号）">

			- 2、扫描：mapper包

- 3、书写：sql命令

	- 1、创建mapper包
	- 2、根据pojo来书写：Pojo类Mapper.xml
	- 3、在xml中：写相关的sql语句即可
	- 4、注意

		- 1、Pojo类名Mapper.xml中：

			- 需要引入DTD

		- 2、namespace 全限定路径（可任意写）

			- 但是建议：Pojo类Mapper.xml的（全限定路径）

		- 3、resultType

			- 返回值类型

				- 当返回是集合：当行返回
				- 所以写：泛型（全限定路径即可）

			- 返回内容：数据库（字段） Auto Mapping   Pojo类（字段）
			- 所以：当Pojo类（字段） !=  数据库（字段）时：需要sql语句  （字段起别名)

				- 例如：select name sname, sex from student

- 4、环境配置详情补充

	- <transaction  type/>  type取值

		- JDBC

			- 事务管理使用：JDBC原生事务管理方式

				- 自动提交

		- MANAGED

			- 把事务管理转交给（其他容器），原生JDBC事务setAutoMapping(false)

	- <dataSource type/>   type取值

		- POOLED

			- 使用数据库：连接池

		- UNPOOLED

			- 不使用数据库：连接池，和直接使用JDBC一样

		- JNDI

			- java命名目录接口技术
			- JNDI(Java Naming and Directory Interface,Java命名和目录接口)是SUN公司提供的一种标准的Java命名系统接口，JNDI提供统一的客户端API，通过不同的访问提供者接口JNDI服务供应接口(SPI)的实现，由管理者将JNDI API映射为特定的命名服务和目录系统，使得Java应用程序可以和这些命名服务和目录服务之间进行交互。

### 3、测试：查询

- 1、流加载：mybatis.xml配合文件
- 2、创建：会话工厂sqlSessionFactroy
- 3、由工厂创建：会话对象
- 4、由对象：对数据库操作

	- 1、查询

		- 补充在：xml中书写

			- <select id= "方法名"     resultType="返回值类型">

		- 1、查询所有元素

			- session.selectList (  "namespace + 方法名"  )

		- 2、查询某个元素

			- session.selectOne(  "namespace + 方法名"  ）

		- 3、查询某个元素（并且标识key)

			- session.selectMap(    "namespace+方法名" ，  属性作为key)
			- 注意：key为pojo的（任意一个）属性

### 4、log4j

- 1、是什么？

	- 是apache推出的：免费开源日志处理的类库

		- Apache 是​​使用最广泛的 Web 服务器软件。Apache 是​​由 Apache Software Foundation 开发和维护的，它是一个免费提供的开源软件。它占全球所有网络服务器的 67%。它快速，可靠，安全。它可以通过使用扩展和模块进行高度定制，以满足许多不同环境的需求。大多数 WordPress 托管服务提供商使用 Apache 作为其 Web 服务器软件。但是，WordPress 也可以在其他 Web 服务器软件上运行。

- 2、为什么需要日志？

	- 1、当发布到：tomcat时， 不易观察一些数据
	- 2、能够实时记录：操作内容， 便于后期的维护

- 3、使用步骤

	- 补充：如果是mybatis想要：打印操作数据库信息

		- 1、导入日志jar包
		- 2、log4j.properties配置文件

			- 其中注意

				- log4j.logger.包级别

					- namespace：最后一个点不要

				- log4j.logger.类级别

					- namespace

				- log4j.logger.方法级别

					- namespace + 标签id

		- 3、在mybatis.xml中： <configuration>下设置：

			- <settings>  <setting name="logImpl" value="LOG4J"/>可以：查询手册

		- 4、可以在：log4j.rootCategory 设置 为ERROR级别

			- 过滤掉：无用信息， 再通过：log4j.logger.某个位置级别 = DEBUG

	- 1、导入jar包

		- log4j-xxx.jar

	- 2、在src下新建：log4j.properties配置文件

		- 路径（和）名称， 不允许更改

	- 3、通过Logger logger = Logger.getLogger(类名.class) 获取：日志对象
	- 4、通过logger调用相关方法

		- fatal

			- 致命错误

		- error

			- 错误，异常

		- warn

			- 警告

		- info

			- 普通信息

		- debug

			- 调试信息

		- 这只是：一样规范形式而已

### 5、paramterType属性

- 1、类Mapper.xml中<select><delete>等标签的parameterType可以控制参数类型
- 2、三个方法的参数

	- 注意：参数只能有一个
	- selectList(调用路径, 传参数)
	- selectOne(调用路径，传参数)
	- selectMap(调用路径，key值， 传参数)

- 3、获取参数

	- #{ }

		- 补充

			- 注意：如果只有一个参数， 内容写啥都行
			- 1、索引获取

				- #{0} 

					- 代表：第一个参数

			- 2、param获取

				- #{param1} 

					- 代表：第一个参数

			- 3、#{属性名}

				- 传入的是：对象

			- 4、SQL使用 ？占位符

	- ${ }

		- 补充

			- ${0}

				- 代表：获取数字0

			- ${属性名}

				- 传入的是：对象

					- 切记：如果属性内容存在（中文）记得加 ' '
					- 全数字：不用

			- 采用字符串：拼接， 查询

### 6、分页查询

- 补充参数

	- 总的条目数

		- 通过查询：count获取

	- 每页（显示）的条目数

		- 自行定夺：pageSize

	- 总共分多少页？

		- pageNumber

			- count / pageSize ：取个整

	- 当前页开始的：条目数序号

		- startNumber = pageSize * (pageNumber - 1)

- 比如

	- select * from student limit #{0}, #{2}
	- 代表：从student表中的， 第1条数据开始，读两条 

### 7、别名TypeAliases

- 1、为某个类：起别名

	-  	<typeAliases>
		                <typeAlias type="com.yyy.pojo.Student" alias="student"/>
	</typeAliases>

		- 切记：要加上类

- 2、为某个包：起别名

	- 	<typeAliases>
		               <package name="com.yyy.pojo"/>
	</typeAliases>


### 8、新增

- 1、补充

	- 1、功能

		- 从（应用程序）角度出发， 软件具有哪些功能

	- 2、业务

		- 完成功能时的逻辑， 对应Service中的一个方法

	- 3、从数据库角度出发， 完成业务时，需要执行的SQL集合， 统称为一个（事务）

- 2、mybatis的JDBC自动提交状态？

	- 1、在mybatis中：默认关闭了（JDBC）的自动提交状态（功能）
	- 2、每一个SqlSession：默认都是（不自动）提交事务的
	- 3、openSession(ture) ：则可以设置自动提交， 但是一般都不这样（传参）

		- 因为底层：相当于调用了setAutoCommit(true)

	- 4、一般采用：手动提交

		- session.commit()
		- session.rollback()

- 3、mybatis底层是对JDBC的封装

	- 1、JDBC中：executeUpdate()执行新增， 删除，修改的SQL返回值为：int

		- 代表（受影响）的行数

	- 2、mybatis中：<insert> <delete> <update> 标签没有：resultType属性

		- 返回值：默认（ int ）

	- 3、在调用openSession()时， Mybatis会创建SqlSession对象的同时，还会创建一个Transaction(事务对象)， 同时设置：autoCommit(false)

### 9、Mybatis接口绑定方案（及）多参数传递

- 1、作用是：类mapper.xml， 通过（接口）进行绑定，进而实现：简化调用书写（全限定路径）
- 2、原理：

	- 1、通过mybatis.xml的<mapper>下的<package>扫描com.yyy.mapper类下的：类mapper.xml文件
	- 2、通过创建：类mapper的（接口）， namespace 和 id 对应绑定（类型 和 方法名）
	- 3、由session.getMapper（接口名.class） 获取（多态获取：接口引用对象）
	- 4、实际上是：利用了（代理）， 实现接口，进而创建对象时：利用反射；  最终使用多态
	- 5、所以调用（接口：引用对象）相应方法， 实际上：间接是调用了mapper.xml的sql语句

- 3、代码实现步骤

	- 1、mybatis.xml中的<mapper> 使用：<package>扫描：mapper包， 间接扫描所有的：类mapper.xml
	- 2、mapper包下：创建接口（类名+Mapper）

		- 这样比较规范

	- 3、创建：类mapper.xml ， namespace == 接口名 （并且） id == 对应（接口方法）

		- 方法中多个参数时：如果是基本数据类型； 直接用#{0}, #{1} 等方法获取：参数
		- 如果方法中的参数：为基本类型

			- 硬要写成：#{属性名}，  #{属性名}获取
			- 那么，需要使用注解在方法中：@Param("属性名")
			- 这样：间接是将（参数转换为了map<属性名, 参数值>）传递

	- 4、通过session.getMapper(接口名.class)调用即可

### 10、动态SQL

- 1、概念

	- 根据（不同的）条件执行，不同的SQL命令。称为动态SQL

- 2、mybatis中的：动态sql

	- 是指：在mapper.xml中（添加）逻辑判断

- 3、动态sql的操作符

	- <if>

		- select * from log where 1=1 
		- <if test="accin != null and accin != ' ' ">  
   and accin = #{accin}                                      
 </if>
		- <if test="accout != null and accout != ' ' ">  
   and accout = #{accout}                                      
 </if>
		- 切记注意：where 1=1  存在， 是为了防止if判断为false时， 仅多出一个（where关键字）

	- <where>

		- 1、概念

			- 当编写where标签时， 如果内容第一个是 and ， 则去掉第一个 and
			- 如果<where>中有内容，则会生成where 关键字， 如果没有内容， 则不会生成 where 关键字

		- 2、用法：

			- select * from log where
			- <where>
			- <if test="accin != null and accin != ' ' ">  
   and accin = #{accin}                                      
 </if>
			- <if test="accout != null and accout != ' ' ">  
   and accout = #{accout}                                      
 </if>
			- </where>

		- 一般是<where>标签夹杂：<if>标签，  但是if标签需要都写上and, 防止：不止一条（if语句为true）

	- <choose>

		- 1、概念：只有一个成立，其他的都不执行，类似于（switch）
		- 2、用法

			- <choose>
			-     <when test="判断语句"></when>
			-     <when test="判断语句"></when>
			-     <otherwise></otherwise>
			- </choose>

	- <set>

		- 1、概念

			- 用于：update更新操作
			- 自动去掉最后一个：逗号
			- 如果<set>内有内容， 才会生成set关键字

		- 2、用法

			- update log
			- <set>
			- id=#{id},
			- <if test="accin != null and accin != ' ' ">  
   accin = #{accin} ,                                     
 </if>
			- <if test="accout != null and accout != ' ' ">  
   accout = #{accout} ,                               
 </if>
			- </set>

		- 3、注意：id=#{id},  存在是为了避免<set>无内容时， 只有 update log

	- <trim>

		- 1、概念

			- prefix 在前面添加内容， 比如：where关键字
			- prefixOverrides 去掉前面的内容， 比如：and
			- suffix 在后面添加内容
			- suffixOverrieds 去掉后面的内容，不如：,

	- <bind>

		- 1、概念：给参数（重新赋值）
		- 2、应用场景

			- 1、模糊查询

				- <select id ="selByLog"  parameterType="log"  resultType="log">
				- <bind name="accIn" value=" '%' + accIn + '%' "/>
				- select * from log where accIn = #{accIn}
				- </select>

			- 2、在原内容（前后）添加内容

	- <foreach>

		- 1、概念

			- 循环参数内容， 还具备在内容的前后（添加内容），还具备添加（分隔符）
			- collection = "名称"

				- 要遍历的集合

			- item="名称"

				- 迭代变量, #{迭代变量名}获取内容

			- open

				- 循环后：左侧添加的内容

			- close

				- 循环后右侧添加的内容

			- separator

				- 分隔符

		- 2、应用场景

			- 1、in查询中

				- <select id="selIn" parameterType="list" resultType="log">
				- select * from log where id in
				- <foreach collection="list" item="id" open="(" close=")" separator=" , ">
				- #{id}
				- </foreach>
				- <select>

			- 2、批量新增

				- 注意：mybatis中foreach的（效率）比较低

	- <sql>、<include>

		- <sql>

			- 1、概念：某些SQL片段希望被复用， 比如select 属性名...一大串时
			- 2、用法

				- <sql>
				- id, accin, accout, money
				- </sql>

		- <include>

			- 1、概念

				- 用来：引用<sql>的复用片段

			- 2、用法

				- <sql>
				- <include refid=" " />
				- </sql>

### 11、ThreadLocal

- 1、概念

	- 线程容器， 给线程绑定一个Object内容
	- 只要线程不变， 随时可以取出来； 

### 12、使用Filter模拟OpenSessionInView实现编程式事务

### 13、缓存

- 1、补充

	- （应用程序）和（数据库）交互过程， 是一个相对（耗时）的过程

- 1、什么是缓存？

	- 缓存（cache），原始意义是指访问速度比一般随机存取存储器（RAM）快的一种高速（存储器）

- 2、缓存存在意义：

	- 让（应用程序）减少对（数据库）的访问， 提升程序运行的（效率）

- 3、Mybatis缓存形式？

	- 1、SqlSession缓存

		- 1、此缓存的别名是？

			- SqlSession也被称为：一级缓存

		- 2、缓存状态

			- 默认SqlSession缓存（开启）

		- 3、缓存位置

			- 内存中的：SqlSession缓存区

		- 4、缓存的对象是？

			- statement对象

				- 间接理解为：mapper中的一个<select>

		- 5、缓存的作用范围？

			- 同一个SqlSession对象

	- 2、SqlSessionFactory缓存

		- 1、此缓存的别名是？

			- SqlSessionFactory也被称为：二级缓存

		- 2、缓存状态

			- 默认SqlSessionFactory缓存（关闭）

		- 3、缓存开启的方式是：

			- mapper.xml中添加

				- <cache readOnly = "true"></cache>
				- 若不写：readOnly， 则查询出来的实体类需要：implements serializable 接口

		- 4、缓存位置

			- 内存中的：SqlSessionFactory缓存区中

		- 5、缓存的对象是？

			- SqlSessionFactory对象

		- 6、缓存的作用范围？

			- SqlSessionFactory创建的所有：SqlSession对象

		- 7、切记：只有SqlSession对象进行了：commit（）或close() 才会真正的flush到：SqlSessionFactory缓冲区中

	- 3、缓存的流程

		- 步骤一：

			- App（Application）先去（缓存区）中找是否（存在）statement

		- 步骤二：

			- 缓存区（返回结果）

		- 步骤三：

			- 如果没有缓存（statement对象），则去（数据库）获取数据

		- 步骤四：

			- 数据库返回（查询结果）

		- 步骤五：

			- 把（查询结果）放到对应的（缓存区）中

- 4、补充：

	- 1、序列化、反序列化

		- 数据从：内存 --->>> 硬盘

			- 称为序列化：(serializable)

		- 数据从：硬盘 --->>>内存

			- 称为反序列化

				- sequencing

	- 2、sql注入

		- 1、概念

			- 利用现有应用程序，将（恶意）的SQL命令注入到后台数据库执行一些恶意的操作

		- 2、产生原因

			- 因为程序（没有）有效过滤用户的输入，使攻击者成功的向服务器提交恶意的SQL查询代码，程序在接收后错误的将攻击者的输入作为查询语句的一部分执行，导致原始的查询逻辑被改变，额外的执行了攻击者精心构造的恶意代码

		- 3、防止策略

			- 1、严格限制Web应用的数据库的操作权限，给此用户提供仅仅能够满足其工作的最低权限，从而最大限度的减少注入攻击对数据库的危害
			- 2、检查输入的数据是否具有所期望的数据格式，严格限制变量的类型
			- 3、对进入数据库的特殊字符（’”\尖括号&*;等）进行转义处理，或编码转换。

### 14、MyBatis实现多表查询

- 1、Mybatis实现多表查询的方式

	- 1、业务装配

		- 1、概念

			- 对两个表编写（单表查询语句）， 在业务（Service）把查询的（两个结果）进行关联

		- 2、用法

			- 1、单个对象时：
			- 2、集合对象时：

	- 2、使用Auto Mapping特性

		- 1、概念

			- 自动映射

		- 2、条件

			- mybatis默认是：自动映射
			- 数据库表中（查询出来）的（字段名== pojo实体类属性名） 即可

		- 2、用法

			- 1、单个对象时：

				- 多表联合查询解决

					- <mapper namespace="com.yyy.mapper.StudentMapper">
					-                  <select id="selAll" resultType="student">
					-                        sid, sname, sage, tid `teacher.tid`, tname `teacher.tname`
					-                         from student inner join teacher on s_tid = tid
					-                 select
					-                  </select>
					- </mapper>
					- 注意：` ` 起别名

			- 2、集合对象时：

				- 不能实现：因为autoMapper的返回值是（resultType）

	- 3、使用MyBatis的<resultMap>标签进行实现

		- 1、概念

			- 程序员：自己去配置（数据库字段）与（pojo类属性）之间的（映射关系）

		- 2、用法

			- 仅表中属性时：

				- <resultMap type="student" id="default">

					- <id column = "数据库字段"  property = "表属性" /> 这是主键的
					- <result column = "数据库字段"  property = "表属性" /> 这是任意字段的

			- 单个对象时：

				- 1、利用（多表查询：内连接、外连接）

					- resultMap

						- <resultMap type="student" id="default">
						-           <id column="sid" property="sid"/>
						-           <result column="sname" property="sname"/>
						-           <result column="sage" property="sage"/>
						-           <result column="s_tid" property="s_tid"/>
						-           
						-           <association property="teacher" javaType="teacher">
						-                     <id column="s_tid" property="tid"/>
						-                     <result column="tname" property="tname"/>
						-           </association>
						- </resultMap>

					- select

						- <select id="selAll" resultMap="default">
						-           select *  from student left outer join teacher  on  s_tid = tid
						- </select>

				- 2、利用：子查询

					- <resultMap type="student" id="default">

						- <id column = "数据库字段"  property = "表属性" /> 这是主键的
						- <result column = "数据库字段"  property = "表属性" /> 这是任意字段的
						- 		<association property="teacher" column="s_tid" select="com.yyy.TeacherMapper.selById"></association>

					- 需要使用两个：xml实现， 分别（操作）两张表

			- 集合对象时：

				- 1、利用（多表查询：内连接、外连接）

					- resultMap

						- <resultMap type="teacher" id="default">
						-           <id column="tid" property="tid"/>
						-           <result column="tname" property="tname"/>
						-           
						-           <collection property="list" ofType="student">
						-                     <id column="sid" property="sid"/>
						-                     <result column="sname" property="sname"/>
						-                     <result column="sage" property="sage"/>
						-                     <result column="s_tid" property="s_tid"/>
						-           </collection>
						- </resultMap>

					- select

						- <select id="selAll" resultMap="default">
						-                select *  from teacher  left outer join student  on  s_tid = tid
						- </select>

				- 2、利用：子查询

					- <resultMap type="teacher" id="default">
					-            <id column="tid" property="tid"/> 
					-            <result column="tname" property="tname"/>
					-  		        <collection property="list" column="tid" select="com.yyy.mapper.StudentMapper.selById"></collection>
					- </resultMap>
					- <select id="selAll" resultMap="default">
					-         select * from teacher 
					- </select>
					- 此处：省略了，查询学生表的（单表查询）， selById(int id)

### 15、注解

- 1、使用注解的：预先声明

	- 在mybatis.xml中：mapper声明为（package）或者<mapper class="接口全限定路径+方法名">

- 2、注解种类

	- 1、查询

		- 1、语法

			- @Select("SQL语句")

		- 2、查询类型

			- 1、仅有自身属性

				- 直接写

			- 2、有对象

				- 使用 多表查询（内连接、外连接） + 别名

			- 3、有集合

				- 用Results（） 代替 ：ResultMap
				- result() 代替：result 标签

					- id = true的为主键

				- one 代替 association
				- many 代替 collection

	- 2、删除

		- 1、语法

			- @Delete("SQL语句")

	- 3、更新

		- 1、语法

			- @Update("SQL语句")

	- 4、添加

		- 1、语法

			- @Insert("SQL语句")

### 16、Mybatis运行原理：涉及到的类

- 1、Resources

	- 1、概念

		- Mybatis中的IO流工具类

	- 2、作用

		- 加载配置文件

- 2、SqlSessionFactoryBuilder

	- 1、概念

		- SqlSessionFactoryBuilder构建器

	- 2、作用

		- 创建SqlSessionFactory接口的实现类：DefaultSqlSessionFactory

- 3、XMLConfiguration

	- 1、概念

		- 封装了全局配置文件：所有配置信息

	- 2、作用

		- 将全局配置文件内容存放到：Configuration中

- 4、DefaultSqlSessionFactory是SqlSessionFactory接口实现类
- 5、TranscationFactory

	- 1、概念

		- 事务工厂

	- 2、作用

		- 负责生产Transcation对象

- 6、Executor

	- 1、概念

		- Mybatis的执行器

			- 默认的执行器是：SimpleExcutor

	- 2、作用

		- 负责执行SQL命令
		- 相当于JDBC中statement对象（或PreparedStatement 或 CallableStatement）

- 7、DefaultSqlSession是SqlSession接口的实现类
- 8、ExcptionFactory

	- 是MyBatis中异常工厂

- 总结

	- 1、通过Resource工具类加载全局配置文件
	- 2、创建SqlSessionFactoryBuilder()对象，用来创建SqlSessionFactory的实现类：DefaultSqlSessionFactroy。

		- 但是创建：DefaultSqlSessionFactory之前，还需要，创建XMLconfiguration来解析全局配置文件流，并且存入Configuration中

	- 3、通过SqlSessionFactory创建sqlSession接口的实例化对象：DefaultSqlSession对象

		- 在生成DefaultSqlSession对象前：还需要创建TransactionFactory工厂来创建Ttranscation对象：创建执行器Excutor

	- 4、根据项目需求通过SqlSession接口实例化对象操作数据库即可

## 2、Spring

### 1、尚学堂

- 1.主要发明者:Rod Johnson

	- 作者介绍

		- 轮子理论推崇者:

			- 轮子理论:不用重复发明轮子.
			- IT 行业:直接使用写好的代码.

- 2、Spring 框架宗旨:

	- 不重新发明技术,让原有技术使用起来更加方便.

- 3、Spring 几大核心功能

	- 1、IoC/DI

		- 1、概念

			-  控制反转/依赖注入（Inversion of Control / Dependency Injection）

		- 2、IOC是什么？

			- 1、IOC的作用

				- 将：原来由程序员主动 new 实例化的事情，转交Spring 负责

					- 最终：实现解耦
					- 程序员不在需要管理对象，解除了（对象和程序员）之间的（耦合）

			- 2、（控制）指：

				- 控制类的对象

			- 3、（反转）指：

				- 转交Spring负责

		- 3、DI是什么？

			- 1、概念：Dependency Injection 依赖注入
			- 2、那么什么叫：依赖注入？

				- 当（一个类：A）需要依赖（另一个类：B） 的对象时， 将（B对象）赋值给（A的过程）就叫做：依赖注入

	- 2、AOP

		- 1、概念

			- 面向切面编程

	- 3、声明式事务

- 4、Spring 框架 runtime

	- 1、test(第一层)

		- spring 提供测试功能

	- 2、Core Container（第二层）

		- 1、重要性

			- 核心容器.Spring 启动最基本的条件

		- 2、包含

			- Beans

				- Spring 负责创建类对象并管理对象

			- Core

				- 核心类

			- Context

				- 上下文参数
				- 获取外部资源
				- 管理注解

			- SpEl

				- expression

	- 3、第三层

		- AOP
		- Aspect
		- Instrumentation
		- Messaging

	- 4、第四层

		- 1、Data Access / Integration

			- 1、概念

				- 数据访问层 / 整合

			- 2、整合内容

				- JDBC

					- Spring对JDBC封装后的代码

				- ORM

					- Object Relational Message
					- 封装了（持久层框架）代码，例如Hibernate

				- OXM

					- Object Xml mapping
					- XML读取的jar报

				- JMS

					- Java Message Service

				- Transactions

					- Spring-tx.jar
					- 声明式：事务使用

		- 2、Web

			- 1、需要spring完成web相关功能需要
			- 2、相关jar

				- WebSocket
				- Servlet

					- 小服务程序

				- Web

					- 由tomcat加载spring配置文件时， 需要使用spring-web包

				- Portlet

- 5、Spring跑起来

	- 1、导入jar包

		- 1、四个核心包

			- Beans
			- Core
			- Context
			- expression

		- 2、一个日志包

			- commons-logging

	- 2、配置applicationContext.xml

		- 1、名称可以：自定义

			- 起这个名是为了记住：ApplicationContext这个容器中

		- 2、Spring配置文件是：基于schema（.xsd）
		- 3、引入schema(.xsd)
		- 4、书写：xml

			- 1、<bean>标签

				- 创建对象
				- 默然：配置文件（加载时）创建对象

			- 

	- 3、加载配置文件：applicationContext

		- 1、加载操作

			- applicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml")

				- 加载即执行中的：bean创建对象

		- 2、一些操作方法

			- 1、获取<bean>标签管理的对象

				- ac.getBean("id") 
				- ac.getBean("id",   类.class)

			- 2、获取所有<bean>标签管理的对象名称

				- ac.getBeanDefinitionNames（）

- 6、Spring创建对象的（三种方式）

	- 1、通过构造方法创建

		- 1、无参构造创建：默认情况
		- 2、有参构造创建：需要明确配置

			- <bean>的下一级<construct-arg>下的(属性)

				- index

					- 从0开始：参数索引

				- name

					- 参数：名称

				- type

					- 参数类型（int /  Integer）不能自转

				- value

					- 参数值：设定

			- 如果不能精确锁定：默认用最下面一个（有参构造方法）

	- 工厂设计模式

		- 补充：什么是（工厂）设计模式？

			- 帮忙创建（类对象）， 一个工厂可以生产（多个对象）

		- 2、实例工厂

			- 1、概念

				- 需要先（创建工厂），才能（生产对象） 

			- 2、实现

				- 1、创建：实例工厂类， （包含：生产对象的方法）
				- 2、由<bean>管理工厂

					- <bean   id = （工厂ID）   class="工厂类路径">   </bean>

				- 3、由<bean>  （通过）管理工厂， 生产对象

					- <bean  id = 对象名      factory-bean=（工厂ID） factory-method =(创建工厂方法名)>  </bean>

		- 3、静态工厂

			- 1、概念

				- （不需要）创建工厂，快速（创建对象）
				- 2、实现

					- 1、创建（静态工厂）， 就是将：实例工厂的创建对象的（方法静态）即可

						- 这样就不用：生产工厂对象

					- 2、由<bean>管理（静态工厂），调用方法

						- <bean id ="对象名"   class="静态工厂全路径"  factory-method="调用方法名" > </bean>

- 7、如何给bean的属性值：赋值（注入）

	- 1、构造方法（注入）

		- <bean>的下一级<construct-arg>下的(属性)

			- index

				- 从0开始：参数索引

			- name

				- 参数：名称

			- type

				- 参数类型（int /  Integer）不能自转

			- value

				- 参数值：设定

	- 2、Set设值（注入）

		- 1、基本数据类型（或）String（设值）

			- 写法一：

				- <bean>  <property name = "类属性名"   value = "值">  </property>   <bean/>

			- 写法二：

				- <bean>  <property name = "类属性名" >     value = "值"   </property>   <bean/>

		- 2、Set 类型(注入)

			- <bean>  <property name = "类型名">   <set>  <value>可重复多个</value>    </set>  </property> </bean>

		- 3、List类型（注入）

			- 将<set> </set> 换成 <list> <list>即可

				- 倘若只有一个值：可以直接写在< bean >  <property name="属性名"  value="属性值"> </property>   </bean>

		- 4、数组（注入）

			- 将<list> </list> 换成 <array> <array>即可

				- 倘若只有一个值：可以直接写在< bean >  <property name="属性名"  value="属性值"> </property>   </bean>

		- 5、Map（注入）

			- <bean>  <property name = "类属性名" >    <map >  <entry key = "" value = ""> <entry>    </map>  </property>   <bean/>

		- 6、Propertis（注入）

			- <bean>  <property name = "类属性名" >  <props> <prop key="">值</prop> </props> </property>   <bean/>

### 2、黑马

- 1、学习介绍（4天内容）

	- 第一天

		- spring框架的（概述）以及spring中基于（XML）的（ IOC配置 ）

	- 第二天

		- spring中（基于注解的IOC）和（IOC案例）

	- 第三天

		- spring中aop和（基于XML）以及（注解的AOP）配置

	- 第四天

		- spring中的（JdbcTemplate） 以及 Spring事务控制

- 2、详讲（内容）

	- 第一天

		- 1、spring的概述

			- 1、spring是什么？

				- Spring是分层的JavaSE/EE 应用（full-stack）轻量级（开源框架）
				- 以IOC 和 AOP为内核
				- 提供了：展现层SpringMVC （和）持久层Spring JDBC (以及) 业务层（事务管理）等众多企业级应用技术
				- spring能整合优秀框架

			- 2、spring的两大核心
			- 3、spring的（发展历程）和（优势）
			- 4、spring的体系结构

		- 2、程序的（耦合）和（解耦）

			- 1、曾经案例中问题
			- 2、工厂模式解耦

		- 3、IOC概念（和）spring中（IOC）

			- spring中基于XML的IOC环境搭建

		- 4、依赖注入(Dependency Injection)
		- 5、作业

	- 
	- 
	- 

## 

## 

## 

## 

## 

## 

*XMind - Trial Version*