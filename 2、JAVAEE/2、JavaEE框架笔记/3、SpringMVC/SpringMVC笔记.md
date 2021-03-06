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

- 直接用HttpServletRequest

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



- 或者使用：forward关键字：请求转发





## 6.3、一些注意问题

- **第一个问题：MVC中return "" 、 return "forward:/"  、return "direct:/" 有什么区别？**

> 参考博客：https://www.cnblogs.com/HarryVan/p/13374122.html

~~~
注意在MVC中：若（自己配置）了（视图解析器）
	return "";				//直接走：视图解析器
	
	//跳转到：找到相应的控制器后， 再进行（视图解析器）
	return "forward:/控制器路径" 	 
	return "direct:/controller路径"
~~~



- **第2个问题：**（关于冒号后面的：/）

~~~
forward: 、 redirct: 后面的/是表示绝对路径， 写（相对路径）可以不带
~~~

==切记：二者的区别==

![image-20210128104128035](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210128104128035.png)





- **第3个问题**：（为什么重定向）无法访问WEB-INF下的内容？

![image-20210103115650774](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210103115650774.png)



- **第4个问题：RestFul参数问题**

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

三、记住3句话
	1、对象都用{}
	2、数组都用[]
	3、所有键值对都用key:value
~~~



## 9.2、Json字符串和js对象互转

~~~javascript
<script>
    //1、将JSON字符串， 转换为js对象
    var obj1 = JSON.parse('{"str": "剑客白丁, 痴迷练剑"}')	//花括号是对象
    console.log(obj1)

    //2、将js对象， 转换为java字符串（注意：这个字符串，适用于任何语言）
    var str = JSON.stringify(obj1);
    console.log(str)
</script>
~~~



## 9.3、Json与js的关系

~~~javascript
JSON 是 JavaScript 对象的（字符串表示法）, 使用文本表示一个 JS 对象的信息，是一个（字符串）。
	var json = '{"str": "剑客白丁, 痴迷练剑"}'    //JSON对象
    var obj = {str: "剑客白丁, 痴迷练剑"};		  //JavaScript对象
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
  (类上)使用：@RestController 代替（@ResponseBody、@Controller）
  
      1、@ResponseBody注解表示该方法的返回的结果直接写入 HTTP 响应正文中，一般在异步获取数	据时使用；
  
  	2、在使用@RequestMapping后，返回值通常解析为跳转路径，加上@Responsebody后返回结果不	会被解析为跳转路径，而是直接写入HTTP 响应正文中。例如，异步获取json数据，加上		       	 @Responsebody注解后，就会直接返回json数据。
  
  	3、@RequestBody注解则是将 HTTP 求正文插入方法中，使用适合的HttpMessageConverter将	请求体写入某个对象。
  	
  	4、@RestController会将返回值：自动转为json字符串
  ~~~

  <img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210129170735768.png" alt="image-20210129170735768" style="zoom:50%;" />

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






# 11、ajax

## ①、ajax的概念

~~~
AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。

AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的（技术）。

Ajax （不是）一种新的（编程语言）而是（一种）用于创建更好更快以及交互性更强的Web应用程序的技术。

jQuery是一个JavaScript函数库。
~~~



## ②、ajax：快速入门（用jquery）

> 入门编码：流程图

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210129151207642.png" alt="image-20210129151207642" style="zoom:50%;" />

> 首先：建立一个web工程，springmvc初始版本
>
> web.xml

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">


    <!--1、配置：DispatcherServlet（控制器）-->
    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>

        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:applicationContext.xml</param-value>
        </init-param>

        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

    <!--2、配置：字符编码（过滤器）-->
    <filter>
        <filter-name>character</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>

        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>

    <filter-mapping>
        <filter-name>character</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>


    <!--3、配置Session失效时间-->
    <session-config>
        <session-timeout>15</session-timeout>
    </session-config>
</web-app>
~~~

> 其次：applicationContext.xml配置

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/mvc
        https://www.springframework.org/schema/mvc/spring-mvc.xsd
        http://www.springframework.org/schema/context
         https://www.springframework.org/schema/context/spring-context.xsd">

    <!--1、配置注解驱动：代替（HandlerMapping、HandlerAdapter）-->
    <mvc:annotation-driven/>

    <!--2、配置默认处理器：不过滤静态资源-->
    <mvc:default-servlet-handler/>

    <!--3、配置：注解扫描controller层-->
    <context:component-scan base-package="com.yyy.controller"/>

    <!--4、配置：视图解析器-->
    <bean id="internalResourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

    <!--5、@RestController：乱码解决-->
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

