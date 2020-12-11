~~~java
学而不思则罔，思而不学则殆                                               ---孔子
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201211150119950.png" alt="image-20201211150119950" style="zoom: 67%;" />

---

# 1、Spring框架（概述）和（XML的IOC配置）

## 1.1、Spring的概述



![image-20201130142809531](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130142809531.png)



---

## 1.2、Spring的（发展历程）

![image-20201130142859553](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130142859553.png)



## 1.3、Spring的优点

		- Spring是一个（开源、免费）的框架。 或者称之为（容器）
		- Spring是一个（轻量级）、非入侵式的框架 （引入：不会影响你的项目）
		- 拥有：IOC(Inversion of control)  和  AOP (Aspect oriented)       -->>必会
		- 支持（事物处理）， 和框架整合（处理）



==总结：Spring是一个轻量级，拥有IOC和AOP的框架==



## 1.4、Spring必知内容

~~~
Spring必须记住的点：
	1、背景：
	   Rod Johnson:创建了Spring Framework,  它是他是悉尼大学（音乐学）博士。
	   他是一个在（保险、电子商务）和（金融行业）有着丰富经验的技术顾问。
	   
    2、目的：解决（企业级）（应用开发）的（复杂性）
    3、功能：JavaBean 代替了EJB
    4、范围：（任何的）Java应用
    5、总结：Spring是一个（轻量级）（控制反转）和（面向切面AOP编程）容器框架
~~~



![image-20201129165204537](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201129165204537.png)

---



![image-20201130071221845](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130071221845.png)



---



![image-20201129170352333](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201129170352333.png)





## 1.5、gitHub下载：Spring的jar包

```
总结如下：

第一步：网址：spring.io
第二步：点击进入Spring FrameWork, 点击GitHub猫
第三步：下拉找到Access to Binaries (访问二进制文件 )
第四步：下拉找到（库地址）
第五步：依次找到 release -->> org -->> spring-framework -->> spring
第六步：点击spring 复制地址
第七步：（选版本）https://repo.spring.io/release/org/springframework/spring/ 
第八步：选类型（集合文档）

详细教程：https://www.cnblogs.com/yangzaikongzhongfei/p/14061279.html  （博客园）

第二种方法：
      找到gitHub猫， 然后点击（右边的）release（版本）下载
```



## 1.6、Spring官网下载：spring框架jar包

~~~
第一步：进入官网spring.io
第二步：点击进入Spring FrameWork
第三步：找到learn(LEARN), 点击（低版本的）	Reference Doc. 
第四步：修改域名， 将版本改为（4.3.9）
第五步：选择html
第六步：找到 2.3. Usage scenarios 的 Distribution Zip Files （这个选项）
第七步：进去找到http://repo.spring.io/release/org/springframework/spring 
第八步：选择版本，下载即可
~~~



## 1.7、通过maven导入jar包

~~~
第一步：百度 maven spring
第二步：在中央仓库中，搜索：spring, 并找到Spring Web MVC （大多数依赖都导入了）
第三步：再导入个 Spring JDBC  （后面会用）
~~~



## 1.8、Spring体系结构

![image-20201130144910785](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130144910785.png)

![image-20201201101820126](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201201101820126.png)



## 1.9、拓展



~~~
现代的：java开发基于(spring开发)
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201201102157934.png" alt="image-20201201102157934" style="zoom:50%;" />

---



- Spring Boot
  - 一个快速开发的：脚手架
  - 基于SpringBoot可以快速的开发（单个）微服务
  - 约定大于：配置

- Spring Cloud 是基于：SpringBoot实现的

---



   >为什么要学习：SpringBoot？   因为Spring大杂烩，配置困难 
   >
   >学习SpringBoot前提：（完全掌握）Spring及SpringMVC

---



## 1.10、IOC（Inversion Of Control）的本质

~~~
第一：反转（new对象的操作， 转交给Spring负责）， 以前是（程序员）自己创建
第二：控制（依赖的对象， 由Spring管理）， 以前是自己管理（何时创建）

IOC实际上：依赖对象的方式， 进行了反转。
~~~

