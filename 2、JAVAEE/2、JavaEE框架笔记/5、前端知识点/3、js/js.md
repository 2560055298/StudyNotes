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



## 3.1、字符串==String==

### 3.1.1、字符串(2种)

~~~javascript
<script>
    'use strict' 		//严格检查模式

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

### 3.1.4、字符串（引用）

> 引用方法 丶${变量名}丶



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218230730197.png" alt="image-20210218230730197" style="zoom:50%;" />

---

### 3.1.5、字符串长度

> 字符串长度：字符串名.length  (同java)

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218231102814.png" alt="image-20210218231102814" style="zoom:50%;" />

---



### 3.1.6、字符串的可变性

> 字符串：同java不可变

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210218231455672.png" alt="image-20210218231455672" style="zoom:50%;" />

---

### 3.1.7、大小写转换

> 同java一样：调用相应方法， js称之为（函数）

~~~javascript
<script>
    'use strict' 		//严格检查模式
    
    //String类型同java：不可变
    let str = "laoyang";

    //转换为：大写
    console.log(str.toUpperCase());

    //转换为：小写
    console.log(str.toLowerCase());
</script>
~~~



### 3.1.8、获取下标索引

> 同java一致

~~~javascript
    <script>
        'use strict'          			  //严格检查模式

        //String类型同java：不可变
        let str = "laoyang";

        //获取：下标索引
        console.log(str.indexOf('o'));      //索引为：2

    </script>
~~~



### 3.1.9、获取字串

> 同java一致, [ )    包含（头），不包含（尾巴）

~~~javascript
<script>
    'use strict'            //严格检查模式

    //创建字符串
    let str = "laoyang"

    //获取子串：从下标1开始，到最后一个 [1, )
    console.log(str.substring(1));          //输出：aoyan

    //获取子符：从下标2开始到3， [2, 3)
    console.log(str.substring(2, 3));       //输出：o

</script>
~~~



## 3.2、数组==Array==

### 3.2.1、创建方式（2种）

~~~javascript
let array = [1, 3.14, 'hello', true];

let array = new Array(1, 3.14, 'hello', true);
~~~





### 3.2.2、获取长度

~~~javascript
array.length;				//返回长度值, 同java 
~~~



### 3.2.3、扩容

> array.length = 容量大小
>
> 注意：可以变大， 可以变小。

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219095844928.png" alt="image-20210219095844928" style="zoom:50%;" />

---



### 3.2.3、获取索引

> array.indexOf()
>
> array.lastIndexOf()

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219100800671.png" alt="image-20210219100800671" style="zoom:50%;" />

---

### 3.2.4、slice()切片

> 如同：（字符串）subString() 一样， 留（头部）， 不留（尾部）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219101055246.png" alt="image-20210219101055246" style="zoom: 67%;" />

---

### 3.2.4、添加、删除元素

~~~javascript
测试数据：
	let array = [1, 3.14, 'hello', true];

数组尾部：
    array.push()	//添加元素，  返回值为（数组长度）
    array.pop()		//删除元素元素， 返回值为（删除元素：内容）

数组头部：
	array.unshift()	// 添加元素， 返回值为（数组长度）
    array.shift()	//删除元素， 返回值为（删除元素：内容）
~~~



### 3.2.5、排序sort

~~~javascript
array.sort()
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219103034203.png" alt="image-20210219103034203" style="zoom: 67%;" />

----



### 3.2.6、翻转数组reverse

~~~javascript
array.reverse()
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219103224578.png" alt="image-20210219103224578" style="zoom:50%;" />

---

### 3.2.7、连接字符串concat

~~~
array.concat([]);
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219103604071.png" alt="image-20210219103604071" style="zoom:50%;" />

---

### 3.2.8、连接符join

~~~javascript
array.join("连接符");			//加入连接符， 返回的是（字符串）
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219103842899.png" alt="image-20210219103842899" style="zoom:50%;" />

---



### 3.2.9、多维数组

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219104107217.png" alt="image-20210219104107217" style="zoom:50%;" />

---



## 3.3、对象

### 3.3.1、创建对象

~~~
语法：
	var 对象名 = {
		属性名:属性值,
		属性名:属性值
	}
~~~

