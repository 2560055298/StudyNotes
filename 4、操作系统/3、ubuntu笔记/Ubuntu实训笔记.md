~~~
立志做一名优秀的开源社区程序员。					---老洋
~~~

# 1、操作系统：实训

~~~
正式开始时间：12月21日
~~~

# 2、学习：软件环境

~~~
OS：Linux (ubuntu)
语言：C
目标：2048
时间：4天左右
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221192107057.png" alt="image-20201221192107057" style="zoom: 67%;" />

# 3、第一天：linux命令

## 3.1、设置共享文件夹

~~~
1、虚拟机：菜单， 虚拟机设置
2、点击选项：共享文件夹， 总是启用
3、桌面：其他文件/mnt/hgfs
~~~

## 3.2、常用指令

### 3.2.1、cd

~~~
cd 用于切换目录    cd / (根目录)**
~~~

- cd /mnt/hgfs/   最前名斜杠（为根目录）
- cd .  代表当前目录
- cd .. 当前目录的上一级目录

- **pwd: 目录路径**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221200906181.png" alt="image-20201221200906181" style="zoom:50%;" />

### 3.2.2、ls 与ls -l

~~~
ls ：列出（目前工作目录）（所含之文件）及（子目录）。
ls -l ：除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221203943220.png" alt="image-20201221203943220" style="zoom: 67%;" />

### 3.2.3、mkdir

~~~
概念：
	用于创建目录
用法：
	mkdir 目录名称
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222201608786.png" alt="image-20201222201608786" style="zoom: 50%;" />



### 3.2.4、touch

~~~
一、概念：用于创建文件

二、用法：touch 文件名1 文件名2 文件名3

三、注意：可以1个文件，也可以多个文件，同时创建
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204118382.png" alt="image-20201221204118382" style="zoom:67%;" />

### 3.2.5、rm 和 rm -r

~~~
一、rm
	1、概念: 删除文件
	2、用法：rm 文件名   （切记：目录报错）
	3、注意：删除1个文件，或多个， 例如: rm 文件1，  rm 文件2
二、rm -r
	1、概念：递归删除（文件）或（目录）
	2、用法：rm -r 文件名(或)目录名
	
三、注意
~~~

- rm： 删除文件

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221200604625.png" alt="image-20201221200604625" style="zoom: 67%;" />



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222202428419.png" alt="image-20201222202428419" style="zoom:50%;" />

---

- rm -r：递归删除（文件、目录）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221200750963.png" alt="image-20201221200750963" style="zoom:50%;" />



- 总结（删除指令）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221200448215.png" alt="image-20201221200448215" style="zoom:50%;" />

---

### 3.2.6、查看：ubuntu版本信息

~~~
-uname -a
-uname -r
二者都行
~~~





### 3.2.7、cat 

~~~
一、概念：查看文件内容
二、用法：cat 文件名
三、注意查看不了：二进制文件， 硬要看， 那么会乱码
~~~

![image-20201222203045962](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222203045962.png)





### 3.2.8、gcc生成可执行文件

~~~
1、命令：gcc 文件.c  -o  可执行文件名称      -->>>生成了：二进制文件

2、解释：
	gcc 是c语言编译器的名称
	-o  表示生成一个可执行文件 
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204757455.png" alt="image-20201221204757455" style="zoom:50%;" />

- 执行命令：c语言（可执行文件）

~~~
1、命令： ./ 可执行文件名称（二进制文件） 
2、解释： ./代表执行  （前提执行文件：在当前目录）
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204916101.png" alt="image-20201221204916101" style="zoom: 67%;" />





3.2.8、clear

~~~
1、命令：clear
2、快捷键：ctrl+l
~~~



### 3.2.9、拓展vi 和vim

- 概念

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204526991.png" alt="image-20201221204526991" style="zoom: 50%;" />

- 实战

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204201130.png" alt="image-20201221204201130" style="zoom: 67%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204626149.png" alt="image-20201221204626149" style="zoom: 67%;" />





# 4、第二天（Linux文件，写入到（粤嵌板子上））

## 4.1、连接板子

~~~
第一步：USB连接计算机， 找到端口（看是否连接上）
第二步：下载SecureCRT软件，如下图
第三步：设置软件的（属性）， 连接上板子
第四步：在板子上创建一个（自己的目录）           --->>>防止弄坏板子
	  mkdir 自己的文件名
      cd 自己的文件名
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222093306102.png" alt="image-20201222093306102" style="zoom:50%;" />



---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222093511147.png" alt="image-20201222093511147" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222093734204.png" alt="image-20201222093734204" style="zoom:50%;" />

---



## 4.2、Linux写代码， 嵌入设备

