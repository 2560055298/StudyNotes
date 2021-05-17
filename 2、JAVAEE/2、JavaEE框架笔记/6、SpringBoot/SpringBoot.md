

# 1、知识点：回顾

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210320183654000.png" alt="image-20210320183654000" style="zoom:50%;" />

# 2、学习大纲

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210320183521316.png" alt="image-20210320183521316" style="zoom: 50%;" />

---



# 3、SprintBoot原理学习



## 3.1、前置知识：微服务

![image-20210405151707148](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210405151707148.png)

![image-20210405153543063](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210405153543063.png)

> 参考必看博客：https://blog.csdn.net/dpf373521/article/details/102860444



## 3.2、SpringBoot概念

> 官网：https://spring.io/projects/spring-boot
>
> 参考博客（必看）：https://blog.csdn.net/Delia_theme/article/details/88681722    SpringBoot概念

> Spring Boot是一个（简化Spring环境搭建和开发）为了微服务而生的Java web框架。



## 3.3、SprintBoot作用

> 使用Spring Boot可以做到专注于Spring应用的开发，而无需过多关注XML的配置。



## 3.4、第一个SpringBoot程序

### 3.4.1、官网创建（方式）

`第一步：进入Spring官网，找到SpringBoot`

> https://spring.io/projects/spring-boot#overview   拉到最底端：找到[Spring Initializr](https://start.spring.io/).

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323152818110.png" alt="image-20210323152818110" style="zoom: 33%;" />

---

`第二步：下载生成的文件，导入IEDA`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323153044380.png" alt="image-20210323153044380" style="zoom:50%;" />

---

`第三步：将目录删除干净, 和Maven项目一样`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323153159088.png" alt="image-20210323153159088" style="zoom:50%;" />

---

`第四步：运行测试`

![image-20210323153329815](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323153329815.png)

---

![image-20210323153401487](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323153401487.png)

---

![image-20210323153421530](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323153421530.png)

---

`最后：按照之前SSM框架书写，需要的内容即可， 打包方式如下`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323153521390.png" alt="image-20210323153521390" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323153757084.png" alt="image-20210323153757084" style="zoom: 50%;" />

---

`打包运行图`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323153907179.png" alt="image-20210323153907179" style="zoom:50%;" />

---



### 3.4.2、IDEA创建（方式）

![image-20210323154542034](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323154542034.png)

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323154853233.png" alt="image-20210323154853233" style="zoom: 50%;" />

---

![image-20210323155221772](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323155221772.png)

---



### 3.4.3、程序中要注意的点

- `1、pom.xml中配置讲解`

~~~
parent：继承spring-boot-starter-parent的依赖管理， 控制版本与打包等内容

spring-boot-start-web 
用于实现Http接口, 该依赖中， 包含了SpringMVC官网对它的描述是：使用SpringMVC构建Web（包括RESTful）应用程序的入门者使用Tomcat作为（默认嵌入式容器）

spring-boot-starter-test：用于编写单元测试的（依赖包）

spring-boot-maven-plugin 配合 spring-boot-maven-parent
就可以把SprintBoot应用打包成JAR来直接运行
~~~



- `2、修改端口`

> 在application.properties中修改

~~~properties
server.port=8081
~~~



- `3、自定义banner.txt`

> 去google：找一个banner (标语) ， 然后在resource中添加  banner.txt,   重启即可出现

![image-20210323161507408](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323161507408.png)



## 3.5、SpringBoot原理

### 3.5.1、pom.xml文件

`1、spring-boot-starter-parent 父工程`

> 内部包含：大量依赖， 所以导入只需要按照（spring-boot-starter-某某某）即可，不要写版本

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323162555942.png" alt="image-20210323162555942" style="zoom:50%;" />

---



`2、启动器：Starters`

> 格式：spring-boot-starter-某某某 
>
> 作用：会去父工程文件中，将所需依赖导入，不需要写版本，父工程已指定版本。  

例如：导入web

~~~xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
~~~



`3、所有的依赖来自与：Dependency Management`

> https://docs.spring.io/spring-boot/docs/2.1.18.RELEASE/reference/html/using-boot-build-systems.html#using-boot-dependency-management



### 3.5.2、主程序

~~~java
@SpringBootApplication	//标注这个类是一个springboot的应用, 启动类下的所有资源被导入
public class Springboot01HelloworldApplication {
    public static void main(String[] args) {
        //将springboot应用启动
        SpringApplication.run(Springboot01HelloworldApplication.class, args);
    }
}
~~~



`1、注解：@SpringBootApplication	`

~~~java
@SpringBootApplication		//SpringBoot配置启动
	@SpringBootConfiguration		//标志是一个配置类：也就是bean.xml
		@Configuration
			@Component
	@EnableAutoConfiguration		//自动装配
		@AutoConfigurationPackage				//自动配置：包
			@Import(AutoConfigurationPackages.Registrar.class)	//自动配置包：注册
		@Import(AutoConfigurationImportSelector.class)	//自动配置：导入选择器
	@ComponentScan					//扫描包：设置（到哪里去扫描？）
		@Repeatable(ComponentScans.class)
~~~



> 思维导图
>
> https://www.processon.com/mindmap/6059b50407912927bd75b871

~~~
总结：自动配置真正实现是classpath中搜寻所有的META-INF/spring.factories配置文件， 并将其中对应的org-springframework.boot.autoconfig 包下的配置，通过反射实例化为对应标注了@Configuration的JavaConfig形式的IOC容器配置，然后将这些都汇总成一个实例，并加载到IOC容器中
~~~

![image-20210323185824670](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323185824670.png)

![image-20210323203959667](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323203959667.png)

---

2、`main方法中的：Application`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323205926905.png" alt="image-20210323205926905" style="zoom: 50%;" />

---

`3、Application流程图`

![1231231](C:\Users\Lenovo\Desktop\1231231.png)

---

`4、run`

![image-20210323205529676](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323205529676.png)

---





## 3.6、SpringBoot考点

- 自动装配
- run() 

 



# 4、SpringBoot配置

## 4.1、yaml

> SpringBoot 推崇使用（.yaml）