### 图一：IOC反映IOC能实现（解耦）

![image-20201201151131850](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201201151131850.png)

---

### 图二：IOC(解耦)的方式，采用了（容器）思想，（存放单例对象）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201201150148087.png" alt="image-20201201150148087" style="zoom: 67%;" />

---

### 图三：反映出IOC的应用场景（比如博客，很多自定义选项）每个用户的设置不一样，显示不一样。

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201201150543907.png" alt="image-20201201150543907" style="zoom: 67%;" />

---



## 1.11什么是耦合？如何实现解耦？



### 图一、耦合的（概念）

![image-20201130145004402](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130145004402.png)

---

### 图二、工厂模式（实现解耦）

```
通过（工厂）自己实现：Bean(里面是单例的)
```

![image-20201130145216224](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130145216224.png)



## 1.12如何去实现：IOC？

~~~
可以使用（XML配置），也可以使用（注解），新版本的Spring也可以零配置实现IoC。
Spring容器在初始化时先读取配置文件，根据配置文件或元数据创建与组织对象存入容器中，程序使用时再从Ioc容器中取出需要的对象。
~~~



## 1.13通过：利用Spring创建对象，体现IOC

- **第一：创建：实体类**

![image-20201202095802277](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202095802277.png)

---

- **第二：配置applicationContext.xml文件， 利用Spring的IOC（管理对象）**

![image-20201202095955065](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202095955065.png)



- **第三：通过获取bean对象， 体现（由Spring控制对象的：分配，注入）**

![image-20201202101659707](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202101659707.png)

~~~
切记：加载配置文件时， 对象就已经创建出来了，并且放进（容器了）
~~~



## 1.14、IOC：（带参）构造方法，直接注入时？

- **带参构造方法：**

![image-20201202154811910](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202154811910.png)

---



- **通过（类型）注入：（Constructor argument type matching）**

![image-20201202155005793](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202155005793.png)

---

- **通过（索引）注入：（Constructor argument index）**

![image-20201202155200947](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202155200947.png)

---

- **通过（名称）注入：（Constructor argument name）**

  ![image-20201202155411871](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202155411871.png)

---

- 比较：走（无参）构造方法， 和走（有参）构造方法。  ==区别==

  ![image-20201202160634585](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202160634585.png)

  ---

- **总结**

~~~
带参构造方法：初始化时，使用name 和 value比价好
~~~



# 2、Spring的配置（几个标签的讲解）

## 2.1、别名（alias）

 <img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202164620174.png" alt="image-20201202164620174" style="zoom:67%;" />

## 2.2、可重用组件（bean）

![image-20201202165906015](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202165906015.png)



## 2.3、导入(import)

![image-20201202170408529](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202170408529.png)



# 3、DI（dependency Injection）

## 3.1、DI是什么？

~~~
概念：
	依赖：bean对象的创建（依赖于容器）
	注入：bean对象中（所有的属性），由容器来注入
地位：
	它是：IOC的实现方式，主要做将（IOC容器）中的对象， 注入到（需求的地方）
~~~



## 3.2、DI注入方式：有哪些？

### 3.2.1、构造器注入

- **第一种：**通过ref引入（其中：类没有继承关系时， 可以省略：区分constructor-arg）

  ---

  

  <img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202180325268.png" alt="image-20201202180325268" style="zoom: 50%;" />

  ---




==注意：以下3种的类为：ExampleBean==

---

![image-20201203110516737](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203110516737.png)

---



- **第二种：**type（属性）注入


![image-20201203110212328](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203110212328.png)



- 第三种：index（属性）注入

![image-20201203110313037](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203110313037.png)



- **第四种**：name（属性）注入  -->>>最常用

![image-20201203110345367](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203110345367.png)



### 3.2.2、Set注入的方法

~~~
set注入条件：
	条件1：走（无参）构造方法
	条件2：有(set方法)存在
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203112917433.png" alt="image-20201203112917433" style="zoom: 50%;" />

---



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203112728446.png" alt="image-20201203112728446" style="zoom:67%;" />

---

### 3.2.3、set注入的：环境搭建

---

