# 1、JDBC

~~~java
在xml中写法：

jdbc.driverClassName=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/jdbctest?serverTimezone=UTC&amp;characterEncoding=UTF-8
jdbc.username=root
jdbc.password=123456


在config.propertis中写法：(mysql的8.0及及以上)

jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/eesy_mybatis?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8&useSSL=true
jdbc.username=root
jdbc.password=123456

~~~

![image-20210123162401624](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210123162401624.png)

---

# 2、log4j.properties

~~~
log4j.rootLogger=DEBUG,console,logFile

log4j.appender.console=org.apache.log4j.ConsoleAppender
log4j.appender.console.layout=org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=%C %d{yyyy-MM-dd HH:mm:ss} %m %n

log4j.appender.logFile=org.apache.log4j.FileAppender
log4j.appender.logFile.Append=true
log4j.appender.logFile.File=log4j.log
log4j.appender.logFile.layout=org.apache.log4j.PatternLayout
log4j.appender.logFile.layout.ConversionPattern=%C %m %n
~~~



# 3、静态资源过滤问题

## 1、错误：在IntelliJ的Mybatis框架（接口与xml）放一起

![image-20201211215914293](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201211215914293.png)

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201211220111496.png" alt="image-20201211220111496" style="zoom: 50%;" />

## 2、解决方法

~~~xml
pom.xml中添加：
 <build>
        <resources>
            <resource>
                <directory>src/main/java</directory>
                <includes>
                    <include>**/*.xml</include>
                </includes>
                <filtering>true</filtering>
            </resource>
        </resources>
    </build>
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201211220230669.png" alt="image-20201211220230669" style="zoom:50%;" />

---



# 4、jstl

~~~
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

c标签的引入需要导包


<!-- jsp中使用jstl标签 -->
<dependency>
<groupId>javax.servlet</groupId>
<artifactId>jstl</artifactId>
<version>1.2</version>
</dependency>


<dependency>
<groupId>taglibs</groupId>
<artifactId>standard</artifactId>
<version>1.1.2</version>
</dependency>
~~~



