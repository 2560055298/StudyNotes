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













# 2、Java容器



# 3、Java I/O



# 4、Java并发



# 5、JVM



# 6、23种设计模式