### 4.1.1、yaml概念

~~~
YAML 是一门语言
YAML 的语法和其他高级语言类似，并且可以简单表达清单、散列表，标量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别适合用来表达或编辑数据结构、各种配置文件、倾印调试内容、文件大纲（例如：许多电子邮件标题格式和YAML非常接近）。
~~~



### 4.1.2、支持的数据类型

~~~
1、对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）
2、数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）
3、纯量（scalars）：单个的、不可再分的值
~~~



### 4.1.3、用法

~~~yaml
# 1、端口
server:
  port: 8888

# 2-1：对象多行写法
student:
  age: 15
  name: 张三

# 2-2：对象行内写法
student1: {name: 洋洋洋, age: 18}

# 3-1：数组多行写法
array:
  - A
  - B
  - C

# 3-2：数组行内写法
array1: [A, B, C]
~~~



### 4.1.4、注意点

~~~
1、大小写敏感
2、使用缩进表示层级关系
3、缩进不允许使用tab，只允许空格
4、缩进的空格数不重要，只要相同层级的元素左对齐即可
5、'#'表示注释 
~~~



## 4.2、给（对象属性）赋值

### 4.2.1、法一：@value注解

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325140225724.png" alt="image-20210325140225724" style="zoom:50%;" />

---



### 4.2.2、法二：properties

> 其中使用了：@PropertiesSource（value=" "） 注解
>
> 并且使用了：SPEL表达式@Value("") 或者 #{}

![image-20210325151936443](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325151936443.png)





### 4.2.3、法三：通过yaml

> 在实体类上：标注@ConfigurationProperties

~~~
@configurationProperties

作用：
	1、将配置文件中配置的（每一个属性的值），都映射到这个组件中告诉SpringBoot将本类中（所有的属		性）和（配置文件）相关的配置，进行绑定。
	2、支持：SpEL表达式， 也就是 ${表达式} 
	
注意：只有这个组件是（容器中的组件）， 才能使用容器提供的@ConfigurationProperties功能
~~~

`例一：无SpEL表达式`

![image-20210325142623010](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325142623010.png)

---

`例二：带表达式的写法`

![image-20210325153642161](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325153642161.png)

---

`如何获取？`

![image-20210423104429513](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210423104429513.png)



### 4.2.4、总结：yaml好处

![image-20210325153816647](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325153816647.png)

---



## 4.3、松散绑定

> 概念：yaml中写last-name ，可以直接绑定到 属性的lastName名称  

![image-20210325155938954](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325155938954.png)

---



## 4.4、JSR303校验

> 使用注解：@Validated      //数据校验

~~~
JSR是Java Specification Requests的缩写，意思是Java 规范提案。是指向JCP(Java Community Process)提出新增一个标准化技术规范的正式请求。
任何人都可以提交JSR，以向Java平台增添新的API和服务。JSR已成为Java界的一个重要标准。

JSR-303 是JAVA EE 6 中的一项子规范，叫做Bean Validation，Hibernate Validator 是 Bean Validation 的参考实现 .
Hibernate Validator 提供了 JSR 303 规范中所有内置 constraint 的实现，除此之外还有一些附加的 constraint。
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325204252705.png" alt="image-20210325204252705" style="zoom:50%;" />

---

`需要添加：启动器`

~~~xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
~~~



`使用：邮箱验证例子`

> @Email(message="不是邮箱")

![image-20210325204444401](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325204444401.png)

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325205122874.png" alt="image-20210325205122874" style="zoom:50%;" />

---





## 4.5、config配置加载顺序

> 官方解释地址：
>
> https://docs.spring.io/spring-boot/docs/2.1.18.RELEASE/reference/htmlsingle/#boot-features-external-config 

![image-20210423151740228](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210423151740228.png)



> 可以配置：4个地方， 同一级别下, config优先
>
> 注意：改为properties也是（同样适用这4种方式的）

![image-20210325214019325](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325214019325.png)



## 4.6、多环境切换

- `传统：application.properties 切换`

> 使用：spring.profiles.active=dev

![image-20210325215707074](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325215707074.png)

---



`appliction.yaml`

> 其中用到了 --- 作为分割符

~~~yaml
server:
  port: 8081
spring:
  profiles:
    active: dev
---
server:
  port: 8082

spring:
  profiles: dev

---
server:
  port: 8083
spring:
  profiles: test
~~~



# 5、再次探讨：配置文件

![image-20210327152947947](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210327152947947.png)

> 思考：yaml中能写什么？   写完后，为什么需要配置过springboot-starter-XXX的才能生效？

![image-20210509163630408](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210509163630408.png)





## 5.1、@Conditional拓展注解

![image-20210327150442495](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210327150442495.png)



## 5.2、查看哪些配置生效了

> 在application.yaml中

~~~yml
debug: true
~~~





# 6、SpringBoot Web

## 6.1、学习前需要思考的问题

~~~
1、SpringBoot到底帮我配置了什么？ 我们能不能进行修改？ 修改哪些东西？ 能不能拓展？
	1-1：XXXAutoConfiguration 向容器中自动配置组件， 我们也自己写配置
	1-2：XXXProperties 自动配置类， 可以去自定义（默认配置的内容）
	
2、springboot用的是jar包， 不是war包， 如何进行webapp相关配置？
	①、静态资源用什么来写？ 		以前用jsp
	②、静态资源如何导入？			 以前导入通过：web-app
	③、SpringMVC如何拓展？	    以前：通过xml
	④、拦截器、文件上传、json这些已学过的知识，如果在SpringBoot中体现出来？		
~~~





## 6.2、静态资源导入==必懂==

> 以前的：静态资源写在web-app下可以访问到。
>
>  现在SpringBoot整合后MVC的静态资源，想要访问到 （而不是404） 如何实现呢？



### 6.2.1、静态资源导入方式

> https://blog.csdn.net/qq_44543508/article/details/103751733  参考博客

~~~yaml
方式一： 自定义（加载静态资源路径）， 设置后，默认的将被替换
	spring:
 		 resources:
   			static-locations: classpath:/

