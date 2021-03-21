# 1、知识点：回顾

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210320183654000.png" alt="image-20210320183654000" style="zoom:50%;" />

# 2、新的学习大纲

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210320183521316.png" alt="image-20210320183521316" style="zoom: 50%;" />

---



# 3、SprintBoot学习

## 3.1、SpringBoot是什么？

> Spring Boot 就是一个JavaWeb的开发框架， 和SpringMVC类似。



## 3.2、SprintBoot的作用是什么？

> 1、简化开发， 让配置更简化（约定大于配置）
>
> 2、 能迅速的开发web应用， 几行代码开发一个http接口 





## 3.3、微服务

### 3.3.1、单体应用架构

~~~
all in one （单体应用架构）， 是指将应用中（所有应用服务），都封装在（1个）应用中。

这样：这样业务耦合过强， 维护困难。 例如：1个war包，虽然分布式存储很好，但是修改，需要整体服务停掉替换。
~~~

### 3.3.2、微服务：概念

> **微服务**（英语：Microservices）是一种[软件架构风格](https://zh.wikipedia.org/wiki/软件架构)
>
> 它是以专注于单一责任与功能的小型功能区块 (Small Building Blocks) 为基础，利用模块化的方式组合出复杂的大型应用程序，各功能区块使用与语言无关 (Language-Independent/Language agnostic）的[API](https://zh.wikipedia.org/wiki/应用程序接口)集相互通信。





### 3.3.3、微服务：作用

> 它们的规模小和相对隔离可以带来许多其他好处.
>
> 例如更容易维护，提高生产率，更大的容错能力，更好的业务调整等等。

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210320202913140.png" alt="image-20210320202913140" style="zoom: 67%;" />

---





### 3.3.4、微服务程序的特征

~~~
1、每个服务都容易被取代。
2、服务是以能力来组织的，例如用户界面、前端、推荐系统、账单或是物流等。
3、由于功能被拆成多个服务，因此可以由不同的编程语言、数据库实现。
4、架构是对称而非分层（即生产者与消费者的关系）。
5、一个微服务框架：
	适用于具持续交付（Continuous Delivery）的软件开发流程。
	与服务导向架构（Service-Oriented Architecture）不同，后者是集成各种业务的应用程序，但微服务只属于一个应用程序。
~~~



