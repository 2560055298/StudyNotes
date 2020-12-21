# 1、操作系统：实训



# 2、学习环境

~~~
OS：Linux (ubuntu 5.3.0-42)
语言：C
目标：2048
时间：4天左右
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221192107057.png" alt="image-20201221192107057" style="zoom: 67%;" />





# 3、第一天

## 3.1、设置共享文件夹

~~~
1、虚拟机：菜单， 虚拟机设置
2、点击选项：共享文件夹， 总是启用
3、桌面：其他文件/mnt/hgfs
~~~





## 3.2、常用指令

- **cd：用于切换目录    cd / (根目录)**
  - cd /mnt/hgfs/   最前名斜杠（为根目录）
  - cd .  代表当前目录
  - cd .. 当前目录的上一级目录
  
- **pwd: 目录路径**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221200906181.png" alt="image-20201221200906181" style="zoom:50%;" />

- **ls -l: 显示**

- 创建目录： 

~~~
mkdir   目录名称
~~~



- 删除

  ~~~
  删除文件：rm 文件名   （切记：目录报错）
  ~~~

  <img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221200604625.png" alt="image-20201221200604625" style="zoom: 67%;" />

  ~~~
  删除目录：rm -r 目录名（递归删除， 文件也行）
  ~~~

  <img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221200750963.png" alt="image-20201221200750963" style="zoom:50%;" />

  

  - 总结（删除指令）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221200448215.png" alt="image-20201221200448215" style="zoom:50%;" />

---

- 查看版本信息

~~~
-uname -a
-uname -r
都行
~~~



- 显示列表

~~~
ls ：列出（目前工作目录）（所含之文件）及（子目录）。
ls -l ：除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221203943220.png" alt="image-20201221203943220" style="zoom: 67%;" />

- 创建文件

~~~
touch 文件名1 文件名2 文件名3     --->>> 可以创建任意多个
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204118382.png" alt="image-20201221204118382" style="zoom:67%;" />

- 编辑文件

~~~   
1、通过编译器：比如vscode
2、通过vim 
	esc : 选择
	 i  : 插入
     wq : 写入保存
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204201130.png" alt="image-20201221204201130" style="zoom: 67%;" />

---



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204626149.png" alt="image-20201221204626149" style="zoom:33%;" />

---

==总结==

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204526991.png" alt="image-20201221204526991" style="zoom: 50%;" />

---



- 查看文件内容

~~~
cat 文件名
~~~



- c语言编译指令

~~~
1、命令：gcc 文件.c  -o  可执行文件名称      -->>>生成了：二进制文件

2、解释：
	gcc 是c语言编译器的名称
	-o  表示生成一个可执行文件 
	
3、补充：
	arm-linux
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204757455.png" alt="image-20201221204757455" style="zoom:50%;" />

- 执行命令：c语言（可执行文件）

~~~
1、命令： ./ 可执行文件名称（二进制文件） 
2、解释： ./代表执行  （前提执行文件：在当前目录）
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture5/image-20201221204916101.png" alt="image-20201221204916101" style="zoom: 67%;" />



==总结：==

- 清理屏幕

~~~
1、命令：clear

2、快捷键：ctrl+l
~~~



- 查看文本文件

~~~
cat 文本文件名(只能看：文本文件)
~~~

