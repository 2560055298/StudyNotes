# 1、Window导出， 导入linux



~~~mysql
# 1、进入mysql（bin目录）
	C:\Program Files\MySQL\MySQL Server 8.0\bin
	
# 2、（导出表）  -->>> (核心)
	mysqldump -uroot 数据库名 > E:\\导出名.sql

# 3、进入linux的mysql根目录
	cd /var/lib/mysql

# 4、并创建一个（与本地同名数据库，如：blog）
	create database blog;
	
# 5、（导入表）  -->>>（核心）	
	mysql -uroot -p123456 blog<blog.sql
~~~





# 2、Linux导出， 导入windows

~~~shell
# 1、进入mysql目录 
	cd /var/lib/mysql
	
# 2、生成（带数据的：表结构）
	mysqldump -h localhost -uroot -p123456 数据库名 > blog.sql
	
# 3、创建一个库
	create database blog;
	
# 4、将blog.sql下载到本地(随便找个位置)，  （用cmd）导入本地mysql
	mysql -uroot -p123456 blog<blog.sql
~~~





