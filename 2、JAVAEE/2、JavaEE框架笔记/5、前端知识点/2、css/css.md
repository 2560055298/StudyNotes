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

### 2.2.1、后代选择器

~~~css
/*后代选择器：祖爷爷、爷爷、父亲、我*/
body p{
    background:#2efffd;
}
~~~

### 2.2.2、子选择器

~~~css
/*子选择器：只有一代，如：爷爷、父亲*/
body>p{
    background: #c97bff;
}
~~~

### 2.2.3、相邻兄弟选择器

~~~css
/*相邻兄弟选择器(同辈)：当前.class + p， （下一行）为（p）类型，才选中,否则无效*/
.xiongdi + p{
    background: palevioletred;
}
~~~

### 2.2.4、通用选择器

~~~css
/*通用选择器（同辈）：当前行下面所有（相同标签的同辈）*/
.xiongdi~p{
    background: yellow;
}
~~~



## 2.3、结构（伪类）选择器

1、选择子元素：==（第一个、最后一个）==

~~~css
/*伪类选择器：ul p 中的（第一个）（子元素）*/
ul p:first-child{
    background: #c97bff;
}

 /*伪类选择器：ul p 中的（最后一个）（子元素）*/
ul p:last-child{
    background: #ff7090;
}
~~~

2、通过==顺序选择==：父类元素中的（某个元素）

~~~css
 /*伪类选择器(按顺序)：先找到p的父类body，在通过父类的（子类中）顺序第2个元素（为p时选中），*/
 p:nth-child(2){
 	background: yellow;
 }
~~~

3、通过==类型选择==：父类元中的（某个元素）

~~~css
 /*伪类选择器(按类型)：先找到p的父类body, 再从body的（子类中）找到（p类型）的（第2个元素）*/
 p:nth-of-type(2){
 	background: green;
 }
~~~

4、==鼠标悬停==：让某个元素（样式改变）

~~~css
/*鼠标悬浮上：文字变色*/
a:hover{
    color: aquamarine;
}
~~~

## 2.4、属性选择器（必会）

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>属性选择器</title>

        <style>
            .demo a{
                color: #c97bff;
                float: left;    /*左浮动：首先会自动切换为（块级元素），然后左浮动*/
                display: block;
                height: 50px;   /*若不是（块级元素）：设置宽、高是（无效的）*/
                width: 50px;
                border-radius: 10px;
                background: beige;
                text-align: center;
                text-decoration: none;
                margin-right: 5px;  /*外边距：右边推5px, 从第一个元素的（右边5px）起始*/
                font: 20px/50px Arial;  /*50为：line-height属性是指文本行基线之间的距离，而不是字体的大小*/
            }

            /*1、a标签的属性：（存在）id属性的元素*/
            a[id]{
                background: yellow;
            }

            /* 2、a标签的属性：（存在）id=first的元素*/
            a[id=first]{
                background: #68ffdb;
            }

             /* 3、a标签的属性：class中(仅有）links item first的元素 */
            a[class="links item first"]{
                background: palevioletred;
            }

            /*4、a标签的属性：class中（存在）links的元素*/
            a[class*= links]{
                background: deepskyblue;
            }

            /*5、a标签的属性：存在href内容中（前缀为http)的元素*/
            a[href^="http"]{
                background: #3bffec;
            }

            /*6、a标签属性：存在href内容中（后缀为doc）的元素*/
            a[href$=doc]{
                background: cornflowerblue;
            }

        </style>
    </head>

    <body>
        <p class="demo">
            <a href="https://www.baidu.com" class="links item first" id="first">1</a>
            <a href="https://www.yangzaikongzhongfei.com">2</a>
            <a href="images/123.html" class="links item active" target="_blank" title="test">3</a>
            <a href="images/123.png" class="links item">4</a>
            <a href="images/123.png"class="links item">5</a>
            <a href="abc" class="links item">6</a>
            <a href="/a.pdf" class="links item">7</a>
            <a href="/abc.pdf" class="links item">8</a>
            <a href="abc.doc" class="links item">9</a>
            <a href="abcde.doc" class="links item last">10</a>
        </p>
    </body>
