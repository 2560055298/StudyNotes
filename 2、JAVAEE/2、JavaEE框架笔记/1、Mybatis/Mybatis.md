```
我会更努力的去生活， 过好自己这一生。                                          --老洋
```



# 1、连接池POOLED和UNPOOLED技术

## 1.1、DataSource![image-20201106144258596](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106144258596.png)



## 1.2、PooledDataSource 

![image-20201106144042708](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106144042708.png)

![image-20201106150356434](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106150356434.png)

![image-20201106153425336](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106153425336.png)

![image-20201106153351839](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106153351839.png)

![image-20201106153545691](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106153545691.png)

![image-20201106153713145](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106153713145.png)



## 1.3、UnPooledDataSource



![image-20201106144217570](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106144217570.png)

![image-20201106145702382](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106145702382.png)



![image-20201106145951279](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106145951279.png)



![image-20201106150123233](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106150123233.png)



## 1.4、Mybatis的配置

~~~
第一步：导入jar包
第二步：配置SqlMapConfig.xml文件
第三步：写domain层（也称为pojo层）
第四步：写dao层接口（也称为mapper层）
第五步：写dao.xml（也称为mapper.xml）
第六步：测试
~~~

- 1、导入jar包

![image-20201211174229061](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201211174229061.png)

---

- 2、配置mybatis-config.xml文件 （外部引入）DataSource

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>

    <properties resource="jdbcConfig.properties"/>

    <!--配置日志-->
    <settings >
        <setting name="logImpl" value="LOG4J"/>
    </settings>


    <!-- 配置别名-->
    <typeAliases>
        <package name="com.itheima.domain" />
    </typeAliases>


    <!--配置mysql环境-->
    <environments default="mysql">
        <environment id="mysql">
                <transactionManager type="JDBC"/>
                <dataSource type="POOLED">
                    <property name="driver" value="${driver}"/>
                    <property name="url" value="${url}"/>
                    <property name="username" value="${username}"/>
                    <property name="password" value="${password}"/>
                </dataSource>
        </environment>
    </environments>

    <mappers>
        <package name="com.itheima.dao" />
    </mappers>

</configuration>
~~~

~~~java
jdbcConfig.properties文件名

driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://localhost:3306/eesy_mybatis?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8&useSSL=true
username=root
password=123456
~~~

- 3、pojo层：实体类
- 4、mapper层：mapper接口

~~~java
package com.itheima.dao;

import com.itheima.domain.User;

import java.util.List;

/**
 * 用户的持久层接口
 */
public interface IUserDao {
    /**
     * 1、查询所有用户信息 + 各个用户（拥有的账户）信息
     * @return
     */
    List<User> selAll();


    /**
     * 2、通过id：查询某个人
     */
    User selOneById(int id);
}

~~~

- 5、mapper.xml

~~~xml
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itheima.dao.IUserDao">

    <!--1、查询所有用户信息 + 各个用户（拥有的账户）信息-->
    <resultMap id="myUser" type="user">
        <id property="id" column="id"/>
        <result property="username" column="username"/>
        <result property="birthday" column="birthday"/>
        <result property="sex" column="sex"/>
        <result property="address" column="address"/>

        <collection property="accounts"  ofType="account">
            <id property="id" column="aid" />
            <result property="uid" column="uid" />
            <result property="money" column="money" />
        </collection>

    </resultMap>

    <select id="selAll" resultMap="myUser">
        select u.*, a.id aid, a.uid, a.money from user u
        left outer join account a
        on u.id = a.uid
    </select>


    <!--通过id查询：某个人-->
    <select id="selOneById" parameterType="int" resultType="user">
        select * from user where id = #{0}
    </select>

</mapper>
~~~

- 6、测试

~~~java
 		//1、加载mybatis配置资源
        InputStream is = Resources.getResourceAsStream("SqlMapConfig.xml");

        //2、通过构建者模式：创建SqlSessionFactory工厂对象
        SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(is);

        //3、通过工厂：创建SqlSession对象
        SqlSession session = factory.openSession(true);

        //4、通过SqlSession对象：获取代理对象
        IUserDao mapper = session.getMapper(IUserDao.class);

        mapper.selAll();
~~~





# 2、Mybatis的动态Sql

## 2.1、if标签

![image-20201106160838769](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106160838769.png)



## 2.2、where标签

