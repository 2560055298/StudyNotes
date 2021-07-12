> 安装Mysql前：
>
> ​	1、如果：你（曾经安装过)，需要（先卸载干净）， 否则是（装不上）的。所以先谈（卸载）
>
> ​    2、如果：你没有（安装过），这是（第一次安装）， 请直接看（第2部分）Mysql安装教程。



# 1、Mysql彻底卸载

~~~
分为三个步骤：
	1、卸载Mysql(软件)
	2、删除Mysql(残留文件)
	3、删除mysql(注册表)
	4、重启电脑
~~~

## 1.1、 卸载Mysql(软件)

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225100139275.png" alt="image-20210225100139275" style="zoom: 33%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225100652279.png" alt="image-20210225100652279" style="zoom:50%;" />



## 1.2、删除Mysql(残留文件)

> `把3个目录下的`：Mysql目录（删除掉）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225101506730.png" alt="image-20210225101506730"  />







## 1.3、 删除mysql(注册表)

- `第一步:打开注册表`

> window + R中输入：regedit

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225102143059.png" alt="image-20210225102143059" style="zoom:33%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225101930080.png" alt="image-20210225101930080" style="zoom:33%;" />

---

- `第二步：删除mysql注册表`

~~~
找到这6个路径：（分别删除Mysql）

HKEY_LOCAL_MACHINE\SYSTEM\CurrentControl001\Services\MYSQL
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControl002\Services\MYSQL
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MYSQL

HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\Eventlog\Application\MySQL
HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\Eventlog\Application\MySQL
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\Application\MySQL
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225103504095.png" alt="image-20210225103504095" style="zoom:50%;" />

---

## 1.4、重启电脑

> 不重启：可能装不上。





# 2、安装Mysql

~~~
1、官网安装
2、选版本（看个人需求）
3、正式安装（MSI版本）是microsoft installer的简写，是微软格式的安装包。
~~~

## 2.1、官网安装

> 安装网址：https://dev.mysql.com/downloads/installer/

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225105441638.png" alt="image-20210225105441638" style="zoom: 33%;" />

---

## 2.2、选择版本

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225105551371.png" alt="image-20210225105551371" style="zoom: 33%;" />

---



## 2.3、正式安装

- `第一步: Download安装`

> 此处我选择：Mysql 8.0.23 最新版本   （其余版本：操作也是一致的）

![image-20210225110504945](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225110504945.png)

---



- `第二步：打开Mysql安装包，安装`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225111135015.png" alt="image-20210225111135015" style="zoom: 50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225113322331.png" alt="image-20210225113322331" style="zoom: 33%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225113736364.png" alt="image-20210225113736364"  />

----

> 如果：出现了这个，点击安装。 
>
> 如果：没有出现，说明你（安装其他）软件时，`已经装过`, 不必慌张。

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225114129657.png" alt="image-20210225114129657" style="zoom: 50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225113855222.png" alt="image-20210225113855222" style="zoom: 50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225114831129.png" alt="image-20210225114831129" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225114927546.png" alt="image-20210225114927546" style="zoom: 50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225115502984.png" alt="image-20210225115502984" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225115605516.png" alt="image-20210225115605516" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225115729705.png" alt="image-20210225115729705" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225115819999.png" alt="image-20210225115819999" style="zoom:50%;" />

---

![image-20210225120526443](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225120526443.png)

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225120617593.png" alt="image-20210225120617593" style="zoom: 33%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225120644968.png" alt="image-20210225120644968" style="zoom:33%;" />

----

## 2.4、配置环境变量

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225121009744.png" alt="image-20210225121009744" style="zoom:33%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225121045426.png" alt="image-20210225121045426" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225121126061.png" alt="image-20210225121126061" style="zoom:50%;" />

---

![image-20210225121531322](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225121531322.png)

---

## 2.5、测试：是否安装成功

> cmd中输入：mysql -u root -p

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225122009120.png" alt="image-20210225122009120" style="zoom:50%;" />

---



# 3、Navicat连接Mysql

> Navicat连接Mysql 是建立在：Mysql已（成功安装了）的（前提下）

## 3.1、下载Navicat

> 官网安装：https://navicat.com.cn/download/navicat-premium

![image-20210225122953526](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225122953526.png)

---

## 3.2、安装：

> 安装方法：一路下一步就好，注意（选择下：安装路径），以后（删除方便）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225123601921.png" alt="image-20210225123601921" style="zoom:50%;" />





## 3.3、连接Mysql测试

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225124646562.png" alt="image-20210225124646562" style="zoom: 67%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210225125322459.png" alt="image-20210225125322459" style="zoom:50%;" />

`sql代码：`

~~~mysql
create table student(
	stuId int primary key,
	sname varchar(20)
)charset=utf8;

insert into student values(1, '张三');
insert into student values(2, '王五');

select * from student;
~~~



# 4、操作过程中==可能遇到的问题==

> 会一直更新

