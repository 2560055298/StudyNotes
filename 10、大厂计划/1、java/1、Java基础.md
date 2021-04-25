# 1、Java语法基础(高频)

## 1.1、数据类型

### 1.1.1、java数据类型

> java数据类型分为：基本数据类型、 引用数据类型

![image-20210122155018276](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210122155018276.png)

----

![image-20210122162134808](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210122162134808.png)

----

~~~java
计算方法（利用它们的包装类：属性BYTES、MIN_VALUE、MAX_VALUE）, 具体（看博客）
~~~

> 引用（博客地址）：
>
> https://blog.csdn.net/zhangyubishoulin/article/details/82423177?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control



### 1.1.2、包装类型

> 基本类型（都有）对应的（包装类型）， 赋值时会（自动装箱、拆箱转换）
>
> 官方解释：[https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)

~~~java
Integer x = 1;     // 装箱 调用了 Integer.valueOf(1)
int y = x;         // 拆箱 调用了 X.intValue()
~~~

==自动装箱：基本类型， 包装成（对象）==

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210425195411827.png" alt="image-20210425195411827" style="zoom: 67%;" />

---

==自动拆箱：（包装类）转换为（基本类型）==

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210425195615047.png" alt="image-20210425195615047" style="zoom:50%;" />

----

### 1.1.3、缓存池

> new Integer(1) 与 Integer.valueOf(1) 的区别

~~~java
new Integer(1)		// 每次都会新建一个对象；
Integer.valueOf(1) 	//会使用缓存池中的对象，多次调用会取得同一个对象的引用。
~~~

![image-20210425201419069](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210425201419069.png)



## 1.2、String系列

> String（不可变）、StringBuild（可变，线程不安全）、StringBuffer（可变，线程安全）
>
> 参考CS-Notes作者： [gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E4%BA%8Cstring)





## 1.3、运算

### 1.3.1、参数传递

> 基本数据类型是：值传递 
>
> 引用数据类型：引用传递

`1、基本数据类型（值传递）`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210425214003683.png" alt="image-20210425214003683" style="zoom:50%;" />

---

`2、引用数据类型：（引用传递）`

![image-20210425214815365](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210425214815365.png)





### 1.3.2、float与double

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210425215542963.png" alt="image-20210425215542963" style="zoom:50%;" />





### 1.3.3、隐式类型转换





### 1.3.4、switch









## 1.X、this和super关键字

![image-20210124171611323](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210124171611323.png)



> 菜鸟教程：
>
> https://www.runoob.com/w3cnote/the-different-this-super.html



## 1.X、instanceof

~~~
instanceof 是 Java 的一个二元操作符，类似于 ==，>，< 等操作符。

instanceof 是 Java 的保留关键字。
它的作用是测试它(左边的对象)是否是它(右边的类)的(实例)，返回 boolean 的数据类型。
~~~

> 习题
>
> https://www.nowcoder.com/profile/773093617/test/40708056/3035#summary



1.4、访问修饰符

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210124172003028.png" alt="image-20210124172003028" style="zoom:33%;" />

>习题：
>
>https://www.nowcoder.com/profile/773093617/test/40708056/85799#summary



 

# 2、Java容器



# 3、Java I/O



# 4、Java并发



# 5、JVM



# 6、23种设计模式



