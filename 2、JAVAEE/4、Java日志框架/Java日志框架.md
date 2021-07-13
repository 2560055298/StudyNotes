# 1、什么日志？

> 说白了：就如同（监控器）一样， 安装后可以（监测）你的操作。





# 2、Java日志分类

~~~
分为两类：
	1、调试日志
		用途：调试程序时，状态输出， 比如（开发工具的debug）
		
	2、系统日志（常用：这种）
		用途：记录系统（硬件、软件、系统相关问题信息），还可以监视系统中发生的事件。
        分类：系统日志、应用日志、安全日志
~~~









# 3、Java日志框架：==大致介绍==



## 3.1、日志框架的作用

~~~
作用：
	1、控制（日志输出）的：内容、格式、位置
	2、日志文件（相关优化）：异步操作、归档、压缩
	3、日志系统的：维护
	4、面向接口开发：日志的门面
~~~





## 3.2、主流的日志框架

~~~java
主流日志框架：
	1、JUL（Java Util Logging）
		是Java原生日志框架
		
	2、Log4j	
    	Apache的一个开源项目
    	
    3、Logback
    	由Log4j之父的（另一个开源项目），被称作是Log4j的后浪。它可靠通用且灵活。
    	
    4、Log4j2
    	是Log4j的第二个版本，各方面都与Logback相似。具有插件式、配置文件优化等特征。
    	SpringBoot1.4版本后：不再支持lo4j，所以Log4j2成为了接力选手。
~~~

![image-20210713085206733](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210713085206733.png)







## 3.3、日志实现、日志门面：区别

~~~
1、日志实现：
	通过（JUL、Logback、Log4j、lOG4J2）这些（日志框架）技术，能够实现：日志的功能
	但是：他们调用的API都（不相同）， 多个服务不同日志框架，需要更改（自己熟悉框架时，要改代码）

2、日志门面
	类型（JCL、SLF4J）
	能够实现：底层的日志框架（不管如何改变）， 应用程序（不需要修改）任意一行代码，就可上线。
~~~

![image-20210713084017664](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210713084017664.png)





# 4、Java日志框架：==具体讲解==











# 5、SpringBoot日志实战

> 采用：SLF4j 门面 + logback日志框架
>
> 参考视频：https://www.bilibili.com/video/BV1sb411H7Po?p=4





## 5.1、SLF4J门面

> 官网地址：http://www.slf4j.org/



### 5.1.1、基本使用

~~~java
import org.slf4j.Logger;   			//注意：导入jar		
import org.slf4j.LoggerFactory;		//注意：导入jar

public class HelloWorld {
  public static void main(String[] args) {
    Logger logger = LoggerFactory.getLogger(HelloWorld.class);
    logger.info("Hello World");
  }
}
~~~





### 5.1.2、API

![img](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/legacy.png)



### 5.1.3、统一使用：SLF4j + 某个框架

~~~
步骤：
	1、将系统中其他的（日志框架） 先排除出去， 因为(日志框架)：调用的是自己的API
	2、用（中间包）来替换（原有的日志框架）, 这样大家统一调用（SLF4J的API）
	3、我们导入SLF4J其他的实现：比如logback
~~~





## 5.2、SpringBoot日志核心

> 官网：https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.logging.custom-log-configuration

~~~
SpringBoot能自动适配：
	所有的日志， 而且底层使用slf4j+logback方式记录日志。
	引入其他框架的时候，只需要将（这个框架）的日志框架排除掉。
~~~

![image-20210713093329949](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210713093329949.png)





## 5.3、实战开始（==知识点==）

### 5.3.1、级别打印

~~~java
package com.yyy;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;				//注意：使用包
import org.slf4j.LoggerFactory;			//注意
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringbootSlf4jApplicationTests {
    //记录器
    Logger logger = LoggerFactory.getLogger(getClass());

    //日志级别：trace < debug < info < warn < error
    @Test
    void contextLoads() {
        logger.trace("我是trace");
        logger.debug("我是debug");

        //SpringBoog默认给我使用的是：info级别（也称为root级别）， 可以自己指定级别
        logger.info("我是info");
        logger.warn("我是warn");
        logger.error("我是error");
    }

}
~~~



### 5.3.2、设置：==默认级、输出路径、格式==

~~~properties
logging.level.com.yyy=trace

# 一般不用这种方式：用logging.file.path
# logging.file.name=E:/springboot.text

# 在当前磁盘的（根路径）下：创建spring文件夹（和）里面的log文件夹， 使用spring.log作为默认文件
logging.file.path=E:/

# 在控制台：输出的日志的格式
logging.pattern.console= %d{yyyy-MM-dd} %-5level [%thread] %logger{15} - %msg%n

# 指定文件中：日志输出的格式
logging.pattern.file= %d{yyyy-MM-dd} %-5level ==>>> [%thread] %logger{15} - %msg%n
~~~







### 5.3.3、自定义配置文件

| Logging System          | Customization                                                |
| :---------------------- | :----------------------------------------------------------- |
| Logback                 | `logback-spring.xml`, `logback-spring.groovy`, `logback.xml`, or `logback.groovy` |
| Log4j2                  | `log4j2-spring.xml` or `log4j2.xml`                          |
| JDK (Java Util Logging) | `logging.properties`                                         |

![image-20210713105739744](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210713105739744.png)





### 5.3.4、切换日志框架