### ![image-20201106161234914](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106161234914.png)



## 2.3、set标签

> 用于更新语句：update 表名 set 

~~~xml
<!--注意set是用的逗号隔开-->
<update id="updateBlog" parameterType="map">
  update blog
     <set>
         <if test="title != null">
            title = #{title},
         </if>
         <if test="author != null">
            author = #{author}
         </if>
     </set>
  where id = #{id};
</update>
~~~



## 2.4、choose标签

~~~xml
<select id="queryBlogChoose" parameterType="map" resultType="blog">
  select * from blog
   <where>
       <choose>
           <when test="title != null">
                title = #{title}
           </when>
           <when test="author != null">
              and author = #{author}
           </when>
           <otherwise>
              and views = #{views}
           </otherwise>
       </choose>
   </where>
</select>
~~~



## 2.5、foreach标签

![image-20201106164831576](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106164831576.png)

## 2.6、sql和include标签

![image-20201106170422310](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106170422310.png)





# 3、多表查询

```
示例：用户和账户	
			一个用户可以有：多个账户
			一个账户只能属于一个用户（多个账户可以：属于一个用户）
步骤
			1、建立两张表：用户表， 账户类
				让用户表（和）账户表之间具备一对多的关系， 需要使用（外键）在（账户表）中添加
			2、建立两个实体类：用户实体类能体现出一对多的关系。
			3、建立两个配置文件
				用户配置文件
				账户的配置文件
			4、实现配置
				当我们（查询用户时），可以同时得到（用户）所包含的（账户信息）
				当我们（查询账户时），可以同时得到（账户）的所有的（用户信息）
			
```

## 3.1、一对一（一个账户 --->>>  一个用户）

![image-20201107174828017](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201107174828017.png)

![image-20201107174723791](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201107174723791.png)

## 3.2、一对多（一个用户 --- >>> 账户）

![image-20201107174905197](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201107174905197.png)

![image-20201107174248423](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201107174248423.png)



```
强大的敌人并不可怕, 可怕的是自己内心的堕落。                                      --老洋
```

## 3.3、多对多：（用户  --->>> 角色）

```
示例：用户和角色
	1、（一个用户）可以有（多个角色）
	2、（一个角色）可以赋予（多个用户）
步骤
	1、建立两张表， 用户表， 角色表
		①、让用户表（和）角色表具有（多对多关系）
		②、需要使用（中间表）
		③、中间表包含（两表）的（主键），在中间表做（外键）
	2、建立两个实体类：用户类（和）角色类
		①、让用户（和）角色的实体类能体现出（多对多关系）
		②、各自包含对方的（一个集合引用）
	3、建立两个配置文件
		①、用户配置文件
		②、角色配置文件
	4、实现配置
		①、当我们（查询用户）时，可以同时得到（用户）所包含的（角色信息）
		②、当我们（查询角色）时，可以同时得到（角色）所赋予的（用户信息）
```

```
第一步：一个角色 --->>> 授予 --->>> 多个用户
```

![image-20201109161953393](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201109161953393.png)

![image-20201109162321248](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201109162321248.png)

```
第二步：一个用户 --->>> 拥有 --->>> 多个角色
```

![image-20201109162551126](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201109162551126.png)

![image-20201109162628892](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201109162628892.png)

![image-20201109162919433](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201109162919433.png)



# 4、JNDI

## 4.1、JNDI是什么？

```
JNDI：Java Naming and Directory Interface。是SUN公司推出的一套规范，属于JavaEE技术之一
```

## 4.2、JNDI有什么用？

```
模仿windows系统中的注册表， 在服务器中注册数据源
```

## 4.3、JNDI与windows的注册表：有什么不同？

![image-20201109165355326](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201109165355326.png)

# 5、Mybatis的延迟加载

## 5.1、什么是：延迟加载？

### 5.1.1、概念举例

```
延迟加载：就是用的时候再加载（如：懒汉式）主要体现在jdbc显示条目（是一口气全部,还是一条一条来）
```

### 5.1.2、延迟加载：出现的（必要条件）

```
必须要是：单表查询，一张一张来， 否则全部查询出来，直接入内存了，不存在（延迟加载的操作）例如：
```

![image-20201110161034799](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201110161034799.png)

### 5.1.3、实现一对一（延迟加载）

![image-20201110154200117](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201110154200117.png)

