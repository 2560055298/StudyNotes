# Maven

## 1、为什么要使用Maven?

### 1、原因

- 1、一句话概括

	- Maven可以改变（项目）的（开发）和（管理）

- 2、例如

	- 1、Maven可以管理 jar 文件
	- 2、自动下载 jar 和 它的（文档）源代码
	- 3、管理 jar 的（直接依赖） a.jar 依赖于 b.jar ， Maven会自动下载 b.jar
	- 4、管理你需要的jar版本
	- 5、帮你测试代码：是否正确
	- 6、帮你打包文件， 形成 jar 文件， 或者 war 文件
	- 7、帮你部署项目

### 2、举例

- 完成一个Java项目需要做什么？

	- 1、分析项目需要做什么？ 知道项目有哪些组成成分？
	- 2、设计项目， 通过哪些步骤？ 使用哪些技术？需要多少人？ 多长时间？
	- 3、组建团队，招人， 购置设备、服务器、软件、笔记本
	- 4、开发人员写代码， 开发人员需要测试自己的代码。重复多次的工作
	- 5、测试人员，测试项目功能是否符合要求
	- 6、测试开发人员提交代码---有问题---返回开发人员 ---开发人员（修改后，自行测试， 然后转交测试人员）

		- 循环反复

- 传统开发项目问题，没有使用Maven管理项目

	- 1、会有很多的模块， 模块之间会（有关系）， 手工去（管理关系）， 比较繁琐。
	- 2、会需要很多的第三方功能， 需要很多jar文件， 需要（手工）去从（网络）中， 获取jar

		- 很费时间

	- 3、需要管理 jar 的版本， 你需要的是 mysql 5.1.5.jar

		- 那么你不能给一个：mysql 4.0 jar

	- 4、管理 jar 文件之间的（依赖）， 你的项目需要使用 a.jar 需要使用 b.jar的类， 那么必须先（获取b.jar）才可以使用a.jar

### 3、再次补充maven

- 1、maven：是什么？

	- maven是一个（项目构建）的（工具）

- 2、maven作用：是什么？

	- 1、管理依赖

		- jar管理的：下载，版本

	- 2、构建项目

		- 完成项目代码的：编译、测试、打包、部署

- 3、maven使用方式

	- 1、独立使用maven：使用maven各种命令， 完成代码的：编译、测试、打包
	- 2、结合开发工具使用：一般在idea中使用maven：简单，快捷，不需要记命令

- 4、maven的安装

	- 1、到maven.apache.org中下载：maven的zip文件
	- 2、解压缩zip文件，到一个目录（非中文目录）
	- 3、配置环境变量：M2_HOME = "maven目录"
	- 4、在path中加入：%M2_HOME%\bin
	- 5、测试maven的安装， 使用mvn -v 查看maven的版本信息

## 2、Maven的项目构建

### 1、什么是项目构建？

- 构建是面向过程的， 就是一些步骤， 完成项目代码的：编译、测试、运行、打包、部署 等

### 2、Maven支持的（构建）包括有：

- 1、清理

	- 把之前（项目编译）的东西（删除掉）， 为新的编译代码：做准备

- 2、编译

	- 批量的：把程序的（源代码）编译为（可执行代码）， java  -->> class文件

- 3、测试

	- Maven可以执行（测试程序代码）， 验证你的功能是否正确

- 4、报告

	- 生成测试结果的文件， 测试通过没有？

- 5、打包

	- 把你的项目中（所有的.class）文件， （配置）文件，等所有资源，放到一个（压缩文件中）， 这个压缩文件就是（项目结果文件），通常java程序，压缩文件是jar拓展名， 对于web应用压缩文件是.war

- 6、安装

	- 安装主程序（会把：本工程打包， 并且按照：本工程坐标， 保存到本地仓库中）

- 7、部署

	- 把程序安装好：可以执行

### 3、Maven的（核心文件）

- 1、POM

	- 1、概念

		- 一个文件名称为（pom.xml）， pom翻译过来叫做：项目对象模型

	- 2、作用

		- maven把一个项目当做一个（模型使用）， 控制maven构建项目的过程， 管理 jar 依赖

	- 3、包含

		- 1、坐标（gav）

			- 1、概念

				- 唯一的标识：一个项目

			- 2、包含

				- groupId

					- 1、概念

						- 组织 id ， 一般是公司（域名）倒写

					- 2、举例

						- com.baidu.appolo

				- artifactId

					- 1、概念

						- 项目名称， 也就是（模块名称），  对应groupId项目中的（子目录）

					- 2、举例
- appolo
					
- version
				
	- 1、概念
				
		- 项目的版本号， 如果（项目）还在开发中， 是不稳定版本， 通常在版本后带：SNAPSHOT
				
	- 2、举例
				
		- version 使用三位数字表示， 例如：1.1.0
			