~~~
第一步：创建实体类， 并生成set方法
第二步：创建applicationnContext.xml, 将实体类配置为bean组件， 通过property标签，set注入
第三步：在测试类中，通过ClassPathXmlApplicationContext("加载配置资源")获取组件
~~~

如图：

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203115701265.png" alt="image-20201203115701265" style="zoom: 50%;" />

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203115848778.png" alt="image-20201203115848778" style="zoom:50%;" />



---

- 具体各种注入标签：

>参阅官方文档：https://docs.spring.io/spring-framework/docs/5.1.19.RELEASE/spring-framework-reference/core.html#beans-null-element

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205103426576.png" alt="image-20201205103426576" style="zoom:67%;" />

---

### 3.2.4、拓展方式注入

> 官方文档都有：https://docs.spring.io/spring-framework/docs/5.1.19.RELEASE/spring-framework-reference/core.html#beans-c-namespace

- **第一种：**XML Shortcut with the p-namespace（具有p-命名空间的XML快捷方式）代替（property）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205110452810.png" alt="image-20201205110452810" style="zoom: 80%;" />

---

- **第二种：** XML Shortcut with the c-namespace（具有c-namespace的XML快捷方式）代替，构造方法

![image-20201205111508890](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205111508890.png)



### 3.2.5、bean对象作用于

- 分类

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205113446646.png" alt="image-20201205113446646" style="zoom: 67%;" />

---

- #### The Singleton Scope（默认属性，可不写）

---

![image-20201205113845801](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205113845801.png)

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205113552323.png" alt="image-20201205113552323" style="zoom:50%;" />

---



- #### The Prototype Scope

---

![image-20201205113939978](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205113939978.png)

---

![image-20201205114010483](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205114010483.png)

---



### 3.2.6、Spring中的：装配方式有什么？

~~~
Spring有三种装配方式：
	1、在xml中显示的配置
	2、在java中显示的配置
	3、隐式的自动装配bean
~~~

### 3.2.7、什么是：(隐式的)自动装配bean？

~~~
概念：
	1、自动装配：是Spring满足bean依赖的（一种方式）
	2、Spring会在上下文中（自动寻找）， 并自动给bean装配属性。
~~~

### 3.2.8、如何使用：自动装配？

---

- **通过autowired = byName (按bean的 Id匹配)**

~~~
能成功通过byName注入的条件：
	1、bean标签的id要（唯一）
	2、set+属性名， 其（属性名）要对应得上（类中属性名）， 编译器自动生成，无更改，那么对应得上
~~~

---

![image-20201205154848912](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205154848912.png)

---

- **通过autowired=byType(按bean的class匹配)**

~~~
能成功通过byType注入的条件：
	1、bean中的class="全限定路径" 是（唯一的）
	2、bean中的class="全限定路径" 的类型， 要与（类注入的：属性的，类的类型一致）
~~~

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205160603558.png" alt="image-20201205160603558" style="zoom:67%;" />

---





# 4、Spring中（基于注解）学习

## 4.1、老师推荐的：做笔记的方法

~~~
可以在：Intellij中（直接编辑.md）文件
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201205171228498.png" alt="image-20201205171228498" style="zoom: 50%;" />



## 4.2、Spring注解：学习

~~~
首先：导入jar包
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206102756313.png" alt="image-20201206102756313" style="zoom:67%;" />

~~~
其次：配置xml
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206080106234.png" alt="image-20201206080106234" style="zoom:67%;" />

---

~~~
注解分类
	1、创建bean对象
	2、依赖注入
	3、设置（bean作用范围）
	4、设置（生命周期）
~~~

### 4.2.1、创建bean对象

~~~java
他们的作用和XML配置文件中， 编写一个<bean>标签实现的（功能是一样的）
       Component:
         作用：用于把当前类对象（存入：spring的容器中）
         属性：value：用于指定bean的id, 当不写时，它默认值是（当前类名）， 且字母改（小写）
 
       Controller：一般用于（表现层）
       Service：一般用于（业务层）
       Repository: 一般用在（持久层）
 
       以上：创建转交spring创建的组件。 非要（任意用）也是可以的
