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

### 1.5.1、hashcode() 和 equals（）区别

> 两个值：hashcode（）相等，   equals（）不一定相等
>
> ​               equals()相等， hashcode（）一定相等,  ===>>> 但是重写了equals()一定要重写hashcode()

==注意：String中equals（） 方法，是在（类型同一继承树）下，比较内容==



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

## 1.7、多态

> 参考视频：[老韩视频](https://www.bilibili.com/video/BV1fh411y7R8?p=306)

~~~java
分类：
	一、方法的多态 
		重载方法：传入参数不同（调用方法不同）
		对象调用相同方法：调用的是（自己类内重写的方法）
		
	二、对象的多态（核心）
		1、多态的具体体现（必记）
			(1) 一个对象的（编译类型）和（运行类型）可以不一致
			(2)编译类型在（定义对象时），就确定了，不能改变
			(3)运行类型是（可以变化）的
			(4)编译类型看定义时=号的左边,运行类型看=号的右边
			例如：Animal animal = new Dog();
			分析：（编译类型）Aniaml，（运行类型）是Dog
                  animal = new Cat() （运行类型，可以更换， 而编译类型不可以更换）
                    
		2、多态：注意事项（必记）
            多态的前提是：两个对象（类）存在继承关系。
                
          2.1：多态的(向上转型)    
            (1)本质：父类的引用指向了（子类）的对象  ==>> Animal animal = new Dog();
            (2)语法：父类类型 引用名 = new 子类类型();
			(3)特点：编译类型看（看左边）， 运行类型（看右边） ==>> Animal编译类型
            		可以调用（父类中）所有的成员（但是：需要遵守访问权限）
                	不能调用（子类中）的（特有成员） =>>因为编译阶段，调用成员（编译器决定）
                    最终运行效果（看子类的具体实现） =>>调用方法时，从子类运行类型，向上查找
          
          2.2：多态的（向下转型）    
            (1)语法：子类类型 引用名 = (子类类型）父类引用 =>Dog dog = new (Dog)Animal
            (2)只能（强转父类）的引用， 不能强转父类的对象 => 内存中：始终是（小狗）不能换
            (3)要求父类的引用必须指向的是（当前目标类的对象）=>Animal animal = new Dog()             (4)当向下转型后，可以调用（子类类型）中所有的成员：恢复身份了，不用装了。 
         
          2.3: 特别注意
            (1) 属性（没有重写之说）， 属性的值，看成（编译类型）
            (2) instanceOf 比较操作符： 用于判断（对象运行类型）是否是XXX类型.
                                      或者是XXX子类型。
          
          2.4: Java的（动态绑定机制）
            (1) 当调用（对象方法）时：（该方法）会和（该对象）（内存地址/也就是运行类型）绑定
            (2) 当调用（对象属性）时：（没有）动态绑定机制， 哪里声明，哪里使用        
                              
                              
          2.5: 应用
            (1) 多态数组：
                        数组（定义类型）为（父类类型）
                        （实际元素类型）为（子类类型）      
                      
            (2) 多态参数         
                        （方法）定义的：（形参类型）为（父类类型）
                                     （实参类型）为 （子类类型）
~~~







## 1.8、反射

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



## 1.9、异常

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

## 1.10、泛型

> 参考：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E4%B9%9D%E6%B3%9B%E5%9E%8B)

~~~java
public class Box<T> {
    // T stands for "Type"
    private T t;
    public void set(T t) { this.t = t; }
    public T get() { return t; }
}
~~~



## 1.11、注解

> 注解（Annotation），也叫（元数据）， JDK1.5的新特性
>
> 参考博客：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E5%8D%81%E6%B3%A8%E8%A7%A3)

~~~
使用方法：@注解名称
注解作用：起说明、配置的功能, 注解不是程序的一部分，可以理解为注解就是一个标签
书写位置：包、类、字段、方法、局部变量、方法
~~~



## 1.12、拓展知识

> 参考博客：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E5%8D%81%E4%B8%80%E7%89%B9%E6%80%A7)

~~~
内容：
	1、Java 各版本的新特性
	2、Java 与 C++ 的区别
	3、JRE or JDK （看自己的：思维导图）
