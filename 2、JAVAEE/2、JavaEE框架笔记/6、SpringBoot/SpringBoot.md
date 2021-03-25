# 1、知识点：回顾

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210320183654000.png" alt="image-20210320183654000" style="zoom:50%;" />

# 2、新的学习大纲

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210320183521316.png" alt="image-20210320183521316" style="zoom: 50%;" />

---



# 3、SprintBoot原理学习

## 3.1、微服务

### 3.1.1、单体应用架构

~~~
all in one （单体应用架构）， 是指将应用中（所有应用服务），都封装在（1个）应用中。

这样：这样业务耦合过强， 维护困难。 例如：1个war包，虽然分布式存储很好，但是修改，需要整体服务停掉替换。
~~~

### 3.1.2、微服务：概念

> **微服务**（英语：Microservices）是一种[软件架构风格](https://zh.wikipedia.org/wiki/软件架构)
>
> 它是以专注于单一责任与功能的小型功能区块 (Small Building Blocks) 为基础，利用模块化的方式组合出复杂的大型应用程序，各功能区块使用与语言无关 (Language-Independent/Language agnostic）的[API](https://zh.wikipedia.org/wiki/应用程序接口)集相互通信。





### 3.1.3、微服务：作用

> 它们的规模小和相对隔离可以带来许多其他好处.
>
> 例如更容易维护，提高生产率，更大的容错能力，更好的业务调整等等。

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210320202913140.png" alt="image-20210320202913140" style="zoom: 67%;" />

---





### 3.1.4、微服务程序的特征

~~~
1、每个服务都容易被取代。
2、服务是以能力来组织的，例如用户界面、前端、推荐系统、账单或是物流等。
3、由于功能被拆成多个服务，因此可以由不同的编程语言、数据库实现。
4、架构是对称而非分层（即生产者与消费者的关系）。
5、一个微服务框架：
	适用于具持续交付（Continuous Delivery）的软件开发流程。
	与服务导向架构（Service-Oriented Architecture）不同，后者是集成各种业务的应用程序，但微服务只属于一个应用程序。
~~~





## 3.2、SpringBoot概念

> 官网：https://spring.io/projects/spring-boot

~~~
通过Spring Boot，可以轻松地创建独立的，基于生产级别的基于Spring的应用程序，您可以“运行”它们。

对Spring平台和第三方库支持，可以以最小的代价开始使用。 大多数Spring Boot应用程序需要最少的Spring配置。
~~~



## 3.3、SprintBoot作用

~~~
1、创建独立的Spring应用程序

2、直接嵌入Tomcat，Jetty或Undertow（无需部署WAR文件）

3、提供自以为是的“入门”依赖项，以简化您的构建配置

4、尽可能自动配置Spring和3rd Party库

5、提供可用于生产的功能，例如指标，运行状况检查和外部化配置

6、完全没有代码生成，也不需要XML配置
~~~



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



### 3.5.2、主程序

~~~java
@SpringBootApplication		 //标注这个类是一个springboot的应用, 启动类下的所有资源被导入
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



3.6、SpringBoot考点

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