</html>
~~~

> 总结

~~~
（属性)选择器：支持正则表达式
	1、属性名 = 属性值     （绝对等于：仅存在属性值）才选中
	2、属性名 *= 属性值     (相对等于：包含属性值) 就选中
	3、属性名 ^= 属性值     (以该：属性值为前缀)就选中
	4、属性名 $= 属性值     (以该：属性值为后缀)就选中
~~~



# 3、美化网页

## 3.1、为什么要美化页面？

~~~
原因：
	1、传递信息，凸显主题
	2、提高用户体验。
~~~

## 3.2、字体样式

> span标签作用：突出重要的文字

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>美化网页</title>
    <style>
        /*span是：行内元素*/
        span{
            /*
                oblique斜体:
                bolder粗体:             (等价于)font-weight: 900;
                25px字体大小：           (等价于)font-size:25px;
                新宋体（字体）            (等价于)font-family: 新宋体;
            */
            font: oblique bolder 25px "新宋体";

            /*字体颜色*/
            color: aquamarine;
            
        }
    </style>

</head>

    <body>
        我在复习css, <span>剑客白丁</span>
    </body>

</html>
~~~

## 3.3、文本样式

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210213161902296.png" alt="image-20210213161902296" style="zoom: 67%;" />

---

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>文本格式</title>

        <style>
            /*
              1、文本颜色(3种)如下：
                   color:#68ffdb;                   68为R, ff为G, db为B
                   color:rgb(11, 22, 33);           11为R, 22为G, 33为B
                   color: rgba(0, 0, 0, 0.2);       RGBA , A为透明度（0~1之间）
            */
            .title1{
                color: #cdb534;
            }

            /*
                2、文本的对齐方式（3种）
                        text-align: left;        居左
                        text-align: center;      居中
                        text-align: right;       右边
            */
            .title1{
                text-align: center;
            }

            /*3、首行缩进*/
            .p1{
                text-indent: 2em;  /*缩进：两个字*/
            }

            /*4、设置：行高*/
            .p2{
                background: aquamarine;
                height: 40px;
                line-height: 40px;      /*当 行高 == 高度， 默认是（正中水平轴显示）*/
            }

            /*
                5、装饰（实例如下：）
                    ①、去除a（超链接）的下滑线：
                    ②、给p标签添加（上、中、下）划线
                        上划线：text-decoration: overline;
                        中划线：text-decoration: line-through;
                        下划线：text-decoration: underline;
            
            */
            .a1{
                text-decoration: none;      /*去除下划线*/
            }

            .p3{
                text-decoration: line-through;      /*添加：中划线*/
            }

            /*6、文本图片：水平对齐*/
            img, span{
                vertical-align: middle;         
            }

        </style>
    </head>

    <body>
        <p class="title1">孔子的三个接班人</p>
        <p class="p1">颜回虽然是孔子内定的接班人，但因为死在孔子之前，没有接替老师传道，因此在《论语》中无法享受“颜子”这一 头衔。有子和曾子之所以可以称“子”，乃是因为他们在孔子死后，曾接替老师传道。</p>
        <p class="p2">当一个大宗师的思想体系过于丰富的时候，从他的衣钵传人来接近他，或许是一个好办法。对于大圣先师孔子来说， 尤是如此。</p>
        <p class="p3">翻过《论语》的人都知道孔子指定的衣钵传人是颜回。孔子什么都好，就是不肯轻易赞美人，尤其是比他年纪小的人 。只对颜回例外。除非孔子不开口，开口就说颜回的好话。师徒俩感情好着呢。</p>
        <p>《史记·孔子世家》记载，孔子周游列国期间，路过匡地，遇到了危险。匡人对孔子发难，好险没要了孔子的命。逃 难过程中，有些弟子和老师走散了，其中就有颜回。颜回好不容易赶了上来，和老师会合。孔子见到颜回，激动得老泪纵横， 用颤抖的声音说：“我还以为再也见不到你了呢！”颜回赶紧双膝跪倒，流着泪和孔子说：“先生您还在，我颜回怎么敢死在 前头？”</p>

        <a href="" class="a1">我有下滑线</a>

        <p>
            <img src="images/picture.png" alt="图片加载不出来哦！！">
            <span>12312312312312</span>
        </p>

    </body>

