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





### 1.3.3、类型转换

==隐式类型转换：Java不支持==

~~~
隐式类型转换： 就是没有加（类型关键字的转换）

如：float = 1.2;			//报错

short s1 = 1;     
s = s + 1; 				//报错short = short + int  (不支持：隐式类型转换) 
~~~



==显示类型转换：Java支持==

~~~java
显示类型转换： 就是加了（类型关键字的转换）

如：float f1 = (float)1.2;         //不报错

short s = 1;

s = (short)(s + 1)
~~~





### 1.3.4、switch

> 看gitHub作者：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#switch)







## 1.4、关键字

### 1.4.1、final

> final 修饰：通常指无法改变的内容，  不想改变的原因：设计安全， 和效率高

![image-20210426074226054](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210426074226054.png)



### 1.4.2、static

![img](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/20200802162823370.png)

`1、代码：比对学习`

~~~java
public class DataType {
    private int value;

    //1、静态代码块：
        //第一次使用该所在类时， 静态代码块执行（唯一， 一次）
        //静态代码块：比构造方法（先执行， 静态方法中不能存在this, 静态内容与对象无关）
    static{
        System.out.println("我执行了（静态代码块）");
    }

    //2、构造方法：慢于（静态代码块执行）
    public DataType(int value) {
        this.value = value;
        System.out.println("我执行了构造方法");
    }

    //3、静态变量：可通过类名调用, 所有对象共享（仅有一份）
    public  static  int i;

    //4、静态方法：类名（直接调用）
    public static void fun(){
        System.out.println("我是静态方法");
    }

    //3、静态方法
    public static void main(String[] args){
        DataType d1 = new DataType(5);       //构造方法 （慢于） 静态代码块
        DataType.i = 5;                      //静态变量：类.对象名即可
        DataType.fun();                      //静态方法：类.方法名

    }
}
~~~

`2、（非静态、静态）内部类`

> 非静态内部类（需要依靠）外部类（对象）， 去实例化，才能创建（非静态类对象），静态类则不用
>
> 来源博客： [gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E5%9B%9B%E5%85%B3%E9%94%AE%E5%AD%97)

~~~java
public class OuterClass {

    class InnerClass {
    }

    static class StaticInnerClass {
    }

    public static void main(String[] args) {
        // InnerClass innerClass = new InnerClass(); // 'OuterClass.this' cannot be referenced from a static context
        OuterClass outerClass = new OuterClass();
        InnerClass innerClass = outerClass.new InnerClass();
        StaticInnerClass staticInnerClass = new StaticInnerClass();
    }
}
~~~

`3、初始化顺序`

> 静态变量（和）静态语句块（优先于）（实例变量）和（普通语句块）.
>
> 静态变量（和）静态语句块的（初始化顺序）取决于它们在（代码中的顺序）。
>
> 来源：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E4%BA%94object-%E9%80%9A%E7%94%A8%E6%96%B9%E6%B3%95)

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210426081129282.png" alt="image-20210426081129282" style="zoom:67%;" />

---

### 1.4.3、this和super关键字

> this 是一个指向本对象的指针, 然而 super 是一个 Java 关键字。
>
> 参考：[菜鸟教程](https://www.runoob.com/w3cnote/the-different-this-super.html)

~~~java
this
	一、概念：指向本类对象的（一个指针）
	二、用法：
		1、直接引用（this.xxx 引用当前类成员）
        2、区别（方法中形参）与 （类属性同名） 用this.类属性 = 形参
        3、在一个构造方法中：引用另一个构造方法（this必须放在：当前构造方法第一行）
        
super
	一、概念：指向自己（父类对象）的一个指针，而这个（父类）指的是（离自己最近）的一个父类
    二、用法：
    	1、直接引用 (super.xxx 引用父类成员)
    	2、区别：子类中的（成员变量）或（方法）与（父类中）的（成员变量或方法同名）
    	3、引用（父类）构造函数：调用父类中的某一个构造函数（应该为构造函数中的第一条语句）。
~~~



### 1.4.4、instanceof

~~~
instanceof 是 Java 的一个二元操作符。类似于 ==，>，< 等操作符。
instanceof 是 Java 的保留关键字。
它的作用：是测试它 (左边的对象) 是否是它 (右边的类) 的 (实例) ，返回 boolean 的数据类型。
~~~

> 习题
>
> https://www.nowcoder.com/profile/773093617/test/40708056/3035#summary



### 1.4.5、interface

> 现在也可以用：default修饰 方法了

![img](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/20200804082751346.png)



### 1.4.6、abstract

> 抽象类（和）普通类（最大的区别）是，抽象类不能被实例化，只能被继承。

![image-20210426112653491](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210426112653491.png)



## 1.5、Object通用方法

> 参考：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E4%BA%94object-%E9%80%9A%E7%94%A8%E6%96%B9%E6%B3%95)

 ~~~java
