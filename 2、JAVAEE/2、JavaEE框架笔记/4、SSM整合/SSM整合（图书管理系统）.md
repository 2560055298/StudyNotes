# 一、运行环境

~~~
图书管理系统环境如下：
    1、编译器：IDEA
    2、数据库：MySQL 8.0.22
    3、服务器：Tomcat   9
    4、项目管理：Maven 3.6
~~~



# 二、基本配置

## 2.1、数据库建表

~~~mysql
create database ssmbuild;

use ssmbuild;

drop table if exists books;

create table books (
	bookId int(10) not null auto_increment primary key comment '书籍编号',
	bookName varchar(100) not null comment '书名',
  bookCounts int(11) not null comment '数量',
	detail varchar(200) not null comment '描述'
) engine=innodb default charset=utf8

insert  into books(bookId, bookName, bookCounts, detail) values
(1,'Java',1,'从入门到放弃'),
(2,'MySQL',10,'从删库到跑路'),
(3,'Linux',5,'从进门到进牢');
~~~



## 2.2、创建一个maven项目

> 不需要添加：模板



## 2.3、导入jar包

~~~
一、用到的jar包
	1：测试（junit)
    2：数据库（mysql）
    3：数据源（c3p0）
    4：web（servlet、jsp）
    5：框架（mybatis、mybatis-spring、springmvc、springjdbc）
    6：AOP支持包：aspectjweaver

maven的pom.xml配置
~~~

~~~xml
 <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.1</version>
            <scope>test</scope>
        </dependency>
     
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.22</version>
        </dependency>

        <dependency>
            <groupId>com.mchange</groupId>
            <artifactId>c3p0</artifactId>
            <version>0.9.5.5</version>
        </dependency>
     
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>servlet-api</artifactId>
            <version>2.5</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.2</version>
            <scope>provided</scope>
        </dependency>
     
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.6</version>
        </dependency>

        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis-spring</artifactId>
            <version>2.0.6</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.3.3</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
            <version>5.3.3</version>
        </dependency>

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

        <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjweaver</artifactId>
            <version>1.9.6</version>
        </dependency>
~~~



## 2.4、资源配置文件

~~~
用于：过滤（html、css、js、jsp等静态资源）， 使编译后，out下的WEB-INF下有（其静态资源）

maven的pom.xml配置如下
~~~

~~~xml
<build>
        <resources>
            <resource>
                <directory>src/main/java</directory>
                <includes>
                    <include>**/*.properties</include>
                    <include>**/*.xml</include>
                </includes>
                <filtering>false</filtering>
            </resource>
            <resource>
                <directory>src/main/resources</directory>
                <includes>
                    <include>**/*.properties</include>
                    <include>**/*.xml</include>
                </includes>
                <filtering>false</filtering>
            </resource>
        </resources>
    </build>
~~~

## 2.5、添加web支持，导入jar包

- 添加web支持

![image-20210126112252418](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210126112252418.png)



- 导入jar包

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210126122537746.png" alt="image-20210126122537746" style="zoom:50%;" />



## 2.6、配置web.xml

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">


    <!--配置：前端分发器-->
    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>

        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:applicationContext.xml</param-value>
        </init-param>

        <load-on-startup>1</load-on-startup>
    </servlet>
    
    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>


    <!--设置：字符编码-->
    <filter>
        <filter-name>encoding</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>encoding</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>

    <filter-mapping>
        <filter-name>encoding</filter-name>
        <url-pattern>/</url-pattern>
    </filter-mapping>

    <!--设置session失效时间：15分钟-->
    <session-config>
        <session-timeout>15</session-timeout>
    </session-config>

</web-app>
~~~



## 2.7、各层结构：（名称）拟定

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210126142014822.png" alt="image-20210126142014822" style="zoom:50%;" />

~~~
xml文件名如下：
    applicationContext.xml		(作为上下文)
    database.properties			(作为jdbc参数)
    mybatis-config.xml			(作为mybatis配置文件)
    spring-dao.xml				(spring整合持久层)
    spring-service.xml			(spring整合业务层)
    spring-mvc.xml				(spring整合表现层)
~~~

- applicationContext.xml（初始配置）

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

</beans>
~~~

- mybatis-config.xml（初始配置）

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
       PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
       "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

</configuration>
~~~







# 三、各层配置（MVC）思想

## 3.1、持久层（dao）

### ①、配置database.properties（连接数据库）

~~~xml
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/ssmbuild?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8&useSSL=true
jdbc.username=root
jdbc.password=123456
~~~

