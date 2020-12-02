

# 一、Spring框架（概述）和（XML的IOC配置）

## ①、Spring的概述



![image-20201130142809531](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130142809531.png)



---

## ②、Spring的（发展历程）

![image-20201130142859553](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130142859553.png)



## ③、Spring的优点

		- Spring是一个（开源、免费）的框架。 或者称之为（容器）
		- Spring是一个（轻量级）、非入侵式的框架 （引入：不会影响你的项目）
		- 拥有：IOC(Inversion of control)  和  AOP (Aspect oriented)       -->>必会
		- 支持（事物处理）， 和框架整合（处理）



==总结：Spring是一个轻量级，拥有IOC和AOP的框架==



## ④、Spring必知内容

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





## ⑤、gitHub下载：Spring的jar包

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



## ⑥、Spring官网下载：spring框架jar包

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



## ⑦、通过maven导入jar包

~~~
第一步：百度 maven spring
第二步：在中央仓库中，搜索：spring, 并找到Spring Web MVC （大多数依赖都导入了）
第三步：再导入个 Spring JDBC  （后面会用）
~~~



## ⑧、Spring体系结构

![image-20201130144910785](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130144910785.png)

![image-20201201101820126](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201201101820126.png)



## ⑨、拓展



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



## ⑩、IOC（Inversion Of Control）的本质

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



## ⑪什么是耦合？如何实现解耦？



### 图一、耦合的（概念）

![image-20201130145004402](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130145004402.png)

---

### 图二、工厂模式（实现解耦）

```
通过（工厂）自己实现：Bean(里面是单例的)
```

![image-20201130145216224](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130145216224.png)



## ⑫如何去实现：IOC？

~~~
可以使用（XML配置），也可以使用（注解），新版本的Spring也可以零配置实现IoC。
Spring容器在初始化时先读取配置文件，根据配置文件或元数据创建与组织对象存入容器中，程序使用时再从Ioc容器中取出需要的对象。
~~~



## ⑬通过：利用Spring创建对象，体现IOC

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



## ⑭、IOC：（带参）构造方法，直接注入时？

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



# 二、Spring的配置（几个标签的讲解）

## ①、别名（alias）

 <img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202164620174.png" alt="image-20201202164620174" style="zoom:67%;" />

## ②、可重用组件（bean）

![image-20201202165906015](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202165906015.png)



## ③、导入(import)

![image-20201202170408529](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202170408529.png)



# 三、DI（dependency Injection）

## ①、DI是什么？

~~~
它是：IOC的实现方式，主要做将（IOC容器）中的对象， 注入到（需求的地方）
~~~



## ②、DI注入方式：有哪些？

### ⑴、构造器注入

- **第一种：**通过ref引入（其中：类没有继承关系时， 可以省略：区分constructor-arg）

  ---

  

  <img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202180325268.png" alt="image-20201202180325268" style="zoom: 50%;" />

  ---

  

- 
- 

### ⑵、Set注入





### ⑶、拓展方式注入





# 、Spring中（基于注解）和（IOC）的案例











# 、Spring中的（AOP）和（基于XML）以及（注解的AOP配置）



# 、Spring中的( JdbcTemplate)  和 （Spring事务控制）