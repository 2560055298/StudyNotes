# 1、SpringMVC需要学习什么？

~~~
1、MVC是什么？
2、SpringMVC是什么？
3、SpringMVC的执行流程
4、RestFul风格
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

## 4.3、注解搭建：

- **第一步：**创建maven项目， 添加web功能
- **第二步：**配置pom.xml（不过滤静态资源）

~~~xml
<build>
   <resources>
       <resource>
           <directory>src/main/java</directory>
           <includes>
               <include>**/*.properties</include>
               <include>**/*.xml</include>
           </includes>
           <filtering>false</filtering>
       </resource>
       <resource>
           <directory>src/main/resources</directory>
           <includes>
               <include>**/*.properties</include>
               <include>**/*.xml</include>
           </includes>
           <filtering>false</filtering>
       </resource>
   </resources>
</build>
~~~

- **第三步：**到artifact中导入（相关jar包）
- **第四步：**配置web.xml（DispatcherServlet）

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">


    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>

        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springmvc-servlet.xml</param-value>
        </init-param>
        
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
</web-app>
~~~



- **第五步：**写一个springmvc-servlet.xml, （处理器：映射器、适配器）用注解驱动完成。

  ​               需要写的是：==**扫描注解、不过滤静态资源（非必须）、注解驱动、视图解析器**==

![image-20210102190913193](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210102190913193.png)

> <mvc:default-servlet-handler>讲解博客：
>
> https://blog.csdn.net/abc997995674/article/details/80513203

~~~
<mvc:annotation-driven>注解驱动的作用：
	代替了底层的：HandlerMapping 和 HandlerAdapter
~~~





- **第六步：**写一个控制器， 并且使用注解

![image-20210102191444966](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210102191444966.png)

- **第七步：**写一个显示页面

![image-20210102191615190](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210102191615190.png)

- **第八步**：如果需要（拓展），可以自己写一个（起始：用户访问页面）

- 具体看 (狂神老师) 博客：

> https://mp.weixin.qq.com/s/8ddT6FD0Y4f3XdbEz0aqpQ



## 4.4、组件注解回顾

~~~
@Conponent			   任意层
@Controller			   对应controller层
@Service			   对应service层
@Repository            对应dao层

注意：四者都可以混用
~~~





# 5、RestFul风格

## 5.1、概念

~~~
1、RESTFul (全称是 Resource Representational State Transfer)

2、Restful就是一个（资源定位）及（资源操作）的风格。

3、不是标准（也不是）协议，只是一种风格。（比如：写码，喜欢加空格，看起来更易阅读）
~~~

## 5.2、功能

~~~
1、将资源（抽象化）：互联网所有的事物都可以被抽象为资源
2、资源操作：使用POST、DELETE、PUT、GET，使用不同方法对资源进行操作。url的表示转换了
3、使用RESTful操作资源 ：
	     可以通过不同的（请求方式）来（实现不同）的效果！ 如POST和PUT相同参数，跳转不同页面
	     就像（多态一样）
		（而不是）像之前的（修改参数值，实现不同效果）
~~~

### 5.3、有什么用？

~~~
1、url变得：更安全
2、url变得：更简短
~~~



## 5.4、举个例子

~~~
1、http://127.0.0.1/item/1 查询,GET

2、http://127.0.0.1/item 新增,POST         

3、http://127.0.0.1/item 更新,PUT

4、http://127.0.0.1/item/1 删除,DELETE

可以看到：2和3（参数一样）的， 但是（提交方式）不一样， 实现了不同的功能。
~~~





## 5.5、总结：

~~~
我觉得：最有它最有用的，
就是仅仅通过(请求方式POST、GET)等方式的修改
（相同的url）可以做到在(同一页面或其他页面)显示内容不一样
~~~

- 如下代码

~~~java
@Controller
public class RestFul {
    @GetMapping("/yyy/{a}/{b}")			//get方式提交
    public String getSubmit(@PathVariable int a, @PathVariable int b, Model model){
        int result = a + b;
        model.addAttribute("info", "get提交：杭州欢迎你" + result);
        return "showPage";
    }

    @PostMapping("/yyy/{a}/{b}")		//post方式提交
    public String postSubmit(@PathVariable int a, @PathVariable int b, Model model){
        int result = a + b;

        model.addAttribute("info", "post提交：北京欢迎你" + result);

        return "showPage";
    }
}
~~~

> 注意品读老师博客
>
> https://mp.weixin.qq.com/s/3EtyzJohOVGz62nEYLhKHg



# 6、MVC（转发）和（重定向）

## 6.1、请求转发

- 方式一：直接用HttpServletRequest