方式二：通过静态资源的jar,  对应的maven进行导入
	 网址：https://www.webjars.org/     或者 （百度：webjars）
   
方式三：默认配置
	"classpath:/META‐INF/resources/", 
    "classpath:/resources/",
    "classpath:/static/",
    "classpath:/public/"
    "/":当前项目的根路径
~~~





### 6.2.2、分析静态资源原理

> WebMvcAutoConfiguration.class
>
> addResourceHandlers()   方法

~~~java
@Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
    super.addResourceHandlers(registry);
    
    //如果：配置了自定义路径， 那么源码路径将会被代替，直接return
    if (!this.resourceProperties.isAddMappings()) {
    	logger.debug("Default resource handling disabled");
    	return;
    }
    ServletContext servletContext = getServletContext();
    //当没有：自定义路径， 可以使用方式一：webjars的路径    
    addResourceHandler(registry, "/webjars/**", "classpath:/META-INF/resources/webjars/");
    addResourceHandler(registry, this.mvcProperties.getStaticPathPattern(), (registration) -> {
 	
   //也可以使用：静态路径resources、static、public  都配置了按照源码数组顺序0开始   registration.addResourceLocations(this.resourceProperties.getStaticLocations());
    if (servletContext != null) {
    registration.addResourceLocations(new ServletContextR esource(servletContext, SERVLET_LOCATION));
    }
    });
}
~~~

> WebMvcAutoConfiguration  -->>  addResourceHandlers()  -->> getStaticLocations() 

![image-20210327194228912](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210327194228912.png)





## 6.3、首页和图标定制

### 6.3.1、首页定制

> 在resources文件夹下的：resources、static、public 文件夹下，写一个index.html即为主页

`原因：看源码`

![image-20210327205016951](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210327205016951.png)

---

### 6.3.2、头像定制

> 在：public文件下， 加入favicon.ico 就可以修改





## 6.4、第一个==thymeleaf==程序

`第一步：导入meaven依赖`

> 官网找到gitHub地址：https://github.com/spring-projects/spring-boot/blob/v2.1.18.RELEASE/spring-boot-project/spring-boot-starters/spring-boot-starter-thymeleaf/pom.xml

~~~xml
<dependency>
      <groupId>org.thymeleaf</groupId>
      <artifactId>thymeleaf-spring5</artifactId>
</dependency>

<dependency>
    <groupId>org.thymeleaf.extras</groupId>
    <artifactId>thymeleaf-extras-java8time</artifactId>
</dependency>
~~~



`2、将前端的：html 复制到templates 目录下, 并且加上xmlns约束`

~~~html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">		<!--约束-->
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
    <body>
		<!--此时：并未使用thymeleaf获取（控制器传来的值）-->
    </body>
</html>
~~~



`3、在控制器中：传入要模板引擎thymeleaf（引入的值）`

- HelloController.java

~~~java
@Controller     
public class HelloController {
    @RequestMapping("/hello")
    public String hello(Model model){
        model.addAttribute("msg", "hello SpringBoot thymeleaf");
        return "index";
    }
}
~~~

`4、在html中：参考thymeleaf手册， 获取到控制器的值 `

~~~html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
    <body>
        我是正版的主页：<div th:text="${msg}"></div> <!--此处就是：利用了获取变量值-->
    </body>
</html>
~~~









## 6.5、探究thymeleaf

### 6.5.1、thymeleaf概念

~~~
Thymeleaf是⾯向Web和独⽴环境的现代服务器端Java模板引擎，能够处理HTML，XML，JavaScript，CSS甚⾄纯⽂本。可以嵌入spring, 完全替代 JSP.
~~~

> 原理图

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210510153629239.png" alt="image-20210510153629239" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210510153417916.png" alt="image-20210510153417916" style="zoom:50%;" />

---

==源码中可知：thymeleaf 有SpringMVC中（视图解析器）的作用==

![image-20210328075101557](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210328075101557.png)



### 6.5.3、thymeleaf用法

> 查看官方文档：10 Attribute Precedence

- `1、显示文本`

~~~html
<div th:text="${msg}"></div>
~~~



- `2、显示html`

~~~html
<div th:utext="${msg}"></div>
~~~



- `3、循环遍历`

~~~html
<h1 th:each="book:${books}" th:text="${book}"></h1>
~~~





## 6.6、集成SpringMVC



### 6.6.1、MVC原理配置

`1、添加自定义视图解析器：MyConfigMVC.java`

~~~java
@Configuration
public class MyConfigMVC implements WebMvcConfigurer {
    @Bean
    public ViewResolver newViewResolver(){
        return new myViewResolver();
    }

    public static class myViewResolver implements ViewResolver{

        @Override
        public View resolveViewName(String viewName, Locale locale) throws Exception {
            return null;
        }
    }
}
~~~



`2、分析视图解析器的：原理`

> 官方文档：
>
> https://docs.spring.io/spring-boot/docs/2.1.18.RELEASE/reference/html/boot-features-developing-web-applications.html#boot-features-spring-mvc-auto-configuration

~~~
官方文档提到：ContentNegotiatingViewResolver 类， 该类实现了ViewResolver
我们书写自己的：（视图解析器）， 可以通过模仿该类一样，去实现ViewResolver
通过：debug 在 DispatcherServlet中的doDispatch()方法 ， 去游览器发送url进行访问
就可以：验证我们（自定义的：视图解析器）是否已生效。
~~~

![image-20210328102549264](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210328102549264.png)

---

`3、拓展：跳转功能`

~~~
比较以前：
	我们使用Controller设置的ModelAndView （封装：视图、数据）

SpringBoot也提供了一种：
	@Configuration 实现@WebConfigurer  实现其：添加视图的方法， 即可设置视图
	
~~~





### 6.6.2、拓展SpringMVC

~~~
 拓展SpringMVC时， 仅使用@Configuration， 实现WebMvcConfigurer 即可。

 若添加了  @EnableWebMvc， 会使WebMvcAutoConfiguration 配置所有失效
 最基本的体现就是：静态资源，无法通过 resources、static、public 直接在网站中url访问到了
~~~

`若在@configuration 拓展MVC时， 加入了@EnableWebMvc使默认失效原因`