- 2、packaging
		
	- 打包后压缩文件的拓展名：默认是jar , web应用是：war
		
		- 所以可以不写：（因为默认为jar）
		
- 3、依赖
		
	- dependencies 和 dependency 相当于是：java代码中import
		
		- 负责导入：项目中需要使用的各种资源
		
- 4、properties
		
	- 设置属性
		
- 5、build
		
	- maven在进行项目的构建时，配置信息，例如设置编译插件的 jdk版本
	
- 2、约定的目录结构

	- maven项目的目录（和）文件的位置都是：规定的

		- 具体

			- Hello

				- 1、概念

					- 每一个Maven项目在磁盘中都是一个（文件夹）项目-Hello

				- 2、包含

					- src

						- 1、概念

							- 无

						- 2、包含

							- main

								- 1、概念

									- 存放：主程序java代码和配置文件

								- 2、包含

									- java

										- 放置：程序包（和）包中的java文件

									- resources

										- 放置：java程序中需要使用的配置文件

							- test

								- 1、概念

									- 放置：测试程序代码（和）文件（可以没有）

								- 2、包含

									- java

										- 放置：测试程序包（和）包中的java文件

									- resources

										- 放置：测试java程序中需要使用的配置文件

					- pom.xml

						- 1、概念

							- project object model 项目对象模型， 控制项目构建的过程， 管理jar依赖

						- 2、包含

							- maven的核心文件（maven项目必须有）

- 3、坐标

	- 1、概念

		- 唯一的标识：一个项目

	- 2、包含

		- groupId

			- 1、概念

				- 组织 id ， 一般是公司（域名）倒写

			- 2、举例

				- com.baidu.appolo

		- artifactId

			- 1、概念

				- 项目名称， 也就是（模块名称），  对应groupId项目中的（子目录）

			- 2、举例

				- appolo

		- version

			- 1、概念

				- 项目的版本号， 如果（项目）还在开发中， 是不稳定版本， 通常在版本后带：SNAPSHOT

			- 2、举例

				- version 使用三位数字表示， 例如：1.1.0

- 4、依赖管理

	- 管理你的项目可以使用：jar文件

- 5、仓库管理（了解）

	- 你的资源存放的位置

- 6、生命周期（了解）

	- maven工具构建项目的过程， 就是生命周期

- 7、插件和目标（了解）

	- 执行maven构建的时候：用的工具是（插件）

- 8、继承
- 9、聚合

### 4、配置Maven环境

- 1、由于：Maven是 Java写的， 所以要先配置 JAVA_HOME  = "JDK路径"
- 2、其次配置：M2_HOME = "Maven路径"
- 3、进而配置：path = "%M2_HOME%\bin"
- 4、最后测试：mvn -v

### 5、Maven进行批量编译

- cmd 进入：项目文件后， 利用 mvn  compile

	- 结果是在项目的（根目录）下生成的target目录（结果目录），最后的class文件都在target目录中

- 补充

	- 1、mvn compile会 编译哪些文件？
- 编译src/main 目录下的 所有java文件
		
- 2、编译后：会下载什么？
	
	- 下载了很多的jar包
	
- 3、编译后：为什么要下载？
	
	- 因为maven工具执行操作：需要很多（插件）java类完成
	
- 4、下载后的东西（存放）到哪里？
	- C:\Users\Lenovo\.m2\repository (本地仓库)
	
	- 5、中央仓库的地址
- https://repo.maven.apache.org

### 6、配置：本地仓库（地址）

- 第一步

	- 到maven下的：conf 备份（settings.xml）文件

- 第二步

	- 修改 <localRepository> 标签， 即可

### 7、仓库

- 1、什么是仓库？

	- 仓库是存放东西的， 存放maven使用的 jar 和我们项目使用的 jar 
	- 补充

		- maven 使用的插件（各种jar）
		- 项目使用的jar(第三方开发工具)

- 2、仓库的分类

	- 1、本地仓库

		- 1、概念

			- 就是你的（个人）计算机的文件夹：存放各种jar

	- 2、远程仓库

		- 1、概念

			- 在互联网上的， 使用（网络）才能使用的（仓库）

		- 2、分类

			- 1、中央仓库

				- 最权威的， 所有的开发人员都共享使用的一个：集中的仓库
				- https://repo.maven.apache.org 中央仓库的地址

			- 2、中央仓库镜像

				- 就是中央仓库的备份， 在各大洲，重要的城市都是镜像

			- 3、私服

				- 在公司内部， 在局域网中使用的， 不是对外使用的