</html>
~~~

## 3.4、超链接伪类（和）阴影

-  a:hover	==悬浮==
- a:active     ==鼠标：按住（未释放的状态）==
- text-shadow  ==添加：文本阴影==

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
            <meta charset="UTF-8">
            <title>超链接伪类</title>

        <style>
            a{
                text-decoration: none;      /*去掉：下划线*/
                color: #000000;
            }

            /*1、悬浮：字体变大、颜色更替*/
            a:hover{
                font-size: 18px;
                color: #e0d363;
            }

            /*2、鼠标：按住（未释放的状态）*/
            a:active{
                color: crimson;
            }

            /*
                3、添加：文本阴影
                        ①、10px当前文字：x轴 + 10px
                        ②、8px当前文字：y轴 + 8px
                        ③、模糊的距离：越小越清晰
                        ④、#68ffdb：阴影的颜色
            */
            .price{
                text-shadow: 10px 8px 0px #68ffdb;
            }
        </style>


    </head>

    <body>
            <img src="images/book.png" alt="人类简史书籍找不到">
            
            <p>
                作者: <a href="">[以色列] 尤瓦尔·赫拉利</a>
            </p>

            <p class="price">
                定价: <a href="">CNY 68.00</a>
            </p>
    </body>
</html>
~~~

## 3.5、列表

> li标签：修改（标识符） list-style:

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210213185525288.png" alt="image-20210213185525288" style="zoom: 67%;" />



## 3.6、添加背景

> background: red url("images/car.png") 100px 100px  no-repeat ;

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>添加背景</title>

        <style>
            /*标签：选择器*/
            div{
                width: 500px;
                height: 300px;
                border: 4px solid #f57f92;
            }

            /*1、（重复图片）平铺：x轴 和 y轴*/
            .div1{
                background:url("images/car.png");
            }

            /*2、（重复图片）平铺：x轴*/
            .div2{
                background:url("images/car.png") repeat-x;
            }

            /*3、（重复图片）平铺：y轴*/
            .div3{
                background: url("images/car.png") repeat-y;
            }

            /*4、实现
                 ①、div背景颜色：red
                 ②、背景图片：url("images/car.png")
                 ③、图片在div中坐标：(100px, 100px)
                 ④、不平铺：no-repeat
            .div4{
                background: red url("images/car.png") 100px 100px  no-repeat ;
            }
        </style>
    </head>

    <body>
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
    </body>
</html>
~~~

## 3.7、渐变背景

> 直接网上找：
>
> https://www.grabient.com/

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210213222637021.png" alt="image-20210213222637021" style="zoom:50%;" />



~~~css
body{
    background-color: #FFDEE9;
    background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
}
~~~



# 4、盒子模型

![image-20210214100003307](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210214100003307.png)

---

## 4.1、border（边框学习）

~~~css
border: 1px dashed red;			/*虚线*/
border: 1px solid red;			/*实线*/
~~~

## 4.2、外边距、内边距学习

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210214114936162.png" alt="image-20210214114936162" style="zoom: 67%;" />

- 外边距：margin

~~~css
讲解：
	margin: 0;    				上下、左右都为0
    margin: 0 auto;				上下为0， 左右（平分）
    margin: 1px 2px 3px 4px;	顺时针：上、右、下、左（1px, 2px, 3px, 4px）
	margin-(top、left、right、bottom)  还有这种写法
~~~

- 内边距：padding==如（外边距）一致==