~~~java
当在配置类中：
  1-1、添加@EnableWebMvc时, 注解内导入了@Import(DelegatingWebMvcConfiguration.class)
  1-2、并且：DelegatingWebMvcConfiguration extends WebMvcConfigurationSupport
    
而在WebMvcAutoConfiguration自动配置类中：
  2-1、存在注解：@ConditionalOnMissingBean(WebMvcConfigurationSupport.class)
  2-2、该注解表示：当存在WebMvcConfigurationSupport.class，WebMvcAutoConfiguration失效
 
由于：@EnableWebMvc中
    DelegatingWebMvcConfiguration 继承了 WebMvcConfigurationSupport
    所以：整个web配置失效。
~~~

![image-20210328150747609](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210328150747609.png)



### 6.6.3、总结

~~~
1、Springboot对大量（自动配置）都进行了封装， 需要观察底层源码，才能弄懂实现的原理。
2、自动配置的内容，都是可以进行修改的， 如果不修改，使用默认的内容。
3、配置文件：位于springboot-autoconfig下的spring.factories
~~~

![image-20210328151616904](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210328151616904.png)



## 6.7、Thymeleaf的另一种取值方法

> 注意：thymeleaf的第二种取变量语法为   [[${变量名}]]

~~~html
<a href="http://getbootstrap.com/dashboard/#" > [[${session.loginUser}]]</a>
~~~



# 7、实战：员工管理系统

## 7.1、静态资源导入

> 1、拿到前端的：代码， 将代码全部改为（Thymeleaf 模板）
>
> https://gitee.com/sheep-are-flying-in-the-sky/i18n/tree/master/src/main/resources/templates

~~~html
<html xmlns:th="http://www.thymeleaf.org">
~~~



> 2、超链接：用th:xxx   @{}替换

~~~css
<link th:href="@{/css/bootstrap.min.css}" rel="stylesheet">
~~~



## 7.2、首页配置

~~~java
1、编写一个MyConfig类 实现 WebMvcConfigurer 
2、实现：添加视图addViewControllers()方法 （设置：主页访问路径， 一般用/ , /index.html）
	    返回视图：index 由thymeleaf， 解析为（index.html）

3、检查一下index.html中是否：全部替换为thymeleaf 渲染
    

4、关闭模板引擎缓存（防止：替换后不显示页面）        
	spring.thymeleaf.cache = false
    
5、yaml中可以设置：虚拟项目名
	server.servlet.context-path=/yang
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210511211744913.png" alt="image-20210511211744913" style="zoom: 67%;" />







## 7.3、实现：国际化

### 7.3.1、设置：编码格式

> 1、将file encoding 中全部设置为：utf-8

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210328191450117.png" alt="image-20210328191450117" style="zoom: 33%;" />

---



### 7.3.2、设置：语言形式

> 需要建立一个：i18n的包，配置语言的.properties文件

~~~properties
创建中文properties：login_zh_CN.properties
创建英文properties: login_en_US.properties
~~~

![image-20210331111144647](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331111144647.png)

---



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331111405513.png" alt="image-20210331111405513" style="zoom: 33%;" />

---



### 7.3.3、绑定语言

~~~
绑定方法：（修改语言获取：基路径）
	.properties （或）.yaml 中设置：spring.messages.basename=i18n.login
~~~

> MessageSourceAutoConfiguration 类

![image-20210331113549661](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331113549661.png)





### 7.3.4、html获取配置内容

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331141350284.png" alt="image-20210331141350284" style="zoom:50%;" />

----





### 7.3.5、设置动态语言解析

`1、什么是语言动态解析？ 如何实现？`

~~~java
一、动态语言解析：
	通过点击页面上：中文 （或）英文（语言按钮）， 通过url包含：显示（语言格式）实现语言切换。

二、如何实现？
    1、书写：index.html  通过 http 携带（语言）参数， 修改显示语言类型（Accept-Language）
    	例如：<a class="btn btn-sm" th:href="@{/index.html(l='zh_CN')}">中文</a>
		<a class="btn btn-sm" th:href="@{/index.html(l='en_US')}">English</a>
                
    2、创建自己的（本地Resolver）实现LocaleResolver接口， 重写其方法，获取（页面显示语言）
          例如：public class MyLocaleResolver implements LocaleResolver      
            
    3、将该实现类：作为@Bean组件， 放入@Configuration配置类， 注意（返回值、方法名 固定）
          例如： public LocaleResolver localeResolver() 	//切记：名称固定
~~~



`2、代码实现`

- index.html 传参（语言类型）

~~~Html
<a class="btn btn-sm" th:href="@{/index.html(l='zh_CN')}">中文</a>
<a class="btn btn-sm" th:href="@{/index.html(l='en_US')}">English</a>
~~~



- 创建自己的：本地Resolver, 实现LocaleResolver接口

> 模仿WebMVCAutoconfig中的：AcceptHeaderLocaleResolver类

~~~java
public class MyLocaleResolver implements LocaleResolver {
    @Override
    public Locale resolveLocale(HttpServletRequest request) {
        String l = request.getParameter("l");  //从request中获取：自己设置的解析语言
        Locale locale = request.getLocale();   //获取：默认的本地语言解析

        System.out.println(l);

        if( l != null && l.length() != 0){    //如果自己的解析语言不为空，且长度不为0
            String[] language = l.split("_"); //将其分割

            System.out.println(language);     //显示：分割后的语言

            //language[0]国家；  language[1]地区
            locale = new Locale(language[0], language[1]); //将分割后的：语言封装到locale类
        }

        return locale;                          //返回：需要显示（解析语言）
    }

    @Override
    public void setLocale(HttpServletRequest request, HttpServletResponse response, Locale locale) {

    }
}
~~~



- 将语言解析类：添加到Springmvc配置类 MyMvcConfig.java中

> 注意：LocaleResolver localeResolver()  返回值 （和） 方法名固定才生效

~~~java
@Configuration      //注意：@Configuration 标注：这是拓展Springmvc的配置类
public class MyMvcConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/index").setViewName("index");
    }

    //转交Spring负责，自定义的国际化组件就生效了
    @Bean
    public LocaleResolver localeResolver(){
        return new MyLocaleResolver();
    }
}
~~~