</beans>
~~~

> 进而：写一个页面，应用（ajax） , 此处用的是index.jsp

~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>ajax快速入门</title>

    <script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js"></script>
    <script>
      function a(){
        $.post({
          url:"${pageContext.request.contextPath}/ajax/a2",
          data:{"name":$("#context").val()},
          success:function(data){
              alert(data);
          }
        })
      }

    </script>

  </head>
  <body>
      用户名：<input type="text" id="context" onblur="a()">
  </body>
</html>

~~~

> 写一个对应的：控制器AjaxController

~~~java
/**
 * Author: 老洋
 * Date:  2021/1/29 10:32
 */
package com.yyy.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequestMapping("/ajax")
@RestController
public class AjaxController {
    @RequestMapping("/a2")
    public void a2(String name, HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("utf-8");
        if(!name.isEmpty()){
            response.getWriter().print("true");         //print底层调用的是：write
            response.getWriter().write("您好");
        }else{
            response.getWriter().print("false");
        }
    }
}
~~~

> 以上便，完成了（ajax快速入门）， 注意用的是（jquery），封装了ajax， 所以到下载jquery库



## ③、实战一（list集合显示）

~~~
思路：
	1、先写一个controller，然后创建一个list<User>集合， 返回集合内容
	2、页面创建一个（点击事件）， 用ajax接收（后端数据），实现局部刷新，将list显示到（表格中）
~~~

> pojo类：User

~~~java
/**
 * Author: 老洋
 * Date:  2021/1/29 15:15
 */
package com.yyy.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 用户类
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String userName;
    private int userAge;
    private String userSex;
}
~~~

> controller类：AjaxController

~~~java
/**
 * Author: 老洋
 * Date:  2021/1/29 10:32
 */
package com.yyy.controller;

import com.yyy.pojo.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RequestMapping("/ajax")
@RestController
public class AjaxController {
    @RequestMapping("/a1")
    public List<User> a1(){
        List<User> list = new ArrayList<>();

        list.add(new User("前端诗颖", 1, "女"));
        list.add(new User("后端老洋", 2, "男"));
        list.add(new User("运维老洋", 2, "男"));

        return list;
    }
}
~~~

> 前端页面test.jsp：注意需要导入jquery（jquery封装了ajax）

~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>
    <title>显示数据页面</title>
    <script src="https://s3.pstatp.com/cdn/expire-1-M/jquery/3.3.1/jquery.min.js"></script>

    <script>
        $(function (){
            $("#btn").click(function (){
                $.post("${pageContext.request.contextPath}/ajax/a1", function (data){
                    let temp = "";

                    for(let i = 0; i < data.length; i++){
                        temp +=
                            "<tr>" +
                                    "<td>" + data[i].userName + "</td>" +
                                    "<td>" + data[i].userAge + "</td>"  +
                                    "<td>" + data[i].userSex + "</td>"  +
                            "</tr>"
                    }
                    $("#context").html(temp);
                })
            })
        })
    </script>
</head>

<body>
    <input type="button" id="btn" value="请求数据">
    <table>
        <thead>
            <tr>
                <th>用户名称</th>
                <th>用户年龄</th>
                <th>用户性别</th>
            </tr>
        </thead>

        <tbody id="context">

        </tbody>
    </table>
</body>
</html>
~~~



## ④、实现二（用户名、密码）异步显示

~~~
思路(Web项目下：SpringMVC框架)
	1、首先需要写一个：页面有input框（用户名、密码）， 当光标离开，onblur时，调用js函数
	2、js函数实现，ajax，将input框内容，传到控制器， 控制器分发到Model，业务层、持久层查询
	3、判断后，返回结果，利用@RestController，自动转为json字符串。
	4、前端，通过ajax的function(data)接收到数据（展示）
~~~

> 效果图：提前展示

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210129173020615.png" alt="image-20210129173020615" style="zoom:50%;" />

---

> 首先：写一个（页面）test1.jsp

