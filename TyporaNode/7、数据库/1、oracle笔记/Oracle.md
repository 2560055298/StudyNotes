# Oracle

## 1、Sql * Plus

### 1、服务器执行命令

- 1、SQL命令

	- 以分号结尾

- 2、PL/SQL程序块

	- 以 / 结束

### 2、本地执行命令

- SQL * Plus命令

	- 1、set命令

		- 1、是什么？

			- 用来设置的：命令
			- set (变量名) value

		- 2、有什么用？

			- 1、设置每页中的行数

				- set PAGESIZE value

			- 2、设置页与页之间的空行

				- set NEWPAGE value

			- 3、设置每行显示的字符数

				- set LINESIZE value

			- 4、设置标题的显示与否
			- 5、设置输出结果是否按页暂停

				- set PAUSE value

					- off

						- 显示全部（页）

					- on

						- 回车（出一页）

					- text

						- （每页）后显示内容

			- 6、设置当前时间的显示
			- 7、设置提示符

				- set sqlprompt "_user'@'_connect_indentifier"

			- 8、设置显示时间

				- set time on

			- 9、设置关闭时间

				- set time off

	- 2、help命令

		- 1、是什么？

			- 命令参数求助
			- HELP |？[topic]

		- 2、有什么？

			- 帮助你不会的操作

	- 3、describe

		- 1、是什么？

			- 用来描述的命令
			- DESC[RIBE] Object_name

		- 2、有什么用？

			- 直接查询表结构

				- desc 表名

			- 中间：查询表结构

				- select 字段, 字段 （回车）#desc 表名 （回车） from 表名

	- 4、spool

		- 1、是什么？

			- 用来定向存储的命令
			- SPOOL [file_name [CREATE | REPLACE | APPEND] | OFF | OUT]

		- 2、有什么用？

			- 1、指定输出到某个文件（没有文件时自动创建）

				- spool 地址

			- 2、输出（关闭流）

				- spool off

			- 3、输出、打印（关闭流）

				- spool out

	- 5、show

		- 1、是什么？

			- 显示信息的命令
			- show 显示名

		- 2、有什么用？

			- 1、显示所有信息

				- show all

			- 2、显示错误信息

				- show err

			- 3、显示当前页的：当前行

				- show lno

			- 4、显示数据库回收站

				- show recyclebin

			- 5、显示错误编码

				- show sqlcode

			- 6、显示当前用户

				- show user

	- 7、column

		- 1、是什么？

			- 显示某个列
			- col[umn] [列名] [显示选项]

		- 2、有什么用？

			- CLEAR

				- 清除指定列的显示属性

					- col 列名 clear

			- FORMAT

				- 格式指定的列

					- 1、格式化金额

						- col 列名 format $999,999.00

					- 2、格式化列的（字符长度）

						- col 列名 format ax   (x为整数)

			- HEADING

				- 定义标题

					- col 列名 heading 新列名

			- NULL

				- 用字符串替代null值

					- col 列明 null 变换内容

			- ON | OFF

				- 控制定义的显示属性的状态

					- col 列名 off

						- 不显示之前设置格式

					- col 列名 on

						- 显示之前设置格式

			- WRAPPED

				- 当字符串的长度超过显示宽度时，将字符串超出的部分折叠到下一行显示

			- WORD_WRAPPED

				- 表示从一个完整的字符处折叠

### 3、补充

- SQL

	- 概念

		-  Structured Query Language 结构化查询语言;

	- 作用

		- 是一种特殊目的的编程语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统。

- PL/SQL

	- 概念

		- 过程化SQL语言（Procedural Language/SQL）

	- 作用

		- PL/SQL是Oracle数据库对SQL语句的扩展。在普通SQL语句的使用上增加了编程语言的特点，所以PL/SQL就是把数据操作和查询语句组织在PL/SQL代码的过程性单元中，通过逻辑判断、循环等操作实现复杂的功能或者计算的程序语言。

- SQL* Plus

	- 概念

		- Oracle的sql*plus是与oracle数据库进行交互的客户端工具

	- 作用

		- 借助sql*plus可以查看、修改数据库记录。在sql*plus中，可以运行sql*plus命令与sql语句。

- Oracle文件分类

	- 1、数据文件

		- 存放实际的数据
		- 隶属于某个表空间

			- 数据表空间
			- undo表空间
			- 临时表空间

		- 子主题 1

	- 2、控制文件

		- 1、注意

			- Oracle数据库的控制文件是在创建数据库时自动创建的，默认情况下，在数据库的创建期间至少有一个控制文件的副本
			- 一般只有在控制文件全部损坏，或者修改某些永久性参数（例如 MAXLOGFILES、MAXLOGMEMBERS），或者修改数据库名称这三种情况下才会重新创建控制文件。

		- 2、作用

			- a.为数据库提供各种路径和状态；

 B.数据库恢复。

	- 3、重做日志文件

		- ①核心作用：a.保护数据的安全；b.恢复数据。
		- 附加作用：数据同步和分析。

- 直接运行文本文件：

	- 方法一

		- run + 绝对路径

	- 方法二

		- @ + 绝对路径

			- 读取到缓存中去：执行

	- 方法三

		- @@

## 2、数据库体系结构

### 1、结构

- 数据库（Oracle）

	- 表空间

		- 段

			- 区

				- 块

### 2、关系

- 1、每个表空间由（一个或多个文件）组成
- 2、表空间中（数据文件的大小之和就是表空间）的存储容量

### 2、讲解结构

- 1、表空间

	- 表空间分类

		- 1、小文件表空间

			- 1、系统表空间

				- SYSTEM Tablespace

					- 存储系统（数据字典、系统管理信息、用户表）

						- 至少一个

			- 2、辅助表空间

				- SYSAUX Tablespace

					- 减少系统表空间的负荷， 提供系统作业效率

			- 3、撤销表空间

				- Undo Tablespace

					- 用于事务的回滚和撤销的表空间

			- 4、临时表空间

				- Temporary Tablespace

					- 用于存储数据库的临时表

						- 一般所有用户都使用temp作为默认临时表空间

			- 5、用户表空间

				- User Tablespace

					- 用户存储永久性用户对象和私有信息

			- 6、注意：每一个oracle数据库至少（一个表空间）

				- 如：system（系统表空间）

		- 2、大文件表空间

			- 它只能包含一个大文件，但文件大小可以达到4G