`3、查看：为什么能设置（动态语言解析的原因）`

> 找到：LocaleResolver（）方法（查看）默认的本地解析类：AcceptHeaderLocaleResolver.java

~~~java
1、去WebMvcAutoConfiguration类中：找到其localResolver()方法
2、可以发现该方法：
	①、首先会去判断：Web中， 有没有配置LocaleResolver类， 如果有直接ruturn 该类
	②、如果，Web中没有， 会继续判断WebMvc中有没有， 如果也直接 return
    ③、如果web、webMvc都没有， 那么会去用默认实现了：LocaleResolver()的类
    	AcceptHeaderLocaleResolver.java
    
    ④、该类通过Http的requst 获取到的头：getHead("Accept-Language")访问语言作为解析语言。
    
    ⑤、将解析语言：封装到new Locale("地区", "国家")  ==>> 变为 地区-国家    //形式显示
    
    ⑥、并将其locale设置为：解析语言， 封装到LocaleResolver中
    
    ⑦、通过获取该LocaleResolver对象， 注入到：配置文件@Configuration的@Bean中
       这样， 解析语言方式，就会变成，其自定义实现了LocaleResolver类了。
~~~





![image-20210331144137770](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331144137770.png)

---

![image-20210331152412844](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331152412844.png)





## 7.4、登录页面

~~~java
实现步骤：
	1、创建一个：控制器，转发到（登录后的页面）  //注意：先认证，控制器（是否）能正常跳转
    	例如： @RequestMapping("/user/login") 
    
    2、设置：index.html 主页的跳转（测试：能够正常跳转到， 控制器）
    
    3、控制器业务代码：（接收前端）用户名、密码。
    	正确：跳转到（主页面）
    	错误：跳转到（主页），并显示（错误提示）
    
 	4、主页面（进行：域名掩藏）， 设置为main.html
~~~



> UserController.java中,  密码错误，则添加一条信息（msg = 用户密码错误 ）， 成功就重定向

~~~java
@Controller
public class UserController {
    @RequestMapping("/user/login")
    public String login(
            @RequestParam("username") String userName,
            @RequestParam("password") String passWord,
            HttpSession session
            ){
        //判断密码：是否正确   (用户名不为空， 密码为：123456 做为正确)
        if(userName != null && !userName.isEmpty() && "123456".equals(passWord)){
            session.setAttribute("loginUser", userName);
            return "redirect:/main.html";       //重定向到：main.html这个控制器

        }
        session.setAttribute("msg", "用户名或密码错误！！！");
        return "redirect:/index.html";         //走Thymeleaf的视图解析器：到主页
    }
}
~~~

> 再写一条：自定义url (跳转到/main)

~~~java
@Configuration      //注意：@Configuration 标注：这是拓展Springmvc的配置类
public class MyMvcConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/index").setViewName("index");
        registry.addViewController("/main").setViewName("dashboard");
    }

    //转交Spring负责，自定义的国际化组件就生效了
    @Bean
    public LocaleResolver localeResolver(){
        return new MyLocaleResolver();
    }
}
~~~

> html页面中：需要使用 th:if = ${ ! #strings.isEmpty(session.msg)}		//如果不为空，则执行th:text

~~~html
<p style="color: red" th:if="${not #strings.isEmpty(session.msg)}" th:text="${session.msg}"></p>
~~~



## 7.5、拦截器

> 定义一个：拦截器类 , 实现 HandlerInterceptor接口

~~~java
为什么要使用：拦截器？
    因为直接输入了：main.html 就可以跳转到：登录后的页面， 这样是不对的。
    正常的逻辑应该是：
    	1、密码正确：才能跳转到main.html页面
    	2、之前登录过，存在session记录： 可以跳转到main.html页面。
    	3、不满足1、2如果直接输入：main.html页面
    		将会被：拦截器栏下来， 添加msg（无权限，请登录）, 后重定向到index.html首页   
~~~

~~~java
如何实现：拦截器？
	1、从结果入手： @Configuation配置类中， 实现的WebMvcConfigurer 接口
				 提供了添加：自定义拦截器的方法
				public void addViewControllers(ViewControllerRegistry registry)
				
	2、调用参数：registry， 可以看到：添加拦截器的方法			
    	InterceptorRegistration registry.addInterceptor(自己的拦截器对象)
    
    3、通过链式法则：可以添加（拦截的路径、不拦截的路径）
    	 registry.addInterceptor(自己的拦截器对象).
         	addPathPatterns("/**").						//拦截的路径
       		excludePathPatterns("/","/index.html");		//不拦截的路径

	4、通过第2步，可以看到，自定义的拦截器， 返回值是：InterceptorRegistration
        
    5、那么：自定义拦截器（需要实现什么、或继承什么）就确定了
        public class MyInterceptor implements HandlerInterceptor {拦截逻辑书写}
	
	6、将相应的：拦截逻辑书写好即可。
~~~



`代码一、@Configuation 中注册（自定义拦截器）`

~~~java
@Configuration      //注意：@Configuration 标注：这是拓展Springmvc的配置类
public class MyMvcConfig implements WebMvcConfigurer {
    //配置url路由
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/index").setViewName("index");
        registry.addViewController("/main").setViewName("dashboard");
    }

    //转交Spring负责，自定义的国际化组件就生效了
    @Bean
    public LocaleResolver localeResolver(){
        return new MyLocaleResolver();
    }

    //配置：拦截器
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new MyInterceptor())
        .addPathPatterns("/**")
        .excludePathPatterns("/", "/index", "/user/login", "/css/**", "/js/**", "/img/**")
        ;
    }
}
~~~



`代码二、实现自定义拦截器的（业务逻辑）`

