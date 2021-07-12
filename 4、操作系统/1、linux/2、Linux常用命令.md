# 1、开、关：端口

~~~shell
# 1、开启：防火墙
	service firewalld start
	
# 2、重启：防火墙
	service firewalld restart
	
# 3、关闭防火墙
	service firewalld stop
	
# 4、查看防火墙规则
	firewall-cmd --list-all

# 5、查看端口是否开放
	firewall-cmd --query-port=8080/tcp

# 6、开放8080端口
	firewall-cmd --permanent --add-port=8080/tcp

# 7、移除81端口
	firewall-cmd --permanent --remove-port=81/tcp

# 8、重启防火墙（修改配置后：需要重启防火墙）
	firewall-cmd --reload
	
# 注意1： firewall-cmd是：Linux提供的操作firewall的一个工具	
# 注意2： --permanent: 代表设置为持久
# 注意3： --add-port：用来表示添加的端口
~~~