### ②、IDE连接数据库

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210126144447524.png" alt="image-20210126144447524" style="zoom: 67%;" />

---

### ③、编写MyBatis的核心配置文件

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--mybatis自带日志-->
<!--    <settings>-->
<!--        <setting name="logImpl" value="STDOUT_LOGGING"/>-->
<!--    </settings>-->

    <!--起别名-->
    <typeAliases>
        <package name="com.yyy.pojo"/>
    </typeAliases>

    <!--mybatis的mapper接口绑定-->
    <mappers>
        <package name="com.yyy.dao"/>
    </mappers>

</configuration>
~~~

### ④、编写数据库（实体类） Books

~~~java
/**
 * Author: 老洋
 * Date:  2021/1/22 13:23
 */
package com.yyy.pojo;

import java.util.Objects;

//表叫：Books
public class Books {
    private int bookId;                 //书ID
    private String bookName;            //书名
    private int bookCounts;             //书的数量
    private String detail;              //书的描述
    
    public Books() {

    }

    public Books(int bookId, String bookName, int bookCounts, String detail) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookCounts = bookCounts;
        this.detail = detail;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public int getBookCounts() {
        return bookCounts;
    }

    public void setBookCounts(int bookCounts) {
        this.bookCounts = bookCounts;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    @Override
    public String toString() {
        return "Books{" +
                "bookId=" + bookId +
                ", bookName='" + bookName + '\'' +
                ", bookCounts=" + bookCounts +
                ", detail='" + detail + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Books books = (Books) o;
        return bookId == books.bookId && bookCounts == books.bookCounts && Objects.equals(bookName, books.bookName) && Objects.equals(detail, books.detail);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bookId, bookName, bookCounts, detail);
    }

}
~~~

### ⑤、编写Dao层的 Mapper接口！

> BookMapper 接口

~~~java
package com.yyy.dao;

import com.yyy.pojo.Books;
import org.apache.ibatis.annotations.Param;

import java.util.List;

//定义书籍：CRUD抽象方法
public interface BookMapper {
    //增加一本书
    int addBook(Books books);

    //查询一本书
    Books queryBookById(@Param("bookId") int id);

    //查询全部的书
    List<Books> queryAllBook();

    //更新一本书
    int updateBook(Books books);

    //删除一本书
    int deleteBookById(@Param("bookId") int id);

    //查询书籍（通过：书籍名称）
    List<Books> selBookByName(@Param("bookName") String bookName);
}

~~~