~~~
1、linux上：写代码
2、linux上：生成可执行文件： arm-linux-gcc 文件名.c -o 可行性文件名
3、板子上（接收文件）并（执行）：
		指明接收文件：rm 可执行文件名
		选择：传输xmodem ， 接收
		更改可执行文件权限：chomod u+x 可行性文件名
        执行文件： ./可执行文件
~~~

- **linux上：生成可执行文件**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222220219093.png" alt="image-20201222220219093" style="zoom:50%;" />

---

- **板子上（接收文件）**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222220530795.png" alt="image-20201222220530795" style="zoom: 50%;" />





---

- 板子上（执行文件）

![image-20201223102559143](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223102559143.png)



---

## 4.3、Linux文件概念

~~~
一、概念：linux中一切皆文件

二、操作文件
	1、打开文件： open()
	2、读写文件： read()/write()/lseek()/mmap()
	3、关闭文件： close()
	
三、忘记了如何查API呢？
	man 2 open()
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222095750484.png" alt="image-20201222095750484" style="zoom:50%;" />

---

## 4.4、函数学习

### 4.4.1、open()

~~~
#include <fcntl.h>
int open(const char* pathname, int flags);

1、功能：open()用于打开文件

2、参数：
	pathname：待打开文件的，文件名    --->>> 如 "./1.bmp"
	flags:打开标志（3选1）
    	O_RDONLY  只读
    	O_WRONLY  只写
    	O_RDWR    可读可写

3、返回值：
	成功：返回（1个非负数字）， 该数字为fd（文件描述符）
	失败：返回-1，  可以用perror (获取错误信息)
~~~



### 4.4.2、close(文件返回值id)

~~~
一、头函数：#include <unistd.h>

二、形式： int close(int fd);

三、功能：用于关闭打开的文件

四、参数：
	fd文件描述符：即open成功后得到那个非负的数字 
五、返回值：
	成功：返回0
	失败：返回-1
~~~



### 4.4.3、read()

~~~
一、头文件：#include <unisted.h>     //头文件名

二、形式：size_t read(int fd, void *buf, size_t  count)

三、功能：用于从（打开的文件中）读数据

四、参数：
	1、fd：文件描述符， 代表你要操作的文件
	2、buf：数据缓存区的首地址， 表示读到的数据保存到哪里去？
	3、count：要读取字节的：长度

五、返回值：
	成功：返回实际读取到的（字节数）
	失败：返回-1
~~~

### 4.4.4、lseek()

~~~
1、头函数
	#include <unistd.h>

2、格式
 	off_t lseek(int fd, off_t offset, int whence);
 
3、功能：
	移动读写位置

4、参数：
	fd：文件返回fd , 通过 int fd =  open("路径", )
	offset：偏移量， 单位字节
		右边为：正
		左边为：负
		0表示不动
		
	whence:偏移时的参考位置
		SEEK_SET: 文件的开始位置
		SEEK_END: 文件的末尾位置
		SEEK_CUR: 文件当前位置
5、返回值
	成功：返回相对于当前文件的（偏移量）
	失败：-1
~~~

> 参考博客：
>
> https://blog.csdn.net/qq_35733751/article/details/80709783?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.control

### 4.4.5、perror()

~~~
一、头文件： 
	include<stdio.h>

二、形式：
　　void perror(const char *s);   
  
三、使用方法perror ("open_port");

四、函数说明
　　perror ( )用来将上一个函数发生错误的原因输出到标准设备 (stderr) 。参数 s 所指的字符串会先打印出,后面再加上错误原因字符串。此错误原因依照全局变量error 的值来决定要输出的字符串。在库函数中有个error变量，每个error值对应着以字符串表示的错误类型。当你调用"某些"函数出错时，该函数已经重新设置了error的值。perror函数只是将你输入的一些信息和现在的error所对应的错误一起输出。
~~~

> 博客：https://blog.csdn.net/weixin_36340947/article/details/77939247



### 4.4.6、exit()函数讲解：

~~~
一、头文件： <stdlib.h>

二、形式：void exit(int status)使用

三、使用 exit(数字)
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222172249931.png" alt="image-20201222172249931" style="zoom: 67%;" />



## 4.6、实现在板子上：打开图片

~~~
第一步：在linux把文件写好
    #include <stdio.h>
    #include <fcntl.h>			//open（"路径", 没有引号） 的头文件
    #include <unistd.h>			//close(fd) 关闭
    #include <stdlib.h>

    //以只读方式， 打开文件
    int fd = open("./test.bmp", O_RDONLY);   //注意画图，jpg改为 bmp,注意图片也要发
    if(fd == -1){		//是否打开失败？  
        perror("open file error");			//打印：错误原因
        exit(1);		//直接退出程序， 0代表正常，其余都不正常
    }

    //关闭文件
    close(fd)  			//切记：fd必须要写， 关闭文件的id
    
