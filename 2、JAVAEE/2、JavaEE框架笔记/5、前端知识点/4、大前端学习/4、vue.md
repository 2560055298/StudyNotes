# 1、前端拓展视野

## 1.1、JavaScript框架

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210226180435808.png" alt="image-20210226180435808" style="zoom:50%;" />

----

## 1.2、UI框架

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210227114319402.png" alt="image-20210227114319402" style="zoom:50%;" />

## 1.3、JavaScript打包工具

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210227114559902.png" alt="image-20210227114559902" style="zoom:50%;" />



## 1.4、三端开发

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210227161709162.png" alt="image-20210227161709162" style="zoom:50%;" />

---

## 1.5、后端技术

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210227162133023.png" alt="image-20210227162133023" style="zoom:50%;" />

---

## 1.6、大前端时代

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210227163941214.png" alt="image-20210227163941214" style="zoom:50%;" />

---

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210227164129082.png" alt="image-20210227164129082" style="zoom: 50%;" />

---

## 1.7、MVVM

> MVVM是Model-View-ViewModel的简写。它本质上就是MVC 的改进版

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210227170649462.png" alt="image-20210227170649462" style="zoom: 50%;" />

---



# 2、Vue

## 2.1、Vue简介

> 作者：尤雨溪（Evan You）
>
> 官网：https://cn.vuejs.org/index.html
>
> Vue.js就是一个MVVM的实现者， 它的核心就是实现了DOM（监听）与（数据绑定）

![image-20210226173621903](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210226173621903.png)

![image-20210226173935157](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210226173935157.png)

----



## 2.2、MVVM

### 2.2.1、MVVM是什么？

> VM：视图模型， 我前端，难道不能自己（产生数据吗？）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210227173550526.png" alt="image-20210227173550526" style="zoom:50%;" />

----

### 2.2.2、为什么要使用MVVM？

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210227175023069.png" alt="image-20210227175023069" style="zoom:67%;" />



### 2.2.3、MVVM职责

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210227175336404.png" alt="image-20210227175336404" style="zoom: 67%;" />

---



## 2.3、第一个Vue程序

> 先装的vue.js插件：为以后使用vue.js做铺垫

~~~html
<!DOCTYPE html>
<html lang="en">
	<head>
        <meta charset="UTF-8">
        <title>第一个Vue过渡项目</title>
   </head>
    
    <body>
        <!--视图-->
        <div id="app">
            <!--通过{{}}可以实现：数据绑定功能-->
            {{message}}			
        </div>
    </body>

	<!--导入vue.js-->
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    
    <script>
        var vm = new Vue({	//ViewModel
            el: "#app",						 //绑定元素的ID
            //Model
            data:{						     
                message:"Hello Vue!"		 //数据对象中有一个message的属性
            }	
        });
    </script>
</html>
~~~



# 3、语法学习

## 3.1、数据与方法









## 3.x、==声明式==熏染

> 有两种方式：{{}},  v-build-字段:""
>
> 官网：https://cn.vuejs.org/v2/guide/index.html#%E5%A3%B0%E6%98%8E%E5%BC%8F%E6%B8%B2%E6%9F%93

~~~html
    <body>
        <div id="app">
            <!--{{}}声明熏染-->
            {{name}}
            {{amazeUI}}

            <!--v-build声明熏染， v-bind attribute 被称为指令-->
            <span v-bind:title="message">我们最好的时光</span>		
        </div>
    </body>

    <script>
        var vm = new Vue({
            el:"#app",				//注意：选中的是ID为app的div
            data:{
                name:"天下有我",
                amazeUI:"MazeUi",
                message: '页面加载于 ' + new Date().toLocaleString()
            }
        });
    </script>
~~~



## 3.x、==条件==渲染

> 官网：https://cn.vuejs.org/v2/guide/conditional.html#v-else-if

~~~html
    <body>
        <div id="app">
            <span v-if="seen === 'A'">A</span>
            <span v-else-if="seen === 'B'">B</span>
            <span v-else >什么都不是</span>
        </div>
    </body>

    <script>
        var vm = new Vue({
            el:"#app",
            data:{
                seen:'A'
            }
        });
    </script>
~~~