### 5.1.4、对比一对一（延迟加载）

![image-20201110163805140](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201110163805140.png)

### 5.1.5、为什么（立即加载、延迟加载）都最终显示了出来呢？

```
原因是：代码控制去打印了
```

![image-20201110164340065](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201110164340065.png)

## 5.2、什么是立即加载？

### 5.2.1、概念举例

```
立即加载：就是全部一口气加载，如（饿汉式）
```

# 6、Mybatis中的缓存

## 6.1、什么是：缓存？

```
存在于内存中的：临时数据
```

## 6.2、为什么：使用缓存？

```
减少和数据库的（交互次数），提高执行效率
```

## 6.3、什么样数据：适合使用缓存？

```
1、（经常查询）并（不经常改变）
2、数据的（正确与否）对（最终结果影响不大）
```

## 6.4、什么样数据：（不适合）使用缓存？

```
1、（经常改变）的数据
2、数据的（正确与否）对（最终结果）影响很大
例如：商品的库存、银行的汇率、股市的牌价
```



## 6.5、Mybatis中的一级缓存

### 6.5.1、（一级缓存）概念

```
1、它指的是：Mybatis中SqlSession对象的缓存
2、当我们执行查询之后， 查询的结果会同时存入到：SqlSession为我们提供的一块内存区域中
   该区域的结构是：一个Map, 当我们再次查询同样的数据，mybatis会先去sqlSession中查询
   是否有, 有的话直接拿出来用。
3、当SqlSession对象消失时， mybatis的一级缓存也就消失了
```

### 6.5.2、有Mybatis一级缓存：效果图

![image-20201111155316666](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111155316666.png)



### 6.5.3、无mybatis一级缓存的：效果图

![image-20201111161940578](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111161940578.png)



### 6.5.4、同样的SqlSession为什么也会出现：到数据查询的情况？

```
一级缓存是 SqlSession 范围的缓存，当调用 SqlSession 的修改，添加，删除，commit()，close()等
方法时，就会清空一级缓存。
```



### 6.5.5、原理图

![image-20201111162359139](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111162359139.png)

## 6.6、Mybatis中的二级缓存

### 6.6.1、（二级缓存）概念

```
二级缓存是 mapper 映射级别的缓存，多个 SqlSession 去操作同一个 Mapper 映射的 sql 语句
多个SqlSession 可以共用二级缓存，二级缓存是跨 SqlSession 的。
```

### 6.6.2、（二级缓存）原理图

图一

![image-20201111163902246](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111163902246.png)

图二

![image-20201111164902747](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111164902747.png)

### 6.6.2、二级缓存的：开启

```
第一步：在 SqlMapConfig.xml 
```

![image-20201111164152308](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111164152308.png)

```
第二步：配置相关的 Mapper 映射文件
```

![image-20201111164400844](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111164400844.png)



### 6.6.3、二级缓存发挥了作用：效果图

![image-20201111170345836](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111170345836.png)



6.6.4、当第一个SqlSession进行的：增删改，并commit时，二级缓存：失效图

![image-20201111171200059](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111171200059.png)

# 7、Mybatis中的注解开发

## 7.1、为什么要使用Mybatis的注解开发？

```
为了减少编写 Mapper.xml的映射文件
```

## 7.2、Mybatis中常用的：注解图

![image-20201111171742249](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111171742249.png)

## 7.3、环境搭建

```
1、以前的：mapper.xml不用写
```

```
2、接口上方法：改用注解， 其余不再操作依旧
```

## 7.4、解决：（实体类）与 （数据库）表名， 参数不对应方法

```java
1、@Results 和 @Result ：实现property 和 column 对应
2、@ResultMap 实现（对应关系：复用）
```

![image-20201113150601152](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201113150601152.png)



## 7.5、一对一查询（1个账户 --->> 1个用户）

![image-20201113160701670](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201113160701670.png)



## 7.6、一对多查询（1个用户 -->> 多个账户）

### ![image-20201113164550392](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201113164550392.png)

## 7.7、缓存配置

```java
1、mybatis.xml中的<setting>中设置：CacheEnabled   (非必须：此处只是提醒)
```

![image-20201113165327911](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201113165327911.png)

```java
2、接口中注解：@CacheNamespace(blocking = true)
```

![image-20201113170722685](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201113170722685.png)

# 8、Mybatis中的四个问题

## 1、什么是事务？

