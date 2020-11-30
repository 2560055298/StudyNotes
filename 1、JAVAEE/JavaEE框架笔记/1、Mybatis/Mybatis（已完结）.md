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



# 2、Mybatis的动态Sql

## 2.1、if标签

![image-20201106160838769](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106160838769.png)



## 2.2、where标签

### ![image-20201106161234914](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106161234914.png)



## 2.3、where标签

![image-20201106164831576](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201106164831576.png)

## 2.4、sql和include标签

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
强大的敌人并不可怕, 可怕的是自己内容的堕落。                                      --老洋
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

# n、Mybatis中的四个问题

## 1、什么是事务？

## 2、事务的四大特性ACID?

## 3、不考虑隔离性会产生的3个问题?

## 4、解决办法: 四种隔离级别
