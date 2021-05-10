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



### 2.2.1、加号：+ 



~~~java
规则：
	1、运算顺序是：从左到右
    2、当（左右两边）都是（数值型时）， 做（加法）
    3、当（左右两边）有一边是（字符串时） 做（字符串）的（拼接）
~~~



### 2.3.2、数据类型

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

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210510124207177.png" alt="image-20210510124207177" style="zoom: 50%;" />