~~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>显示用户名密码</title>
    <script src="https://s3.pstatp.com/cdn/expire-1-M/jquery/3.3.1/jquery.min.js"></script>

    <script>
        function a1(){
            $.post({
                url:"${pageContext.request.contextPath}/ajax/a2",
                data:{"userName":$("#userName").val()},
                success:function (data){
                    if(data.toString() === "OK"){
                        $("#span1").css("color","green")
                    }else{
                        $("#span1").css("color","red")
                    }
                    $("#span1").html(data)
                }
            });
        }

        function a2(){
            $.post({
                url:"${pageContext.request.contextPath}/ajax/a2",
                data:{"password":$("#password").val()},
                success:function (data){
                    if(data.toString() === "OK"){
                        $("#span2").css("color", "green")
                    }else{
                        $("#span2").css("color", "red")
                    }

                    $("#span2").html(data);
                }
            });
        }


    </script>
</head>
<body>

用户名：<input type="text" id="userName" onblur="a1()">
<span id="span1"></span><br/>

密码：<input type="text" id="password" onblur="a2()">
<span id="span2"></span><br/>

</body>
</html>

~~~~

> 其次：写一个controller (AjaxController)

~~~java
/**
 * Author: 老洋
 * Date:  2021/1/29 10:32
 */
package com.yyy.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/ajax")
@RestController
public class AjaxController {
    @RequestMapping("/a2")
    public String a2(String userName, String password){
        String msg = "";

        if(userName != null){       //先看是否为空，为空则（不做任何处理）
            if(userName.equals("root")){
                msg = "OK";
            }else{
                msg = "用户名有误";
            }
        }

        if(password != null){       //先看是否为空，为空则（不做任何处理）
            if(password.equals("123456")){
                msg = "OK";
            }else{
                msg = "密码有误";
            }
        }

        return msg;     //由于@RestController注解，将msg转成json格式返回
    }

}
~~~

> ajax狂神笔记：(可参考)    
>
> 自己对自己说的话：别人的总归是别人的，只有自己脑子有东西才是自己的
>
> https://mp.weixin.qq.com/s/tB4YX4H59wYS6rxaO3K2_g



# 12、SpringMVC的拦截器

## ①、概念



~~~
一、什么是拦截器？
	1、只会拦截（访问控制器）的请求
	2、拦截器是AOP思想的（具体应用）
	
二、什么是过滤器？
	 1、是servlet规范的一部分
	 2、在url-pattern中配置了/*之后，可以对所有要访问的资源进行拦截
~~~

## ②、快速入门

> 第一步：构建一个SpringMVC能跑起来的项目

> 第二步：实现HandlerInterceptor 接口

~~~java
/**
 * Author: 老洋
 * Date:  2021/1/30 10:37
 */
package com.yyy.config;


import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 拦截器：类似于切面（写通知）
 */
public class MyInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //返回false： 会将控制器拦截在此处（只显示，我是前置通知）
        //返回true:   则会向下执行
        System.out.println("-----------我是前置通知-------------");
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("-----------我是后置通知-------------");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        System.out.println("-----------我是结束通知-------------");
    }
}
~~~

> 配置applicationContext.xml（拦截器）

```xml
<!--6、设置：拦截器HandlerInterceptor-->
<mvc:interceptors>
    <mvc:interceptor>
        <mvc:mapping path="/**"/>
        <bean class="com.yyy.config.MyInterceptor"/>
    </mvc:interceptor>
</mvc:interceptors>
```

## ③、实战（用户名登录）

> 实现需求是什么？

~~~
需求：
	一、从主页面选择：登录方式（密码登录、人脸识别）
	二、用（springmvc拦截器）对登录（拦截）
      		1、密码登录（放行）
            2、人脸识别登录（session存在）放行
            3、人脸识别登录（session不存在） 拦截， 跳转（登录页面）
    三、成功登录，将记录session, 人脸识别入口，可直接访问（成功登录页面）。
    四、登录成功页面，有（存在）注销功能按钮。
~~~

> 第一步：构建出一个SpringMVC框架（能跑起来）的maven项目

> 第二步：构建一个主页index.jsp（存在，密码登录、人脸识别）2种登录方式

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210130180236500.png" alt="image-20210130180236500" style="zoom:50%;" />

~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>访问主页</title>
  </head>

  <body>
    <h1>登录方式：选择页面</h1><hr/>

     <a href="${pageContext.request.contextPath}/passwordToLogin">密码登录入口</a>
     <a href="${pageContext.request.contextPath}/faceRecognitionEntry">人脸识别入口</a>
  </body>
</html>
~~~

> 第三步：构建基本（页面框架）

~~~
页面如下：
	1、index.jsp（主页面）
	2、login.jsp (密码登录界面)
	3、success.jsp (成功登录页面)
~~~

![image-20210130173949119](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210130173949119.png)