### ⑥、编写接口对应的 Mapper.xml 文件。

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--1个mapper对应一个接口-->
<mapper namespace="com.yyy.dao.BookMapper">
    <!--增加一本书-->
    <insert id="addBook" parameterType="books">
        insert into ssmbuild.books(bookId, bookName, bookCounts, detail)
         values(default, #{bookName}, #{bookCounts}, #{detail});
    </insert>

    <!--查询一本书-->
    <select id="queryBookById" parameterType="int" resultType="books">
        select * from ssmbuild.books where bookId = #{bookId}
    </select>

    <!--查询全部的书-->
    <select id="queryAllBook" resultType="books">
        select * from ssmbuild.books;
    </select>

    <!--更新一本书-->
    <update id="updateBook" parameterType="books">
        update ssmbuild.books
        set
            bookName = #{bookName},
            bookCounts = #{bookCounts},
            detail = #{detail}
        where
            bookId = #{bookId};
    </update>

    <!--删除一本书-->
    <delete id="deleteBookById" parameterType="int">
        delete from ssmbuild.books where bookId = #{bookId}
    </delete>

    <!--查询书籍（通过：书籍名称）-->
    <select id="selBookByName" parameterType="string" resultType="books">
        select * from ssmbuild.books where bookName = #{bookName}
    </select>
</mapper>
~~~



## 3.2、业务层（service）

### ①、编写Service层的接口

~~~java
package com.yyy.service;

import com.yyy.pojo.Books;

import java.util.List;

//CRUD
public interface BookService {
    //增加一本书
    int addBook(Books books);

    //查询一本书
    Books queryBookById(int id);

    //查询全部的书
    List<Books> queryAllBook();

    //更新一本书
    int updateBook(Books books);

    //删除一本书
    int deleteBookById(int id);

    //查询书籍（通过：书籍名称）
    List<Books> selBookByName(String bookName);
}
~~~

### ②、编写Service实现类

~~~java
/**
 * Author: 老洋
 * Date:  2021/1/23 8:45
 */
package com.yyy.service;

import com.yyy.dao.BookMapper;
import com.yyy.pojo.Books;

import java.util.List;

public class BookServiceImpl implements BookService {
    private BookMapper bookMapper;

    public void setBookMapper(BookMapper bookMapper) {
        this.bookMapper = bookMapper;
    }

    @Override
    public int addBook(Books books) {
        return bookMapper.addBook(books);
    }

    @Override
    public Books queryBookById(int id) {
        return bookMapper.queryBookById(id);
    }

    @Override
    public List<Books> queryAllBook() {
        return bookMapper.queryAllBook();
    }

    @Override
    public int updateBook(Books books) {
        return bookMapper.updateBook(books);
    }

    @Override
    public int deleteBookById(int id) {
        return bookMapper.deleteBookById(id);
    }

    @Override
    public List<Books> selBookByName(String bookName) {
        return bookMapper.selBookByName(bookName);
    }
}
~~~



## 3.3、XML配置

### ①、Spring配置整合文件

>  applicationContext.xml

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd">

    <import resource="classpath:spring-dao.xml"/>
    <import resource="classpath:spring-service.xml"/>
    <import resource="classpath:spring-mvc.xml"/>
</beans>
~~~



### ②、Spring整合mybatis

> spring-dao.xml

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <!--1、关联数据库：配置文件-->
    <context:property-placeholder location="classpath:database.properties"/>

    <!--
        2、配置连接池
            dbcp：半自动化操作，不能自动连接
            c3p0：自动化操作（自动化的加载配置文件， 并且可以自动设置对象中！）
            druid:hikari
    -->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"/>
        <property name="jdbcUrl" value="${jdbc.url}"/>
        <property name="user" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>


        <!-- c3p0连接池的私有属性 -->
        <property name="maxPoolSize" value="30"/>
        <property name="minPoolSize" value="10"/>
        <!-- 关闭连接后不自动commit -->
        <property name="autoCommitOnClose" value="false"/>
        <!-- 获取连接超时时间 -->
        <property name="checkoutTimeout" value="10000"/>
        <!-- 当获取连接失败重试次数 -->
        <property name="acquireRetryAttempts" value="2"/>
    </bean>


    <!--3、管理：SqlSessionFactory对象-->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <!--注入数据库连接池：连接池-->
        <property name="dataSource" ref="dataSource"/>

        <!--配置Mybatis全局配置文件：mybatis-config.xml-->
        <property name="configLocation" value="classpath:mybatis-config.xml"/>

    </bean>

    <!--4、配置扫描Dao接口包， 动态实现Dao接口注入到spring容器中-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <!--注入sqlSessionFactory-->
        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>

        <!--给出需要：扫描的Dao接口包-->
        <property name="basePackage" value="com.yyy.dao"/>
    </bean>


</beans>
~~~

### ③、Spring整合service层

> spring-service.xml

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        https://www.springframework.org/schema/context/spring-context.xsd
         http://www.springframework.org/schema/tx
         http://www.springframework.org/schema/tx/spring-tx.xsd
          http://www.springframework.org/schema/aop
          https://www.springframework.org/schema/aop/spring-aop.xsd">

    <!--1、扫描注解下的：包 （必写）-->
    <context:component-scan base-package="com.yyy.service"/>

    <!--2、管理（业务层）并且实现注入（持久层对象）-->
    <bean id="bookService" class="com.yyy.service.BookServiceImpl">
        <property name="bookMapper" ref="bookMapper"/>
    </bean>

    <!--3、（声明式）事务 （保证ACID）-->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <!--4、AOP支持-->
    <tx:advice id="txAdvice" transaction-manager="transactionManager">
        <tx:attributes>
            <tx:method name="*" propagation="REQUIRED"/>
        </tx:attributes>
    </tx:advice>

    <aop:config>
        <aop:pointcut id="myPointCut" expression="execution(* com.yyy.dao.*.*(..))"/>
        <aop:advisor advice-ref="txAdvice" pointcut-ref="myPointCut"/>
    </aop:config>
</beans>
~~~

### ④、spring整合视图层

> spring-mvc.xml

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd

         http://www.springframework.org/schema/context
         https://www.springframework.org/schema/context/spring-context.xsd
         http://www.springframework.org/schema/mvc
         https://www.springframework.org/schema/mvc/spring-mvc.xsd
">
    <!--1、配置注解驱动：代替HandlerMapping和HandlerAdapter的书写-->
    <mvc:annotation-driven/>

    <!--2、用默认的servlet处理器，不去解析静态资源，直接用其url-->
    <mvc:default-servlet-handler/>

    <!--3、扫描：控制层注解-->
    <context:component-scan base-package="com.yyy.controller"/>

    <!--4、配置视图解析器-->
    <bean id="internalResourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

</beans>
~~~



## 3.4、控制器、视图层

### ①、查询全部书籍

> 控制层：查询全部书籍（方法1）

~~~java
@Controller
@RequestMapping("/book")
public class BookController {

    //DI注入：业务层对象
    @Autowired
    @Qualifier("bookService")
    private BookService bookService;

    //查询所有书籍
    @RequestMapping("/allBook")
    public String list(Model model){
        List<Books> books = bookService.queryAllBook();

        model.addAttribute("list", books);

        return "showAllBook";
    }
    
  }
}
~~~