~~~
注意：此种方法，不需要返回值，故（不需要注释：视图解析器）， 因为没有return 不会走视图解析器

代码如下：
~~~

~~~java
  //测试：（原始）请求转发 （不推荐）
    @GetMapping("/yyy/yang")
    public void forwardURL(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setAttribute("info", "我是直接：请求转发");
        req.getRequestDispatcher("/WEB-INF/jsp/skip.jsp").forward(req, resp);
    }
~~~



- 方式二：通过return " forward:路径 "  实现

~~~
此种方法用到了：return, 需要（注释视图解析器）

代码如下：
~~~

~~~java
    //测试：（mvc版）请求转发（推荐1）
    //因为用到了（返回值），所以（需要注释：视图解析器），因为（返回值）会走视图解析器
    @RequestMapping("yyy/yang1")
    public String forwardURL1(){
        return "/WEB-INF/jsp/skip.jsp";
    }
	
	//测试：（mvc版）请求转发（推荐2）
    @RequestMapping("yyy/yang2")
    public String forwardURL2(){
        return "forward:/WEB-INF/jsp/skip.jsp";
    }
~~~



## 6.2、重定向

- 通过使用：return "redirect: 路径"实现

~~~java
    @RequestMapping("yyy/yang3")
    public String redirectURL(){
        return "redirect:/login.jsp";
    }
~~~



## 6.3、一些注意问题

- **第一个问题：**（关于冒号后面的：/）

~~~
forward: 、 redirct: 后面的/是表示绝对路径， 写（相对路径）可以不带
~~~



- **第二个问题**：（为什么重定向）无法访问WEB-INF下的内容？

![image-20210103115650774](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210103115650774.png)



- 第三个问题：RestFul参数问题

![image-20210119102912533](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210119102912533.png)





# 7、MVC（注解时）传参（和）显示

## 7.1、传参方式（三种，自动填充）

~~~java
@Controller
@RequestMapping("/user")
public class ShowView {
    //1、名称固定时
    //http://localhost:8080/laoyang/user/u1?name=121212
    @GetMapping("/u1")
    public String inputShow(String name, Model model){
        model.addAttribute("info", name);
        return "skip";
    }

    //2、名称（不固定）
    //http://localhost:8080/laoyang/user/u2?username=老洋未来能改变世界
    @GetMapping("/u2")
    public String inputShow2(@RequestParam("username") String name, Model model){
        model.addAttribute("info", name);
        return "skip";
    }

    //3、传参：对象(需要set方法，才能填充进去)
    //http://localhost:8080/laoyang/user/u3?               username=laoyang&password=1234&sex=man
    @GetMapping("/u3")
    public String inputShow3(User user, Model model){
        model.addAttribute("info", user);
        return "skip";
    }

}
~~~

## 7.2、注意：三个模型的关系

~~~java
1、ModelAndView
2、ModelMap
3、Model
三者都有：填充数据的（方法），并且这个方法，返回的Model会被视图解析器，进行解析
		并由DispatcherServlet（将解析数据）填充到：显示页面中，展示
~~~



![image-20210103153822807](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210103153822807.png)

![image-20210103153649582](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210103153649582.png)

![image-20210103153520590](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210103153520590.png)

> （传参）参考老师博客：
>
> https://mp.weixin.qq.com/s/1d_PAk2IIp-WWX2eBbU3aw





# 8、Web项目：乱码问题

~~~
由于我测试的时候：没有遇到。就只能借助：老师的图片了
~~~

## 8.1、乱码：形式

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210104082711911.png" alt="image-20210104082711911" style="zoom:50%;" />

## 8.2、解决的：方法

~~~
有4种：
	1、通过：HttpServletRequest、HttpServletResponse 设置为utf-8
	2、通过：springmvc提供的字符编码（过滤器）
	3、修改：tomcat的字符编码
	4、手动：写一个（过滤器）
~~~

- springmvc提供的（字符编码：过滤器）， 写在web.xml中（需要重启tomcat，因为修改了.xml）

~~~xml
<filter>
   <filter-name>encoding</filter-name>
   <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
   <init-param>
       <param-name>encoding</param-name>
       <param-value>utf-8</param-value>
   </init-param>
</filter>
<filter-mapping>
   <filter-name>encoding</filter-name>
   <url-pattern>/*</url-pattern>
</filter-mapping>
~~~

- 修改：tomcat的字符编码 (注意：配置这个，可能存在端口冲突)

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210104084823403.png" alt="image-20210104084823403" style="zoom: 33%;" />

~~~xml
<Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"  URIEncoding="UTF-8" />
~~~

- 手动写（过滤器）：取自于（狂神老师博客）， 这个需要（在web.xml中引入filter标签）

~~~java
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Map;

/**
* 解决get和post请求 全部乱码的过滤器
*/
public class GenericEncodingFilter implements Filter {