~~~java
public class MyInterceptor implements HandlerInterceptor {
    @RequestMapping("/user/login")
    public String login(
        @RequestParam("username") String userName,
        @RequestParam("password") String passWord,
        HttpSession session
    ){
        //判断密码：是否正确   (用户名不为空， 密码为：123456 做为正确)
        if(userName != null && !userName.isEmpty() && "123456".equals(passWord)){
            session.setAttribute("loginUser", userName);
            return "redirect:/main.html";       //重定向到：main.html这个控制器

        }
        session.setAttribute("msg", "用户名或密码错误！！！");
        return "redirect:/index.html";         //走Thymeleaf的视图解析器：到主页
    }
}
~~~





## 7.6、组件化：静态页面

~~~java
一、为什么要组件化？
   代码的复用， 后端叫封装， 前端使用了一种（组件化思想）

二、如何利用：Thymeleaf进行组件化？
    1、先找到公共页面：比如（顶部、侧边栏）  ===>>> 在游览器利用（视图）快速定位
    2、然后：创建一个组件文件夹， components, 在组件文件夹下，写入.html组件 component
    		组件创建方式：
    			th:fragment="组件名"  
                    
    3、引用组件：在其余（公共代码）页面引入组件。
             	组件引用方式：（插入、替换）此处用了替换（根路径是：templates）
                th:replace="~{commons/commons :: 组件名(参数，可选)}
~~~

> 注意路径是在：templates文件夹下

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210513193817641.png" alt="image-20210513193817641" style="zoom:33%;" />



`1、静态内容：组件化`

> 使用：th:fragment="组件名"  构建组件

~~~html
<nav class="col-md-2 d-none d-md-block bg-light sidebar" th:fragment="sidebar">
~~~



`2、引用组件`

> 利用：th:replace 或 th:insert 代替 （静态文件块），  ~{位置 :: 页面（参数）}  引用

~~~html
<div th:replace="~{commons/commons :: sidebar(active='list.html')}"></div>
~~~



`3、判断点击语句`

> ${表达式 == 内容  ? true内容 : false内容}

~~~html
<a th:class="${active=='main.html'?'nav-link active':'nav-link'}" th:href="@{/main}">
~~~



`4、遍历显示员工列表`

~~~html
<tbody>
    <tr th:each="emp:${employees}">
        <td th:text="${emp.getId()}"></td>
        <td th:text="${emp.getLastName()}"></td>
        <td th:text="${emp.getEmail()}"></td>
        <td th:text="${emp.getDepartment()}"></td>
        <td th:text="${emp.getBirth()}"></td>
    </tr>
</tbody>
~~~



## 7.7、添加员工信息

~~~
1、使用了：bootstrap的表单
2、使用了：redirect、forward 控制器间的跳转
3、使用了：restFul风格,同为跳转 th:href="/emps" 但是（get、post方式不同）跳转到不同的控制器
4、使用了：spring.mvc.format.date=yyyy-MM-dd  修改日期格式
~~~



## 7.8、修改员工信息

~~~
重要的是：画一个（流程图），把点击跳转到url 还是其他地方，这个关系弄清楚。
~~~



## 7.9、删除员工信息

> 注意restFul风格中：总是跳号的问题， 普通传参不会出现这种问题。



## 7.10、404和500处理

> 只需要在templates下建立一个error文件夹， 放入404和500页面，会自动生效,springboot封装好了

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210405094511675.png" alt="image-20210405094511675" style="zoom:50%;" />

---



## 7.11、总结

> MVC应始终参考，官方文档：
>
> https://docs.spring.io/spring-boot/docs/2.1.18.RELEASE/reference/html/boot-features-developing-web-applications.html#boot-features-spring-mvc-auto-configuration

~~~
看老师视频固然重要, 但是前提是：自己练，发现错误，不能解决才去看。而不是一股脑只是看视频，跟着敲。
~~~



# 8、设计网站流程

~~~
1、确定：前端页面  （该页面的：布局）

2、设计数据库

3、前端：能自动运行

4、前后端：对接json

5、前后端：联调测试
~~~

> 作为一名后端：（最基本技能）
>
> ​			1、拥有：有自己熟悉的（1套）后台模板 ；  （推荐x-admin）, 后续掌握 layui
>
> ​			2、驾驭：前端的（某个框架）， 能够写出（前端页面） index, about、blog、post、user  
>
> ​			3、网站独立运行：也就部署到服务器。

`计划如下：`

> 学习完：springboot、springcloud、redis、docker 立马， 做一个









# ==进阶学习大纲==

~~~java
1、JDBC
2、Mybatis：重点
3、Druid：重点
4、Shiro（安全机制） ： 重点
5、Spring Security（安全框架）： 重点
6、异步任务：邮件发送、定时任务
7、Swagger
8、Dubbo + Zookeeper
~~~





# 9、JDBC整合

## 9.1、JDBC引入方法

~~~
1、pom.xml中导入Jdbc、mysql依赖
2、配置yaml：填充数据源
3、获取JdbcTemplate 实例对象
4、通过实例对象进行（CRUD）
~~~



## 9.2、代码如下

### 9.2.1、pom.xml 导入依赖

~~~xml
<!--SpringJDBC-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!--MySql-->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>
~~~





### 9.2.2、yaml中填充数据源

~~~yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver  # 8以上mysql
    username: root
    password: 123456
    url: jdbc:mysql://localhost:3306/mysql?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8&useSSL=true
~~~





### 9.2.3、获取JdbcTemplate

> 若要使用@RestController需要导入：web依赖

~~~java
@RestController
public class JDBCController {
    @Autowired
    private JdbcTemplate jdbcTemplate;      //获取：JdbcTemplate实例对象

    @RequestMapping("/laoyang")
    public String test() throws SQLException {
        //1、获取数据源
        DataSource dataSource = jdbcTemplate.getDataSource();

        //2、获取数据库：连接对象
        Connection connection = dataSource.getConnection();

        //3、查询
        List<Map<String, Object>> listMap  = jdbcTemplate.queryForList("select * from mysql.jwt");

        //4、删除
        jdbcTemplate.update("delete from mysql.jwt where id = ?", 1);

        //5、增加
        jdbcTemplate.update("insert into mysql.jwt(id, name, password) values (?, ?, ?)", 666, "诗颖姑娘", "123456");

        //6、更新
        jdbcTemplate.update("update mysql.jwt set name = ? where id = ?", "雨欣", 2);

        return "我成功了";
    }
}
~~~





