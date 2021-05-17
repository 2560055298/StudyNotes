# 1、java入门知识

## 1.1、java运行机制

![image-20210504233435323](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210504233435323.png)

---

![image-20210504233503197](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210504233503197.png)

---

![image-20210504233618522](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210504233618522.png)

---





## 1.2、开发细节（==必会==）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210504234913359.png" alt="image-20210504234913359" style="zoom: 50%;" />

----



## 1.3、学习方法

> 开发19年的：老韩经验之谈

![image-20210505125417255](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210505125417255.png)





## 1.4、转义字符

~~~java
1、\r  表示：回车， 光标锁定到开头， 不会换行， \r后面的字符，将替换前面的字符。
	System.out.println("太阳公公，\r起床了");  //输出的是：起床了公

2、\r\n： 先回车， 后换行
    System.out.println("太阳公公，\r\n起床了");//输出的是：

~~~



## 1.5、注释

~~~java
分类：
	1、单行注释 		//
	2、多行注释      /**/             
		注意： 多行注释内，不能嵌套多行注释。
		原因： /* /* */ */  和if else 一样，就近匹配，最后一个*/会多出来。
		
	3、文档注释： /** */  
          命令格式：javadoc -d 生成到的文件夹名 -注释标识符 -注释标识符 解析类.java
          例如： 
~~~

![image-20210506231233833](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210506231233833.png)

---



## 1.6、代码风格

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210506232141335.png" alt="image-20210506232141335" style="zoom:67%;" />

---







## 1.7、DOS命令

~~~cmd
//可以查看：文件的树型结构
tree 文件夹  		

//清屏
cls  			 

//退出
exit		

//创建目录
md				
	md 目录1 目录2
    
//删除目录    
rd				
	rd 目录1 目录2
	
//拷贝文件
copy			
	copy laoyang.text e:\shenghuo.text
//删除文件
del				

//输入内容到文件  
echo			
	echo 生活如此多娇？ > life.txt
	
//创建空文件	
type
	type null > laoyang.txt

//剪切
move		
	
~~~





# 2、Java基础知识



## 2.1、变量

~~~
1、变量是什么？ 		变化的量 ； 变化的地址空间 ， 和固定的值
2、变量的注意事项  
	2.1： 变量的构成 = 数据类型 + 变量名 + 值 ， 
		 数据类型确定分配内存大小，变量名确定内存的位置， 值，内存中放的内容 
	
    2.2： 变量在同一作用于内不能重名， 原因是因为：
    	  计算机分步执行， 每一步都是确定的， 若同名， 计算机无法判断应该执行谁
~~~

![image-20210509230604036](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210509230604036.png)



### 2.1.1、加号：+ 



~~~java
规则：
	1、运算顺序是：从左到右
    2、当（左右两边）都是（数值型时）， 做（加法）
    3、当（左右两边）有一边是（字符串时） 做（字符串）的（拼接）
~~~



### 2.1.2、数据类型

![image-20210510090434868](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210510090434868.png)





#### ①、整型的使用

- `1、整型范围`

![image-20210510102721578](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210510102721578.png)

----



- `2、整型的使用细节`

~~~
1、Java（各整数类型） 有（固定的）范围和字段长度， 不受具体OS(操作系统)影响，
   以保证Java程序的（可移植性）

2、Java的整型常量（具体值）默认为int型， 声明long型常量须加 l 或 L。
3、Java程序中变量声明为int型， 除非不足以表示大数：才使用long.
4、bit 计算机中的（最小存储单位）； byte 计算机中的基本存储单元， 1byte = 8bit
~~~





#### ②、浮点数

> 浮点数 = 符号位 + 指数位 + 尾数位			//尾数部分可能丢失， 造成精度损失