- 2、段

	- 段的分类

		- 1、数据段

			- 放数据

		- 2、索引段

			- 放索引

		- 3、临时段
		- 4、回滚段

- 3、区间

	- 1、区间是数据库存储空间的：最小分配单位

- 4、数据块

### 3、补充知识

- 1、启动sqlplus但是不连接到数据库

	- sqlplus/nolog

- 2、登陆

	- connect sys/123456 as sysdba

- 3、获取数据库的名称

	- select name from v$database;

- 4、oracle实例的状态

	- 1、实例启动

		- 什么是Oracle 实例？

			- Oracle 实例

				- 1、补充

					-  一个Oracle Server由一个Oracle实例和一个Oracle数据库组成。

						- Oracle Server = Oracle Instance + Oracle Database

				- 2、 概念

					- 包括了内存结构(SGA)和一系列后台进程(Background Process),两者合起来称为一个Oracle实例

						- Oracle Instance = SGA + Background Process

				- 3、Oracle实例和Oracle数据库的关系

					-  1、一个实例能够装载及打开仅仅一个数据库 
					- 2、一个数据库能够被多个实例装载并打开
					-  3、实例与数据库的对应关系是一对一或多对一的关系

		- 1、启动过程分三个步骤

			- 1、关闭
			- 2、启动实例
			- 3、装载数据库
			- 4、打开数据

		- 2、启动模式分类

			- 1、NOMOUNT

				- 1、概念

					- 只启动实例

						- 注意：用户要以sysdba的身份登录，才具有关闭和启动数据库实例的权限，根据参数文件启动实例

				- 2、语法

					- startup nomount

			- 2、MOUNT

				- 1、概念

					- 启动实例，装载数据库

						- （数据库）是保持数据库关闭的状态，可以看到数据库实例启动，数据库装载，这种模式加载控制文件，让实例和数据库相关联

				- 2、语法

					- startup mount

			- 3、OPEN

				- 1、概念

					- 启动实例+装载数据库+打开数据

				- 2、语法

					- startup  open

			- 4、FORCE

				- 1、概念

					- 终止实例重新启动数据库，强制性

						- 先做shutdown abort 再重先启动

				- 2、语法

					- startup force

			- 5、RESTRICT

				- 1、概念

					- 启动后限制对数据库实例的访问

				- 2、语法

					- startup restrict

	- 2、实例关闭

		- 分类

			- 1、NORMAL

				- 1、概念

					- 正常关闭方式，数据关闭，卸载数据库，实例shutdown

				- 2、语法

					- shutdown normal

			- 2、TRANSACTIONAL

				- 1、概念

					- 事物关闭方式，保证（当前活动事务）都（可以被提交），并在尽可能短的时间内关闭数据库

				- 2、语法

					- shutdown transactional

			- 3、IMMEDIATE

				- 1、概念

					- 立即关闭，关闭所有用户连接，终止活动事务，将（未完成）的（事物回退），类似（强制关闭）

				- 2、语法

					- shutdown immediate

			- 4、ABORT

				- 1、概念

					- 终止关闭方式，强制性，可能会破坏数据库完整性

				- 2、语法

					- shutdown abort

	- 3、补充

		- 1、查看实例状态

			- select status from v$instance; 

		- 2、查看实例名

			- select instance_name from v$instance;

		- 3、修改数据库实例状态

			- alter database 状态类型

		- 4、insufficient privileges问题

			- 1、quit

				- 断开连接sqlplus

			- 2、sysplus sys/123456 as sysdba
			- 3、shutdown abort

## 3、（静态数据字典）与（动态视图）

### 1、概念

- 1、数据字典

	- 1、概念

		- Oracle数据库管理系统的核心，存储了整个Oracle数据库所有（数据定义信息）

			- 放在system表空间中

	- 2、视图分类

		- 1、USER_开头

			- 存储当前用户所有拥有的各种数据对象的信息

		- 2、ALL_开头

			- 存储当前用户（可以访问的数据库对象信息）有权限，不拥有对象

		- 3、DBA_开头

			- 存储所有对象信息

				- 要拥有DBA权限才能查看

- 2、动态性能视图

	- 1、记录了数据库的运行状态

		- 如：内存、I/O、当前会话（情况）

	- 2、对象分类

		- 1、基表

			- x$

				- 不允许普通用户直接访问

		- 2、视图

			- v_$

		- 3、同义词

			- v$

- 3、二者比较

	- 1、位置存放

		- 数据字典

			- SYSTEM表空间中

		- 动态性能视图

			- 实例内存结构中

	- 2、可访问时间

		- 数据字典

			- （数据库打开）之后

		- 动态性能视图

			- （实例启动）之后

	- 3、名称

		- 数据字典

			- DBA_、ALL_、USER_为前缀

		- 动态性能视图

			- v_$、gv_$

- 3、补充

	- 静态数据字典中的数据（定义发生改变时）才改变
	- 动态性能视图随（数据库的运行性能不断变化）

## 4、（初始化参数文件）和（控制文件）

### 1、初始化参数文件

- 1、补充

	- 1、打开Oracle数据库要过”三关“

		- 1、启动实例

			- 只有初始化文件（存在）才能启动

				- 打开：初始化文件

					- nomount

		- 2、装载数据库

			- 这个阶段：打开控制文件，用来知晓（数据库）是由哪些（数据文件和重做日志文件）组成

				- 打开：控制文件

					- mount

		- 3、打开数据库的（数据文件和重做日志文件）

			- 只有所有联机数据文件和重做日志文件正常打开，数据库才能进入打开状态，之后方可接收普通用户的访问请求

				- 打开：数据文件+重做日志文件

					- open

- 2、创建（文本）参数文件

	- 1、纯文本创建
	- 2、CREATE PFILE指令创建

		- 1、create pfile='地址' from memory;
		- 2、create pfile from spfile;

- 3、创建（服务器）参数文件

	- CREATE SPFILE指令创建

		- 1、create spfile from pfile '地址'
		- 2、create spfile from memory;
		- 3、注意：spfile文件的创建（必须在数据库启动前）

