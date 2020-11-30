

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