## 2、事务的四大特性ACID?

## 3、不考虑隔离性会产生的3个问题?

## 4、解决办法: 四种隔离级别

> 以上（黑马）课程的笔记



# 9、复习总结（必看）

## ①、Mybatis官网 和 gitHub地址

> 官网：https://mybatis.org/mybatis-3/zh/getting-started.html
>
> gitHub：https://github.com/mybatis/mybatis-3

## ②、mybatis（跑起来框架）

~~~
步骤：
	1、建立数据库表user表
	2、（构建maven项目）导入jar包：mysql, mybatis, junit
	3、（pom.xml）设置过滤（静态资源）
	4、连接IDEA数据库
	5、配置JDBC文件：database.properties
	6、配置mybatis文件：mybatis-config.xml
	7、写一个pojo类（User）
	8、写mapper层：UserMapper(接口)、UserMapper.xml（配置文件）
	9、mybatis-config.xml中绑定（xml和接口）
	10、写一个测试类
~~~

> 1、建立数据库表user表

~~~mysql
create database eesy_mybatis
use eesy_mybatis

drop table if exists user;

create table user(
	id int(3) auto_increment primary key,
	username varchar(32) not null,
	birthday varchar(30) not null,
	sex char(4) not null, 
	address varchar(256) not null
)ENGINE = InnoDB CHARACTER SET = utf8;

insert into user values (41, '老王', '2018-02-27 17:47:08', '男', '北京');
insert into user values (42, '小二王', '2018-03-02 15:09:37', '女', '北京金燕龙');
~~~



> 2、（构建maven项目）导入jar包：mysql, mybatis

~~~xml
<dependencies>
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.6</version>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.22</version>
        </dependency>

        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.1</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
~~~

> 3、（pom.xml）设置过滤（静态资源），防止（Usermapper.xml）找不到,
>
> ​              因为（不配置时）默认是（只过滤）resources下的文件

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

> 4、连接IDEA数据库

![image-20210131110128338](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210131110128338.png)

---

> 5、配置JDBC文件：database.properties

~~~properties
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/eesy_mybatis?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8&useSSL=true
jdbc.username=root
jdbc.password=123456
~~~

> 6、配置mybatis文件：mybatis-config.xml

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!--一、引入外部properties文件  -->
    <properties resource="database.properties"/>

    <!--二、给包：设置别名-->
    <typeAliases>
        <package name="com.yyy.pojo"/>
    </typeAliases>

    <!--三、配置环境-->
    <environments default="development">
        <environment id="development">
            <!--1、配置事务的类型-->
            <transactionManager type="JDBC"/>
            <!--2、配置数据源（连接池）-->
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>

</configuration>
~~~

> 7、写一个pojo类（User）

~~~java
public class User {
    private int id;
    private String username;
    private String birthday;
    private String sex;
    private String address;

    public User() {

    }