> 第四步：编写login.jsp登录页面

~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录页面</title>

    <style>
        a{
            text-decoration: none;
        }
    </style>
</head>
<body>
    <h1>登录页面</h1><hr/>

    <a class="button" href="${pageContext.request.contextPath}/index.jsp">重新选择（登录方式）<a>
    <hr>
    <form action="${pageContext.request.contextPath}/getLoginInfo" method="post">
        用户名：<input type="text" name="username" required="required"><br/>
        密码：<input type="text" name="password" required="required"><br/>
        <input type="submit" value="提交按钮">
    </form>
</body>
</html>

~~~

> 第五步：编写pojo层（用户类User）存放（账号、密码）

~~~
/**
 * Author: 老洋
 * Date:  2021/1/30 16:23
 */
package com.yyy.pojo;


/**
 * 存放用户：用户名、密码的类
 */
public class User {
    private String username;
    private String password;

    public User() {

    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
~~~

> 第六步：创建一个config层（拦截器）LoginInterceptor.class

~~~
实现该下功能：
			1、密码登录（放行）
            2、人脸识别登录（session存在）放行
            3、人脸识别登录（session不存在） 拦截， 跳转（登录页面）
~~~

~~~~java
/**
 * Author: 老洋
 * Date:  2021/1/30 16:09
 */
package com.yyy.config;


import com.yyy.pojo.User;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * 登录：拦截器
 *      1、访问：密码登录入口， 放行操作
 *      2、访问：人脸识别入口， session存在， 放行操作
 *      3、访问：访问（人脸入口）session不存在，跳转到（密码登录页面）
 */
public class LoginInterceptor implements HandlerInterceptor {
    //只使用第一个：（前置通知），第一重拦截 （注释因为，用配置文件改写：实现了！！！！）
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //通过获取：访问路径，如果是访问（密码登录入口）直接放行
//        String requestURI = request.getRequestURI();
//        String passwordEntryString = "/test/passwordToLogin";
//        String getLoginInfoString = "/test/getLoginInfo";
//        String logOutString = "/test/logOut";
//
//        System.out.println(requestURI);
//
//        if(requestURI.equals(passwordEntryString) || requestURI.equals(getLoginInfoString) || requestURI.equals(logOutString)){
//            return true;        //放行
//        }

        //获取session值，若存在放行
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        System.out.println(user);
        if(user != null){
            return true;
        }

        //访问（人脸入口）session不存在，跳转到（密码登录页面）
        request.getRequestDispatcher("/WEB-INF/jsp/login.jsp").forward(request, response);
        return false;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
~~~~

> 第七步：配置拦截器

~~~xml
    <!--5、配置：拦截器-->
    <mvc:interceptors>
        <mvc:interceptor>
            <!--设置：拦截所有-->
            <mvc:mapping path="/**"/>
            <bean class="com.yyy.config.LoginInterceptor"/>
        </mvc:interceptor>
    </mvc:interceptors>
~~~

> 第八步：编写控制器(javaController)

~~~java
/**
 * Author: 老洋
 * Date:  2021/1/30 16:02
 */
package com.yyy.controller;

import com.yyy.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class TestController {
    //密码登录入口
    @RequestMapping("/passwordToLogin")
    public String passwordToLogin(){
        return "login";
    }

    //获取登录信息
    @RequestMapping("/getLoginInfo")
    public String getLoginInfo(HttpServletRequest request, String username, String password){
        User user = new User(username, password);
        HttpSession session = request.getSession();
        session.setAttribute("user", user);

        return "success";
    }

    //人脸识别入口
    @RequestMapping("/faceRecognitionEntry")
    public String faceRecognitionEntry(){
        return "success";
    }

    //注销登录
    @RequestMapping("/logOut")
    public String logOut(HttpServletRequest request){
        HttpSession session = request.getSession();
        session.invalidate();

        return "login";
    }
}
~~~

> 第九步：拦截器（添加不拦截的servlet）

~~~xml
    <!--5、配置：拦截器-->
    <mvc:interceptors>
        <mvc:interceptor>
            <!--设置：拦截所有-->
            <mvc:mapping path="/**"/>

            <!--将一些：servlet除外-->
            <mvc:exclude-mapping path="/passwordToLogin"/> <!--密码登录（不拦截）-->
            <mvc:exclude-mapping path="/getLoginInfo"/> <!--密码表单提交（不拦截）-->
            <mvc:exclude-mapping path="/logOut"/>       <!--注销（不拦截）-->

            <bean class="com.yyy.config.LoginInterceptor"/>

        </mvc:interceptor>
    </mvc:interceptors>
~~~

> 第十步：编写成功页面

~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录成功页面</title>
</head>
<body>
    <h1>登录成功</h1><hr/>
    <span>祝贺您：${user.username}</span>
    <hr/>
    <a class="button" href="${pageContext.request.contextPath}/logOut">注销登录</a>
    <a class="button" href="${pageContext.request.contextPath}/index.jsp">回到主页面</a>
</body>
</html>
~~~

## ④、参考博客

> 狂神博客：
>
> https://mp.weixin.qq.com/s/NWJoYiirbkSDz6x01Jji3g



# 13、文件上传与下载

> 前提：满足是SpringMVC配置好的web项目

## ①、文件上传

~~~
步骤：
	1、导入：jar包
	2、xml中配置：（IOC导入的jar包）
	3、写一个：上传页面
	4、配置controller
~~~

> 第一步：导入jar包 (上传、下载 jar一样)

~~~xml
	  <!--文件上传-->
        <dependency>
            <groupId>commons-fileupload</groupId>
            <artifactId>commons-fileupload</artifactId>
            <version>1.3.3</version>
        </dependency>
        <!--servlet-api导入高版本的-->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>4.0.1</version>
        </dependency>
~~~

> 第二步：配置xml

~~~xml
    <!--文件上传配置-->
    <bean id="multipartResolver"  class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
        <!-- 请求的编码格式，必须和jSP的pageEncoding属性一致，以便正确读取表单的内容，默认为ISO-8859-1 -->
        <property name="defaultEncoding" value="utf-8"/>
        <!-- 上传文件大小上限，单位为字节（10485760=10M） -->
        <property name="maxUploadSize" value="10485760"/>
        <property name="maxInMemorySize" value="40960"/>
    </bean>
~~~

> 配置：控制器（两种方法）

- **方法一 (代码：较为复杂)**

~~~java
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.*;

@Controller
public class FileController {
   //@RequestParam("file") 将name=file控件得到的文件封装成CommonsMultipartFile 对象
   //批量上传CommonsMultipartFile则为数组即可
   @RequestMapping("/upload")
   public String fileUpload(@RequestParam("file") CommonsMultipartFile file , HttpServletRequest request) throws IOException {

       //获取文件名 : file.getOriginalFilename();
       String uploadFileName = file.getOriginalFilename();

       //如果文件名为空，直接回到首页！
       if ("".equals(uploadFileName)){
           return "redirect:/index.jsp";
      }
       System.out.println("上传文件名 : "+uploadFileName);

       //上传路径保存设置
       String path = request.getServletContext().getRealPath("/upload");
       //如果路径不存在，创建一个
       File realPath = new File(path);
       if (!realPath.exists()){
           realPath.mkdir();
      }
       System.out.println("上传文件保存地址："+realPath);

       InputStream is = file.getInputStream(); //文件输入流
       OutputStream os = new FileOutputStream(new File(realPath,uploadFileName)); //文件输出流

       //读取写出
       int len=0;
       byte[] buffer = new byte[1024];
       while ((len=is.read(buffer))!=-1){
           os.write(buffer,0,len);
           os.flush();
      }
       os.close();
       is.close();
       return "redirect:/index.jsp";
  }
}
~~~

- **方法二(代码相对简单)**

~~~java
/*
* 采用file.Transto 来保存上传的文件
*/
@RequestMapping("/upload2")
public String  fileUpload2(@RequestParam("file") CommonsMultipartFile file, HttpServletRequest request) throws IOException {

   //上传路径保存设置
   String path = request.getServletContext().getRealPath("/upload");
   File realPath = new File(path);
   if (!realPath.exists()){
       realPath.mkdir();
  }
   //上传文件地址
   System.out.println("上传文件保存地址："+realPath);

   //通过CommonsMultipartFile的方法直接写文件（注意这个时候）
   file.transferTo(new File(realPath +"/"+ file.getOriginalFilename()));

   return "redirect:/index.jsp";
}
~~~

## ②、文件下载

~~~
步骤：
	1、导入jar包
	2、下载页面
	3、controller控制器
~~~

> 第一步：导入jar包（上传、下载一致）

~~~xml
	  <!--文件上传-->
        <dependency>
            <groupId>commons-fileupload</groupId>
            <artifactId>commons-fileupload</artifactId>
            <version>1.3.3</version>
        </dependency>
        <!--servlet-api导入高版本的-->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>4.0.1</version>
        </dependency>
~~~

> 第二步：下载页面 index.jsp

~~~jsp
<a href="/download">点击下载</a>
~~~

> 第三步：控制器

~~~java
@RequestMapping(value="/download")
public String downloads(HttpServletResponse response ,HttpServletRequest request) throws Exception{
   //要下载的图片地址
   String  path = request.getServletContext().getRealPath("/upload");
   String  fileName = "基础语法.jpg";

   //1、设置response 响应头
   response.reset(); //设置页面不缓存,清空buffer
   response.setCharacterEncoding("UTF-8"); //字符编码
   response.setContentType("multipart/form-data"); //二进制传输数据
   //设置响应头
   response.setHeader("Content-Disposition",
           "attachment;fileName="+URLEncoder.encode(fileName, "UTF-8"));

   File file = new File(path,fileName);
   //2、 读取文件--输入流
   InputStream input=new FileInputStream(file);
   //3、 写出文件--输出流
   OutputStream out = response.getOutputStream();

   byte[] buff =new byte[1024];
   int index=0;
   //4、执行 写出操作
   while((index= input.read(buff))!= -1){
       out.write(buff, 0, index);
       out.flush();
  }
   out.close();
   input.close();
   return null;
}
~~~

## ③、参考博客

> 狂神博客：
>
> https://mp.weixin.qq.com/s/NWJoYiirbkSDz6x01Jji3g





# 14、总结：SpringMVC配置

## ①、添加web支持

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210130214755930.png" alt="image-20210130214755930" style="zoom:50%;" />

> 试一试：tomcat能不能到index.jsp运行

## ②、导入依赖：添加jar包

~~~xml
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.3.2</version>
        </dependency>

        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>4.0.1</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.0</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>
    </dependencies>
~~~

> 将包导入：web

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210130215449835.png" alt="image-20210130215449835" style="zoom: 67%;" />

> 导入包后：再试一试tomcat的index.jsp能不能访问到

## ③、配置web.xml

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <!--1、配置：DispatcherServlet（处理级别/）-->
    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>

        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:applicationContext.xml</param-value>
        </init-param>

        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>


    <!--2、配置：字符编码过滤器（过滤级别/*）-->
    <filter>
        <filter-name>character</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        
        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>

    <filter-mapping>
        <filter-name>character</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>

</web-app>
~~~

## ④、配置applicationContext.mxl

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/mvc
         https://www.springframework.org/schema/mvc/spring-mvc.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <!--1、配置：注解驱动（代替HandlerMapping、HandlerAdapter）-->
    <mvc:annotation-driven/>

    <!--
        2、配置：静态资源使用（默认servlet处理）
                不配置：静态资源就找不到，因为会直接当成是（控制器）的url处理
                配置以后，先url找不到，然后找默认的servlet处理
    -->
    <mvc:default-servlet-handler/>

    <!--3、配置：扫描（控制层）注解-->
    <context:component-scan base-package="com.yyy.controller"/>

    <!--4、配置：视图解析器-->
    <bean id="internalResourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
</beans>
~~~



# 15、狂神笔记链接（仅参考）

> 首推官网:
>
> https://docs.spring.io/spring-framework/docs/5.3.4-SNAPSHOT/reference/html/web.html#spring-web



> 1、什么是SpringMVC
>
> https://mp.weixin.qq.com/s/yuQqZzAsCefk9Jv_kbh_eA



> 2、第一个MVC程序
>
> https://mp.weixin.qq.com/s/8ddT6FD0Y4f3XdbEz0aqpQ



> 3、RestFul和控制器
>
> https://mp.weixin.qq.com/s/3EtyzJohOVGz62nEYLhKHg



> 4、数据处理及跳转
>
> https://mp.weixin.qq.com/s/1d_PAk2IIp-WWX2eBbU3aw



> 5、整合SSM框架
>
> https://mp.weixin.qq.com/s/SDxqGu_il3MUCTcN1EYrng



> 6、Json交互处理
>
> https://mp.weixin.qq.com/s/RAqRKZJqsJ78HRrJg71R1g



> 7、Ajax研究
>
> https://mp.weixin.qq.com/s/tB4YX4H59wYS6rxaO3K2_g



> 8、拦截器+文件上传下载
>
> https://mp.weixin.qq.com/s/NWJoYiirbkSDz6x01Jji3g