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
		
	3、文档注释	
~~~

