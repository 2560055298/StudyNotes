# 1、HTML5

## 1.1、什么是HTML

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211105221639.png" alt="image-20210211105221639" style="zoom: 33%;" />



## 1.2、HTML发展史

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211105353513.png" alt="image-20210211105353513" style="zoom: 25%;" />

## 1.3、HTML5的新特性

![image-20210211105722852](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211105722852.png)

## 1.4、HTML5的优势

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211110040513.png" alt="image-20210211110040513" style="zoom:33%;" />

## 1.5、遵守的标准

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211110312045.png" alt="image-20210211110312045" style="zoom: 33%;" />





# 2、第一个HTML页面

~~~html
<!-- DOCTYPE：告诉游览器，我们要使用什么规范， 此处是html规范-->
<!DOCTYPE html>
<html lang="en">
    <!--head标签代表：网页头部-->
    <head>
        <!--meta描述性标签， 它用来描述我们网站的一些信息-->
        <!--meta一般用来做SEO-->
        <meta charset="UTF-8">
        <meta name="description" content="这是一个神奇的网站">
        <meta name="keywords" content="1、网站简介  2、网站分布  3、网站图片">

        <!--title网页标题-->
        <title>第一个网站</title>
    </head>

    <!--body标签代表：网页主体-->
    <body>

    </body>

</html>
~~~

# 3、网页（基本标签）

## 3.1、段落p标签

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
            <p>两只老虎 两只老虎</p>
            <p>跑得快 跑得快</p>
            <p>一只没有耳朵一只没有尾巴</p>
            <p>真奇怪 真奇怪</p>
            <p>两只老虎两只老虎</p>
            <p>跑得快跑得快</p>
            <p>一只没有耳朵一只没有尾巴</p>
            <p>真奇怪 真奇怪</p>
    </body>
</html>
~~~

> 注意：如果不加p标签时，是全部显示在一行。

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210210222151449.png" alt="image-20210210222151449" style="zoom: 50%;" />

---

## 3.2、换行标签br

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
            两只老虎 两只老虎<br/>
            跑得快 跑得快<br/>
            一只没有耳朵一只没有尾巴<br/>
            真奇怪 真奇怪<br/>
            两只老虎两只老虎<br/>
            跑得快跑得快<br/>
            一只没有耳朵一只没有尾巴<br/>
            真奇怪 真奇怪<br/>
    </body>
</html>
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210210223956145.png" alt="image-20210210223956145" style="zoom:50%;" />

---

## 3.3、水平线标签hr

~~~
<hr/>
~~~

---

![image-20210210225144725](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210210225144725.png)

---

## 3.4、粗字体strong

~~~html
<strong>老虎尾巴</strong>
~~~

![image-20210210225804084](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210210225804084.png)

## 3.5、斜字体em

~~~html
<em>老虎尾巴</em>
~~~

![image-20210210225933708](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210210225933708.png)

## 3.6、空格符

~~~html
&nbsp;
~~~



## 3.7、左括号

~~~html
&lt;
~~~

![image-20210210233313886](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210210233313886.png)

## 3.8、右括号

~~~html
&gt;
~~~

![image-20210210233325145](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210210233325145.png)

## 3.9、版权符号&copy

~~~html
&copy;剑客白丁
~~~

![image-20210210233455855](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210210233455855.png)

## 3.10、图像标签src

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>图像标签</title>
    </head>

    <body>
        <img src="../resources/images/1.jpg" alt="图片找不到" title="悬停文字" height="300" width="400">
    </body>
</html>
~~~



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211092635588.png" alt="image-20210211092635588" style="zoom:50%;" />

## 3.11、超链接标签a

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211100611537.png" alt="image-20210211100611537" style="zoom:50%;" />

- ==页面间链接==

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>超链接标签</title>
</head>
<body>
    <!--当前页面打开-->
    <a href="oneWeb.html" target="_self">跳转到本地页面</a>
    <!--新页面打开-->
    <a href="https://www.baidu.com" target="_blank">跳转到百度</a>
    <!--点击图片跳转-->
    <a href="https://www.taobao.com">
        <img src="../resources/images/taobao.png" alt="淘宝图片找不到" title="淘宝网" width="100" height="100">
    </a>
</body>
</html>
~~~

- ==锚链接==

> 两个步骤：
>
> ​	1、需要一个锚点
>
> ​	2、用a标签的href跳转到#锚点名

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>超链接标签</title>
</head>
<body>
    <!--设置锚点-->
    <a name="top">顶部</a>

    <!--跳转到（指定铆钉）-->
    <a href="#down">跳转底部</a>

    <!--设置锚点-->
    <a name="down">尾部</a>

    <!--跳转到（指定锚点）-->
    <a href="#top">回到顶部</a>

    <!--跳转到另一网页（指定锚点）-->
    <a href="pictureWeb.html#down" target="_blank">跳转到本地网页的（底部）</a>
</body>
</html>
~~~

- ==功能性链接==

> 两类：
>
> ​	1、邮件发送
>
> ​	2、qq推广

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>超链接标签</title>
    </head>

    <body>
        <!--发送邮件-->
        <a href="mailto:2560055298@qq.com">发送邮件</a>

        <!--qq推广-->
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2560055298&site=qq&menu=yes">
            <img border="0" src="http://wpa.qq.com/pa?p=2:2560055298:53" alt="点击这里给我发消息" title="点击这里给我发消息"/>
        </a>

    </body>
</html>
~~~

# 4、行内元素、块元素