> 视图层：显示（全部书籍）

- 首页：index.jsp

~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
    <style>
      a{
        text-decoration: none;
        color: black;
        font-size: 20px;
      }

      h3{
        width: 180px;
        height: 38px;
        background: aquamarine;
        margin: 300px auto;
        text-align: center;
        line-height: 38px;
        border-radius: 5px;
      }
    </style>

  </head>
  <body>
    <a href="${pageContext.request.contextPath}/book/allBook"><h3>跳转到书籍页面</h3></a>

  </body>
</html>
~~~

- 书籍列表页面 showAllBook.jsp

~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>书籍展示页面</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">

</head>
<body>
    <!--显示书籍-->
    <div class="container">
        <div class="row clearfix">
            <div class="col-md-12 column">
                <div class="page-header">
                    <h1>
                        <small>书籍列表 ----- 显示所有书籍</small>
                    </h1>
                </div>
            </div>
        </div>

        <div class="row clearfix">
            <div class="col-md-12">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>书籍编号</th>
                            <th>书籍名称</th>
                            <th>书籍数量</th>
                            <th>书籍详情</th>
                            <th>操作</th>
                        </tr>
                    </thead>

                    <tbody>
                        <c:forEach items="${list}" var="book">
                            <tr>
                                <td>${book.bookId}</td>
                                <td>${book.bookName}</td>
                                <td>${book.bookCounts}</td>
                                <td>${book.detail}</td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</body>
</html>

~~~

### ②、BookController 控制器

> 控制层：添加书籍（方法2）

~~~java
    //添加书籍页面
    @RequestMapping("/addBookPage")
    public String addBookPage(){

        return "toAddBook";
    }

    //添加书籍
    //addBook(@RequestParam("bookName") String bookName, @RequestParam("bookCounts") String bookCounts, @RequestParam("detail") String detail, Model model)
    //若是：表单提交的（属性Name == pojo类的属性名）， 并且存在set方法， 那么会：自动填充（对象）
    @RequestMapping("/addBook")
    public String addBook(Books book){
        System.out.println("addBook(Books book) ->" + book);
        bookService.addBook(book);

        return "redirect:/book/allBook";
    }
~~~

> 视图层：（添加书籍）

- 添加书籍页面：addBook.jsp

~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>添加书籍页面</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">


</head>
<body>
    <div class="container">
        <div class="row clearfix">
            <div class="col-md-12 column">
                <div class="page-header">
                    <h1>
                        <small>添加书籍</small>
                    </h1>
                </div>
            </div>
        </div>

        <form action="${pageContext.request.contextPath}/book/addBook" method="get">
            <div class="form-group">
                <label for="bookName">书籍名称</label>
                <input type="text" class="form-control" id="bookName" name="bookName" required>
            </div>

            <div class="form-group">
                <label for="bookCounts">书籍数量</label>
                <input type="text" class="form-control" id="bookCounts" name="bookCounts" required>
            </div>

            <div class="form-group">
                <label for="detail">书籍描述</label>
                <input type="text" class="form-control" id="detail" name="detail" required>
            </div>

            <button type="submit" class="btn btn-default">确认添加</button>
        </form>

    </div>
</body>
</html>

~~~

### ③、BookController 类编写

> 控制层：修改书籍（方法3）

~~~java
    @RequestMapping("/updBookPage")
    public String updBookPage(int id, Model model){
        System.out.println("updBookPage => " + id);
        Books book = bookService.queryBookById(id);
        model.addAttribute("QBook", book);

        return "updPage";
    }

    //修改书籍
    @RequestMapping("/updBook")
    public String updBook(Books book){
        System.out.println("updBook => " + book);

        bookService.updateBook(book);

        return "redirect:/book/allBook";
    }