## 9.3、原理探究

![image-20210516193425582](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210516193425582.png)





# 10、druid

## 10.1、概念

~~~java
Druid是：阿里巴巴开发的一个数据库连接池。
Druid的功能
1、替换DBCP和C3P0。Druid提供了一个高效、功能强大、可扩展性好的数据库连接池。

2、可以（监控数据库访问）性能，Druid内置提供了一个功能强大的StatFilter插件，能够详细统计SQL的执行性能，这对于线上分析数据库访问性能有帮助。

3、数据库密码加密。直接把数据库密码写在配置文件中，这是不好的行为，容易导致安全问题。DruidDruiver和DruidDataSource都支持PasswordCallback。

4、SQL执行日志，Druid提供了不同的LogFilter，能够支持Common-Logging、Log4j和JdkLog，你可以按需要选择相应的LogFilter，监控你应用的数据库访问情况。

5、扩展JDBC，如果你要对JDBC层有编程的需求，可以通过Druid提供的Filter机制，很方便编写JDBC层的扩展插件。

所以Druid可以：
1、充当数据库连接池。
2、可以监控数据库访问性能
3、获得SQL执行日志
~~~



## 10.2、如何使用

### 10.2.1、导入依赖

~~~xml
<!--druid依赖-->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.2.6</version>
</dependency>

<!--配置日志监控：用到了log4j-->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
~~~



### 10.2.2、配置yaml

~~~yaml
spring:
  datasource:
    #   数据源基本配置
    driver-class-name: com.mysql.cj.jdbc.Driver  # 8以上mysql
    username: root
    password: 123456
    url: jdbc:mysql://localhost:3306/mysql?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8&useSSL=true
    type: com.alibaba.druid.pool.DruidDataSource
    #     配置初始化大小、最小、最大线程数
    initialSize: 5
    minIdle: 5
    #     CPU核数+1，也可以大些但不要超过20，数据库加锁时连接过多性能下降
    maxActive: 20
    #     最大等待时间，内网：800，外网：1200（三次握手1s）
    maxWait: 60000
    timeBetweenEvictionRunsMillis: 60000
    #     配置一个连接在池中最大空间时间，单位是毫秒
    minEvictableIdleTimeMillis: 300000
    validationQuery: SELECT 1
    testWhileIdle: true
    #     设置从连接池获取连接时是否检查连接有效性，true检查，false不检查
    testOnBorrow: true
    #     设置从连接池归还连接时是否检查连接有效性，true检查，false不检查
    testOnReturn: true
    #     可以支持PSCache（提升写入、查询效率）
    poolPreparedStatements: true
    #   配置监控统计拦截的filters，去掉后监控界面sql无法统计，'wall'用于防火墙
    filters: stat,wall,log4j
    #     保持长连接
    keepAlive: true
    maxPoolPreparedStatementPerConnectionSize: 20
    useGlobalDataSourceStat: true
    connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500
~~~





### 10.2.3、注入Bean

~~~java
@Configuration
public class DruidConfig{
	@ConfigurationProperties(prefix = "spring.datasource")
    @Bean
    public DruidDataSource druid(){
        return new DruidDataSource();
    }

	//配置Druid监控
	@Bean
	public ServletRegistrationBean statViewServlet(){
		ServletRegistrationBean bean=new ServletRegistrationBean(new StatViewServlet(),"/druid/*");

		Map<String,String> initParams=new HashMap<>();
		initParams.put("loginUsername","admin");
		initParams.put("loginPassword","admin");
		initParams.put("allow","");//默认允许所有访问

		bean.setInitParameters(initParams);
		return bean;
	}

	//配置一个web监控的filter
	@Bean
	public FilterRegistrationBean webStatFilter(){
		FilterRegistrationBean bean=new FilterRegistrationBean();
		bean.setFilter(new WebStatFilter());

		Map<String,String> initParams=new HashMap<>();
		initParams.put("exclusions","*.js,*.css,/druid/*");

		bean.setInitParameters(initParams);
		bean.setUrlPatterns(Arrays.asList("/*"));
		return bean;
	}
}
~~~



## 10.3、原理

### 10.3.1、配置Druid监控

![image-20210517083230510](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210517083230510.png)





### 10.3.2、配置web的filter

![image-20210517084715998](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210517084715998.png)





# 11、整合Mybatis

## 11.1、导入依赖

~~~xml
<!--Mysql整合依赖-->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.1.4</version>
</dependency>

<!--JDBC依赖-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>

<!--Mysql依赖-->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>

<!--lombok： 简化pojo层-->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
~~~



## 11.2、测试数据库连接

- `Yaml`

~~~yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: 123456
    url: jdbc:mysql://localhost:3306/jwt?useTimezone=UTC&useUnicode=true&characterEncoding=utf8
~~~



- `测试类`

~~~java
    /**
     * 测试：是否能连上数据库
     * @throws SQLException
     */
    @Test
    void contextLoads() throws SQLException {
        DataSource dataSource = jdbcTemplate.getDataSource();
        Connection connection = dataSource.getConnection();
    }
~~~





## 11.3、创建pojo层

~~~java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MyUser {
    private int id;
    private String name;
    private String password;
}
~~~



## 11.4、创建mapper接口

~~~java
@Repository
@Mapper
public interface MyUserMapper {
    //1、查询
    public List<MyUser> queryAllUser();
    //2、添加
    public int insertUser(MyUser user);
    //3、更新
    public int updUser(MyUser user);
    //4、删除
    public int delUser(int id);
}
~~~