- 4、设置初始化参数

	- 1、（spfile）服务器级别设置

		- 1、语法格式

			- alter system set 参数名=参数值

		- 2、参数范围（SCOPE）

			- MEMORY

				- 仅在（内存）中应用改变的值

					- 动态参数而已

						- 立即生效

							- 下一次启动还原

					- 静态参数而言

						- 静态变量不允许使用

			- SPFILE

				- 改变仅对SPFILE文件有效

					- 动态参数而言

						- 下一次生效

					- 静态参数而言

						- 静态参数只能通过：这种方式改变

			- BOTH

				- 改变同时应用于SPFILE文件和内存

					- 动态参数而言

						- 立即生效

							- 下一次仍然有效

					- 静态参数而言

						- 不允许使用此参数

	- 2、会话级初始化参数设置

		- 1、语法格式

			- alter session set 参数名=参数值

				- 只影响当前用户会话

	- 3、（alter system） 与（alter session）区别

		- alter system：

			-  修改的是当前运行的instance, 对所有的session都生效, 但是在实例重新启动后, 这些修改会不再有效.

				-   因为alter system是针对实例instance的修改的，initSID.ora对instance的运行进行控制，在Oracle9i之 前，使用alter system对系统的修改，不会自动将你的修改记录到initSID.ora文件中，所以下次启动时，还是原来的设置。

		- alter session：

			-  修改的是用户自己的session, 对于其它session无效. 重新启动或者重新连接后, 都不会再有效， 新的会话会使用系统的默认参数。

				- 因为alter session当然是针对具体的某个连接，对它的修改都是暂时性的，会话退出后。
新的会话会使用系统的默认参数。

### 2、控制文件

- 1、概念

	- 控制文件是一个二进制文件，用来记录数据库的物理结构

- 2、包含内容

	- 1、数据库名称
	- 2、每个数据文件的：存储路径和文件名称
	- 3、归档日志文件的：名称和位置

- 3、与控制文件相关的视图

	- 1、显示控制文件中描述的（数据库）信息

		- v$database

	- 2、显示控制文件的：名称列表

		- v$controlfile

	- 3、显示控制文件的（记录信息）

		- v$controlfile_record_section

	- 4、显示初始化参数（control_files中定义的控制文件名称）

		- v$parameter

- 4、补充：

	- 1、至少要有2个控制文件

		- 并且应该将每个：控制文件存储在（不同的物理硬盘上）

	- 2、如果任何一个（控制文件）损坏

		- 将导致（实例异常中止）运行

- 5、添加控制文件的步骤

	- 1、查看数据库当前的（控制文件位置）

		- show parameter control_files

	- 2、修改初始化参数：control_files

		- 1、可用pfile（文本编辑器）
		- 2、可用spfile

			- 用(  alter system set 参数名=参数值 scope= 范围  ) 语句修改

	- 3、关闭数据库

		- 然后用文件命令把（现有的控制文件拷贝到）指定位置

			- shutdown immediate

	- 4、启动数据库，让修改的初始化参数：生效

- 6、备份控制文件的方法

	- 1、备份到指定文件

		- 二进制格式的控制文件的：副本

			- alter database backup controlfile to '地址'

	- 2、备份到一个跟踪文件，它不是二进制格式的控制文件副本

		- 而是用于重新创建控制文件的SQL语句，是文本格式

			- alter database backup controlfile to trace;

- 7、恢复控制文件

	- 1、目录可访问

		- 1、关闭数据库实例
		- 2、使用操作系统命令将（控制文件副本）复制到控制文件目录

	- 2、介质被破坏

		- 1、关闭数据库实例
		- 2、使用命令复制
		- 3、修改constrol_files参数， 将无效的控制文件目录修改为：新的目录
		- 4、使用startup命令打开数据库实例

- 8、控制文件复制：为什么要先关闭数据库？

	- 因为copy命令不是sql命令，而是一个操作系统级命令，所以要关闭并退出数据库后再复制文件。

## 6、表空间和数据文件

### 1、表空间相关内容

- 1、表空间

	- 1、表空间分类

		- 1、小文件表空间

			- 1、永久表空间

				- 1、系统表空间

					- SYSTEM Tablespace

						- 存储系统（数据字典、系统管理信息、用户表、存储过程、触发器）

							- 至少一个

				- 2、辅助表空间

					- SYSAUX Tablespace

						- 减少系统表空间的负荷， 提供系统作业效率

				- 3、用户表空间

					- User Tablespace

						- 用户存储永久性用户对象和私有信息

			- 2、临时表空间

				- Temporary Tablespace

					- 用于存储数据库的临时表

						- 一般所有用户都使用temp作为默认临时表空间

			- 3、还原表空间

				- 撤销表空间

					- Undo Tablespace

						- 用于事务的回滚和撤销的表空间

			- 6、注意：

				- 1、每一个oracle数据库至少有：（一个表空间）system（系统表空间）
				- 2、SYSTEM 和SYSAUX是两个特殊的（永久表空间）每个Oracle数据库必须（具有）
				- 3、SYSTEM 表空间用于（管理数据库）不能对它执行（重命名、删除、脱机）等操作。

		- 2、大文件表空间

			- 它只能包含一个大文件，但文件大小可以达到4G

	- 2、表空间的创建

		- 1、创建大文件表空间

			- create bigfile tablespace 表空间名

		- 2、创建永久表空间

			- create tablespace 表空间名

				- datafile 数据文件地址
				-  size 大小（k或M）
				-  reuse

					- 表示可以重用

				-  autoextend

					- on / off

						- 自动增长/不自动增长

				- next 大小（K/M）

					- 每次自动增长的（大小）

				- maxsize

					- unlimited / (K or M)

						- 最大的大小

				- blocksize 数据块大小
				- logging /  nologging 是否写入日志
				- force logging 强制改成日志模式
				- online / offline 在线或离线
				- extent managerment 区间管理[dictionary / local]

					- 字典管理放在system表空间
					- local 放在本地管理空间

						- autoallocate

							- 自动分配

								- 每次最小分配64k

						- uniform  size（K/ M）

							- 手动分配大小

								- 如不写：默认1M

				- segment(段管理) 

					- 1、auto

						- 自动

					- 2、manual

						- 手动

		- 3、创建临时表空间

			- create temporary tablespace 表空间名

				- 说明：临时表空间存储的数据有

					- 1、排序中间结果
					- 2、临时表和临时索引
					- 3、临时LOB
					- 4、临时B-树

				- tempfile 临时文件地址
				-  size 大小（k或M）
				-  reuse

					- 表示复用数据文件

				- blocksize 数据块大小
				- logging /  nologging 是否写入日志
				- force logging 强制改成日志模式
				- online / offline 在线或离线
				- extent managerment 区间管理[dictionary / local]

					- 字典管理放在system表空间
					- local 放在本地管理空间

						- uniform size  （K/ M）

							- 手动分配大小

						- 不允许自动分配

				- segment(段管理) 

					- 1、auto

						- 自动

					- 2、manual

						- 手动

		- 4、创建还原表空间

			- 1、有什么用？

				- 1、回滚事务
				- 2、恢复事务

			- 2、怎么创建？

				- 说明

					- 1、只能使用（本地化管理）表空间类型

						- extent management 子句只能用local

					- 2、盘区管理方式：只能使用autoallocate
					- 3、段管理方式只能为

						- 手动管理方式

							- manual

				- 语法

					- create undo tablespace 表空间名
					- datafile 地址
					- size 大小（K/M）
					- reuse

			- 3、设置undo参数

				- 1、设置管理方式

					- alter system set undo_management=auto;

				- 2、切换undo表空间

					- alter system set undo_tablespace=切换的表空间名

				- 3、设置保留期限的下限

					- alter system set undo_retention=900;