~~~javascript
<script>
    //严格检查模式：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    var student = {
        name:"baiding",
        age:22,
        score:100
    }
</script>
~~~



### 3.3.2、对象==属性赋值==

> 对象名.属性名 = 新属性值

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219150256269.png" alt="image-20210219150256269" style="zoom:50%;" />

---

### 3.3.3、对象==添加==删除属性

~~~
语法：
	添加属性：对象名.新属性名 = 新属性值
	
	删除属性：delete 对象名.属性值
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219151041042.png" alt="image-20210219151041042" style="zoom: 67%;" />

---

### 3.4.4、属性==在==对象中==判定==

~~~javascript
语法：
	'属性名(字符串)' in 对象名              //属性名，也包含父类属性名， 如toString
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219151618949.png" alt="image-20210219151618949" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219152037671.png" alt="image-20210219152037671" style="zoom:50%;" />

---

### 3.4.5、==当前==对象属性判定

~~~
当前对象属性：仅仅是当前对象的属性， 不包含（父类）对象的属性

判定方法：
	对象.hasOwnProperty(‘属性名’)
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219152510470.png" alt="image-20210219152510470" style="zoom:50%;" />

---

### 3.4.6、注意点

> 打印：对象不存在的（属性），不会报错， 只会显示undefined

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210219151750506.png" alt="image-20210219151750506" style="zoom:50%;" />

---



## 3.4、集合

> ES6新特性：Map 和 Set

- Map (有序集合)

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    //创建Map语法：new Map([[参数一key, value], [参数二key, value]])
    let myMap = new Map([['tom', 21], ['jack', 19], ['toni', 23]]);

    //查询：通过key获取value
    console.log(myMap.get('tom'));

    //添加：键值对
    myMap.set('yang', 23);

    //修改：键值对
    myMap.set('yang', 456);

    //删除：键值对
    myMap.delete('yang');

    //打印Map
    console.log(myMap);

</script>
~~~



- Set （无序集合）

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    //1、创建set语法：new Set([1, 'hello', 1, 2, 'hello']);      注意：唯一性， 仅会出现1个hello
    let mySet = new Set([1, 'hello', 1, 2, 'hello']);

    //2、查询：只能查询（某个元素）是否存在， 不能获取值
    console.log(mySet.has(1));              //true

    //3、添加
    mySet.add(666);

    //4、修改：（因为获取不到值， 所以无法修改）

    //5、删除
    mySet.delete(1);            //{"hello", 2, 666}     1被删除掉了

</script>
~~~



## 3.5、iterator迭代器

~~~
Iterator 是 ES6 引入的一种新的遍历机制，迭代器有两个核心概念：

迭代器是一个统一的接口，它的作用是使各种数据结构可被便捷的访问，它是通过一个键为Symbol.iterator 的方法来实现。

迭代器是用于遍历数据结构元素的指针（如数据库中的游标）。
~~~

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    //ES6的：新特性
    let array = ["hello", 3.14, 2, true];
    let ites = array[Symbol.iterator]();

    //若用：alert() 弹窗则是 [Object, Object]
    console.log(ites.next());       //{value: "hello", done: false}
    console.log(ites.next());       //{value: 3.14, done: false}
    console.log(ites.next());       //{value: 2, done: false}
    console.log(ites.next());       //{value: true, done: false}

</script>
~~~







# 4、流程控制

> 选择、分支、循环：与Java无异

## 4.1、选择、分支

~~~javascript
<script>
    //严格检查模式：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    let sore = 55;		//作为分数

    if(sore > 60){
        console.log("及格了");
    }else{
        console.log("没有及格");
    }

</script>
~~~

> switch

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    let text;

    switch (new Date().getDay()) {

    case 6:
    text = "今天是周六";		break;
            
    case 0:
    text = "今天是周日";		break;
            
    default:
    text = "期待周末~";
    }

    console.log(text);

</script>
~~~





## 4.2、循环

- while循环

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    let num = 1;

    while(num < 10){
    console.log(num++);
    }

</script>
~~~

- for循环

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    for(let num = 1; num < 10; num++){
    console.log(num);
    }

</script>
~~~



## 4.3、遍历

- for循环

~~~java
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    let a = ['hello', 1, true, 'one'];

    for(let i = 0; i < a.length; i++){
   		 console.log(a[i]);
    }