~~~

~~~java
JDK、JRE 和 JVM 的包含关系
 1、JDK = JRE +  开发工具集（例如 Javac,java 编译工具等)
 2、JRE = JVM + Java SE  标准类库（java 核心类库）
 3、如果只想运行开发好的 .class 文件 只需要 JRE
~~~









## 1.13、成员变量：访问修饰符

![img](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/690292-20160923095944481-1758567758.png)

---

# 2、Java容器

> 参考博客：[gitHub](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%AE%B9%E5%99%A8.md#%E4%B8%80%E6%A6%82%E8%A7%88)
>
> 参考：[老韩笔记](https://pan.baidu.com/s/1QLCXCPtihg6o6DX0zNQ1tQ )  提取码：lmy9 



## 2.1、思考

> 为什么要学习容器？ 我们不是，有数组了吗？

~~~java
原因：
	1、数组：长度不可变， 添加、删除不方便。
	2、容器：可以（动态的）长度变化，提供add()、remove()、get()、set()方法
			而且容器（类型很多），类型的（数据结构）有各自的特点，可以根据不同的业务需求
            切换到（合适的类型）， 那么能够提升开发效率。
~~~





## 2.2、集合框架图（和）特点

### 2.2.1、Collection

#### ①、框架图

![image-20210505082537816](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505082537816.png)

---

#### ②、特点

> 单列集合：仅存放一个（key）

~~~java
1、实现了Collection接口的（实现类）都可以调用iterator()方法， 获取（迭代器对象）进行遍历
2、遍历Collection接口的方法：
    A、迭代器法
    B、增强for循环 （底层走的还是：迭代器）
    C、普通for循环
    
3、为什么Collection能使用（迭代器）， 子类能获取（迭代器对象）？
    因为Collection（接口）继承了Iterable(接口)，Iterable（接口）中有返回迭代器对象的方法。
    Iterator<T> iterator()		//该方法，返回一个迭代器对象

4、注意：除了TreeSet 不能为null , 其余key可以添加null.
    
5、添加用add()方法， 移除用remove()方法, 获取用遍历方法 （或） get()方法
~~~

`1、Collection子类：能使用迭代器（遍历）的原因`

![image-20210505091150953](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505091150953.png)



`2、迭代器遍历：原理分析，代码展示`

![image-20210505092307461](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505092307461.png)



---

### 2.2.2、Map

#### ①、框架图

![image-20210505082720982](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505082720982.png)

---

#### ②、特点

> 双列集合：存放的是（K-V）键值对

~~~java
1、Map中key（不允许）重复， value允许重复
2、除了TreeMap 不能添加null, 其余K-V（都可）添加null
3、Map中的K-V会封装到HashMap$Node类型中
4、HashMap$Entry是HashMap$Node类型的一份引用， 存放在HashMap$EntrySet中
~~~

`1、Map的K-V键值对：封装成的HashMap$Node 解析`

![image-20210505100657871](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505100657871.png)



`2、 HashMap$Node 为什么可以转为：HashMap$Entry `

> 因为：Node结点，实现了Entry接口。 为什么要去实现Entry接口？ 因为Entry提供了操作K-V的方法

![image-20210505104522495](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505104522495.png)

---

![image-20210505104047855](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505104047855.png)

---





## 2.3、==Collection==集合讲解

### 2.3.1、List

#### ①、ArrayList

~~~java
一、特点：
	1. ArrayList 底层是：（对象可变）数组， 可以重复添加元素， 添加元素包含：null
	2. ArrayList 线程不安全， 所以效率相对Vector更高

二、扩容原理
	1、ArrayList 中维护了一个： transient Object[] elementData;  //不用序列化的数组
	2、当创建ArrayList对象时：
        A：用无参构造器， 初始elementData容量为0, 第一次添加则扩容elementData = 默认值10
           再次扩容时，按1.5倍扩容
        
        B：走有参构造器, 初始elementData容量为（传入容量）， 如果需要扩容，按1.5倍扩容

三、操作方法
    1、boolean add(E e) 				//增
    2、E remove(int index) 			//删
    3、E set(int index, E element)   //改
    4、E get(int index)				//查    
    5、boolean contains(Object o)	//包含    
~~~

> ArrayList添加元素， 扩容解析：

`1、（无参）扩容`

![image-20210505114926233](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505114926233.png)



`2、（有参）扩容`

> 初始化容量后， 后续扩容规则， 与（无参构造）一样， 1.5倍扩容法。

![image-20210505160504270](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505160504270.png)



#### ②、Vector

~~~java
一、特点：
	1. Vector 底层是：（对象可变）数组， 可以重复添加元素， 添加元素包含：null
	2. Vector 线程安全， 比ArrayList低

二、扩容原理
	1、Vector 中维护了一个： protected Object[] elementData;	//注意是：受保护的
	2、当创建Vector对象时：
        A：用无参构造器 List vector = new Vector();
        	初始elementData容量为10, 随后按照2倍扩容的原则
        
        B：走有参构造器1：List vector = new Vector(5);
            初始elementData容量为（传入容量）， 如果需要扩容，按2倍扩容
        
        C：走有参构造器2： List vector = new Vector(5, 3);
			初始elementData容量为（传入容量），如果需要扩容，按传人扩容值，此处扩容大小为3

三、操作方法
    1、synchronized boolean add(E e) 				//增 
    2、synchronized E remove(int index)  			//删
    3、synchronized E set(int index, E element)    	//改
    4、synchronized E get(int index) 				//查    
~~~



`1、（无参）扩容`

> 默认会初始化容量为：10， 后续按2倍扩容

![image-20210505164844037](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505164844037.png)



`2、（1个参数）扩容：当设置容量为0时`

> 第一个次添加：容量变为1， 后续添加，按照2倍扩容。

![image-20210505171010872](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505171010872.png)



`3、（2个参数扩容）`

> 除了设置了：增长容量外（其余）均与（1个参数一致）

![image-20210505171349492](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505171349492.png)



#### ③、LinkedList

~~~java
一、特点：
	1. LinkedList 底层是：双向链表（和）双端队列， 可以重复添加元素， 添加元素包含：null
	2. LinkedList 线程不安全， 删除、插入（效率高）

二、底层机制
	1、LinkedList 中维护了两个属性：first 和 last 分别指向（首节点、尾节点）
	2、每个结点是一个：Node对象， 包含属性：prev、next、item （前驱、后继、元素值）

三、操作方法
    1、public void addFirst(E e)  			//前置添加：作为头
    2、public void addLast(E e)   			//后置添加：作为尾
    3、public E getFirst()    				//第一个元素：出队
    4、public E getLast() 					//最后一个元素：出队
    5、public E set(int index, E element) 	//根据索引，修改元素值
~~~

`1、底层机制图`

![image-20210505173239943](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505173239943.png)



`2、底层源码`

![image-20210505185042194](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505185042194.png)



#### ④、使用比较

> ArrayList（对象动态数组）  和  LinkedList(双向链表 + 双端队列)   ==>>> 使用比较

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505185701836.png" alt="image-20210505185701836" style="zoom: 50%;" />



### 2.3.2、Set

> 注意：不允许重复元素， 底层是（HashMap） K-V键值对（V固定Object）， 无法用（索引获取）



#### ①、HashSet

~~~java
一、特点：
	1. HashSet 底层是：HashMap （数组 + 链表 + 红黑树） 
	2. HashSet 线程不安全， （不可以）添加（重复元素），key只能添加一个null， Value固定
 	3. 它是（无序的）插入顺序， 和取出顺序不一致
    
二、扩容原理
	1、HashSet 中维护了一个： protected Object[] elementData;	//注意是：受保护的
	2、当创建HashSet对象时：
        A：用无参构造器 HashSet set = new HashSet();
        	初始table为null, 加载因子为：0.75, 阈值为：0， 
            第一次添加元素：table = 16; 加载因子：0.75, 阈值为：16 * 0.75 = 12
            容量、阈值都按（2倍扩容）
        
        B：走有参构造器：HashSet set = new HashSet(5, 0.8f);
            第一次添加：容量会变为8, 装载因子还是0.8, 阈值 = 6.4


三、操作方法 (没有修改：操作)
    1、public boolean add(E e) 						//增 
    2、boolean remove(Object o)   					//删
    3、public boolean contains(Object o) 			//查    
    4、public Iterator<E> iterator() 、增强for		  //进行遍历               
~~~



`1、原理图`

![image-20210505192736590](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505192736590.png)





`2、源码图（第一次扩容）`

> 第一次添加：table被扩容到16， threshold（阈值）12， 装载因子：0.75

![image-20210505194059966](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505194059966.png)



`3、添加重复元素：和（数组头）相同时`

> hash和（数组头结点相同）， key和（数组头结点相同）， 那么会直接返回（Object 的固定 value）

![image-20210505195207880](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505195207880.png)



`4、在同一链表上：添加元素时`

![image-20210505210441330](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505210441330.png)

#### ②、TreeSet

~~~java
一、 TreeSet底层实际是（TreeMap）
    //1. 当我们使用无参构造器，创建 TreeSet 时，仍然是无序的
    //2. 使用 TreeSet 提供的一个构造器，可以传入一个比较器(匿名内部类)
    //3. 参数1 - 参数2 为升序， 反之降序
    TreeSet treeSet = new TreeSet(new Comparator() {
        @Override
        public int compare(Object o1, Object o2) {
            return ((String)o1).length() - ((String)o2).length();
        }
    });
	
	treeSet.add("laoyang");
	treeSet.add("xx");

    //4. 第一个添加结点：直接作为根
    Entry<K,V> t = root;
    if (t == null) {
        compare(key, key); // type (and possibly null) check

        root = new Entry<>(key, value, null);
        size = 1;
        modCount++;
        return null;
    }

    //5. 后续添加结点：需要和树中的所有结点比较（相同则：不添加也不覆盖key）
    do {
        parent = t;
        cmp = cpr.compare(key, t.key);
        if (cmp < 0)
            t = t.left;
        else if (cmp > 0)
            t = t.right;
        else
            return t.setValue(value);		//切记此处：若相等则直接返回，不覆盖key
    } while (t != null);
~~~





 





#### ③、LinkedHashSet

~~~java
一、特点：
	1. LinkedHashSet 底层是：LinkedHashMap, 底层维护了一个（数组 + 双向链表）
	2、LinkedHashSet 是 HashSet的子类， 不允许添加（重复元素）

二、底层机制
	1、LinkedHashSet 根据元素的hashCode值来决定元素的（存储位置）
    2、通过（双向链表）连接， 保证了（插入顺序）， 和（取出顺序）保持一致

三、扩容原则：
    无参构造方法：LinkedHashSet link = new LinkedHashSet();
				第一次添加元素：容量16， 阈值12， 装载因子：0.75
                和HashMap一样， 容量和阈值， 都按2倍扩容。
    
	
四、操作方法
    1、public boolean add(E e) 						//增 
    2、boolean remove(Object o)   					//删
    3、public boolean contains(Object o) 			//查    
    4、public Iterator<E> iterator() 、增强for		  //进行遍历    
~~~

`底层图`

![image-20210505214856064](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505214856064.png)







### 2.3.3、Queue







## 2.4、==Map==集合讲解

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210502162622088.png" alt="image-20210502162622088" style="zoom:50%;" />

---

### 2.4.1、HashMap

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210502160715479.png" alt="image-20210502160715479" style="zoom:50%;" />

---

~~~java
public static void main(String[] args) {
    Map map = new HashMap();				//创建：HashMap对象 == 数组 + 链表
    map.put(new Car(), new Person());
    map.put(new Car(), new Person());


    Set set = map.entrySet();				//获取：EntrySet内部类对象
    System.out.println(set.getClass());     //class java.util.HashMap$EntrySet

    for(Object entry:set){
        Map.Entry en = (Map.Entry) entry;
        System.out.println(en.getKey());    //Entry中的key（存放的其实是Node的key地址）
        System.out.println(en.getValue());
    }

    Set set1 = map.keySet();
    Collection values = map.values();

    System.out.println(set1.getClass());  //class java.util.HashMap$KeySet
    System.out.println(values.getClass());//class java.util.HashMap$Values
}
~~~

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210503074529332.png" alt="image-20210503074529332" style="zoom:50%;" />

---

`源码底层：机制`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210503080115087.png" alt="image-20210503080115087" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210503080213273.png" alt="image-20210503080213273" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210503112304966.png" alt="image-20210503112304966" style="zoom:50%;" />

---





### 2.4.2、Hashtable

`1、概念`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210503095932092.png" alt="image-20210503095932092" style="zoom:67%;" />



`2、底层`

~~~java
1、底层有数组： private transient Entry<?,?>[] table;    //初始化大小为：11
2、临界值：    private int threshold;  	//初始化为： int(11 * 0.75) == 8
3、数组扩容：	 >=阈值，int newCapacity = (oldCapacity << 1) + 1;  //旧容量 * 2 + 1
4、添加元素：  addEntry(hash, key, value, index);
~~~





### 2.4.3、Properties

> 始终记住：Properites继承了Hashtable,  Hashtable实现了Map, 实际还是：数组 + 链表

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210503142503557.png" alt="image-20210503142503557" style="zoom:50%;" />

~~~
常用方法: K-V不能为null, 和Hashtable一样

	    Properties properties = new Properties();	//初始table：11, 加载因子：0.75
	
		//添加：底层addEntry(hash, key, value, index);
        properties.put("john", 100);	

		//删除：底层（Hashtable）public synchronized V remove(Object key) 链表删除
		Object lucy = properties.remove("lucy");
		
		//修改：通过（添加方法中：hashcode, equals相等）覆盖旧值
		properties.put("john", 666);

		//查询：底层Hashtable的get()方法
		Object yang = properties.get("yang");

		//查询：底层调用（Hashtable）：Object oval = super.get(key);
		String yang1 = properties.getProperty("yang"); 
~~~







### 2.4.4、TreeMap

> 注意：TreeMap 添加值相同会（覆盖） value

~~~java
//后续添加结点：需要和树中的所有结点比较（相同则：不覆盖key， 会覆盖value）
do {
    parent = t;
    cmp = cpr.compare(key, t.key);
    if (cmp < 0)
        t = t.left;
    else if (cmp > 0)
        t = t.right;
    else
        return t.setValue(value);		//切记此处：若相等会覆盖value
} while (t != null);
~~~



## 2.5、工具类：Collections

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210504071358698.png" alt="image-20210504071358698" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210504071418820.png" alt="image-20210504071418820" style="zoom:50%;" />

~~~java
public static void main(String[] args) {
    List list = new ArrayList();

    list.add(8);
    list.add(-1);
    list.add(-1);

    Collections.sort(list);     //1、自然顺序：也就升序
    Collections.sort(list, new Comparator<Object>() { //通过比较器：降序
        @Override
        public int compare(Object o1, Object o2) {
            return ((Integer) o2) - ((Integer) o1) ;
        }
    });

    Collections.shuffle(list);   //2、随机排序

    Collections.reverse(list);   //3、翻转

    Collections.swap(list, 1, 3);   //4、交换：索引处的值

    System.out.println(Collections.max(list));  //5、获取最大值
    System.out.println(Collections.min(list));  //6、获取最小值
    System.out.println(Collections.frequency(list, -1));  //获取：某个数出现频率

    //7、拷贝：源码（拷贝前）比较的是size(), 若小于源（抛异常）
    //if (srcSize > dest.size())
    //	throw new IndexOutOfBoundsException("Source does not fit in dest");
    List list02 = new ArrayList();
    for(int i = 0; i < list.size(); i++){
        list02.add(0);
    }
    Collections.copy(list02, list);			  //拷贝

    Collections.replaceAll(list, -1, 1024);   //8、指定某个数字，全部替换为
}
~~~



## 2.6、习题

> 习题1

![image-20210504104122088](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210504104122088.png)

> 习题2

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210504221413049.png" alt="image-20210504221413049" style="zoom:50%;" />

> 习题3：追源码

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210504221445939.png" alt="image-20210504221445939" style="zoom:50%;" />



## 2.7、总结

![image-20210503151515812](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210503151515812.png)





# 3、Java I/O



# 4、Java并发





# 5、JVM



# 6、23种设计模式