- 2、段空间管理

	- 1、语法

		- segment  space management 

			- auto / manual

	- 2、实现

		- 1、自动

			- auto

				- 自动管理，用位图方式管理表空间内的（段空间）（空闲空间）这是：默认设置

		- 2、手动

			- manual

				- 管理，用空闲列表方式管理（表空间段）内的（空闲空间）

	- 3、补充：

		- 只有在（创建）（本地管理）（永久）表空间才能使用。（但创建system表空间时，不能使用）

- 3、区分配管理

	- 1、概念

		- Oracle表空间（存储分配）的最小的单位是（区）区是由（连续数据块）组成

	- 2、区分配管理的方式

		- 1、字典管理

			- 1、概念

				- 把（表空间）内的（区分配信息）集中记录在（数据库的）（数据字典中）

		- 2、本地管理

			- 1、概念

				- 把各个（表空间）自身内用（位图）记录其中（所有区的）分配信息

		- 3、补充：

			- 1、查看所有表空间

				- select * from v$tablespace;

			- 2、查看表空间名称

				- select tablespace_name from dba_tablespaces;

	- 3、查看方式

		- select tablespace_name, segment_space_management from dba_tablespaces;

- 4、数据块管理

	- 1、大小说明

		- oracle表空间的（数据块）大小可以是（2k, 4k, 8k, 16k, 32k）初始化为：标准的数据块大小

	- 2、使用非标准大小原因

		- 1、便于数据库间：传输表空间
		- 2、减少链接， 提交数据库查询性能

	- 3、非标准块：创建方法

		- 1、设置数据缓冲区

			- alter system set db_16k_cache_size = 40M
			- 模板：

				- alter 表空间名 set db_大小k_cache_size = 大小M

		- 2、建表空间时：声明

			- blocksize 16k;

	- 4、查看方法

		-  select tablespace_name, segment_space_management, block_size from dba_tablespaces;

- 5、改变表空间的：可用性

	- 1、为什么要？脱机表空间

		- 1、（重命名）或者（移动表空间）文件时
		- 2、执行脱机表空间（备份）
		- 3、（升级）或（维护）应用程序过程中（临时关闭）对应表空间
		- 4、注意

			- 1、（脱机表空间时）数据库的部分数据（不可用），但不影响（用户对数据库）其余部分的访问
			- 2、SYSTEM表空间、临时表空间、还原表空间 

				- 不能脱机

	- 2、联机/脱机

		- 1、脱机如何用？

			- 语法

				- alter tablespace 表空间名 offline

					- normal

						- 正常方式：脱机，默认设置，不做介质恢复

					- temporary

						- 临时方式脱机

					- immediate

						- 立即方式脱机，需要做介质恢复

					- 补充建议

						- 优先用：normal 、其次用temporary 、实在不行用immediate

				- 补充：介质恢复

					- recover datafile （文件号）

		- 2、联机如何用？

			- 语法

				- alter tablespace 表空间名 online

		- 3、查看状态

			- select tablespace_name, status from dba_tablespaces;

	- 3、设置表空间的（读写状态）

		- 1、只读

			- alter tablespace 表空间名 read only

		- 2、可读可写

			- alter tablespace 表空间名 read write

	- 4、重命名表空间

		- alter tablespace 旧表空间名 rename to 新表空间名
		- 注意

			- 1、SYSTEM和SYSAUX表空间（不能重命名）
			- 2、如果表空间（已脱机）不能（重命名该表空间）
			- 3、重命名只读表空间时， 只能更新（数据字典和控制文件）。但会在警告日志文件内写入警告信息

	- 5、删除表空间

		- 1、说明

			- 删除的是：数据控制文件的（文件指针）
			- 删除后，表空间内数据（不能再恢复）

		- 2、语法

			- drop tablespace 表空间名

				- including contents

					- 删除文件所有内容

				- and / keep

					- datafiles

						- 删除时，全部删还是保留（操作系统中表空间相关的数据文件？）

				- cascade constraints

					- 删除表空间的：所有参照完整性约束

	- 6、设置默认空间

		- 1、长期

			- 1、分类

				- 1、用户默认表孔

					- 1、用户自己使用
					- 2、语法

						- altert user 数据库名称 default tablespace 表空间名

				- 2、数据库默认表空间

					- 1、公共使用：没有自己创建，就用（这个数据库）的默认表空间

		- 2、临时

			- 1、分类

				- 1、用户默认表孔

					- 1、用户自己使用
					- 2、语法

						- altert user 数据库名称 default temporary tablespace 表空间名

				- 2、数据库默认表空间

					- 1、公共使用：没有自己创建，就用（这个数据库）的默认表空间
					- 2、语法

						- altert database 数据库名称 default temporary tablespace 表空间名

			- 3、查看临时表空间

				- 1、用户默认表孔

					- select property_name, property_value from database_properties where property_name='DEFAULT_TEMP_TABLESPACE';

				- 2、数据库默认表空间

					- select username, temporary_tablespace from dba_users where username='SCOTT';

### 2、数据文件管理

- 1、概念

	- 1、数据文件

		- 是用于存储（数据库）中数据的操作系统文件

	- 2、读取数据时

		- 先从数据文件中读取数据，并存储到SGA数据缓冲区中

	- 3、（数据文件）和（表空间）密不可分，一个表空间不能没有（数据文件）， 一个数据文件（只属于一个表空间）

