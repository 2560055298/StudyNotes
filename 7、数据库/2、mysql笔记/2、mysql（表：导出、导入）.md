~~~mysql
# 1、进入mysql（bin目录）
	C:\Program Files\MySQL\MySQL Server 8.0\bin
	
# 2、（导出表）  -->>> (核心)
	mysqldump -uroot 数据库名 > E:\\导出名.sql -

# 3、进入linux的mysql根目录
	cd /var/lib/

# 4、登录mysql
	mysql -uroot -p

# 5、查看一下mysql数据库中的（数据库）
	show databases;
	
# 6、并创建一个（与本地同名数据库，如：blog）
	create database blog;
	use database blog;
	exit;
	
# 7、（导入表）  -->>>（核心）	
	mysql -uroot -p123456 blog<blog.sql
~~~