## 11.5、创建mapper.xml文件

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.yyy.mapper.MyUserMapper">
    <!--1、查询-->
    <select id="queryAllUser" resultType="MyUser">
        select * from jwt.myuser;
    </select>

    <!--2、添加-->
    <insert id="insertUser" parameterType="MyUser">
        insert into jwt.myuser(id, name, password) values (#{id}, #{name}, #{password})
    </insert>

    <!--3、更新-->
    <update id="updUser" parameterType="MyUser">
        update jwt.myuser set name = #{name}, password = #{password} where id = #{id}
    </update>

    <!--4、删除-->
    <delete id="delUser" parameterType="int">
        delete from jwt.myuser where id = #{id}
    </delete>

</mapper>
~~~



## 11.6、绑定、别名yaml配置

~~~yaml
mybatis:
  mapper-locations: classpath:mybatis/*.xml   # 设置：接口绑定mapper路径 
  type-aliases-package: com.yyy.pojo	      # 设置：实体类别名
~~~





## 11.7、测试CRUD

~~~java
@Test
void test01(){
    //1、查询
    List<MyUser> myUsers = myUserMapper.queryAllUser();
    System.out.println(myUsers);

    //2、添加
    int addResult = myUserMapper.insertUser(new MyUser(666, "诗颖姑娘", "123"));

    //3、修改
    int updResult = myUserMapper.updUser(new MyUser(4, "雨欣妹妹", "666"));

    //4、删除
    int delResult = myUserMapper.delUser(1);
}
~~~





# 12、SpringSecurity

> 官方文档：https://docs.spring.io/spring-security/site/docs/5.2.0.RELEASE/reference/htmlsingle/



## 12.1、概念

~~~
Spring Security是一个侧重于为（Java应用程序）提供（身份验证）和（授权）的框架。
Spring Security的真正强大之处在于（可以很容易地）扩展它以（满足定制需求）。
~~~





## 12.2、快速：身份认证、授权

> 1、实现：WebSecurityConfigurerAdapterj抽象类， 以及添加@EnableWebSecurity注解
>
> 2、重写（身份验证）方法：protected void configure(HttpSecurity http) 
>
> 3、重写（授权）方法：protected void configure(AuthenticationManagerBuilder auth)

~~~java
@EnableWebSecurity
public class SecurityConfig  extends WebSecurityConfigurerAdapter {
    /**
         * 我们要通过：Security实现
         *                 1、所有人都可以访问首页
         *                 2、只有拥有权限的人：才能访问相应的level层级页面
         * @param http
         * @throws Exception
         */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //所有人都可以访问首页， 只有拥有权限，才能访问控制页
        //antMatchers("/level1/**") 路径自己设置， 控制器的路径
        http.authorizeRequests()
            .antMatchers("/").permitAll()
            .antMatchers("/level1/**").hasRole("vip1")
            .antMatchers("/level2/**").hasRole("vip2")
            .antMatchers("/level3/**").hasRole("vip3");


        //没有权限，默认会跳转到登录页面：/login, 账号密码错误跳转到/login/error
        //该页面是：SpringSecurity所写， 并未自己构建的
        http.formLogin();
    }

    /**
         * 开设用户，并添加角色
         */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())
            .withUser("root").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1", "vip2", "vip3")
            .and()
            .withUser("laoyang").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1", "vip2")
            .and()
            .withUser("guess").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1");
    }
}
~~~



## 12.3、查询数据库：进行授权

> 官网：https://docs.spring.io/spring-security/site/docs/5.2.0.RELEASE/reference/htmlsingle/#jc-authentication-jdbc

~~~java
@Autowired
private DataSource dataSource;

@Autowired
public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    // ensure the passwords are encoded properly
    UserBuilder users = User.withDefaultPasswordEncoder();
    auth
        .jdbcAuthentication()
            .dataSource(dataSource)
            .withDefaultSchema()
            .withUser(users.username("user").password("password").roles("USER"))
            .withUser(users.username("admin").password("password").roles("USER","ADMIN"));
}
~~~



## 12.4、注销、由权限显示内容

~~~
实现目标：
	1、登录前：只显示 （登录按钮）
	2、登录后：显示（姓名、注销按钮）
	3、注销后：回到index 主页面
	4、根据：拥有角色权限， 显示相应内容
~~~

==实现流程如下：==

### 12.4.1、配置环境

> Pom.xml中
>
> ​		1、导入：SpringSecurity整合thymeleaf 的依赖	
>
> ​		2、降级：springBoot的版本，否则无法实现注销

~~~xml
<!--降级版本-->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.9.RELEASE</version>			
    <relativePath/> 
</parent>

<!--springsecurity整合thymeleaf的-->
<dependency>
    <groupId>org.thymeleaf.extras</groupId>
    <artifactId>thymeleaf-extras-springsecurity4</artifactId>
    <version>3.0.4.RELEASE</version>
</dependency>
~~~





### 12.4.2、登录前、后

> 登录前：只显示 （登录按钮）
>
> 登录后：显示（姓名、注销按钮）

~~~html
<!--头文件：加入sec-->
 xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity4"

<!--利用：sec:authorize="isAuthenticated() 判断是否（已经登录）-->

 <!--登录注销-->
<div class="right menu">
    <!--没有登录时：显示登录按钮-->
    <a class="item" th:href="@{/toLogin}" sec:authorize="!isAuthenticated()">
        <i class="address card icon"></i> 登录
    </a>


    <!--已登录：则显示名称-->
    <button class="item"  sec:authorize="isAuthenticated()">
        名称： <span sec:authentication = "name">	
        </span>
    </button>


    <!--已登录了：显示注销按钮-->
    <a class="item" th:href="@{/logout}" sec:authorize="isAuthenticated()">
        <i class="sign-out icon"></i> 注销
    </a>
</div>
~~~







### 12.4.3、注销：跳转主页

> 配置类中：使用http.logout() 注销

~~~java
@EnableWebSecurity
public class SecurityConfig  extends WebSecurityConfigurerAdapter {
   	 //实现退出功能： 可以清除cookie, 并且销毁session
    http.logout().logoutSuccessUrl("/")
        .deleteCookies("remove").invalidateHttpSession(true);
    
    http.csrf().disable();	//Spring security CSRF 跨域访问限制问题， 不加404
	}
}
~~~



### 12.4.4、角色对应：内容

> 根据拥有的：权限，显示相应的内容

~~~~html
<!--利用：sec:authorize="hasAnyRole(角色名)"  若拥有，代码执行， 反之不执行-->
<div class="column" sec:authorize="hasAnyRole('vip1')">
~~~~













## 12.X、探究原理