### 3、添加数据文件

- 1、为（永久表空间）添加数据文件

	- alter tablespace 表空间名
	- add datafile 添加文件地址
	- size 大小（K/M）
	- reuse

- 2、为（临时表空间）添加数据文件

	- alter tablespace 表空间名
	- add tempfile 添加文件地址
	- size 大小（K/M）

- 2、为（还原空间）添加数据文件

	- alter tablespace 表空间名
	- add datafile 添加文件地址
	- size 大小（K/M）
	- reuse

### 4、修改数据文件的（大小）

- alter database 
- datafile 修改文件的地址
- resize  大小（K/M）
- 文件大小，可放大可缩小（不能小于数据量）

### 5、设置文件自动拓展

### 6、非归档条件下：脱机数据文件

- alter database datafile 数据文件名 offline for drop

## 7、数据库安全管理

### 1、引言

- 1、数据库（安全保护）流程分为三个步骤

	- 1、用户向（数据库）提供一个（数据库账号）
	- 2、数据库对（用户账号）进行校对
	- 3、当（用户账号存在时）， 数据库（待判断其权限）大小后，即对用户（展示相应的页面）

- 2、本章介绍：

	- 1、数据库的（认证方法）
	- 2、用户管理

		- 1、概念：

			- 对oracle数据库的（所有用户）的进行权限的管理

		- 2、分类

			- 1、系统预定义用户

				- 1、sys

					- 是一个特殊的用户， 只能以sysdba身份登陆

				- 2、system
				- 3、scott
				- 4、注意

					- 1、sys 和 system 都被默认（授予了DBA）权限
					- 2、（任何用户）被（授予sysDBA）后， 以sysDBA登陆Oracle， 均连接到（sys模式），而不是（自己原来的模式）

			- 2、自定义数据库用户

		- 3、操作

			- 1、创建用户

				- creata user 用户名

					- 注意：用户名（字母开头，不含特殊字符，不超过30个字节）

				- identified by (密码 / externally / globally )

					- 注意

						- 1、此条语句必写
						- 2、（若是密码：区分大小写）

				- 以下（随意）
				- password expire

					- 用户首次登陆后：立即失效

				- account lock / unlock

					- 用户（是否锁定）

				- temporary tablespace 临时表空间名

					- 注意：不写时，默认为temp

				- default tablespace 默认表空间名

					- 注意：不写时，默认为system

				- quota [K/ M]  /  unlimited on   表空间名

					- 表空间限额（有限，还是无限制）

				- profile 概要文件地址

					- 每一个用户创建后：都有一个概要文件
					- 概要文件是：用户配置文件（它是）（密码限制、资源限制的命名集合）

			- 2、修改用户

				- 1、修改密码

					- alter user 用户名 indentified by 新密码

				- 2、设置密码（过期）

					- alter user 用户名 password expire

						- 下一次登陆：必须修改密码

				- 3、设置用户锁定

					- alter user 用户名 account lock

				- 4、删除用户

					- drop user 用户名 [cascade]

				- 5、强制删除（正在会话）的用户

					- 1、查询sid, serial#

						- select sid, serial# from v$session where username ="用户名"

					- 2、终止会话

						- alter system kill session '查询到的sid,  查询到的serioal# '

					- 3、删除用户

						- drop user 用户名

			- 3、概要文件

				- 1、为什么要管理：概要文件？

					- 因为

						- 概要文件是：用户配置文件（它是）（密码限制、资源限制的命名集合）

				- 2、概要文件语法

					- 1、创建语法

						- 1、create profile 概要文件名 limit

					- 2、具体参数

						- 1、sessions_per_user （数字 / unlimited）

							- 设置允许的：会话数

						- 2、cpu_per_call （数字 / unlimited）

							- 限制该用户执行的：每条sql语句可以占用的cpu总时间

						- 3、idle_time （数字 / unlimited）

							- 限制该用户的空闲时间（秒）

						- 4、failed_login_attempts

							- 限制用户登陆数据库时：可以失败的次数

						- 5、password_life_time

							- 限制口令的有效时间

					- 3、修改语法

						- alter profile 概要文件名 limit

				- 3、给用户（修改）概要文件

					- alter user 用户名 profile 概要文件名

	- 3、权限管理

		- 1、概念

			- 权限是指：在数据库中执行某种操作的权力

		- 2、分类

			- 1、系统权限

				- system privilege

					- 如：

						- 创建表：权限
						- 创建用户：权限

				- 系统授予的

			- 2、对象权限

				- 1、概念

					- （方案对象）允许用户对（特定对象操作）

				- 2、特点对象有

					- 1、表
					- 2、视图
					- 3、序列
					- 4、过程
					- 5、函数

				- 3、授予表操作：例子

					- grant insert, update, delete
					- on 表名
					- to 用户名
					- with grant option

						- （双向）传递

							- 长辈无法进行收回（谁给谁收回）
							- 如果多人都给（需要多人）都收回
							- 收回（会传递）

		- 3、获得权限途径

			- 1、自动获得

				- 用户创建模式对象：自动获得对象所有权限

			- 2、直接授权

				- grant

					- 语法

						- 1、授予权限

							- 1、grant  权限 to 用户名 

								- with admin option
								- 此句（选填）：代表获得的权限可以（继续传递）
								- 若收回（父权限）（子权限仍有效）

						- 2、收回权限

							- revoke   权限 from 用户名
							- 只要有授予权力的都可以（收回）

								- 只要是（长辈）即可

							- 多人授予（一人收回即可）

			- 3、间接授权

				- 创建角色， 给角色特权， 用户加入角色

	- 4、角色管理

		- 1、概念

			- 1、角色管理是一组：相关权限的集合
			- 2、DBA可以使用：角色管理授权、 收回

		- 2、特点

			- 1、可以拥有多种权限（系统权限、对象权限）
			- 2、只能单向（授权）， 不能（回授）
			- 3、角色不是模式对象， 不包含在（任何模式中）

		- 3、创建角色

			- create role 角色名
			- not identified / identified

				-  by 密码 / externally / globally

			- 注意：

				- 1、角色名（不能重复）
				- 2、角色名（不能）与（数据库名） 相同

		- 4、角色的授予

			- 1、grant 角色名 to 用户名

				- 授予用户

			- 2、grant 角色名 to 角色名

				- 授予角色

		- 5、（启用）和（禁用）角色

			- 1、启用

				- set role 角色 

					- identify  by 密码
					- 设置了密码时：需要填写

			- 2、禁用

				- set 角色名 none

			- 3、例子

				- 1、设置默认角色

					- alter user 用户名 default role 角色名
					- alter user只能（把直接角色设置为：默认角色）间接（角色无法操作）

				- 2、查看（授予）的信息

					- 1、查看角色信息

						- select * from role_role_privs where '被授予者'

					- 2、查看系统权限

						- select * from role_sys_privs where role='被授予者'

					- 3、查看对象权限

						- select * from role_tab_privs where role ="被授予者"

			- 4、预定义角色

				- 1、connect

					- 基本用户角色， 它允许（被授予者）连接到数据库

				- 2、resource

					- 用户应用开发人员：建表、创建序列、存储过程、触发器等

				- 3、DBA

					- 用于：数据库管理员

						- DBA管理者可以给其他数据库（用户）授予任何系统权限

	- 5、文件的管理