第二步：板子上发送文件，  在板子
	1、把代码传输到：板子上  
    	rm 可执行文件名
        SecureCRT 上点击发送，找到文件夹
        
	2、把图片：bmp高清图片传送到，板子上
		如上
		
	3、运行可执行文件
		./可执行文件名
		如果显示没有权限， 那么改权限 chmod u+x 可执行文件名
~~~

## 4.7、BMP(bit map 位图)

### 4.7.1、学习前置知识

- **小端模式**

![image-20201222163149183](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222163149183.png)

---

- 像素概念

![image-20201222163956486](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222163956486.png)

---

![image-20201222163743679](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222163743679.png)

---



### 4.7.2、BMP简介

![image-20201222164925686](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222164925686.png)

> 博客1：BMP调色板调色板讲得很好，4个字节代表一种颜色。
>
> https://blog.csdn.net/testcs_dn/article/details/76719347
>
> 
>
> 博客2：BMP图片解析彻底
>
> https://blog.csdn.net/aidem_brown/article/details/80500637 
>
> 
>
> 博客3：其中windows为什么需要BMP的大小，要为4个字节的倍数
>
> https://blog.csdn.net/Eastmount/article/details/18238863?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control

### 4.7.3、BMP解析图

![image-20201222215245915](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222215245915.png)



> 维基百科：
>
> https://zh.wikipedia.org/wiki/BMP#%E5%83%8F%E7%B4%A0%E6%95%B0%E7%BB%84



## 4.8、实战：嵌入BMP图片， 读取相关信息

~~~
#include <stdio.h>		//移动光标 （头文件）
#include <fcntl.h>		//open()：打开文件（头文件）
#include <unistd.h>		//close()、lseek()：关闭文件(头文件)
#include <stdlib.h>		//mallo()、eixt()：分配、释放资源和退出（头文件）

int main()
{
    // 以只读的方式打开位图文件
    int fd = open("./test.bmp", O_RDONLY);
    if (fd == -1)
    {
        perror("open error");
        exit(1);
    }
    // 读位图的基本信息：大小，宽，高，色深，像素数组
    // 读大小(图片的大小=头部大小(54)+像素数组大小， 像素数组大小=一行的字节数*行数， 一行的字节数=宽*色深/8+填充字节数)
    int size;
    lseek(fd, 0x2, SEEK_SET);	    //从文件头0偏移开始：偏移0x2 (十进制：2个字节)
    read(fd, &size, 4);

    // 读宽和高（宽的像素， 高的像素）
    int width, height;						
    lseek(fd, 0x12, SEEK_SET);		//从文件头0偏移开始：偏移0x12 (十进制：18个字节)
    read(fd, &width, 4);       
    read(fd, &height, 4);

    // 读色深（也叫：位深度）
    short bpp;					   //注意short占2个字节， 读几个字节，就几个字节存
    lseek(fd, 0x1c, SEEK_SET);     //从文件头0偏移开始：偏移0x1c(十进制：28个字节)
    read(fd, &bpp, 2);

    printf("%d, %d, %d, %d \n", size, width, height, bpp);

    // 读像素数组			
   		 //因为：位图文件头+位图信息头 = 54个字节
   		 //BMP文件大小 ≈  （54字节）文件头+信息头 + 像素数组字节数,
    	 //所以此处: size-54 ≈ 像素数组(字节数)
    char *pix_array = malloc(size - 54); // 分配空间，用来存放像素数组
    lseek(fd, 0x36, SEEK_SET);
    read(fd, pix_array, size-54);

    // 显示图片，下一次再讲

    // 关闭文件
    free(pix_array);
    close(fd);
    return 0;
}
~~~

---

~~~
总结：实现步骤
	1、在linux中写好代码，生成可执行文件
		arm-linux-gcc 源文件.c -o 可执行文件名
		
    2、在secureCRL, 进行发送， 并运行
    	rx 可执行文件名				 (声明要发送的：可执行文件， 然后传输，发送xmodem)
    	chomod  u+x 可执行文件名       (设置：可执行)
        /. 可执行文件
~~~

- **第一步：在linux中写好代码，生成可执行文件**

![image-20201223075509124](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223075509124.png)



- **第二步：在secureCRL, 进行发送

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223080243556.png" alt="image-20201223080243556" style="zoom:50%;" />



- **第三步：运行**

![image-20201223080734986](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223080734986.png)

## 4.9、实战：需要注意的一些地方