</script>
~~~



- forEach

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    let a = ['hello', 1, true, 'one'];

    //value是：数组元素值
    a.forEach(function (value){
 	   console.log(value)
    })

</script>
~~~



- for(let index in / of array)		in遍历的是索引， of 遍历的是值   

> Map、Set集合可以用该方法：遍历

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    let a = ['hello', 1, true, 'one'];

    //遍历的是：下标索引
    for(let index in a){
        console.log(a[index])
    }

	//遍历值
    for(let value of a){
        console.log(value);
    }

</script>
~~~



# 5、函数

## 5.1、函数的2种写法

- 第一种：

> function 函数名（参数）{ }

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    //返回：绝对值函数
        function abs(num){
            if(num > 0){
            return num;
            }else{
            return -num;
         }
    }
</script>
~~~

- 第二种

> var fuc = function() { }

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    //返回：绝对值函数
    var abs = function(num){
    if(num > 0){
       return num;
     }else{
       return -num;
      }
    }
</script>
~~~



## 5.2、函数使用的==注意点==

> 函数调用时：传参超过（定义参数个数）不会报错

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture7/image-20210220100310217.png" alt="image-20210220100310217" style="zoom:50%;" />

---



## 5.3、函数参数：获取

> 方法一：通过arguments

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    var abs = function(num){
    //arguments 是一个类数组对象。代表传给一个function的参数列表。
    //它会获取：所有传递参数， 如果已有形参，这样就出现了（形参多余）问题
      
    for(let i = 0; i < arguments.length; i++){
    	console.log(arguments[i]);
	}
}
</script>
~~~

> 方法二：function abs(x, y, ...paramName){}

~~~javascript
<script>
    //严格（检查模式）：会直接显示（错误）， 比如不写var、let 关键字时
    'use strict'

    //ES6新特性：...参数名  （用来获取，形参外的其余参数， 封装成数组）
    var abs = function(num, ...paramName){
    
        //paramName是一个数组
        console.log(paramName);
		
        //遍历：paramName数组
        for(let i = 0; i < paramName.length; i++){
             console.log(paramName[i]);
        }
  }

</script>
~~~



## 5.4、变量的：作用域

### 5.4.1、var在for的问题

> var关键字定义在：for(var i = 0; ) 会出现`for循环外能用i变量`的问题

~~~javascript
<script>
    'use strict'            //严格检查：模式， 不写var 、let 关键字定义变量，会直接报错

    //var关键字：在for内定义， 会超脱for, let则不会
    for(var i = 0; i < 100; i++){
        console.log(i);
    }

	console.log(i+1);         //会打印出：101


    //let关键字：则避免了，var在for循环定义越界问题
    for(let j = 0; j < 100; j++){
        console.log(j);
    }

    console.log(j);     //报错：ReferenceError: j
</script>
~~~



### 5.4.2、变量同名问题

> 当：全局变量、局部变量同名时， 与Java相同， 局部覆盖（同名）



### 5.4.3、window对象

> Window 对象表示浏览器中打开的窗口
>
> 没有应用于 window 对象的公开标准，不过所有浏览器都支持该对象。

~~~javascript
<script>
    'use strict'            //严格检查：模式， 当没有写var、let定义变量时， 会直接报错

    //直接使用：全局变量
    alert("我是alert");

    //window是：alert全局变量的创建者
    window.alert("alert是由我定义的，全局变量（函数）");

    //将全局变量（函数）存起来
    let myAlert = window.alert;

    //改变：alert
    window.alert = function(param){
        console.log(`${param} 我已经改变了alert`);
    }

	alert("是吗？");           //打印结果：是吗？ 我已经改变了alert
</script>
~~~



### 5.4.4、自定义全局变量

> 方法：
>
> ​	var myVariable = {};
>
> ​	myVariable.one = "张三";

~~~javascript
<script>
    'use strict'            //严格检查模式：当没有写var、let定义变量时，会直接报错

    //定义：全局对象
    var myVariable = {};

    //添加：全局变量（函数）
    myVariable.alert = function(num){
        console.log(`这个数字是：${num}`);
    }

    //添加：全局变量
    myVariable.name = "Your Name";

    //调用：全局变量（函数）
    myVariable.alert(10086);		// 这个数字是：10086

    //调用：全局变量
    console.log(myVariable.name);	//Your Name