## 8、序列和同义词

### 1、本章讲解

- 1、序列

	- 1、概念

		- oracle数据库（生成的：整数序列号）

			- 可以用来做主键

	- 2、语法

		- create sequence 序列名
		- start with 起始数值
		- minvalue 最小值 / nominvalue
		- maxvalue 最大值 / nomaxvalue
		- increment by 步长
		- nocycle

			- 不循环

		- cache 缓冲大小 / nocache

	- 3、修改序列最大值：

		- alter sequence 序列名 maxvalue 大小

- 2、同义词

	- 1、概念

		- 别名

	- 2、分类

		- 1、共有同义词

			- create public synonym 别名 for 表名

		- 2、私有同义词

## 9、表

### 1、表的类型

- 1、堆组织表

	- 普通的（标准数据表）， 以堆的方式管理

- 2、索引组织表

	- 按照索引结构存储数据的表

- 3、聚簇表

	- 1、概念

		- 一个或多个表组成的组，这些表（物理地）存储在相同的（数据块上），有（相同聚簇键值）的所有行会（相邻地物理存储）

	- 2、分类

		- 1、索引聚簇表
		- 2、散列聚簇表
		- 3、有序散列聚簇表

- 4、嵌套表

	- 表中表

- 5、临时表（重点）

	- 临时表一直存在，只是数据会被删除

- 6、外部表（重点）

	- 外部表（数据）存储在（数据库之外）的（文件系统中）。相当于（硬盘）

- 7、分区表（重点）

	- 大表分小表：例如大于2G

- 8、对象表

### 2、创建表

- 1、建表

	- 1、堆组织表
	- 2、临时表

		- 1、语法

			- create global temporary table
			- on commit

				- delete rows

					- 事务级（临时表），每次提交事务后， Oracle数据库将（删除）临时表中的所有数据

				- preserve rows

					- 会话级（临时表）， 当（会话）结束后，Oracle数据库将（删除）所有数据

		- 2、例子

			- 1、创建临时表

				- create global temporary table temp_goods
				- (goodsId number, goodsNum number)
				- on commit delete rows;

- 2、表特性

	- 1、tablespace
	- 2、storyge
	- 3、logging / nologging
	- 4、cache / nocache

- 3、数据类型

	- 1、数值型

		- 小数

			- number(p, s)

				- s可以是负数

			- dec(decimal)小数

		- 整数

			- int

	- 2、大对象型

		- 1、blob

			- 保存（非结构化）的（二进制）大对象（数据）

				- 最大128T

		- 2、clob

			- 保存（单字节）或（多字节）字符数据

				- 最大128T

	- 3、Rowid型

		- rowid

			- 64位基本编号系统，表示行在（表中的）唯一地址

### 3、修改表

- 1、添加列

	- alter table 表名 add 字段名  类型

- 2、虚拟列

	- 1、概念

		- 虚拟列通过（引用表中的）（其他列）来计算， 而其中的（数据）没有真正的保存在数据文件中

	- 2、虚拟列的注意点

		- 1、虚拟列只能在（普通数据表）中创建，其他表不行
		- 2、一旦添加了虚拟列：则不能进行（插入）操作

	- 3、例子：

		- alter table dhb.emp
		- add(wage_grade char(2) as 
		- ( case when wage > 8000 then '高' when 
 wage >= 5000
		- and wage < 8000 then '中'else '低' end ));

- 2、修改列

	- 1、语法

		- 1、设置新的（数据类型）

			- alter table 表名 modify 列名  新数据类型

		- 2、设置列（不可用）

			- alter table 表名 set unused (列名)；

		- 3、删除（不可用）列

			- alter table 表名 drop unused 列名

		- 4、修改（表名）

			- alter table 旧表名 rename to 新表名

		- 5、修改（表空间）

			- alter table dhb.emp move tablespace 新表空间

		- 6、添加（表）注释

			- comment table on table 表名 is 注释

		- 7、添加（列）注释

			- comment on column 列名 is 注释

	- 2、注意

		- 1、只有（表没有数据） 才可以（减少列长度）和降低精度
		- 2、不能修改（虚拟列）的（数据类型）

### 4、删除和查看表

- 1、查看表的（属性）

	- desc 表名

### 5、数据完成性约束

- 1、概念

	- 约束：就是（规则），用于维护（数据库）完整性

- 2、约束分类

	- 1、列级约束

		- 建列时：建约束

	- 2、表级约束

		- 最后建：约束

- 3、约束类型

	- 1、主键约束

		- primary key
		- 非空、唯一

			- oracle自动建一个（唯一索引）

	- 2、唯一约束

		- unique
		- 列唯一

			- oracle自动建一个（唯一索引）

	- 3、检查约束

		- check

	- 4、外键约束

		- foreign key

	- 5、非空约束

		- not null

- 4、删除约束

	- 1、知道名称

		- alter table 表名 drop 约束名 

			- cascade
			- keep index

	- 2、不知道名称

