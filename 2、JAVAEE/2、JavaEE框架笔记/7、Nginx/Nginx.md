# 1、Nginx概念



## 1.1、什么是Nginx



## 1.2、Nginx的作用

~~~nginx
作用：
	1、反向代理
	2、负载均衡
	3、动静分离
~~~





# 2、Nginx的安装

## 2.1、windows下安装

~~~nginx
Nginx下载页面下载后（无中文目录）解压,  用cmd执行 nginx.exe 访问80端口即可
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210712184741023.png" alt="image-20210712184741023" style="zoom:50%;" />

---



## 2.2、Linux下安装

~~~shell
# 1、下载页面：下载 (nginx-1.20.1.tar.gz) 后传输到linux服务器上


# 2、确认nginx没有安装过
	whereis nginx      # 寻找：nginx的位置
	nginx			   # nginx命令，再次测试： nginx: command not found

# 3、解压
	tar -zxvf 安装包.tar.gz
	
# 4、进入：nginx目录， 自动配置config
	./configure

# 5、编译
	make
	
# 6、安装
	make install

# 7、寻找nginx的位置
	whereis nginx

# 8、进入sbin执行nginx
	./nginx
~~~













# 3、Nginx命令

~~~shell
#1、寻找：nginx目录
	whereis nginx   #进行查找

#2、启动nginx（前提：进入nginx的sbin目录）
	./nginx
	
#3、停止
	./nginx -s stop     #注意：停止是强制性的
		
#4、安全退出
	./nginx -s quit     #注意：安全退出，会保证安全的情况下去（结束nginx的进程）
	
#5、重新加载配置文件
	./nginx -s reload

#6、查看nginx的进程
	ps aux|grep nginx
~~~







# 4、Nginx快速入门：实战

> 实现：windows下启动（两个服务），也就两个jar不同端口， 使用（反向代理、负载均衡）特性