    public User(int id, String username, String birthday, String sex, String address) {
        this.id = id;
        this.username = username;
        this.birthday = birthday;
        this.sex = sex;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", birthday='" + birthday + '\'' +
                ", sex='" + sex + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
~~~

> 8、写mapper层：UserMapper(接口)、UserMapper.xml（配置文件）

- UserMapper(接口)

~~~java
public interface UserMapper {
    List<User> selAll();
}
~~~

- UserMapper.xml（配置文件）

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--
    配置: userMapper.xml 就相当于（下面这句）,但是需要（将配置文件加载）
          namespace:        ===> 锁定（返回给的）接口
          id：锁定方法       ===> List<User> users = mapper.selAll();
    List<User> users = sqlSession.selectList("select * from user");
-->
<mapper namespace="com.yyy.mapper.UserMapper">
    <select id="selAll" resultType="User">
        select * from eesy_mybatis.user
    </select>
</mapper>
~~~

> 9、mybatis-config.xml中绑定（xml和接口）

~~~xml
    <!--四、指定映射配置.xml文件，用于（反射）调用接口方法时，能找到sql操作-->
    <!--UserMapper mapper = sqlSession.getMapper(UserMapper.class)调用时，就来找配置文件了-->
    <mappers>
        <mapper resource="com/yyy/mapper/UserMapper.xml"/>
    </mappers>
~~~

> 10、写一个测试类

~~~java
public class TestMybatis {

    //测试：查询User表中的所有信息
    @Test
    public void testSelAll() throws IOException {
        //1、加载mybatis的配置资源
        InputStream is = Resources.getResourceAsStream("mybatis-config.xml");

        //2、创建SqlSessionFactory工厂
        SqlSessionFactoryBuilder build = new SqlSessionFactoryBuilder();
        SqlSessionFactory factory = build.build(is);

        //3、通过工厂生产：SqlSession对象
        SqlSession sqlSession = factory.openSession();

        //4、通过SqlSession对象：利用动态代理创建Dao接口对象
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);

        //5、通过接口对象：调用方法，实现CRUD
        List<User> users = mapper.selAll();

        //6、打印內容
        for(User u:users){
            System.out.println(u);
        }

        //7、释放资源
        sqlSession.close();
    }
}
~~~

## ③、mybatis的（CRUD）

> 注意：（添加、更新、删除）需要提交        （注意看：狂神博客，总结得特别好）

~~~java
UserMapper mapper = sqlSession.getMapper(UserMapper.class);
sqlSession.commit();
~~~

## ④、resultMap (映射器)

> 解决：数据库查询字段，与pojo类属性名称  （不一致问题）

~~~xml
<resultMap id="UserMap" type="User">
   <!-- id为主键 -->
   <id column="id" property="id"/>
   <!-- column是数据库表的列名 , property是对应实体类的属性名 -->
   <result column="name" property="name"/>
   <result column="pwd" property="password"/>
</resultMap>

<select id="selectUserById" resultMap="UserMap">
  select id , name , pwd from user where id = #{id}
</select>
~~~

## ⑤、日志

~~~
Mybatis内置的日志工厂提供日志功能，具体的日志实现有以下几种工具：
	1、SLF4J (常用)
	2、Apache Commons Logging
	3、Log4j 2
	4、Log4j (常用)
	5、JDK logging
~~~

> 1、标准日志实现：SLF4J  （导入xml即可）

~~~xml
<settings>
       <setting name="logImpl" value="STDOUT_LOGGING"/>
</settings>
~~~

> 2、Log4j：Apache的一个开源项目

- 第一步：导入jar

~~~xml
<dependency>
   <groupId>log4j</groupId>
   <artifactId>log4j</artifactId>
   <version>1.2.17</version>
</dependency>
~~~

- 第二步：导入log4j.properties

~~~properties
#将等级为DEBUG的日志信息输出到console和file这两个目的地，console和file的定义在下面的代码
log4j.rootLogger=DEBUG,console,file

#控制台输出的相关设置
log4j.appender.console = org.apache.log4j.ConsoleAppender
log4j.appender.console.Target = System.out
log4j.appender.console.Threshold=DEBUG
log4j.appender.console.layout = org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=[%c]-%m%n

#文件输出的相关设置
log4j.appender.file = org.apache.log4j.RollingFileAppender
log4j.appender.file.File=./log/yang.txt
log4j.appender.file.MaxFileSize=10mb
log4j.appender.file.Threshold=DEBUG
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=[%p][%d{yy-MM-dd}][%c]%m%n

#日志输出级别
log4j.logger.org.mybatis=DEBUG
log4j.logger.java.sql=DEBUG
log4j.logger.java.sql.Statement=DEBUG
log4j.logger.java.sql.ResultSet=DEBUG
log4j.logger.java.sql.PreparedStatement=DEBUG
~~~

- 第三步：配置xml

~~~xml
<settings>
    <setting name="logImpl" value="LOG4J"/>
</settings>
~~~

- 第四步：（需要可添加）创建Log4j类

~~~java
//注意导包：org.apache.log4j.Logger
Logger logger = Logger.getLogger(UserMapper.class);
logger.debug("aaa");
~~~

## ⑥、分页：limit

~~~mysql
思路（记录规律）：
	1、sql模板：select * FROM 表名 limit stratIndex，pageSize
	2、sql例子：select * from user limit 5,10; // 显示数据库表中的：显示6-15行
    