- 5、约束的状态

	- 1、禁用

		- 1、语法

			- alter table 表名 enable / disable constraint 约束名

		- 2、实例

			- alter table dhb.users disable constraint fk_emp_depid

	- 2、启用

		- 实例

			- alter table dhb.user modify constraint fk_emp_depid enable

	- 3、注意：

		- 1、禁用时：会删除索引
		- 2、启用时：重现建索引
		- 3、禁用、启用（只对：此时操作后的）（数据）有效

	- 4、约束的（4种）状态

		- 1、enable validate

			- 激活检查状态

				- 默认状态

		- 2、enable novalidate

			- 激活（非检查）状态

				- 只对（更新）和（新插入）的数据进行（约束检查）

		- 3、disable validate

			- 禁用（检查状态）， 不允许（用户）进行（更新或插入）操作， 此时约束无法进行检查

		- 4、disable novalidate

			- 禁用（非检查）状态, 不对数据（进行约束检查）

	- 5、约束的检查时间

		- 1、立即检查

			- DML执行就检查

		- 2、延迟检查

			- 事务提交后 （或） set contraint immediate后

		- 3、注意：（延迟）可以改（立即） ， 立即（不能改）延迟

### 6、分区表

- 1、分区表概念

	- 表过大， 分而治之， 统一管理， 提交安全性，和效率

- 2、作用

	- 1、增强数据的可用性

		- 一个分区故障， 不影响其他分区， 照样可以使用（其他分区）

	- 2、维护方便
	- 3、均衡I/O

		- 可以把不同的分区， （映射）到磁盘以（平衡I/0）,显著改善（性能）

	- 4、改善查询性能

- 3、缺点

	- 已经存在的表（不能直接转化）为分区表

