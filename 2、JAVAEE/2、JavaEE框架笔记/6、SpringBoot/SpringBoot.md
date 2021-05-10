



# 1、知识点：回顾

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210320183654000.png" alt="image-20210320183654000" style="zoom:50%;" />

# 2、新的学习大纲

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





### 6.6.2、拓展SpringMVC

~~~
 拓展SpringMVC时， 仅使用@Configuration即可。

 若添加了  @EnableWebMvc， 会使WebMvcAutoConfiguration 配置所有失效
 最基本的体现就是：静态资源，无法通过 resources、static、public 直接在网站中url访问到了
~~~

`原因如下：`

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



> 3、若需要修改：虚拟项目名 （在配置文件：application.properties或 yaml）中修改

~~~properties
server.servlet.context-path=/yang
~~~





## 7.2、实现：国际化

### 7.2.1、设置：编码格式

> 1、将file encoding 中全部设置为：utf-8

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210328191450117.png" alt="image-20210328191450117" style="zoom: 33%;" />

---



### 7.2.2、配置：语言

> 需要建立一个：i18n的包，配置语言的.properties文件

~~~properties
创建中文properties：login_zh_CN.properites
创建英文properties: login_en_US.properites
~~~

![image-20210331111144647](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331111144647.png)

---



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331111405513.png" alt="image-20210331111405513" style="zoom: 33%;" />

---



### 7.2.3、绑定：语言位置

> MessageSourceAutoConfiguration 类

![image-20210331113549661](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331113549661.png)



### 7.2.4、html获取配置内容

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331141350284.png" alt="image-20210331141350284" style="zoom:50%;" />

----



### 7.2.5、设置动态语言解析

`1、查看：为什么能设置（动态语言解析的原因）`

> 找到：LocaleResolver（）方法（查看）默认的本地解析类：AcceptHeaderLocaleResolver.class

![image-20210331144137770](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331144137770.png)

---

![image-20210331152412844](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210331152412844.png)

---

`2、定义：动态语言解析类`

> 实现：LocaleResolver接口， 模仿AcceptHeaderLocaleResolver类

~~~java
public class MyLocaleResolver implements LocaleResolver {
    @Override
    public Locale resolveLocale(HttpServletRequest request) {
        String l = request.getParameter("l");  //从request中获取：自己设置的解析语言
        Locale locale = request.getLocale();     //获取：默认的本地语言解析

        System.out.println(l);

        if( l != null && l.length() != 0){       //如果自己的解析语言不为空，且长度不为0
            String[] language = l.split("_");   //将其分割

            System.out.println(language);              //显示：分割后的语言

            //language[0]国家；  language[1]地区
            locale = new Locale(language[0], language[1]);    //将分割后的：语言封装到locale类
        }

        return locale;                          //返回：需要显示（解析语言）
    }

    @Override
    public void setLocale(HttpServletRequest request, HttpServletResponse response, Locale locale) {

    }
}
~~~



`3、将语言解析类：添加到Springmvc配置中`

> MyMvcConfig.class类

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



## 7.3、登录页面

> UserController.java中,  密码错误，则添加一条信息（msg = 用户密码错误 ）， 成功就重定向

~~~java
@Controller
public class UserController {
    @RequestMapping("/user/login")
    public String login(
                        @RequestParam("username") String username,
                        @RequestParam("password") String password,
                        Model model){
        if(!username.equals("") && "123456".equals(password)){
            return "redirect:/main";
        }else{
            model.addAttribute("msg", "用户名或密码错误");
            return "index";
        }
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

> html页面中：需要使用 th:if = ${ ! #strings.isEmpty(msg)}		//如果不为空，则执行th:text

~~~html
<p style="color: red" th:text="${msg}" th:if="${!#strings.isEmpty(msg)}"></p>
~~~



## 7.4、拦截器

> 定义一个：拦截器类 , 实现 HandlerInterceptor接口

~~~java
public class MyInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Object logUser = request.getSession().getAttribute("loginUser");

        if(logUser != null){
            //登录成功
            return true;
        }else{
            //登录失败
            request.setAttribute("msg", "没有权限，不能访问");
            request.getRequestDispatcher("/index").forward(request, response);
            return false;
        }

    }
}
~~~

> Web拓展的配置类中：需要添加重写方法  addInterceptors(InterceptorRegistry registry)

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

> 注意：thymeleaf的第二种取变量语法为   [[${变量名}]]

~~~html
<a href="http://getbootstrap.com/dashboard/#" > [[${session.loginUser}]]</a>
~~~



## 7.5、组件化：静态页面

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



## 7.6、添加员工信息

~~~
1、使用了：bootstrap的表单
2、使用了：redirect、forward 控制器间的跳转
3、使用了：restFul风格,同为跳转 th:href="/emps" 但是（get、post方式不同）跳转到不同的控制器
4、使用了：spring.mvc.format.date=yyyy-MM-dd  修改日期格式
~~~



## 7.7、修改员工信息

~~~
重要的是：画一个（流程图），把点击跳转到url 还是其他地方，这个关系弄清楚。
~~~



## 7.8、删除员工信息

> 注意restFul风格中：总是跳号的问题， 普通传参不会出现这种问题。



## 7.9、404和500处理

> 只需要在templates下建立一个error文件夹， 放入404和500页面，会自动生效,springboot封装好了

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210405094511675.png" alt="image-20210405094511675" style="zoom:50%;" />

---



## 7.10、总结

> 代码地址：

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

