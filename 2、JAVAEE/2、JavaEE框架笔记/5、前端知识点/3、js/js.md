# 1、什么是JavaScript

## 1.1、概述

> JavaScript是一门世界上（最流行）的（脚本语言）
>
> 一个合格的（后端）：必须精通JavaScript





## 1.2、javascript的历史

> https://zhuanlan.zhihu.com/p/62074713



## 1.3、JavaScript与ECMAScript的关系

~~~css
1996年8月，微软模仿JavaScript开发了一种相近的语言，取名为JScript（JavaScript是Netscape的注册商标，微软不能用），首先内置于IE 3.0。Netscape公司面临丧失浏览器脚本语言的主导权的局面。

1996年11月，Netscape公司决定将JavaScript提交给国际标准化组织ECMA（European Computer Manufacturers Association），希望JavaScript能够成为国际标准，以此抵抗微软。ECMA的39号技术委员会（Technical Committee 39）负责制定和审核这个标准，成员由业内的大公司派出的工程师组成，目前共25个人。该委员会定期开会，所有的邮件讨论和会议记录，都是公开的。

2015 ECMA 6 发布，JavaScript 正式进入下一个阶段，成为一种企业级的、开发大规模应用的语言。
~~~



# 2、快速入门

## 2.1、js引入

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>js程序</title>
    </head>

    <!--1、内部引入方式-->
    <script>
        //注释和：java注释一样
        alert(1);
    </script>

    <!--2、外部引入方式,
        记住要成对（标签）， 否则报错。
        （参数）type="text/javascript"  可以不加
     -->
    <script src="js/myJs.js" ></script>

    <body>
        
    </body>
</html>
~~~



## 2.2、基本语法学习

~~~javascript
<!--对比学习：
        1、 js和java一样：严格区分大小写
        2、 js每条语句后，可以不带分号;
    -->
    <script>
        //注释：变量（关键字：只有一个）var
        var score = 61;

        if(score > 60 && score < 70){
            //单行注释：alert()弹窗打印
            alert("及格水平");
        }else if(score > 70 && score < 80){
            alert("中等水平");
        }else{
            alert("差等生、优等生徘徊");
        }

        /*
            多行注释：console.log(); 控制台打印
        * */
        console.log("控制台打印");

    </script>
~~~

- 注意：学会使用（==游览器功能==）

![image-20210218174457265](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218174457265.png)

---



## 2.3、数据类型==快速入门==

> js数据类型包括：数值、字符串、boolean、文本、图形、音频、视频...  

> 在 ECMAScript 规范中，共定义了 7 种数据类型，分为 基本类型 和 引用类型 两大类，如下所示：
>
> **==基本类型==**：String、Number、Boolean、Symbol、Undefined、Null 
>
> **==引用类型==**：Object



### 2.3.1、变量

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218210626906.png" alt="image-20210218210626906" style="zoom:50%;" />

---

### 2.3.2、数组array

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218214445087.png" alt="image-20210218214445087" style="zoom: 50%;" />



### 2.3.3、Number

> js：不区分整数和小数, Number
>
> typeof 是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型(小写字母)。

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218211614137.png" alt="image-20210218211614137" style="zoom:50%;" />

---

### 2.3.4、字符串String

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218211923750.png" alt="image-20210218211923750" style="zoom:50%;" />

---

### 2.3.5、布尔值

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218212112808.png" alt="image-20210218212112808" style="zoom:50%;" />

---



### 2.3.6、逻辑运算

~~~
&& （两个为真， 结果为真）
||  (一个为真， 结果为真)
！  (真即假， 假即真)
~~~



### 2.3.7、比较运算符

> 在js中用提倡用：===

~~~
=    赋值
==   等于（值相同就为true）
===  绝对等于（值相同， 类型也要相同）
~~~

> NaN == NaN, 这个与所有的数值都不相等， 包括自己， 因为NaN（不是一个数）
>
> 只能通过isNaN（NaN）来判断这个数：是否是NaN

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218212820991.png" alt="image-20210218212820991" style="zoom:67%;" />

---



### 2.3.8、浮点数问题：

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218213039343.png" alt="image-20210218213039343" style="zoom:50%;" />

---

> 利用误差分析的方式：求精度

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218213451023.png" alt="image-20210218213451023" style="zoom:50%;" />

---



### 2.3.9、对象

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218213927052.png" alt="image-20210218213927052" style="zoom: 50%;" />

---

### 2.3.10、严格检查模式

> 'use strict'   需要ECMAScript 6 支持 

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218221120043.png" alt="image-20210218221120043" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218221406222.png" alt="image-20210218221406222" style="zoom:50%;" />

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>数据类型</title>

        <!--
            前提：
                1、使用（严格检查模式）需要 IDEA 支持（ES6）语法
                2、let 也是需要 IDEA支持（ES6） 速度比var快
        -->

        <script>
            //严格检查模式：会直接显示（错误）， 比如不写var、let 关键字时
            'use strict'

           //（不推荐）用var
           var a = 1;

           //ES6 let(推荐)
           let b = 1;

           c = 3;

        </script>
    </head>
    <body>
    </body>
</html>
~~~



# 3、数据类型（==详讲==）

> 在 ECMAScript 规范中，共定义了 7 种数据类型，分为 基本类型 和 引用类型 两大类，如下所示：
>
> **==基本类型==**：String、Number、Boolean、Symbol、Undefined、Null 
>
> **==引用类型==**：Object



## 3.1、字符串String

### 3.1.1、字符串(2种)

~~~javascript
<script>
    let str1 = 'laoyang';		//单引号

    let str2 = "laoyang";	    //双引号
</script>
~~~



### 3.1.2、包含（转义字符）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218225743828.png" alt="image-20210218225743828" style="zoom:50%;" />

---

### 3.1.3、==多行字符串==编写

~~~
用：` `符号
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218230014010.png" alt="image-20210218230014010" style="zoom:50%;" />

---

### 3.1.4、模板字符串

~~~

~~~

