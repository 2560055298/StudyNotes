![155](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/155.png)



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

> text-align运用在块级元素中，使其中的文本对齐。事实上这句话的意思是运用在块级元素中text-align会使其包含行内元素对齐。

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



---

# 5、浮动

## 5.1、标准文档流

~~~
1、（文档流）指的是元素（排版布局）过程中
2、元素会默认自动从左往右，从上往下的流式排列方式。
3、标准文档流包括：块级元素和行内元素。
~~~

![image-20210215110530608](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210215110530608.png)





## 5.2、行内元素、块元素

### 5.2.1、行内元素

- ==行内元素==（概念）

> 行内元素：inline element
>
> 也叫内联元素、内嵌元素等，只能容纳文本或其他内联元素。
>
> 元素样式为display : inline的都是行内元素。

- ==行内元素==（特点）

~~~
①、（行内元素）和（其他元素）都在一行上
②、设置宽度width 无效，设置高度height 无效，可以通过line-height来设置。
③、内联元素(只能容纳）（文本）或者其他（内联元素）
~~~

- ==行内元素==(标签)

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

### 5.2.2、块元素

- ==块元素==（概念）

> 1、block element (块元素) 每个块级元素默认占一行高度
>
> 2、（一行内）添加一个块级元素后，一般（无法）添加其他元素（float浮动后除外）
>
> 3、（两个块级元素）连续编辑时，会在页面（自动换行）显示。
>
> 4、块级元素：可以包含块级，也可以包含行级元素。
>
> 5、元素样式的display:block都是块级元素。

- ==块元素==（特点）

~~~
①、总是在新行上开始；
②、高度，行高以及外边距和内边距都可控制；
③、宽度缺省是它的容器的100%，除非设定一个宽度。
④、它（可以容纳）内联元素和其他块元素
~~~

- ==块元素==：标签

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

### 5.2.3、比较（二者区别）

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

==2、行内元、块元素（互相切换）==

~~~css
 /*
                display: inline;                设置变为：行内元素
                display: block;                 设置变为：块元素
                display: inline-block;          既为块内元素， 又是行内元素
				display: none;					不显示，带码存在
*/

div{
    width: 200px;
    height: 200px;
    border: 2px dashed dodgerblue;
    display: inline-block;			 /*变为：既为块内元素， 又是行内元素*/
}

span{
    width: 200px;
    height: 200px;
    border: 2px dashed dodgerblue;
    display: inline-block;          /*变为：既为块内元素， 又是行内元素*/
}
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210214185742205.png" alt="image-20210214185742205" style="zoom: 50%;" />

~~~css
 body{
                margin: 0;
            }

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
                float: left;					/*进行：左浮动*/
            }
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210215093458191.png" alt="image-20210215093458191" style="zoom: 33%;" />

## 5.3、脱离标准文档流的三种方法

>   脱离标准文档流有三种方法：浮动、绝对定位、固定定位。



## 5.4、display、float、clear

> 首先：搞明白一点，浮动为了让（网页）保持（标准文档流，块元素自上而下， 行元素，自左到右）

~~~css
#father{
   /*
    display: inline;                设置变为：行内元素
    display: block;                 设置变为：块元素
    display: inline-block;          既为块内元素， 又是行内元素
    display: none;					不显示，带码存在
   */
    border: 4px #000 solid;
}

.layer01{
    border: 2px #68ffdb dashed;
    display: inline-block;
    float: left;
}

.layer02{
    border: 2px #bff6f6 dashed;
    display: inline-block;
    float: left;
}

.layer03{
    border: 2px #f57f92 dashed;
    display: inline-block;
    float: left;
}

.layer04{
    border: 2px #FFDEE9 dashed;
    /*拥有：
        行内元素、块元素特性
        在一行中排列， 是一个独立的块
    */
    display: inline-block;

    /*左浮动，像气球一样，飘起来*/
    float: left;

    /*
    	clear：right; 右侧不允许有（浮动元素），有则在（下一行）显示当前元素
        clear:left;   左侧不允许有（浮动元素），有则在（下一行）显示当前元素
        clear:both;	  左右两侧，都不允许
        clear:none;	  有不有都行，按原样显示。
    */
    clear:both;
}
~~~

==浮起来（不保证是）块元素时==

![image-20210215120903665](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210215120903665.png)

---

==浮起来（保证是）块元素时==

![](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210215120746862.png)

## 5.5、父级边框（塌陷问题）

### 5.5.1、问题描述

> 这是：违背了标准文档流，出现的问题

![image-20210215122342269](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210215122342269.png)

---

### 5.5.2、解决（父类）塌陷的方法

- ==方法一==：增加（父元素）的（高度）

> 用边框：把子元素（包裹起来）

~~~css
#father{
    border: 4px #000 solid;
    height: 500px;
}
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210215122827982.png" alt="image-20210215122827982" style="zoom: 33%;" />

---

==方法二==：网页最末端，添加一个（原生）div

> div进行：若有左右浮动，则在（下一行）显示， 因为div没有浮动
>
> ​				所以(父级div)边框将（包裹它），它又是最末尾元素，所以就解决的了（父元素塌陷问题）

~~~css
<div class="clear"></div>

.clear{
    clear: both;
    margin: 0;
    padding: 0;
}
~~~

==方法三==：overflow

> overflow:hidden最简单的作用就是溢出隐藏
>
> overflow:内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。

