



# 1、将批量文件：添加到（远程仓库）

## ①、通过cd 命令，进入你将要：克隆到的位置

~~~
cd 本地存放路径
~~~



## ②、克隆远程库

~~~
git clone 远程库https (或) ssh
~~~



## ③、拷贝本地文件：到本地库

![image-20201130192016069](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130192016069.png)

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130203033265.png" alt="image-20201130203033265" style="zoom:50%;" />

---





![image-20201130194659650](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130194659650.png)

~~~
注意：地址需要手敲， 记事本复制，出问题
~~~



## ④、通过如下指令：将批量文件，添加到远程库

~~~
git  add --all
git commit -m 'add more files'
git push origin master
~~~

> 注意：origin是你没有设置，直接克隆的时（默认名称）， 如果自己设置了origin， 那么先查看一下

~~~
指令为：git remote -v
~~~



# 2、批量复制：文件夹下的（所有文件）， 到当前目录

~~~
cp -r 复制目录./ ./
~~~

>其中最后的：./ 代表当前目录     





# 3、查看：GIT 查看/修改用户名和邮箱地址

## 3.1、用户名、邮箱作用

~~~
用户名和邮箱地址的作用

用户名和邮箱地址是本地git客户端的一个变量，不随git库而改变。

每次commit都会用用户名和邮箱纪录。

github的contributions统计就是按邮箱来统计的。
~~~

## 3.2、查看：用户名（和）邮箱

~~~java
git config user.name         查看用户名
  
git config user.email        查看邮箱
~~~



## 3.3、修改用户名和邮箱地址：

~~~java
git config --global user.name "username"
    

git config --global user.email "email"
~~~

