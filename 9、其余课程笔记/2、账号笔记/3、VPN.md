# 1、科学上网（Trojon软件）

## 1.1、实现步骤如下：

~~~
1、申请一个域名
2、申请一台服务器
3、申请域名（SSL证书）
4、将（域名）解析（VPS服务器地址）
5、打开服务器：命令行窗口， 安装docker（可以使用：xshell、xftp）
6、安装:SwitchyOmega (谷歌插件)， 并进行配置
7、安装：Trojon(客服端)
8、powerShell运行：config.json文件， 打开代理，即可使用。
~~~

## 1.2、具体：讲解

- 1、申请域名：（可以使用：阿里云、）



- 









# 1、VPN实现（virtual private）

> trojan教程https://tlanyan.me/trojan-tutorial/



![image-20210216222130872](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210216222130872.png)

![image-20210216222305965](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210216222305965.png)

~~~
1、菜鸟教程：docker安装（推荐）

2、设置docker程序开机启动
		systemctl enable docker

3、从托管仓库拉取trojan的docker镜像
	docker pull trojangfw/trojan

4、创建容器并运行
	docker run -dt --name trojan -v /config:/config -p 443:443 trojangfw/trojan
	
5、检查trojan进程是否运行
	ps -ef | grep trojan
~~~

~~~
1、查看docker容器
	docker ps -a
    
2、查看镜像
	docker images

3、删除正在运行的docker
	docker rm 它的id   -f
~~~



~~~
1、查看占用端口
	netstat -nap | grep 443

2、杀死占用端口（进程）
	kill 443
~~~





![image-20210216210714627](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210216210714627.png)



![image-20210216195654436](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210216195654436.png)



![image-20210217101431379](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210217101431379.png)

~~~

~~~

