

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

> 思维导图
>
> https://www.processon.com/mindmap/6059b50407912927bd75b871

~~~
总结：自动配置真正实现是classpath中搜寻所有的META-INF/spring.factories配置文件， 并将其中对应的org-springframework.boot.autoconfig 包下的配置，通过反射实例化为对应标注了@Configuration的JavaConfig形式的IOC容器配置，然后将这些都汇总成一个实例，并加载到IOC容器中
~~~

![image-20210323185824670](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323185824670.png)

![image-20210323203959667](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323203959667.png)

---



`2、run`

![image-20210323205529676](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323205529676.png)

---

`3、Application`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210323205926905.png" alt="image-20210323205926905" style="zoom: 50%;" />

---

`3、Application流程图`

![1231231](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/1231231.png)



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

`使用：邮箱验证例子`

> @Email(message="不是邮箱")

![image-20210325204444401](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325204444401.png)

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210325205122874.png" alt="image-20210325205122874" style="zoom:50%;" />

---





## 4.5、config配置加载顺序

> 可以配置：4个地方， 同一级别下, config优先

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

> yaml 或 properties配置文件中：到底能写什么呢？ 为什么这样写，就调用了呢？

![image-20210327152947947](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210327152947947.png)

![image-20210327155057245](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210327155057245.png)

~~~
1、在springboot-autoconfigure-xxx.jar包中
2、spring.factories文件下存在：ActiveMQAutoconfiguration选项
3、点进去：跳转到ActiveMQAutoconfiguration.java
4、里面有@EnableAutoconfigurationProperties(ActiveMQProperties.class)
5、点进去：有一个注解@ConfigurationProperties, 前缀是（spring.activemq）
6、该类下有：brokerUrl属性
~~~





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
1、springboot用的是jar包， 不是war包， 如何进行webapp相关配置？
	①、静态资源如何导入？
	②、SpringMVC如何拓展？
	③、拦截器、文件上传、json这些如何体现？

2、springboot的自动装配，装配了哪些东西？ 能否二次开发？
~~~





## 6.2、静态资源导入

### 6.2.1、分析web类

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



### 6.2.2、静态资源导入方式

~~~yaml
1、如果在：application.properties中配置了(自定义路径)， 将走自定义路径，加载静态资源
	spring.mvc.static-path-pattern="/hello"     # yaml中也是一样的
	
2、如果没有配置，静态资源，选择webjars的话，导入maven依赖后
	   "/webjars/**" 等价于 "classpath:/META-INF/resources/webjars/")
   例如：localhost/8080/webjars <==> localhost/8080/META-INF/resources/webjars/
   
3、如果没有配置，静态资源，选择resource/下的，static、public、resources文件夹，也行
	同名文件加载顺序：resources >  static > public   (是按源码的：数组顺序决定的)
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

> 在springboot的新版本，被取消掉了， 因为：防止被识别使用了springboot框架，可不是我说的





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

`2、导入thymeleaf约束`

~~~html
<html xmlns:th="http://www.thymeleaf.org">
~~~



`3、第三步书写`

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



- templates/index.html

~~~html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
    <body>
        我是正版的主页：<div th:text="${msg}"></div>
    </body>
</html>
~~~



## 6.5、探究thymeleaf

### 6.5.1、thymeleaf概念

~~~
Thymeleaf是⾯向Web和独⽴环境的现代服务器端Java模板引擎，能够处理HTML，XML，JavaScript，CSS甚⾄纯⽂本。可以嵌入spring, 完全替代 JSP.
~~~



### 6.5.2、thymeleaf设计理念

~~~
Thymeleaf旨在提供⼀个优雅的、⾼度可维护的创建模板的⽅式。 
为了实现这⼀⽬标，Thymeleaf建⽴在(⾃然模板)的概念上，将其逻辑注⼊到模板⽂件中，不会影响模板设计原型。 
这改善了设计的沟通，弥合了设计和开发团队之间的差距。
~~~



### 6.5.3、thymeleaf与jsp区别

~~~
Thymeleaf与JSP的区别在于，不运行项目之前。Thymeleaf也是纯HTML（不需要服务端的支持）。
而JSP需要进行一定的转换。
~~~



### 6.5.4、thymeleaf作用

~~~
1.Thymeleaf 在有网络和无网络的环境下皆可运行。

2、支持浏览器查看页面的静态效果，也支持（动态页面效果）
	支持静态效果原因：因为它支持 html 原型，然后在 html标签，嵌入模板
	支持动态效果原因：存在动态效果时，会替换默认（静态效果）

2.Thymeleaf 开箱即用的特性。它提供标准和spring标准两种方言，可以直接套用模板实现JSTL、 OGNL表达式效果，避免每天套模板、该jstl、改标签的困扰。同时开发人员也可以扩展和创建自定义的方言。

3.Thymeleaf 提供spring标准方言和一个与 SpringMVC 完美集成的可选模块，可以快速的实现表单绑定、属性编辑器、国际化等功能。
~~~

==源码中可知：thymeleaf 还有SpringMVC中（视图解析器）的作用==

![image-20210328075101557](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210328075101557.png)



### 6.5.2、thymeleaf用法

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

> 使用：@Configuration修饰类， 而不使用@EnableWebMvc

~~~java
@Configuration  //例如：自定义类
public class MyConfigMVC implements WebMvcConfigurer {}
~~~



`1、视图解析器的添加`

> 官方文档：
>
> https://docs.spring.io/spring-boot/docs/2.1.18.RELEASE/reference/html/boot-features-developing-web-applications.html#boot-features-spring-mvc-auto-configuration

~~~
官方文档提到：ContentNegotiatingViewResolver 类
~~~

![image-20210328102549264](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210328102549264.png)

---

`2、添加自定义视图解析器：MyConfigMVC.java`

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

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210328103038240.png" alt="image-20210328103038240" style="zoom:50%;" />

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