public native int hashCode()

public boolean equals(Object obj)

protected native Object clone() throws CloneNotSupportedException

public String toString()

public final native Class<?> getClass()

protected void finalize() throws Throwable {}

public final native void notify()

public final native void notifyAll()

public final native void wait(long timeout) throws InterruptedException

public final void wait(long timeout, int nanos) throws InterruptedException

public final void wait() throws InterruptedException
 ~~~

> 特别注意：

### 1.5.1、hashcode() 和 equals（）区别

> 两个值：hashcode（）相等，   equals（）不一定相等
>
> ​               equals()相等， hashcode（）一定相等,  ===>>> 但是重写了equals()一定要重写hashcode()

~~~java
public class Test {
    public static void main(String[] args) {
        Integer num = 97;          //Integer的hashcode为： 数字值
        String a = "a";            //String的hashcode为：ASCII码
        String b = "a";

        //hashcode()相同， equals()不一定相同
        System.out.println(num.hashCode() == a.hashCode());     //true
        System.out.println(num.equals(a));                      //false：类型不同

        //equals()相同， hashcode()一定相同
        System.out.println(a.equals(b));                          //true
        System.out.println(a.hashCode()  == b.hashCode());        //true
    }
}
~~~

> 解释：重写：equals方法()后，相等，一定要重写hashcode()， 才能保证hashcode()相等 
>
> ​			因为：如果不重写hashcode() 用的是：父类object的hashcode（）计算方法

```java
public class Test {
    private String name;
    private int age;

    public Test(String name, int age) {
        this.name = name;
        this.age = age;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Test test = (Test) o;
        return age == test.age && Objects.equals(name, test.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    public static void main(String[] args) {
        Test t1 = new Test("张三", 15);
        Test t2 = new Test("张三", 15);
        //若没有重写：equals方法，则为false, 因为是object的方法
        System.out.println(t1.equals(t2));     
        //若没重写：hashcode()则为false， 重写就是：把每一个属性的hashcode（）相加
        System.out.println(t1.hashCode() == t2.hashCode());    
    }
}
```



## 1.6、继承

> 参考：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E5%85%AD%E7%BB%A7%E6%89%BF)
>
> 习题：[牛客网](https://www.nowcoder.com/profile/773093617/test/40708056/85799#summary)

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210124172003028.png" alt="image-20210124172003028" style="zoom:33%;" />

---

## 1.7、反射

> 反射是：框架设计的灵魂

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201206184524890.png" alt="image-20201206184524890" style="zoom:150%;" />

---

~~~
* 框架：半成品软件。可以在框架的基础上进行软件开发，简化编码
* 反射：将类的各个组成部分封装为其他对象，这就是反射机制
	* 好处：
		1. 可以在程序运行过程中，操作这些对象。
		2. 可以解耦，提高程序的可扩展性。
~~~

~~~java
* 获取Class对象的方式：
	1. Class.forName("全类名")：将字节码文件加载进内存，返回Class对象
		* 多用于配置文件，将类名定义在配置文件中。读取文件，加载类
	2. 类名.class：通过类名的属性class获取
		* 多用于参数的传递
	3. 对象.getClass()：getClass()方法在Object类中定义着。
		* 多用于对象的获取字节码的方式

	* 结论：
		同一个字节码文件(*.class)在一次程序运行过程中，只会被加载一次，不论通过哪一种方式获取的Class对象都是同一个。
~~~

~~~java
* Class对象功能：
	* 获取功能：
		1. 获取成员变量们
			* Field[] getFields() ：获取所有public修饰的成员变量
			* Field getField(String name)   获取指定名称的 public修饰的成员变量

			* Field[] getDeclaredFields()  获取所有的成员变量，不考虑修饰符
			* Field getDeclaredField(String name)  
		2. 获取构造方法们
			* Constructor<?>[] getConstructors()  
			* Constructor<T> getConstructor(类<?>... parameterTypes)  

			* Constructor<T> getDeclaredConstructor(类<?>... parameterTypes)  
			* Constructor<?>[] getDeclaredConstructors()  
		3. 获取成员方法们：
			* Method[] getMethods()  
			* Method getMethod(String name, 类<?>... parameterTypes)  

			* Method[] getDeclaredMethods()  
			* Method getDeclaredMethod(String name, 类<?>... parameterTypes)  

		4. 获取全类名	
			* String getName()  
~~~

~~~java
* Field：成员变量
	* 操作：
		1. 设置值
			* void set(Object obj, Object value)  
		2. 获取值
			* get(Object obj) 

		3. 忽略访问权限修饰符的安全检查
			* setAccessible(true):暴力反射
~~~

~~~java
* Constructor:构造方法
	* 创建对象：
		* T newInstance(Object... initargs)  

		* 如果使用空参数构造方法创建对象，操作可以简化：Class对象的newInstance方法
~~~

~~~java
* Method：方法对象
	* 执行方法：
		* Object invoke(Object obj, Object... args)  

	* 获取方法名称：
		* String getName:获取方法名
~~~



## 1.8、异常

> 参考：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E5%85%AB%E5%BC%82%E5%B8%B8)