- 3、仓库的使用

	- maven仓库的使用：不需要人为参与
	- 例如

		- 开发人员需要使用mysql驱动时
		- maven首先查看：本地仓库
		- 若本地仓库没：则去（私服）查找
		- 若（私服）没有则去：镜像查找
		- 镜像没有则去：中央仓库查找

### 8、Maven的常用命令

- mvn clean

	- 清理（会删除）原来编译（和）测试的目录， 即target目录， 但是已经install 到仓库的包（不会）删除

- mvn compile

	- 批量编译 main/java/目录下的 java文件为：class文件， 并且存储到（target/classes 下面）
	-  把 main / resources 目录下的（所有文件），都拷贝到（target/classes目录下）

- mvn test-compile

	- 编译测试程序（会在当前目录下生成一个target）里面存放编译（主程序）之后生成的字节码文件

- mvn test

	- 测试（会生成一个目录 surefire-reports）保存测试结果

- mvn package

	- 打包主程序（会：编译、编译测试、测试、并按照pom.xml配置，把主程序打包成 jar 包 或者war包）

- mvn install

	-  安装主程序(会把本工程打包， 并且按照本工程的坐标保存到本地仓库中)

- mvn deploy

	- 部署主程序（会把本工程打包， 按照本工程的坐标：保存到本地库中， 并且还会保存到私服仓库中， 还会自动把项目部署到web容器中）

- 注意：执行以上命令（必须）在命令行进入（pom.xml）所在目录

### 9、Maven的生命周期

- 1、概念

	- 就是maven构建项目的过程

- 2、包含

	- 清理、编译、测试、报告、打包、安装、部署

### 10、maven的命令

- maven 独立使用， 通过命令，完成 maven 的生命周期执行
- maven 可以使用命令， 完成项目的（清理、编译、测试 等等）

### 11、maven的插件

- maven命令执行时， 真正完成功能的是（插件）， 插件就是一些（jar文件）

### 12、单元测试（测试方法）

- 1、概念

	- 用的是：junit, junit是一个专门测试的（框架工具）， 方法是测试的（基本单元）
	- maven借助（单元测试）， 批量的测试你（类中）的（大量方法）是否符合预期的

- 2、使用步骤

	- 1、在pom.xml中：加入依赖项
	- 2、在maven项目中的：src/test/java目录下：创建测试程序

		- 1、推荐定义

			- 1、测试（类的名称）是：Test + 测试类名
			- 2、测试（方法名）是：Test + 方法名

		- 2、注意

			- 其中：testAdd （叫做：测试方法， 它的定义规则）
			- 1、方法是：public （必须）
			- 2、方法：没有返回值  （必须）
			- 3、方法名称是：自定义的， 推荐是Test + 方法名称
			- 4、在方法上面加上：@Test  (必须)

### 13、使用idea中设置：maven

- 1、配置当前工程设置：setting

	- 1、设置maven下的：build

		- 1、Maven Home directory

			- maven的安装目录

		- 2、User Setting File

			- 就是maven安装目录conf/setting.xml配置文件

		- 3、Local Repository

			- 本地仓库的：目录位置

	- 2、设置build下的--Runner

		- VM Options

			- -DarchetypeCatalog=internal

		- JRE

			- 项目JDK

	- 3、archetypeCatalog = internal 作用

		- maven创建项目时， 会联网下载模板文件（此文件比较大）， 使用archetypeCatalog = internal后：不用下载， 创建maven项目速度快

- 2、配置：以后新工程的设置：OtherSettings

### 14、创建项目

- 1、JavaSE项目

	- 使用模板：maven-archetype-quickstart

- 2、JavaWeb项目

	- 使用模板：maven-archetype-webapp

### 15、依赖范围

- scope标签

	- compile

		- 默认用：compile

			- 对主程序：有效
			- 对测试程序：有效
			- 参与打包
			- 参与部署

	- test

		- 只对：测试程序有效

	- provided

		- 只对

			- 主程序有效
			- 测试程序有效

### 16、maven的常用操作

- 1、maven的（属性设置）

	- <properties>

		- 1、第一个参数

			- <project.build.sourceEncoding>  UTF-8  </project.build.sourceEncoding>
			- maven构建项目：使用编码， 避免中文乱码

		- 2、第二个参数

			- <maven.compiler.source> 1.8 </maven.compiler.source>
			- 编译代码使用：jdk版本

		- 3、第三个参数

			- <maven.compiler.target> 1.8 </maven.compiler.target>
			- 运行程序使用的：jdk版本

		- 4、第四个参数

			- <spring.version>  5.2.5 </spring.version>
			- 自定义变量， 表示版本号

				- 通过：${spring.version} 使用

- 2、maven的（全局设置）

### 17、配置信息

- build

	- resource

*XMind - Trial Version*