	3、公式：起始位置（stratIndex） =  （当前页面 - 1 ） * 页面大小(pageSize)
	4、注意(当前页面:需要提前假设出)
	
实现方式如下：
~~~

> 1、Mapper.xml中写sql语句

~~~xml
<select id="selectUser" parameterType="map" resultType="user">
  select * from user limit #{startIndex},#{pageSize}
</select>
~~~

> 2、Mapper接口，参数为map

~~~java
//选择全部用户实现分页
List<User> selectUser(Map<String,Integer> map);
~~~

> 3、在测试类中传入参数测试 
>
> ​	  推断：起始位置 =  （当前页面 - 1 ） * 页面大小

~~~java
//分页查询 , 两个参数startIndex , pageSize
@Test
public void testSelectUser() {
   SqlSession session = MybatisUtils.getSession();
   UserMapper mapper = session.getMapper(UserMapper.class);

   int currentPage = 1;  //第几页
   int pageSize = 2;  //每页显示几个
   Map<String,Integer> map = new HashMap<String,Integer>();
   map.put("startIndex",(currentPage-1)*pageSize);
   map.put("pageSize",pageSize);

   List<User> users = mapper.selectUser(map);

   for (User user: users){
       System.out.println(user);
  }

   session.close();
}
~~~

## ⑦、一对一查询

~~~
实现步骤：
	1、建表（学生表、老师表） n学生 -->>1老师， （老师的主键id）作为（学生的外键tid）
	2、将mybatis基本框架搭起来：如总结2（mybatis跑起来框架）
	3、写pojo类（存在1对1的关系） 学生类（包含）老师对象
	4、写mapper、xml
	5、测试
~~~

> 1、建表（学生表、老师表）

~~~mysql
create database mybatis

use mybatis

#教师表
drop table if exists teacher;
create table teacher(	
	id int(10) not null,
	name varchar(30) not null,
	primary key(id)
)engine=innodb charset=utf8;

insert into teacher(id, name) values(1, '诗颖老师')
insert into teacher(id, name) values(2, '洋洋老师')

#学生表
drop table if exists student;
create table student(
	id int(10) not null,
	name varchar(30) not null,
	tid int(10) default null,
	primary key(id),
	key fktid(tid),
	constraint fktid foreign key(tid) references teacher(id)
)engine=innodb charset=utf8;


#添加学生信息
insert into student(id, name, tid)
values
	('1', '小明', '1'),
	('2', '小红', '1'),
	('3', '小张', '1'),
	('4', '小李', '2'),
	('5', '小王', '2');
~~~

> 2、将mybatis基本框架搭起来：如总结2（mybatis跑起来框架）

~~~~
提取步骤：
	1、jar包：mybatis、mysql、junit、lombok、log4j
	2、静态资源过滤
	3、mybatis-config.xml配置文件
	4、log4j、database.properties
~~~~

> 3、写pojo类（存在1对1的关系） 学生类（包含）老师对象

- Student.class  (学生类) ==重点：1名学生（对）1名老师==

~~~java
@Data                   //get、set、toString
@NoArgsConstructor      //无参构造
@AllArgsConstructor     //有参构造
public class Student {
    private int id;         //学生ID
    private String name;    //学生姓名
    private int tid;        //教师ID
    private Teacher teacher;        //一个学生（对应）一个老师
}
~~~

- Teacher.class(老师类)

~~~java
@Data                   //get、set、toString
@NoArgsConstructor      //无参构造
@AllArgsConstructor     //有参构造
public class Teacher {
    private int id;         //教师ID
    private String name;    //教师姓名
}
~~~

> 4、Mapper接口（和xml）

- StudentMapper接口

~~~java
public interface StudentMapper {
    //获取所有学生及对应老师的信息
    public List<Student> getStudents();
}
~~~

- StudentMapper.xml ==重点：association标签==

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.yyy.mapper.StudentMapper">

    <!--因为上面：column起了别名， 所以填充时也是-->
    <resultMap id="studentResultMap" type="student">
        <id property="id" column="sid"/>
        <result property="name" column="sname"/>
        <result property="tid" column="tid"/>

        <association property="teacher" javaType="teacher">
            <id property="id" column="tid"/>
            <result property="name" column="tname"/>
        </association>
    </resultMap>