- ==行内元素==

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211104504908.png" alt="image-20210211104504908" style="zoom:50%;" />

---



- ==块元素==

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211104410340.png" alt="image-20210211104410340" style="zoom:50%;" />

---



# 5、列表

## 5.1、什么是列表？

![image-20210211112920957](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211112920957.png)

---

## 5.2、分类

~~~
三类：
	1、有序列表
	2、无序列表
	3、自定义列表
~~~

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>列表</title>
</head>
<body>
    <!--1、有序列表（应用范围：试卷、问答）
        ol: order list
		li: list
    -->
    <ol>
        <li>前端</li>
        <li>后端</li>
        <li>运维</li>
        <li>网管</li>
    </ol>

    <!--2、无序列表（应用：导航栏、侧边栏）
        ul：Unordered list
		li: list
    -->
    <ul>
        <li>前端</li>
        <li>后端</li>
        <li>运维</li>
        <li>网管</li>
    </ul>

    <!--3、自定义列表（公司网站底部）
         dl是definition lists的英文缩写 (自定义列表)
         dt是definition term的缩写 (自定义列表组)
         dd是definition description的缩写（自定义列表描述）
    -->
    <dl>
        <dt>职位</dt>
        <dd>前端</dd>
        <dd>后端</dd>
        <dd>运维</dd>
        <dd>网管</dd>
    </dl>

    <dl>
        <dt>职能</dt>
        <dd>熏染页面</dd>
        <dd>数据查询</dd>
        <dd>调优</dd>
        <dd>维护网络</dd>
    </dl>

</body>
</html>
~~~



# 6、表格（table、tr、td）

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表格学习</title>
</head>
<body>
    <table border="1px">
        <!--行-->
        <tr>
            <!--列：当前内容（占3列）-->
            <td colspan="3">1-1</td>
            <td>1-2</td>
        </tr>

        <tr>
            <!--列：当前内容占（2行）-->
            <td rowspan="2">2-1</td>
            <td>2-2</td>
            <td>2-3</td>
            <td>2-4</td>
        </tr>

        <tr>
            <td>3-1</td>
            <td>3-2</td>
            <td>3-3</td>
        </tr>
    </table>
</body>
</html>
~~~

# 7、媒体学习（audio音频、video视频）

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>媒体学习</title>
    </head>

    <body>
        <!--1、视频
               controls：播放控件
               autoplay: 自动播放
        -->
        <video src="../resources/video/video.mp4" controls autoplay></video>

        <!-- 2、音频
               control：播放控件
               autoplay: 自动播放
        -->
        <audio src="../resources/audio/tiankong.mp3" controls autoplay></audio>
    </body>
</html>
~~~

# 8、页面分析结构

![image-20210211130937952](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211130937952.png)

---

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>页面分析结构</title>
    </head>

    <body>
        <!--网页头部-->
        <header>
            <h2>网页头部</h2>
        </header>

        <section>
            <h2>网页局部</h2>
        </section>

        <!--导航栏-->
        <nav>
            <ul>
                <li>导航1</li>
                <li>导航2</li>
                <li>导航3</li>
            </ul>
        </nav>

        <!--网页底部-->
        <footer>
            <h2>网页底部</h2>
        </footer>
    </body>
</html>
~~~



# 9、内联框架iframe

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211141819715.png" alt="image-20210211141819715" style="zoom:50%;" />

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>内联框架学习</title>
    </head>

    <body>
        <!--1、b站内联视频-->
        <iframe src="//player.bilibili.com/player.html?aid=55631961&bvid=BV1x4411V75C&cid=97257967&page=11"
                scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
        </iframe>

        <!--2、内联百度-->
        <iframe src="http://www.baidu.com" frameborder="0" width="400" height="200"></iframe>


        <!--3、通过超链接：将跳转内容（嵌入iframe中），其中name为框架标识名-->
        <iframe src=""  name="myIframe" frameborder="0" width="500" height="300"></iframe>

        <a href="https://www.yangzaikongzhongfei.com" target="myIframe">点击嵌入</a>
    </body>
</html>
~~~

# 10、表单

## 10.1、表单基本框架

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表单学习</title>
</head>
<body>
    <form action="pictureWeb.html" method="post">
        <p>
            用户名：<input type="text" name="username">
        </p>

        <p>
            密码：<input type="password" name="password">
        </p>

        <p>
            <input type="reset" value="重置">
            <input type="submit" value="提交">
        </p>
    </form>
</body>
</html>
~~~

## 10.2、表单元素（格式）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210211151155705.png" alt="image-20210211151155705" style="zoom: 33%;" />

---

## 10.3、单选按钮

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表单学习</title>
</head>
<body>
    <form action="pictureWeb.html" method="post">
        <p>
            <!--单选按钮
                type:radio 单选按钮类型
                value：提交后的值
                name：分组名称（相同才能实现：单选）
            -->
            <input type="radio" value="boy" name="sex">男
            <input type="radio" value="girl" name="sex">女
        </p>
    </form>
</body>
</html>
~~~

## 10.4、多选框

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表单学习</title>
</head>
<body>
    <form action="pictureWeb.html" method="get">
        <p>
            <input type="checkbox" name="hobby" value="sleep"/>睡觉
            <input type="checkbox" name="hobby" value="sing"/>唱歌
            <input type="checkbox" name="hobby" value="chat"/>聊天
            <input type="checkbox" name="hobby" value="play"/>玩游戏
        </p>
    </form>
</body>
</html>
~~~