~~~
#father{
    border: 4px #000 solid;
    overflow: hidden;
}
~~~

==方法四==：通过给父类添加（伪类）  ==推荐这种！！！==

> 通过伪类，达到（方法二）（添加div）的效果

~~~css
#father{
    border: 4px #000 solid;
}

#father:after{
    content: "";        /*空内容*/
    display: block;     /*变成块， 相当于空div*/
    clear: both;        /*左右若有浮动，再下一行显示*/
}
~~~

### 5.5.3、（父类）塌陷总结

- ==方法一：== 设置父类（高度）

> 十分简单，但是（将高度写死）大于便需要修改



-  ==方法二：== 增加空div 

> 十分简单， 但是要改变html代码



- ==方法三：== overflow

> 用overflow: hidden时：多余则截断， 也是存在弊端的
>
> 用overflow: scroll时：出现滚动条（不美观）



- ==方法四：==父类添加（伪类）（推荐）

> 通过#father:after 伪类，实现只修改css，不改变html结构。模拟出div的效果（十分好）



## 5.6、display和float对比

- 相同点

> 二者都可以：实现（行内元素） 转为（块元素）

- 不同点

> display： 不能浮动起来，所以不可以控制（方向）
>
> float：可以浮动起来，但是会出现（脱离标准文档流）， 出现（父级边框塌陷）问题





# 6、定位

## 6.1、相对定位：relative

> 相对定位：
>
> ​		关键字：position : relative;
>
> ​		注意点：相对于（原来）的位置， 进行（指定偏移）， 相对定位（原来的位置：是保留的）只是    						没有显示出来。

~~~css
 #div01{
     width: 300px;
     height: 50px;
     border: 2px dashed gold;
     background-color: #f57f92;

     /*相对定位：正数为排斥（远离）， 负数为（相吸）*/
     position: relative;
     
     top: -20px;			/*负数：接近上*/
     bottom: 40px;			/*整数：远离下*/
     right:30px;			/*正数：远离右*/
     left: 40px;			/*整数：远离左*/
}
~~~



## 6.2、绝对定位：absolute

> 1、绝对定位关键字：position: absolute;
>
> 2、绝对定位：
>
> ​				如果没有选取（父类作为：参考）， 则将：游览器作为（定位对象）
>
> ​			    如果选择父类作为参考（父类中加上：position:relative; ）让父类保持原状，进行（定位）
>
> ​				有父类的（绝对定位）， 不能超过其边框
>
> 3、绝对定位：不会保留之前的（位置）

~~~css
<div id="father">
            <div id="div01"></div>
</div>

#father{
    border: 3px solid #ff7090;
    /*自己选取了（父类）， 不加这句，则默认选择（游览器）*/
    position: relative;
}

#div01{
    width: 300px;
    height: 50px;
    border: 2px dashed gold;
    background-color: #f57f92;
    /*开启：绝对定位*/
    position: absolute;
    right: 10px;
}
~~~



## 6.3、固定定位fixed

> 关键字：position: fixed;

~~~css
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>固定定位</title>

        <style>
            body{
                height: 1200px;
            }

            /*绝对定位div*/
            #juedui{
                width: 100px;
                height: 100px;
                background-color: #f57f92;
                position: absolute;         /*绝对定位；父类（游览器）*/
                right:0px;
                bottom: 0px;
            }

            /*固定定位div*/
            #guding{
                width: 50px;
                height: 50px;
                background-color: #3bffec;

                /*固定定位：关键字*/
                position: fixed;
                right: 0px;
                bottom: 0px;
            }

        </style>
    </head>

    <body>
        <div id="juedui">
            我是绝对定位
        </div>

        <div id="guding">
            我是固定定位
        </div>
    </body>
</html>
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210215162611830.png" alt="image-20210215162611830" style="zoom: 50%;" />

## 6.4、z-index、opacity

> z-index：为图层（0为第一层）==图层需要（相对、绝对、固定）定位后才有效==
>
> opacity：透明度

![image-20210215174640604](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210215174640604.png)



> 实现b站：触摸视频（变暗），利用==图层实现==

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>图层</title>

        <link rel="stylesheet" href="css/style.css">
    </head>

    <body>
        <div id="father">
            <img src="images/1.png" alt="">
            <div id="son">这是图层的效果，你看到了吗？</div>
        </div>
    </body>
</html>
~~~

~~~css
*{
    margin: 0;
    padding: 0;
}

#father{
    width: 567px;
    height: 292px;
    /*开启相对定位：为子元素（绝对定位做准备）*/
    position: relative;
}

img{
    /*以（div）做为父元素， 进行绝对定位*/
    position: absolute;
    /*设置图层（层数）为：999*/
    z-index: 999;
}

#son{
    width: 566px;
    height: 292px;
    top: 0;
    border: 1px solid #7d7c7c;
    text-align: center;
    line-height: 292px;
    font-size: 25px;
    color: #ffffff;

    background: #404040;

    /*以（div）做为父元素， 进行绝对定位*/
    position: absolute;
    /*设置图层（层数）为：666, 图层需要（相对、绝对、固定：定位后才有效）*/
    z-index: 666;
    /*设置：透明度为70%*/
    opacity:0.7;
}

img:hover{
    /*通过（触摸）伪类， 进行（修改图层：层数）*/
    z-index: 555;
}
~~~



# 7、动画

~~~
去搜css动画、js动画、canvas动画
gitHub、码云、各种网站
~~~





# 8、总结