- 4、分区的方法

	- 1、范围分区

		- 1、概念

			- 数据映射到：一个范围

				- 最常用

					- 例如：日期

		- 2、注意事项

			- 1、指明：分区方法、分区列、分区描述
			- 2、必有一个（values less then）

				- 上限值

					- 不包含在内

			- 3、下限值为：前一个

		- 3、例子

			- create table range_orders
			- ( order_id varchar2(20) constraint or_pk  primary key,
			- order_date date default sysdate)
			- partition by range(order_date)
			- (partition p1 values less then(to_date('2012-1-1', 'YYYY-MM-DD')) tablespace user01,
			- (partition p2 values less then(to_date('2012-6-1', 'YYYY-MM-DD'))tablespace user2),
			- partition p3 values less then (maxvalue) tablespace user03 );

	- 2、散列分区

		- partition by hash(empno) partitions 8 
		- store in(emp1, emp2, emp3, ......, emp8)

	- 3、列表分区

		- partition by list(列名)
		- ( 
		- partition p1 values("现金") tablespace user01
		- partition p2 values("支付宝") tablespace user02
		- partition p3 values("微信") tablespace user03
		- ）

	- 4、复合分区

		- 1、概念

			- 分区方法：杂糅

	- 5、间隔分区

		- partition by range(order_date)
		- interval(numtoyminterval(6, 'month'))
		- story in(表空间1，表空间2， 表空间3 )
		- (partition p1 values less then (to_date('2012-1-1', 'yyyy-mm-dd')))

	- 6、引用分区

		- 1、概念

- 5、维护分区表

	- 1、删除分区

		- drop partition / subpartition

			- 如果表中：仅一个分区，则无法删除
			- 仅一个分区：删表后，再删

	- 2、添加分区

		- alter table ...  add partition..

	- 3、合并分区

		- 1、概念

			- 将相邻的：分区合并成一个分区

				- 分区结果是：采用较高的分区界限

		- 2、语法

			- alter table 表名 merge partition 分区1， 分区2 into partition 分区2
			- 分区二：范围更大

	- 4、移动分区
	- 5、重命名分区

		- alter table 表名  rename partition 旧分区名 to 新分区名

	- 6、截断分区

		- 1、概念

			- 删除数据， 分区保留

		- 2、语法

			- alter table 表名 truncate partition 分区名

### 7、外部表

- 1、概念

	- 1、外部表是：不在数据库中的表
	- 2、就像u盘， 插上直接用

		- 用sql语句用

	- 3、外部数据表：都是只读的，不能够更改

- 2、创建外部表

	- 1、创建外部表，不分任何盘区， 仅在数据字典中，创建元数据
	- create table 外部表名称 (字段...)
	- organization external
	- type 访问驱动程序方式
	- default directory 默认目录名
	- access parameter (

		- 访问参数

	- records delimited by

		-  newline / string

			- 分隔符

	- badfile 坏文件目录：坏文件名称 / 没有坏文件
	- logfile 日志目录： 日志名称  /  没有日志目录
	- discardfile

		- 废弃目录

	- missing field values are null

		- 没有数据

	- location

		- 数据源的名称

	- -------------------------------------------------------
	- 2、实战：创建三个目录对象

		- 数据源文件

			- create or replace directory datadir as 地址

				- 创建（数据源文件）

			- grant read on directory datadir to 用户名

				- 将读数据源文件的（权限）给用户

		- 日志文件

			- create or replace directory logdir as 地址

				- 创建（日志文件）

			- grant write on directory logdir to 用户

				- 将写（日志文件）的（权限）给用户

		- 坏记录文件

			- create or replace directory baddir as 地址

				- 创建（坏记录文件）

			- grant write on directory baddir to 用户

				- 将写（坏日志文件）的（权限）给用户

	- 3、注意事项

		- 1、需要先建立：目录对象

			- 切记：路径，区分大小写， 并且存在

		- 2、操作系统文件：分隔符只能有一种

			- 不要含有标题列， 字段、类型匹配

		- 3、会自动：创建一个日志文件
		- 4、对表中字段名称（存在特殊字符时），必须使用 英文的 “ ” （双引号）

## 10、PL/SQL基础

### 1、概念

- PL/SQL也是一种程序语言，叫做过程化SQL语言（Procedural Language/SQL）。
- PL/SQL是Oracle数据库对SQL语句的扩展。
- 有编程语言的特点，通过逻辑判断、循环等操作实现复杂的功能或者计算。
- MySQL 不支持 PL/SQL ，但支持Navicat Premium。

### 2、章节分为

- 1、PL/SQL基础

	- 1、程序结构

		- 块（Block）

			- 是PL/SQL程序中最基本的结构

	- 2、PL/SQL的（块）构成（元素）

		- 1、变量声明（可选）

			- 1、关键字

				- declare

			- 2、作用

				- 定义：变量、常量、类型、游标

		- 2、可执行部分（必选）

			- 1、关键字

				- begin

					- end;

			- 2、作用

				- 用来：编写各种PL/SQL语句、函数和存储过程

		- 3、异常处理部分（可选）

			- 1、关键字

				- exception

		- 4、注意

			- 1、表示结束编辑状态：符号

				-  /

			- 2、输出结果的：函数

				- dbms_output.put_line()

			- 3、结果要在sql * plus显示：需设置

				- set serveroutput on

			- 4、可以全部写在：记事本用@ 全路径  调用

	- 3、PL/SQL运算符

		- 1、乘方

			- **

		- 2、连接符

			- | |

	- 4、PL/SQL数据类型

		- 1、boolean
		- 2、binary_integer

			- 带符号的：数

		- 3、string

			- 等价于

				- varchar2

		- 4、record

			- 记录类型，类似于C语言中的：结构体，是一个包含一组：其他类型的（复合类型）

		- 5、ref cursor

			- 游标引用类型，是指向一个行集的：指针

	- 5、（变量）和（常量）声明

		- 1、格式

			- 1、常量

				- 常量名 constant 类型 : = 初值 

			- 

		- 2、注意

			- 1、每行只能定义一个（标识符）
			- 2、如果加上（constant）代表（常量） 必须赋初值
			- 3、如果定义：not null 

				- 必须赋初值

			- 4、赋值符号

				- : =
				- 默认值为：空

			- 5、使用%type

				- 定义为相同类型

	- 6、PL/SQL中的SQL语句

		- 1、用select 字段名  into 存入的字段名

	- 7、事务控制

		- 1、rollback
		- 2、rollback to 

	- 8、条件结构

		- 1、语法

			- begin
			-  if then  
			- elsif then
			- else 
			- end if;

	- 9、循环结构

		- loop
		- 内容
		- exit 跳出条件
		- end loop

	- 10、goto

		- 1、概念

			- 实现流程的：强制跳转

		- 2、注意

			- 1、不能转移到：任何非执行语句前面
			- 2、不能跳转到：（条件、循环、子块）内
			- 3、不能从一个if 子句， 跳转到另一个（子句）
			- 4、不能跳转 (异常错误处理执行)的PL/SQL块内

	- 1、NULL

		- 只是一个：占位符

- 2、PL/SQL控制结构
- 3、集合与记录

	- 1、PL/SQL的复合数据类型：分类

		- 1、记录类型

			- 1、概念

				- 类似：结构体

					- 多个不同：类型分量的集合

			- 2、语法

				- declare
				- type 记录名 is record(不同字段)

			- 3、记录表变量名  记录名  %rowtype

				- 用记录表的类型

		- 2、集合类型

			- 1、概念

				- 类似：数组

					- 多个相同：类型的集合

			- 2、分类

				- 1、联合数组

					- 1、概念

						- 类似于：hash表

					- 2、语法

						- 1、创建数组

							- type 数组名称 is table of 数组类型 index by binary_integer(索引值范围)

						- 2、赋值

							- 数组名(索引) : = 赋予的值

						- 3、删除

							- 1、数组变量名.delete

								- 删所有

							- 2、数组变量名.delete(n)

								- 删该：索引的元素

							- 3、数组变量名.delete(m, n)

								- 删（之间）的元素

					- 3、注意

						- 1、联合数组类型是：PL/SQL特有的，即只能在（PL/SQL中使用），不能再SQL中使用
						- 2、当为（不存在）的元素赋值时， 系统会（自动）创建该元素
						- 3、当（引用）不存在的（元素时）， 会导致（Oracle）预定义（异常） NO_DATA_FOUND

				- 2、嵌套表

					- 1、概念

						- 1、嵌套表：嵌套在另一个表（中的表）， 可用于存储（元素的：无序集合）
						- 2、与联合数组不同，嵌套表元素的（索引值）必须是（有序的），从1开始，没有固定的（上限）
						- 3、对于（嵌套表）需要使用（构造函数）进行（初始化），且嵌套表可以定义在（Oracle）数据库中

					- 2、语法

						- type 嵌套表名称 is table of 类型

					- 3、注意：

						- 1、trim删除元素后，立即释放其内存， （不再）为这些元素（保留）占位符，所以不能：再为（这些元素）赋值了
						- 2、调用（不带参数）的（delete）方法，删除所有元素后，存储空间（立即释放），无法再赋值
						- 3、调用（带参数）的（delete），删除元素后，空间（不释放），可以再次赋值

				- 3、变长数组

					- 1、语法

						- type 数组名 is varray（长度） of 类型

					- 2、注意

						- 1、变长数组是：连续存储的
						- 2、不能用delete(范围）， 删除中间项

							- 要么全删

- 4、异常处理

	- 1、概念

		- PL/SQL一旦出现异常，直接中断（整个程序）
		- 异常处理是：用来处理正常（执行过程中）未预料的事件， （程序块）异常，处理（预定义的错误）和（自定义的错误）

	- 2、分类

		- 1、（有名称）的（预定义）异常

			- Oracle定义了：错误名称， 和错误代码

				- 无需程序中定义

					- 自动触发

		- 2、（无名称）的（预定义）异常

			- 没有名称， 有错误代码

				- 定义名称， 自动触发

		- 3、（无名称）的（预定义）异常

			- 定义名称， 自己预定义

				- 手动触发

	- 3、语法

		- begin
		- exception
		- when 异常名 then 异常处理代码
		- when 异常名 then 异常处理代码
		- when others then 异常处理代码

			- 放在最后的

		- end;

## 11、游标

### 1、概念

- 说白了就是：指针

### 2、分类

- 1、显示游标

	- 1、声明游标

		- declare cursor 游标名（类型） is 参数列表

	- 2、打开游标

		- open 游标名（参数列表）

			- （游标）不能重复打开
			- 只有（打开游标）时，声明的select 语句才会被执行

	- 3、读取数据

		- fetch 游标名 into 变量名

			- 取的是：当前位置

	- 4、关闭游标

		- close 游标名

	- 补充：

		- %rowcount

			- 读取的行数

		- 

- 2、隐式游标

	- 由系统（自动）进行操作，用于处理（DML）语句和（返回）单行（数据）的select查询

## 12、触发器

### 1、触发器分类

- 1、行触发器

	- 一条触发语句，可能影响表中多行，行触发器在（触发语句）每影响一行就（激活一次）

- 2、语句触发器

	- 语句触发器，在触发语句执行期间，只激活一次，无论触发语句影响多少行数据。即使触发语句没有影响任何行，语句触发器也激活一次

- 3、instead of触发器

	- 又称为：代替触发器。Oracle Database 激活instead of 触发器后， 它将代替原来触发器语句的操作

### 

### 

*XMind - Trial Version*