~~~css
padding没有auto这一说法
~~~

## 4.3、求一个盒子的大小？

~~~css
margin + border + padding + 内容大小
~~~



## 4.4、圆角边框border-redis

~~~css
img{
  border-radius: 61px;            /*图片的：宽为122, border-radius = 宽/2 时为圆角*/
}
~~~

## 4.5、盒子阴影

> 注意：参照物的选取

~~~css
<style>
    #div01{
        width: 124px;
        /*注意：移至中心，需要（块元素）有（宽），因为初始块元素，宽为（整个屏幕）*/
        margin: 227px auto;			

    }

img{
    	/*图片的：宽为122, border-radius = 宽/2 时为圆角*/
        border-radius: 136px;           
    	/*shadow要写在：参照物体需选择图片，不然会（出现）白框*/
        box-shadow: 20px 10px 100px #0ad0be; 
}
</style>
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210214175756304.png" alt="image-20210214175756304" style="zoom:33%;" />

## 4.6、行内元素、块元素

### 4.6.1、行内元素

- 概念

> 行内元素：inline element
>
> 也叫内联元素、内嵌元素等，只能容纳文本或其他内联元素。
>
> 元素样式为display : inline的都是行内元素。

- 特点

~~~
①、（行内元素）和（其他元素）都在一行上
②、设置宽度width 无效，设置高度height 无效，可以通过line-height来设置。
③、
④、内联元素只能容纳文本或者其他内联元素
对行内元素，需要注意如下
~~~

> 1、
> 2、
> 3、设置margin 只有左右margin有效，上下无效。
> 4、设置padding只有左右padding有效，上下则无效。注意元素范围是增大了，但是对元素周围的内容是没影响的。



### 4.6.3、行内元素：标签

~~~
例如：
    a – 锚点
    br – 换行
    em – 强调
    img – 图片
    input – 输入框
    label – 表格标签
    span – 常用内联容器，定义文本内区块
    strong – 粗体强调
    textarea – 多行文本输入框
~~~

## 4.7、块元素

### 4.7.1、概念

> 1、block element (块元素) 每个块级元素默认占一行高度
>
> 2、一行内添加一个块级元素后，一般无法添加其他元素（float浮动后除外）
>
> 3、两个块级元素连续编辑时，会在页面（自动换行）显示。
>
> 4、块级元素：可以包含块级，也可以包含行级元素。
>
> 5、元素样式的display:block都是块级元素。



### 4.7.2、inline元素的特点

~~~
①、总是在新行上开始；
②、高度，行高以及外边距和内边距都可控制；
③、宽度缺省是它的容器的100%，除非设定一个宽度。
④、它可以容纳内联元素和其他块元素
~~~



### 4.7.3、块元素：标签

~~~css
div – 常用块级容易，也是CSS layout的主要标签
h1~h6标题
p – 段落
form – 交互表单
table – 表格
ol – 有序表单
ul – 无序列表
dl – 定义列表
hr – 水平分隔线
menu – 菜单列表
~~~

## 4.8、行内元素、块元素对比

==1、对比一==

~~~css
 div{
                width: 200px;
                height: 200px;
                border: 2px dashed dodgerblue;
            }

            span{
                width: 200px;
                height: 200px;
                border: 2px dashed dodgerblue;
            }
~~~



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210214185219118.png" alt="image-20210214185219118" style="zoom: 67%;" />

---

==2、切换（块与行）==

~~~css
 /*
                display: inline;                设置变为：行内元素
                display: block;                 设置变为：块元素
                display: inline-block;          既为块内元素， 又是行内元素
*/

div{
    width: 200px;
    height: 200px;
    border: 2px dashed dodgerblue;
    display: inline-block;
}

span{
    width: 200px;
    height: 200px;
    border: 2px dashed dodgerblue;
    display: inline-block;          /*变为：既为块内元素， 又是行内元素*/
}
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210214185742205.png" alt="image-20210214185742205" style="zoom: 50%;" />

---