   @Override
   public void destroy() {
  }

   @Override
   public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
       //处理response的字符编码
       HttpServletResponse myResponse=(HttpServletResponse) response;
       myResponse.setContentType("text/html;charset=UTF-8");

       // 转型为与协议相关对象
       HttpServletRequest httpServletRequest = (HttpServletRequest) request;
       // 对request包装增强
       HttpServletRequest myrequest = new MyRequest(httpServletRequest);
       chain.doFilter(myrequest, response);
  }

   @Override
   public void init(FilterConfig filterConfig) throws ServletException {
  }

}

//自定义request对象，HttpServletRequest的包装类
class MyRequest extends HttpServletRequestWrapper {

   private HttpServletRequest request;
   //是否编码的标记
   private boolean hasEncode;
   //定义一个可以传入HttpServletRequest对象的构造函数，以便对其进行装饰
   public MyRequest(HttpServletRequest request) {
       super(request);// super必须写
       this.request = request;
  }

   // 对需要增强方法 进行覆盖
   @Override
   public Map getParameterMap() {
       // 先获得请求方式
       String method = request.getMethod();
       if (method.equalsIgnoreCase("post")) {
           // post请求
           try {
               // 处理post乱码
               request.setCharacterEncoding("utf-8");
               return request.getParameterMap();
          } catch (UnsupportedEncodingException e) {
               e.printStackTrace();
          }
      } else if (method.equalsIgnoreCase("get")) {
           // get请求
           Map<String, String[]> parameterMap = request.getParameterMap();
           if (!hasEncode) { // 确保get手动编码逻辑只运行一次
               for (String parameterName : parameterMap.keySet()) {
                   String[] values = parameterMap.get(parameterName);
                   if (values != null) {
                       for (int i = 0; i < values.length; i++) {
                           try {
                               // 处理get乱码
                               values[i] = new String(values[i]
                                      .getBytes("ISO-8859-1"), "utf-8");
                          } catch (UnsupportedEncodingException e) {
                               e.printStackTrace();
                          }
                      }
                  }
              }
               hasEncode = true;
          }
           return parameterMap;
      }
       return super.getParameterMap();
  }

   //取一个值
   @Override
   public String getParameter(String name) {
       Map<String, String[]> parameterMap = getParameterMap();
       String[] values = parameterMap.get(name);
       if (values == null) {
           return null;
      }
       return values[0]; // 取回参数的第一个值
  }

   //取所有值
   @Override
   public String[] getParameterValues(String name) {
       Map<String, String[]> parameterMap = getParameterMap();
       String[] values = parameterMap.get(name);
       return values;
  }
}
~~~

> 引用：狂神博客
>
> https://mp.weixin.qq.com/s/1d_PAk2IIp-WWX2eBbU3aw



# 9、Json

## 9.1、Json的介绍

~~~
一、概念
	1、JSON(JavaScript Object Notation, JS 对象标记) 
	2、是一种（轻量级）的（数据交换格式），目前使用特别广泛。
	3、采用（完全独立）于（编程语言）的（文本格式）来（存储）和（表示数据）

二、表现形式
	1、在 JavaScript 语言中，一切都是对象。
	2、任何JavaScript 支持的类型都可以通过 JSON 来表示，例如字符串、数字、对象、数组等。
	3、语法格式（后端要提供的字符串， 要满足前端js的对象形式）		
			花括号保存对象
			方括号保存数组
			属性键值对，数据由逗号分隔
			{"name": "QinJiang"} 对象
~~~



## 9.2、Json字符串和js对象互转

~~~javascript
    <script>
        //1、将字符串， 转换为js对象
        var obj1 = JSON.parse('{"str": "剑客白丁, 痴迷练剑"}')	//花括号是对象
        console.log(obj1)

        //2、将js对象， 转换为java字符串（注意：这个字符串，适用于任何语言）
        var str = JSON.stringify(obj1)
        console.log(str)

        //3、直接创建一个js对象， 通过JSON转为字符串
        var obj2 = {
            'name' : '剑客白丁',
             sex:'Man'
        }
        //打印该对象
        console.log(obj2)

        //js对象转为的字符串，并打印
        str2 = JSON.stringify(obj2)
        console.log(str2)
    </script>
~~~



## 9.3、Json与js的关系

~~~
JSON 是 JavaScript 对象的（字符串表示法）
它使用文本表示一个 JS 对象的信息，本质是一个（字符串）。
~~~

