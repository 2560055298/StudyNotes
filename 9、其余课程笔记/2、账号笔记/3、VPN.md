# 1、科学上网（Trojon软件）

## 1.1、实现步骤如下：

~~~
1、申请一个域名
2、申请一台服务器
3、申请域名（SSL证书）
4、将（域名）解析（VPS服务器地址）
5、服务器：安装docker（环境），拉取Trojan镜像到VPS服务器（可以使用：xshell、xftp）
6、上传：HTTPS/SSL证书到（服务器）， 设置运行参数并（创建容器运行）
7、安装:SwitchyOmega (谷歌插件)， 并进行配置
8、安装：Trojon(客服端)
9、powerShell运行：config.json文件， 打开代理，即可使用。
~~~

## 1.2、具体：讲解

### 1.2.1、==申请域名==

> 可以去：阿里云的万网
>
> 如此处：www.yangzaikongzhongfei.top



### 1.2.2、==购买服务器==

~~~
购买地点：
	阿里云、帮瓦工、vultr

服务器配置：
	（轻量应用）服务器、centos7及以上
~~~



### 1.2.3、==申请SSL证书==

> 此时使用了：阿里的免费SSL证书， 证书需要绑定（唯一域名）

![image-20210217165113039](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210217165113039.png)



### 1.2.4、域名==解析==服务器

> 将域名：解析为VPS服务器公网地址



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210217165601090.png" alt="image-20210217165601090" style="zoom: 33%;" />



### 1.2.5、安装==Docker环境==

> 通过连接：VPS服务器终端，进行安装，（如果已安装过）需要先删除

~~~
安装docker版本trojan相关命令（以CentOS7系统为例）

1、安装 epel 源
	yum install epel-release

2、安装docker运行必须的依赖程序
	yum install -y yum-utils device-mapper-persistent-data lvm2

3、安装docker的yum源
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

4、安装docker程序
	yum -y install docker-ce

5、启动docker程序
	systemctl start docker

6、设置docker程序开机启动
	systemctl enable docker
~~~

### 1.2.6、拉取==Trojan镜像==

> 拉取Trojan镜像到VPS服务器
>
> 地址：https://hub.docker.com/r/trojangfw/trojan

~~~
7、从托管仓库拉取trojan的docker镜像
	docker pull trojangfw/trojan
~~~



### 1.2.7、下载==SSL证书==

> 到域名绑定的位置：下载Nginx证书， 桌面

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210217170529102.png" alt="image-20210217170529102" style="zoom: 25%;" />

### 1.2.8、 设置==Trjon参数==

> 去https://github.com/trojan-gfw/trojan 库获取（server.json-example）

~~~
{
    "run_type": "server",
    "local_addr": "0.0.0.0",
    "local_port": 443,
    "remote_addr": "127.0.0.1",
    "remote_port": 80,
    "password": [
        "hejinyang71"
      ],
    "log_level": 1,
    "ssl": {
        "cert": "/config/test.pem",
        "key": "/config/test.key",
        "key_password": "",
        "cipher": "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384",
        "cipher_tls13": "TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_256_GCM_SHA384",
        "prefer_server_cipher": true,
        "alpn": [
            "http/1.1",
            "h2"
        ],
        "reuse_session": false,
        "session_ticket": false,
        "session_timeout": 600,
        "plain_http_response": "",
        "curves": "",
        "dhparam": ""
    },
    "tcp": {
        "no_delay": true,
        "keep_alive": true,
        "reuse_port": false,
        "fast_open": false,
        "fast_open_qlen": 20
    }
}

~~~

### 1.2.9、==上传文件==到VPS

> 将HTTPS/SSL证书、server.json-example：修改名称
>
> 通过xftp：将证书（test.key、test.pem、config.json）传输到VPS服务器

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210217171254602.png" alt="image-20210217171254602" style="zoom:50%;" />



### 1.2.10、==创建容器==运行

~~~
8、创建容器并运行
docker run -dt --name trojan  --restart=always -v /config:/config -p 443:443 trojangfw/trojan

9、检查trojan进程是否在运行
	ps -ef | grep trojan
~~~



### 1.2.11、（安装） ==SwitchyOmega==

> 通过谷歌商城：安装
>
> 或者通过gitHub：https://github.com/FelisCatus/SwitchyOmega/releases 解压移入

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210217171619475.png" alt="image-20210217171619475" style="zoom: 33%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210217173652057.png" alt="image-20210217173652057" style="zoom: 50%;" />





### 1.2.12、安装 ==Trojon== （客户端）

> 客户端：gitHub：https://github.com/trojan-gfw/trojan
>
> release中：根据系统选择，安装内容



### 1.2.13、==powerShell运行==

> powerShell运行：config.json文件，打开SwitchyOmega，即可使用。

> 可以：编写为cmd（或）bat脚本

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210217174315177.png" alt="image-20210217174315177" style="zoom:50%;" />

> 打开：SwitchyOmega

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210217174405811.png" alt="image-20210217174405811" style="zoom:50%;" />





# 2、Trojon实现注意点



## 2.2、443端口占用（解决）

- 第一步：查看服务器是不是：直接绑定了域名

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210217181513553.png" alt="image-20210217181513553" style="zoom:33%;" />

- 第二步：杀死占用（进程）

~~~
1、查看占用端口
	netstat -nap | grep 443
	
2、杀死占用端口（进程）
	kill 443
~~~

- 第三步：查看docker容器，删除刚提交的：docker

~~~
1、查看docker容器
	docker ps -a
    
2、查看镜像
	docker images

3、删除正在运行的docker
	docker rm 它的id   -f
~~~