~~~

---

![image-20201206075529421](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206075529421.png)

---

==创建bean对象 + 注入：提前演示图==

![image-20201206105843810](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206105843810.png)

---

### 4.2.2、依赖注入

~~~java
他们的作用（就和）在xml配置文件中的（bean）标签中，写一个<property>标签是一样的
 
    @ Autowired:（默认按照value进行匹配）
          作用：自动按照（类型注入）。
          只要容器中有（唯一的一个bean对象类型）和（要注入变量类型匹配）， 就可以注入成功
          如果ioc容器中没有（任何一个bean的类型）和（注入的变量类型匹配）， 则报错
          如果ioc容器中（有多个）类型匹配时：（若找不到一样的Object）一样报错
 
          出现位置：
               可以是（变量上面、方法上面）
 
          细节：
               在使用注解时， set方法（就不是：必须的了）
 
      @ Qualifier
           作用：在（Autowired的value查找的基础上）再按照（key名称）查找   
                --->>>切记：不能单独使用(要先有：@Autowired)
                
            属性：value(用于指定bean的ID)
 
       @ Resource
            作用：直接按照bean的（id注入）。 （可独立）使用
            属性：name(用于指定bean的id)
 
       以上（三个）注入：
            1、只能注入（其他bean类型）数据
            2、无法注入（基本类型）和（String）类型
            3、集合类型注入（只能通过）XML来（实现）
 
        @ Value
           作用：用于注入（基本类型）和（String）类型的数据
           属性：
               	value：用于指定数据值。它可以使用spring中是SpEL(也就是spring的el表达式)
                SpEL的写法：${表达式}
~~~

---

==1、Autowired找不到：注入类型时（直接报错）==

![image-20201206094910067](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206094910067.png)

~~~
注意点：@Autowired有一个参数：Required
~~~

![image-20201206182355832](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206182355832.png)

---

==2、Resource属于：javax.annotation包==

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206095528909.png" alt="image-20201206095528909" style="zoom: 80%;" />

---

### 4.2.3、设置（bean作用范围）

~~~java
 使用：@Scope("")           
 	常用：singleton(默认) 、 prototype（多例）
    作用：和bean标签中写一个scope属性是一样的
~~~



### 4.2.4、设置（生命周期）

~~~java
  1、@PostConstruct()   --->>> 用于指定（初始化方法）
  2、@PreDestroy()      --->>> 用于指定（销毁方法）
     --->>>作用：和bean标签中使用（init-method） 和 (destroy-method)作用一样的
~~~



### 4.2.5、总结：xml和注解（优缺点）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206111142607.png" alt="image-20201206111142607" style="zoom:67%;" />

### 4.2.6、拓展：基于javaConfig配置，完全代替.xml配置

~~~java
此配置：SpringBoot中（随处可见）  必须掌握
步骤：
	1、导入jar包
	2、配置：配置类AppConfig
	3、使用：通过new AnnotationConfigApplicationContext(AppConfig.class);
~~~

==1、导入jar包==

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206174917959.png" alt="image-20201206174917959" style="zoom:50%;" />

---

==2、配置AppConfig==

![image-20201206175744072](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206175744072.png)

---

==3、使用AppConfig==

~~~java
看继承树：已知AnnotaionConfigApplicationContext（类）实现了 ApplicationContext（接口）
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206180607278.png" alt="image-20201206180607278" style="zoom:50%;" />

~~~
所以：new一个AnnotationConfigApplicationContext的：实例就好了， 那看看构造方法
~~~

![image-20201206181210915](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206181210915.png)

---

~~~
最后：代码实现
~~~

![image-20201206181343025](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206181343025.png)

---

# 5、AOP

## 5.1、什么是AOP？

~~~
AOP (Aspect Oriented Programming)意为:面向切面编程，
	1、通过（预编译方式）和（运行期动态代理）实现（程序功能）的统一维护的一种技术。
	2、AOP是OOP的延续，是软件开发中的一个热点，也是Spring框架中的一个重要内容。
	3、是（函数式编程）的一种（衍生范型）。
	4、利用AOP可以对（业务逻辑）的（各个部分）进行（隔离），从而使得业务逻辑各部分之间的（耦合度     降低），提高程序的（可重用性），同时提高了（开发的效率）。
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201208161608063.png" alt="image-20201208161608063" style="zoom:50%;" />