    <!--方法一：多表查询-->
    <!--此处：所有数据，已经查询出来了，作为column字段，填充进属性里就可以了-->
    <select id="getStudents" resultMap="studentResultMap">
        select s.id sid, s.name sname, s.tid tid, t.id tid ,t.name tname
        from mybatis.student s, mybatis.teacher t
        where s.tid = t.id
    </select>
</mapper>
~~~

---

- TeacherMapper接口

~~~java
public interface TeacherMapper {

}
~~~

- TeacherMapper.xml

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.yyy.mapper.TeacherMapper">

</mapper>
~~~

> 5、测试

~~~java
public class StudentTest {
    @Test
    public void testStudent() throws IOException {
        //1、加载mybatis的配置资源
        InputStream is = Resources.getResourceAsStream("mybatis-config.xml");

        //2、创建SqlSessionFactory工厂
        SqlSessionFactoryBuilder build = new SqlSessionFactoryBuilder();
        SqlSessionFactory factory = build.build(is);

        //3、通过工厂生产：SqlSession对象
        SqlSession sqlSession = factory.openSession();

        //4、通过SqlSession对象：利用动态代理创建Dao接口对象
        StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);

        //5、通过接口对象：调用方法，实现CRUD
        List<Student> students = mapper.getStudents();

        //6、打印內容
        for(Student s:students){
            System.out.println(s);
        }

        //7、释放资源
        sqlSession.close();
    }
}
~~~

## ⑧、一对多查询

~~~
实现步骤：
	1、建表（学生表、老师表） n学生 -->>1老师， （老师的主键id）作为（学生的外键tid）
	2、将mybatis基本框架搭起来：如总结2（mybatis跑起来框架）
	3、写pojo类（存在n对1的关系） 老师（包含）多个（学生）对象
	4、写mapper、xml
	5、测试
~~~

> 1、环境搭建：都一样（jar包、静态资源过滤、mybatis-config.xml）

> 2、pojo层

- （学生类）Student.clalss

~~~java
@Data                   //get、set、toString
@NoArgsConstructor      //无参构造
@AllArgsConstructor     //有参构造
public class Student {
    private int id;         //学生ID
    private String name;    //学生姓名
    private int tid;        //教师ID
}
~~~

- （教师类）Teacher.class  ==重点：1名老师n名学生==

~~~java
@Data                   //get、set、toString
@NoArgsConstructor      //无参构造
@AllArgsConstructor     //有参构造
public class Teacher {
    private int id;         //教师ID
    private String name;    //教师姓名
    private List<Student> students;     //所教的：总学生
}
~~~

> 3、mapper层接口（和）xml

- StudentMapper.class

~~~java
public interface StudentMapper {
    //获取所有学生及对应老师的信息
    public List<Student> getStudents();
}
~~~

- StudentMapper

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.yyy.mapper.StudentMapper">

</mapper>
~~~

---

- TeacherMapper.class ==重点==

~~~java
public interface TeacherMapper {
    List<Teacher> selAllTeacher();
}
~~~



- TeacherMapper.xml  ==重点collection标签==

~~~java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.yyy.mapper.TeacherMapper">

    <resultMap id="TeacherResultMap" type="teacher">
        <id property="id" column="tid"/>
        <result property="name" column="tname"/>

        <collection property="students" ofType="student">
            <id property="id" column="sid"/>
            <result property="name" column="sname"/>
            <result property="tid" column="stid"/>
        </collection>
    </resultMap>

    <select id="selAllTeacher" resultMap="TeacherResultMap">
        <!--左外连接-->
        select t.id tid, t.name tname, s.id sid,s.name sname, s.tid stid
        from teacher t
        left join student s
        on t.id = s.tid
    </select>
</mapper>
~~~





# n、看狂神笔记（仅参考）

> 首推官方文档
>
> https://mybatis.org/mybatis-3/zh/getting-started.html



> 1、mybatis第一个程序：
>
> https://mp.weixin.qq.com/s/vy-TUFa1Rb69ekxiEYGRqw



> 2、CRUD操作配置解析
>
> https://mp.weixin.qq.com/s/efqEupNSPZUKqrRoGAnxzQ



> 3、ResultMap及分页
>
> https://mp.weixin.qq.com/s/LXXIR7W_kZBHPIDqkNwrLg



> 4、使用注解开发
>
> https://mp.weixin.qq.com/s/3x3ynp5qhGNP-leeOxBU6g



> 5、一对多和多对一
>
> https://mp.weixin.qq.com/s/Dpt0LHTgx0kL7RCk8PZ2aw



> 6、动态sql
>
> https://mp.weixin.qq.com/s/gtXsTG2naMTDnC6aqQICMg



> 7、缓存
>
> https://mp.weixin.qq.com/s/MwkfQNMXD6oO3dOaQYDdGA

