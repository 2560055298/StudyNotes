# 1、maven属性

> properties属性

![image-20210127091137132](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210127091137132.png)

> 依赖可以通过：${spring.version} 进行设置(依赖版本号) version

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210127091651036.png" alt="image-20210127091651036" style="zoom:50%;" />

---

# 2、资源插件

> build标签

![image-20210127095613202](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210127095613202.png)



> 测试build的①、②代码

~~~
<build>
        <resources>
            <resource>
                <directory>src/main/java</directory>
                <includes>
                    <include>**/*.properties</include>
                    <include>**/*.xml</include>
                </includes>
                <filtering>false</filtering>
            </resource>
            
            <resource>
                <directory>src/main/resources</directory>
                <includes>
                    <include>**/*.properties</include>
                    <include>**/*.xml</include>
                </includes>
                <filtering>false</filtering>
            </resource>
        </resources>
        
</build>
~~~

> filtering的作用

~~~
当filtering为true时
	意味着${name}有效， 引用它的内容,   name是个别名
	和c语言宏定义， 生效类似
	
例子如下：
~~~

![image-20210127104146546](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210127104146546.png)

---

![image-20210127104144448](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210127104144448.png)

---

> filtering为true时：编译maven便能成功引用

![image-20210127104431317](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210127104431317.png)

![image-20210127104456772](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210127104456772.png)

---

> filtering为false时：编译maven不能成功引用， 输入原始${name}符号

![image-20210127104714804](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210127104714804.png)

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20210127104800389.png" alt="image-20210127104800389" style="zoom:50%;" />

---

# 3、参考视频

> 动力节点
>
> https://www.bilibili.com/video/BV1dp4y1Q7Hf?p=30



> 我（自己录制）的视频（测试）：
>
> https://www.bilibili.com/video/BV1Gt4y167yo

> filtering的官方文档（true和false的作用）
>
> http://maven.apache.org/plugins/maven-resources-plugin/examples/filter.html