~~~
每当执行Java语句时（发生任何错误），都会创建一个（异常对象）。
然后JRE尝试（查找）一个（异常处理程序）来处理该异常。
如果（找到了）合适的（异常处理程序），则将异常对象传递到处理程序代码以处理异常，（称为捕获异常）。
如果（未找到）处理程序，则应用程序将异常抛出给运行时环境，并且JRE终止程序。
Java异常（处理框架）仅用于处理（运行时错误），异常处理框架（不处理）编译时错误。
~~~

~~~java
4个关键字：
throw：有时我们明确地想要创建一个异常对象，然后将其抛出以停止程序的正常处理。该抛关键字用于抛出异常的运行时间来处理它。
throws：写在方法上面， 谁调用，谁处理
try-catch：try代码块中， 异常前的：能执行， 异常后的不执行。
finally：是可选的，只能与try-catch块一起使用。finally一定会执行。
~~~



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210427102643748.png" alt="image-20210427102643748" style="zoom:50%;" />

---

## 1.9、泛型

> 参考：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E4%B9%9D%E6%B3%9B%E5%9E%8B)

~~~java
public class Box<T> {
    // T stands for "Type"
    private T t;
    public void set(T t) { this.t = t; }
    public T get() { return t; }
}
~~~



## 1.10、注解

> 注解（Annotation），也叫（元数据）， JDK1.5的新特性
>
> 参考博客：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E5%8D%81%E6%B3%A8%E8%A7%A3)

~~~
使用方法：@注解名称
注解作用：起说明、配置的功能, 注解不是程序的一部分，可以理解为注解就是一个标签
书写位置：包、类、字段、方法、局部变量、方法
~~~



## 1.11、拓展知识

> 参考博客：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E5%8D%81%E4%B8%80%E7%89%B9%E6%80%A7)

~~~
内容：
	1、Java 各版本的新特性
	2、Java 与 C++ 的区别
	3、JRE or JDK （看自己的：思维导图）
~~~



# 2、Java容器

## 2.1、根容器

> 根容器：Collection（单列集合）、Map（双列集合）
>
> 参考博客：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%AE%B9%E5%99%A8.md#%E4%B8%80%E6%A6%82%E8%A7%88)

![image-20210428171136911](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210428171136911.png)



## 2.2、容器的设计模式

> 参考博客：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%AE%B9%E5%99%A8.md#%E4%BA%8C%E5%AE%B9%E5%99%A8%E4%B8%AD%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F)

~~~
主要两种：
	1、迭代器模式（Iterable）产生一个Iterator对象， 通过其forEach()迭代Collection中内容
	2、适配器模式
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210428174507637.png" alt="image-20210428174507637" style="zoom:50%;" />



## 2.3、容器源码分析

> 来源博客：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%AE%B9%E5%99%A8.md#%E4%B8%89%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90)
>
> 参考视频：[韩顺平老师](https://www.bilibili.com/video/BV1YA411T76k?p=19) （超级详细）

~~~java
Collection
    //添加顺序，与取出顺序一致、可重复、可添加null、可使用(迭代器、增强for、普通for)遍历
    一、List(容器接口)
        1、ArrayList  		//（动态数组、线程不安全、扩容1.5倍）
        2、Vector			//（动态数组、线程安全、扩容默认2倍， 也可以手动设置）
        3、CopyOnWriteArrayList
        4、LinkedList		//(双向链表、线程不安全)

    二、Set（容器接口）
    	1、hashSet
    	2、TreeSet
    
    
Map(容器接口)	
	1、HashMap
	2、ConcurrentHashMap
	3、LinkedHashMap
	4、WeakHashMap
~~~



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210430202748293.png" alt="image-20210430202748293" style="zoom:50%;" />







~~~java

~~~









# 3、Java I/O











# 4、Java并发



# 5、JVM



# 6、23种设计模式



