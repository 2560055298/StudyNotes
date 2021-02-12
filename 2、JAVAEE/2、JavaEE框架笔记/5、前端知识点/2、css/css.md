# 1、如何学习CSS

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210212091227339.png" alt="image-20210212091227339" style="zoom:50%;" />

## 1.1、什么是css

~~~
1、概念
	CSS： 层叠样式表 (Cascading Style Sheets)
	
2、作用
	css：表现（美化网页）字体、颜色、边距、高度、宽度、背景图片、网页定位、网页浮动....

3、补充
	HTML实现（结构）、css实现（表现）、js实现（行为）
~~~

## 1.2、css的发展史

![image-20210212093534645](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210212093534645.png)

---

## 1.3、css快速入门

> 1、html 和 css写在一起时：style引入

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>第一个html+css</title>
        <!--
            总结：
               1、css未分离时：语法
                    <style>
                            选择器{
                                声明1;
                                声明2;
                                声明3;
                            }
                    </style>
              2、css分离时：通过link引入
        -->
        <style>
            h1{
                color:red;
            }
        </style>
    </head>

    <body>
        <h1>我的css文件</h1>
    </body>
</html>
~~~

> 2、html和css（分离时） 

~~~html
<link rel="stylesheet" href="css/style.css">
~~~

![image-20210212113053229](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210212113053229.png)

## 1.4、css的优势

1、==内容（和）表现分离==

2、网页结构表现统一， 可以实现==css文件可以（复用）==

3、利用==SEO==，容易被搜索引擎收录



## 1.5、css四种导入方式

~~~
1、内联方式
2、嵌入方式
3、链接方式
4、导入方式
~~~

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>css导入方式</title>

    <!--2、嵌入方式-->
    <style>
        h1{
            color: green;
        }
    </style>

    <!--3、链接方式-->
    <link rel="stylesheet" href="css/style.css">

    <!--4、导入方式-->
    <style>
        @import "css/style.css";
    </style>

</head>
<body>
    <!--1、内联方式-->
    <!--注意：样式采取（就近原则）， 谁近显示谁的（设置）-->
    <h1  style="color: red;">大标题</h1>
</body>
</html>

~~~

==比较：链接方式（和）导入方式==

~~~
1、link 属于 HTML，通过 <link> 标签中的 href 属性来引入外部文件

2、@import 属于 CSS，所以导入语句应写在 CSS 中，要注意的是导入语句应写在样式表的开头，否则无法正确导入外部文件；

3、@import 是 CSS2.1 才出现的概念，所以如果浏览器版本较低，无法正确导入外部样式文件；

4、当 HTML 文件被加载时，link 引用的文件会同时被加载，而 @import 引用的文件则会等页面全部下载完毕再被加载；
~~~

# 2、选择器

## 2.1、基本选择器（必会）

> 作用：选择页面上（某一个）或者（某一类）元素

### 2.1.1、（标签）选择器

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>（标签）选择器</title>

        <!--嵌入方式引入：css-->
        <style>
            /* 利用(标签选择器)
            	一、使用方式
                    标签名{

                    }
            	二、优点：
            		可以选择一类（标签）
            	三、缺点：
            		网页过大时，选择一类，容易产生：样式干扰
            */
            h1{
                color: palevioletred;
                background: aquamarine;
                font-size: 15px;
                border-radius: 10px;
                width: 400px;
                text-align: center;
            }
            
            p{
                font-size: 22px;
                color: bisque;
            }
        </style>
    </head>


    <body>
        <h1>剑客白丁：学java</h1>
        <h1>终生学习，死不悔</h1>

        <p>青山处处埋忠骨，何须马革裹尸还</p>
    </body>
</html>
~~~

### 2.1.2、（类）选择器class

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>类选择器</title>

        <!--内嵌方式：css-->
        <style>
            /*（类）选择器
            	一、实现方式
                        .类名{

                        }
            	二、优势
                    1、可以实现（单一选择）或（组原则）
                    2、并且（不同标签）之间，可以（复用）
            */
            .laoyang{
                color: #c97bff;
            }

            .jianke{
                color: #3bffec;
            }
        </style>
    </head>

    <body>
        <h1 class="laoyang">剑客白丁：学java</h1>
        <h1 class="jianke">终生学习，死不悔</h1>

        <p class="laoyang">青山处处埋忠骨，何须马革裹尸还</p>
    </body>

</html>
~~~

### 2.1.3、（id）选择器

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>id选择器</title>
    </head>

    <style>
        /*id选择器：
            一、使用方法
                #id名{

                }
            二、注意点：
                id必须唯一， 不可以复用
        */
        #shiying{
            color: #ff7090;
        }

        #xingyun{
            color: #68ffdb;
        }
    </style>

    <body>
        <h1 id="shiying">诗颖</h1>
        <h1 id="xingyun">星云</h1>
        <h1 >舟菲</h1>
        <h1 id="yuxing">雨欣</h1>
        <h1>你们都还好吗？</h1>
    </body>
</html>
~~~

### 2.1.4、总结三者（优先级）

> id选择器 > 类选择器 > 标签选择器                            注意：它们三者不遵循（就近原则）



## 2.2、层次选择器