- json(菜鸟教程)

> https://www.runoob.com/js/js-json.html
>
> https://www.runoob.com/json/json-tutorial.html



- js数据类型

>https://www.runoob.com/json/json-tutorial.html





# 10、json解析工具

## 10.1、Jackson

~~~
Jackson应该是目前比较好的json解析工具了

Jackson被称为“ Java JSON库”或“ Java的最佳JSON解析器”。或简称为“ JSON for Java”。

不仅如此，Jackson还提供了一套用于Java（和JVM平台）的数据处理工具，包括旗舰级流JSON解析器/生成器库，匹配的数据绑定库（与JSON之间的POJO）和附加的数据格式模块。处理以Avro， BSON， CBOR， CSV， Smile， （Java）属性， Protobuf， XML 或YAML编码的数据 ；甚至还有大量的数据格式模块，以支持广泛使用的数据类型的数据类型，例如 Guava， Joda， PCollections 等等。

实际的核心组件位于他们自己的项目下-包括三个核心程序包（流，数据绑定，注释）；数据格式库；数据类型库；JAX-RS提供者；以及其他各种扩展模块集–该项目是将所有部分链接在一起的中心枢纽。

~~~

> 看狂神笔记：
>
> https://mp.weixin.qq.com/s/RAqRKZJqsJ78HRrJg71R1g



- 使用方法

  - 1、导入jar包

  ~~~xml
  <dependency>
      <groupId>com.fasterxml.jackson.core</groupId>
      <artifactId>jackson-databind</artifactId>
      <version>2.12.1</version>
  </dependency>
  ~~~

  

  - 2、给控制器（设置：不跳转路径）内容直接嵌入HTTP

  ~~~
  (类上)使用：@RestController 代替（@ResponseBody）
  
      1、@ResponseBody注解表示该方法的返回的结果直接写入 HTTP 响应正文中，一般在异步获取数	据时使用；
  
  	2、在使用@RequestMapping后，返回值通常解析为跳转路径，加上@Responsebody后返回结果不	会被解析为跳转路径，而是直接写入HTTP 响应正文中。例如，异步获取json数据，加上		       	 @Responsebody注解后，就会直接返回json数据。
  
  	3、@RequestBody注解则是将 HTTP 求正文插入方法中，使用适合的HttpMessageConverter将	请求体写入某个对象。
  ~~~

  

  - 3、创建一个new ObjectMapping() 对象

  ~~~
  Object mapper = new ObjectMapping()       //可以来操作转换
  
  String str = mappper.writeValueAsString(Object obj)	//将java对象转为json字符串
  ~~~

  

  - 4、例子

    ![image-20210121084736839](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210121084736839.png)

    

  

- 实现（过程中）可能（出现）的问题

  - 显示页面（乱码）：springmvc.xml 中添加（统一解决）

  ~~~xml
  <mvc:annotation-driven>
     <mvc:message-converters register-defaults="true">
         <bean class="org.springframework.http.converter.StringHttpMessageConverter">
             <constructor-arg value="UTF-8"/>
         </bean>
         <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
             <property name="objectMapper">
                 <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">
                     <property name="failOnEmptyBeans" value="false"/>
                 </bean>
             </property>
         </bean>
     </mvc:message-converters>
  </mvc:annotation-driven>
  ~~~

  

  - 时间格式（无法理解）：解决方法

  ![image-20210121085148539](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210121085148539.png)

  

> 引用博客：
>
> https://guobinhit.blog.csdn.net/article/details/59620858





## 10.2、fastjson

- 概念

~~~
1、fastjson.jar是阿里开发的一款专门用于Java开发的包
~~~

- 作用

~~~
1、可以方便的实现json对象与JavaBean对象的转换，
2、实现JavaBean对象与json字符串的转换，
3、实现json对象与json字符串的转换。
4、实现json的转换方法很多，最后的实现结果都是一样的。
~~~

- 使用方法

  - 1、导入jar包

  ~~~xml
  <dependency>
              <groupId>com.alibaba</groupId>
              <artifactId>fastjson</artifactId>
              <version>1.2.75</version>
  </dependency>
  ~~~

  - 2、调用方法

  ~~~java
  //1、（java对象）转（JSON字符串）
  String s1 = JSON.toJSONString(user1);
  
  //2、（JSON字符串）转（java对象）
  User u1 = JSON.parseObject(s1, User.class);
  
  //3、（java对象）转(Json对象)
  JSONObject json1 = (JSONObject)JSON.toJSON(u1);
  
  //4、（Json对象）转（java对象）
  User u2 = JSON.toJavaObject(json1, User.class);
  ~~~

  



