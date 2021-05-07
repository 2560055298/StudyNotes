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





# 2、变量

~~~
1、思考一个问题：为什么需要变量？  
	程序就如同（一个世界）， 变量就相当于（世界中的个体）。
	这个个体，仅是一个名称，却代表的（具体的事物）。
	
2、构成：
	变量 = 类型 + 名称 + 值
~~~