</script>
~~~

> 这样做的目的是：把自己的代码全部放入（自己定义）的唯一空间名字中，降低（全局命名）冲突问题



### 5.4.5、常量const

> ES6引入常量关键字：const

~~~javascript
<script>
    'use strict'            	//严格检查模式：当没有写var、let定义变量时，会直接报错

    //ES6（以前）：用大写代表常量， 君子协议（自行遵守）
    //ES6（以后）：才由const关键字
    const name = "张三";

	//Attempt to assign to const or readonly variable（报错了）
    name = "李白";           

</script>
~~~





# 6、方法

> 将函数：写在对象中，就成为了方法。

## 6.1、方法：==定义模板==

- 方法一：将方法`直接定义`在（对象中）

~~~javascript
<script>
	'use strict'            //严格检查模式：当没有写var、let定义变量时，会直接报错

    var myObject = {
        name:"剑客白丁",
        age:24,
        hobby:function(hobby1, hobby2){
        console.log(`我有两个爱好：${hobby1}, ${hobby2}`)
    }

}

	myObject.hobby("sing", "skip");
</script>
~~~

- 方法二：将`外部函数`引入`对象`变成（对象方法）

~~~javascript
<script>
    'use strict'            //严格检查模式：当没有写var、let定义变量时，会直接报错

    //定义在外部的：函数
    var funcHobby = function(hobby1, hobby2){
        console.log(`我有两个爱好：${hobby1}, ${hobby2}`);
    }

    var myObject = {
        name:"剑客白丁",
        age:24,
        hobby:funcHobby		//引入外部函数， 将之变为方法
    }

	myObject.hobby("sing", "skip");

</script>
~~~



## 6.2、this的指向

> this指向当前对象：如果未在（自定义）对象内使用， 则指向的是（window）对象

~~~javascript
<script>
    'use strict'            //严格检查模式：当没有写var、let定义变量时，会直接报错

	//定义：函数
    var funcAge = function(num){
        console.log(num + this.age);
	}

    var myObject = {
        age :23,
        myAge:funcAge		//对象引入函数，变为（方法）
    }

    myObject.myAge(5);      //成功打印出：28 （因为this指向：myObject）

	this.funcAge(5);        //NaN  （不是一个数，因为,this指向window）

</script>
~~~



## 6.3、apply控制this指向

> 语法：外部函数名.apply (指向对象名， [参数])       `当参数没有时：只写[]即可`

~~~javascript
<script>
	'use strict'            //严格检查模式：当没有写var、let定义变量时，会直接报错

    var funcAge = function(num){
   	 	console.log(num + this.age);
    }

    var myObject = {
        age :23,
        myAge:funcAge
    }

	myObject.myAge(5);            //成功打印出：28 （因为this指向：myObject）

	funcAge.apply(myObject, [5]); //成功打印出：28 (因为apply将this定位到myObject)

</script>
~~~



# 7、Date日期对象

> 复习一下：类型

~~~javascript
<script>
	'use strict'        //严格检查：模式

    //注意：打印出来对象类型（首字母小写了）
    console.log(typeof 123)          //number
    console.log(typeof 3.14)         //number
    console.log(typeof true)         //boolean
    console.log(typeof 'hello')      //string
    console.log(typeof [])           //object
    console.log(typeof {})           //object
    console.log(typeof Math.abs)     //function
    console.log(typeof undefined)    //undefined

</script>
~~~

> Date对象的：用法

~~~javascript
<script>
    'use strict'        //严格检查：模式

    var date = new Date();
    console.log(date);      //Sat Feb 20 2021 17:47:09 GMT+0800 (中国标准时间)
    date.toDateString();    //"Sat Feb 20 2021"
    date.getFullYear();     //年份：2021
    date.getMonth();        //月份：1  (从0~11)
    date.getDate();         //号数：20
    date.getDay();          //星期：6
    date.getHours();        //小时：17
    date.getMinutes();      //分钟：47
    date.getSeconds();      //秒：9
    date.getTime();         //时间戳：1613814429958
    date.toTimeString();    //"17:47:09 GMT+0800 (中国标准时间)"

</script>
~~~