~~~java
使用细节：
	1、Java的浮点类型也有（固定的范围和长度）， 不受具体的OS的影响。
	2、float 4 字节， double 8 字节
	3、Java 浮点型默认的：double ,  声明float类型时， 需加f 
		例如： float f1 = 3.3f;	//不加f会报错， double 无法赋值给float
	
	4、浮点型（2种）表现形式
    	十进制：5.12 (double)、 512.0f (float) 、 .512 (double) //必须有小数点
    	科学计数法： 5.12e2 、 5.12E-2
    	
	5、double比float 精度更高
    	例如： double f2 = 2.123456781;  	float f3 = 2.123456781;
    	显示： f2 =>2.213456781 			f3 =>2.2134569
    
    6、浮点数使用陷阱：（切记：浮点数，带除法不要进行比较， 若比较要：用误差精度）
        double f4 = 2.7;    double f5 = 8.1 / 3;  //计算机是：带精度存储的，8.100001
        f4存放的是：2.7       f5存放的是：2.6999999999999997 
        比较方法： if(Math.abs(f4 - f5) < 0.000001) )  //如误差分析， 自己设置误差
            
	7、结论：若直接赋值，可以进行比较， 若查询也可以进行比较， 做乘除法，则不能。
            double f4 = 2.7;  double f5 = 2.7；  可以比较
		
~~~



#### ③、字符型

`1、字符型：使用细节`

~~~java
字符型char使用细节：
	1、字符常量是用 ''   (单引号，括起来的字符)  
	2、Java中：char 本质是（1个整数）， 输出时是（unicode码）对应的（字符）。
    3、char类型是可以进行（运算的）， 因为本质是一个（整数）
~~~

~~~java
/**
 * 字符型学习：char 底层是unicode数字， 输出是（字符）
 */
public class Char01{
	public static void main(String[] args){
		char c1 = 'a';		//可以存：字符
		char c2 = '\t';		//可以存：制表符
		char c3 = 97;		//ASCII码
		char c4 = '中';		//char占2个字节， 因为要存放中文
        //c1 + 2 会先将c1转为unicode数字， 加完后为99，若要存到char中，需要转回去
		char sum = (char)(c1 + 2);	
 
		System.out.println(c1); 		//输出97
		System.out.println(c2); 		//输出：制表符占的空格
		System.out.println(c3); 		//a     
		System.out.println(c4); 		//输出的是：字符（中）
		System.out.println(sum);		//因为底层是99， 输出时是unicode对应的字符c
        //如果：直接写在输出，那么就会自动先将 c1 转换为 97， 然后再加2， 变为99，再输出字符
		System.out.println(c1 + 2);		
	}
}
~~~

`2、字符类型：本质探讨`

~~~java
一、char本质探讨：
	字符型（存储到计算机中）， 需要将（字符）对应的（码值：整数）找出来，比如：a
	存储操作：  'a' ==>> 码值 ==>> 二进制（0110 0001） ==>> 存储
    读取操作：  二进制(0110 0001) ==>> 97 ===> 'a' => 显示
~~~





## 2.2、JavaAPI文档

~~~java
1、概念：API（Application Programming Interface） 应用程序接口，是Java提供的基本编程接口

2、接口文档出现原因：Java语言提供了（大量的基础类）， 因此Oracle公司也为这些基础类，提供了相应的					的API文档， 用于告诉开发者（如何使用这些类）， 以及（类中包含的方法）

3、中文在线文档：https://www.matools.com

4、查看文档顺序：
	方法一： 包 -> 类(OR)接口 -> 字段 -> 方法
    方法二： 索引查找（类 OR 接口） -> 字段 -> 方法
~~~

> 接口文档：内部构造

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210512094812295.png" alt="image-20210512094812295" style="zoom:50%;" />





## 2.3、编码

~~~java
字符（和）码值,对应关系：是通过（字符编码）决定的    
    1、ASCII码：
    	ASCII编码表：1个字符（用）1个字节表示，实际上：
    			   1个字节可以表示256个（字符），但是ASCII码表只使用了（128个）
    2、Unicode
    	Unicode编码表（固定大小编码）：字母（和）汉字都是占用（2字节）
    
    3、utf-8
    	utf-8编码表：字母占用1个字节， 汉字占用3个字节
    
    4、gbk
    	gbk编码表：字母占用1个字节， 汉字占用2个字节
    
    5、gb2312 
    	可以表示汉字：gb2312 < gbk  （表示的汉字范围）
    
    6、big5码
    	用来表示：繁体中文
~~~



### 2.3.1、ASCII码讲解

![image-20210513125900764](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210513125900764.png)



### 2.3.2、Unicode码讲解

![image-20210513130013405](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210513130013405.png)



### 2.3.3、UTF-8码讲解

![image-20210513130103393](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210513130103393.png)