## 5.2、AOP在Spring中的作用

~~~java
1、提供声明式事务
2、允许用户自定义切面
    (1)、横切关注点:跨越应用程序多个模块的方法或功能。即是，与我们业务逻辑无关的，但是我们需要			关注的部分，就是横切关注点。如日志，安全，缓存，事务等等...
    (2)、切面(ASPECT)∶横切关注点被模块化的特殊对象。即，它是一个类。
    (3)、通知(Advice) :切面必须要完成的工作。即，它是类中的一个方法。
    (4)、目标(Target)︰被通知对象。
    (5)、代理(Proxy) ︰向目标对象应用通知之后创建的对象。
    (6)、切入点(PointCut):切面通知执行的"地点"的定义。
    (7)、连接点(JointPoint) :与切入点匹配的执行点。
~~~

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201208162735228.png" alt="image-20201208162735228" style="zoom: 50%;" />

----

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201208162959151.png" alt="image-20201208162959151" style="zoom:50%;" />

---

## 5.3、使用Spring实现AOP

~~~
1、导入依赖包
~~~

![image-20201208165236243](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201208165236243.png)

~~~
2、AOP实现方法
~~~

### 5.3.1、方法一(使用AOP的接口实现)

~~~
原生态：纯bean标签 + aop标签
	1、创建：功能接口（记得导入：org.aspectj.aspectjweaver 依赖包）
	2、创建：功能接口（实现类）
	3、创建：通知类
	4、配置：xml 切点，环绕
	5、通过：加载配置文件，生成代理对象
~~~

#### ⑴、第一步：创建（功能接口）

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201208180325683.png" alt="image-20201208180325683" style="zoom: 50%;" />

---

#### ⑵、写功能：接口实现类

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201208180522184.png" alt="image-20201208180522184" style="zoom: 50%;" />

----

#### ⑶、创建：通知类

----

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201208181452229.png" alt="image-20201208181452229" style="zoom: 150%;" />

---

![image-20201209074109440](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201209074109440.png)

---

#### ⑷、配置：xml 切点，环绕

---

![image-20201209080215111](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201209080215111.png)

----

#### ⑸、加载配置文件，生成代理对象

![image-20201208183054028](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201208183054028.png)

---



### 5.3.2、方法二：（自定义类）实现（AOP） 首推

~~~java
1、导入maven的依赖（不导入，会报错）：
	<dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjweaver</artifactId>
            <version>1.9.4</version>
        </dependency>
2、创建：功能接口
3、创建：目标类，实现接口
4、创建：切面（是1个类， 容纳需要切入，目标类的，方法集合）
5、在applicationContext.xml中配置(切面)
~~~

![image-20201211073325578](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201211073325578.png)



### 5.3.3、方法三：注解实现（AOP）

~~~
实现步骤：
	1、切面类上添加：@Aspect     --->>> 表示是：切面类
	2、通知方法上：加@Before("切入点表达式")、@After("同上")、 @Around("同上")
	3、xml配置：bean管理 （以及） 自动注解代理<aop:autoProxy/>  它有两个参数如下
			expose-proxy = ""      为是否暴露当前代理对象为ThreadLocal模式。
			proxy-target-class=""  使用代理方式：false JDK动态代理， true：cjlib
~~~

==代码图如下：==

- 切面类

![image-20201211161239548](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201211161239548.png)

---

- .xml内容

![image-20201211161503804](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201211161503804.png)

---



# 6、Spring整合Mybatis

~~~
步骤：
	1、导入jar包
	2、编写:配置文件
	3、测试
~~~

## 6.1、导入jar包

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201211165344709.png" alt="image-20201211165344709" style="zoom: 50%;" />

![image-20201211170706593](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201211170706593.png)

---





# #、Spring中的( JdbcTemplate)  和 （Spring事务控制）