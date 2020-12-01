

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





   >为什么要学习：SpringBoot？   因为Spring大杂烩，配置困难 
   >
   >学习SpringBoot前提：（完全掌握）Spring及SpringMVC



## 、程序的（耦合）和（解耦）

![image-20201130145004402](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130145004402.png)





## 、工厂模式解耦

```
通过（工厂）自己实现：Bean(里面是单例的)
```

![image-20201130145216224](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130145216224.png)







# 二、Spring中（基于注解）和（IOC）的案例











# 三、Spring中的（AOP）和（基于XML）以及（注解的AOP配置）



# 四、Spring中的( JdbcTemplate)  和 （Spring事务控制）