### 4.9.1、VS编写时：windows没有该头文件（报错）

![image-20201222184309204](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222184309204.png)

![image-20201222184223978](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222184223978.png)

> 解决方法：https://blog.csdn.net/Dashi_Lu/article/details/90054696

---



### 4.9.2、利用open（文件路径, 打开方式）：文件路径/的说明

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201222185617060.png" alt="image-20201222185617060" style="zoom: 50%;" />

---

### 4.9.3、当位图深度，改为int出现的问题

![image-20201223101351972](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223101351972.png)



# 5、第三天：在开发板上，显示BMP图像

~~~~
温馨提示：第三天内容，还没整合好，只是提前放上来。  2020年12月23日23:19:11留
~~~~

## 5.1、mmap()学习

~~~
一、头文件
       #include <sys/mman.h>
       
二、形式
void *mmap(void *addr, size_t length, int prot, int flags,int fd, off_t offset);

三、功能：
	用于把（1个文件）或（设备）映射到内存，以使得像操作普通内存一样， 操作文件或设备

四、参数
	1、addr： 一般直接给NULL, 让操作系统自动分配（防止：直接指定错误）
	
 	2、length: 要映射的内存长度， 以字节为单位。
 			   开发板屏幕分辩率为：800*480, 一个点4个字节， 总共800*4*480个字节
 	3、prot: (protected简写)表示保护权限.
 			 与打开文件时的标志，保持一致PROT_READ|PROT_WRITE
 			 
	4、flags： 映射标志， 一般为MAP_SHARED   (表示：实时修改刷新)
    
    5、fd： 文件描述符
    
    6、offset: 一般为0， 表示从文件或设备开始位置映射
    
五、返回值
	1、成功： 返回一个可用的（内存地址）这段内存就是（屏幕的“显存”）
	2、失败：返回MAP_FAILED	
~~~

> 百度百科：https://baike.baidu.com/item/mmap/1322217
>
> c语言中文网：http://c.biancheng.net/cpp/html/138.html

## 5.2、munmap（解除内存映射）

~~~
一、头文件
       #include<unistd.h>
	   #include<sys/mman.h>
       
二、形式
int munmap(void *start,size_t length);

三、功能：
	munmap()用来取消参数start所指的映射内存起始地址，参数length则是欲取消的内存大小。当进程	 结束或利用exec相关函数来执行其他程序时，映射内存会自动解除，但关闭对应的文件描述符时不会解	除映射。
	
四、返回值
	成功：成功解除映射返回0
	失败：返回－1，错误原因存于errno中错误代码EINVAL参数 start或length 不合法。
~~~

> 百度百科：https://baike.baidu.com/item/munmap/4568227



## 5.3、剖析老师代码

### 5.3.1、主函数（入口）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223195827098.png" alt="image-20201223195827098" style="zoom: 33%;" />

---

### 5.3.2、打开（显示屏幕）lcd_open()函数



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223195939776.png" alt="image-20201223195939776" style="zoom:33%;" />

---

**"dev/fb0" 是什么？**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223200319579.png" alt="image-20201223200319579" style="zoom: 50%;" />

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223200932985.png" alt="image-20201223200932985" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223201803900.png" alt="image-20201223201803900" style="zoom: 50%;" />

---

> 引用博客：
>
> https://blog.csdn.net/maopig/article/details/7195048
>
> https://www.jianshu.com/p/da150554e19c



### 5.3.3、color：左移定色

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223204450768.png" alt="image-20201223204450768" style="zoom:50%;" />

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223204129882.png" alt="image-20201223204129882" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223205152096.png" alt="image-20201223205152096" style="zoom: 67%;" />

---

### 5.3.4、设置背景色：lcd_draw_background(int color)

![image-20201223210921675](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223210921675.png)

---







<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223213456142.png" alt="image-20201223213456142" style="zoom: 25%;" />

![image-20201223213358454](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223213358454.png)



### 5.3.5、显示位图：lcd_draw_bmp24("板子上的BMP图片路径")

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223222138017.png" alt="image-20201223222138017" style="zoom:67%;" />

![image-20201223222152849](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223222152849.png)







### 5.3.6、存在两个问题需要：请教老师

~~~
问题一：
	在（5.2.4中）设置背景色的：指定行列像素点赋值，为什么传参：x == 列， y == 行
	常规思维，应该是x == 行， y == 列， 但是显示却（有误）
	
问题二：
	老师说的：5角星的问题还是，没有理解，为什么会出现。
~~~

![image-20201223232417671](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201223232417671.png)





# 6、问题：联系方式

```java
若有问题:请联系qq2560055298 											---老洋
```