~~~

> 视图层：（修改书籍）

- 修改书籍页面  updateBook.jsp

~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>修改书籍页面</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">


</head>
<body>
<div class="container">
    <div class="row clearfix">
        <div class="col-md-12 column">
            <div class="page-header">
                <h1>
                    <small>修改书籍</small>
                </h1>
            </div>
        </div>
    </div>

    <form action="${pageContext.request.contextPath}/book/updBook" method="get">
        <input type="hidden" name="bookId" value="${QBook.bookId}">
        <div class="form-group">
            <label for="bookName">书籍名称</label>
            <input type="text" class="form-control" id="bookName"  name="bookName" value="${QBook.bookName}" required>
        </div>

        <div class="form-group">
            <label for="bookCounts">书籍数量</label>
            <input type="text" class="form-control" id="bookCounts" name="bookCounts" value="${QBook.bookCounts}" required>
        </div>

        <div class="form-group">
            <label for="detail">书籍描述</label>
            <input type="text" class="form-control" id="detail" name="detail" value="${QBook.detail}" required>
        </div>

        <button type="submit" class="btn btn-default">确认修改</button>
    </form>

</div>
</body>
</html>

~~~



### ④、BookController 类编写

> 控制层：删除书籍（方法4）

~~~java
    //删除书籍
    @RequestMapping(value = "/delBook")
    public String delBook(int id){
        System.out.println("delBook(int id) 参数id = " + id);
        bookService.deleteBookById(id);

        //重定向到：显示全部书籍页面
        return "redirect:/book/allBook";
    }
~~~

> 视图层：最尾（留出）





### ⑤、BookController 类编写

> 控制层：通过名称查询书籍（方法5）

~~~java
    @RequestMapping("/queryBook")
    public String QueryBook(String queryBookName, Model model){
        System.out.println("QueryBook =>" + queryBookName);
        List<Books> list = bookService.selBookByName(queryBookName);

        if(!list.isEmpty()){
            model.addAttribute("list", list);
        }else{
            model.addAttribute("list", bookService.queryAllBook());
            model.addAttribute("error", "未查询到（该名称）书籍");
        }

        return "showAllBook";
    }
~~~

> 视图层页面：showAllBook.jsp (有部分重叠)

~~~jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>书籍展示页面</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">


</head>
<body>
    <!--显示书籍-->
    <div class="container">
        <div class="row clearfix">
            <div class="col-md-12 column">
                <div class="page-header">
                    <h1>
                        <small>书籍列表 ----- 显示所有书籍</small>
                    </h1>
                </div>
            </div>
        </div>

        <!--添加书籍页面-->
        <div class="row">
            <div class="col-md-4 column">
                <%--toAddBook--%>
                <a class="btn btn-primary" href="${pageContext.request.contextPath}/book/addBookPage">新增书籍</a>
                <a class="btn btn-primary" href="${pageContext.request.contextPath}/book/allBook">显示全部书籍</a>
            </div>

            <!--查询书籍-->
            <div class="col-md-2 column"></div>
            <div class="col-md-6 column">
                <form action=${pageContext.request.contextPath}/book/queryBook method="post" style="float: right" class="form-inline">
                    <label class="control-label" style="color: palevioletred">${error}</label>
                    <input type="text" name="queryBookName" class="form-control" placeholder="请输入：你要查询的书籍">
                    <input type="submit" value="查询" class="btn btn-primary">
                </form>
            </div>

        </div>



        <div class="row clearfix">
            <div class="col-md-12">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>书籍编号</th>
                            <th>书籍名称</th>
                            <th>书籍数量</th>
                            <th>书籍详情</th>
                            <th>操作</th>
                        </tr>
                    </thead>

                    <tbody>
                        <c:forEach items="${list}" var="book">
                            <tr>
                                <td>${book.bookId}</td>
                                <td>${book.bookName}</td>
                                <td>${book.bookCounts}</td>
                                <td>${book.detail}</td>

                                <td>
                                        <a href="${pageContext.request.contextPath}/book/updBookPage?id=${book.bookId}">修改</a>
                                         &nbsp; | &nbsp;
                                        <a href="${pageContext.request.contextPath}/book/delBook?id=${book.bookId}">删除</a>
                                </td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</body>
</html>
~~~

