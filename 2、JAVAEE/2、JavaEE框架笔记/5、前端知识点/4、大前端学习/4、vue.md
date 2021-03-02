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

- `数据测试`

~~~html
	<body>
        <div id="app">
            {{a}}
        </div>
    </body>
    
    <script src="js/vue.js"></script>
    <script>
        //数据测试
        var data = {
            a:1
        }

        var vm = new Vue({
            el:"#app",
            data:data
        });

        //修改：
        data.a = "666";         //视图：div中(数字1)变为666
        vm.a = "777";           //视图: div中(数字666)变为 777
        console.log(data.a === vm.a);        //为true
    </script>
~~~

- `方法：测试一`

> 对象.freeze()  这会（阻止修改）现有的 property，也意味着（响应系统）无法再*追踪*变化。

~~~html
    <body>
        <div id="app">
            {{a}}
        </div>
    </body>

	<script src="js/vue.js"></script>
    <script src="js/vue.js"></script>
    <script>
        //数据测试
        var data = {
            a:1
        }

        //阻止修改现有的 property，也意味着（响应系统)无法再追踪变化。
        //div显示的内容为：{{a}} , 响应系统（无法再追踪变化）
        data.freeze();

        var vm = new Vue({
            el:"#app",
            data:data
        });
    </script>
~~~

- `方法：测试二`

> Vue对象.$watch(属性, )

~~~html
    <body>
        <div id="app">
            {{a}}
        </div>
    </body>

	<script src="js/vue.js"></script>
    <script>
        //数据测试
        var data = {
            a:1
        }

        var vm = new Vue({
            el:"#app",
            data:data
        });

        // 这个回调将在 `vm.a` 改变后调用
        //注意：如果不加$报错
        //$作用：标明是Vue的实例property与方法， 与用于定义的property区分开来
        vm.$watch('a', function (newValue, oldValue) {
            // 这个回调将在 `vm.a` 改变后调用
            console.log(newValue, oldValue)
        })
    </script>
~~~





## 3.2、生命周期

- beforeCreate:function () {}				//在实例（初始化之后）调用
- created:function (){}                           //在实例（创建完成后）立即调用
- beforeMount:function (){}                //在挂载开始之前被调用， 相关的渲染函数首次被调用
-  mounted:function(){}                       //el被新创建的vm.$el替换，挂载成功
- beforeUpdate:function (){}              //数据更新时调用
- updated:function (){}                        //数据更新后调用

~~~html
    <body>
        <div id="app">
            {{msg}}
        </div>
    </body>

    <script src="js/vue.js"></script>
    <script>
        var vm = new Vue({
            el:"#app",
            data:{
                msg:"hi vue"
            },

            //1-1: 在实例（初始化之后）
            //数据观测data observer 和 event/watcher事件配置之前被调用
            beforeCreate:function (){
                console.log('我是beforeCreate');
            },

            //1-2: 在实例（创建完成后）立即调用
            //此时：实例已完成：数据观测、属性和方法的运算， watch/event事件回调
            //但是：挂载阶段还没有开始， $el属性目前不可见
            created:function (){

                console.log('我是：create');
            },

            //2-1：在挂载开始之前被调用， 相关的渲染函数首次被调用
            beforeMount:function (){
                console.log('我是：beforeMount');
            },

            //2-2：el被新创建的vm.$el替换，挂载成功
            mounted:function(){
                console.log('我是：mounted');
            },

            //3-1: 数据更新时调用
            beforeUpdate:function (){
              console.log("我是：beforeUpdate");
            },

            //3-2：数据更新后调用
            updated:function (){
              console.log("我是：updated");
            }
        });

    </script>
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210302085717732.png" alt="image-20210302085717732" style="zoom:50%;" />

---

## 3.3、模板语法

> Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。
>
> 所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

### 3.3.1、插值

- `文本`：插值

> 语法：{{属性}}

~~~html
    <body>
        <div id="app">
            <!--添加了：v-once指令， 就修改也不会改变了-->
            <span v-once>这个将不会改变: {{ msg }}</span>
        </div>
    </body>

    <script src="js/vue.js"></script>
    <script>
        var vm = new Vue({
           el:"#app",
           data:{
               msg:"唯一永远不改变， 是不停的改变"
           }
        });

        vm.msg = "我来改变你";           //修改了无效， 还是原来内容
    </script>
~~~



- `html内容`：插值

~~~html
    <body>
        <div id="app">
            <!--相当于取用：文本-->
            <p>Using mustaches: {{ rawHtml }}</p>

            <!--v-html指令：相当于当做html内容解析-->
            <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        </div>
    </body>

    <script src="js/vue.js"></script>
    <script>
        var vm = new Vue({
           el:"#app",
           data:{
               rawHtml:"<strong>我们曾经有过一些故事。</strong>"
           }
        });
    </script>
~~~



- `Attribute`插值

> v-bind:class="myStyle"      相当于取：vm.myStyle 值， 这样可以动态的（添加上类的样式）

~~~html
    <body>
        <div id="app">
            <!--此处：相当于取vm.myStyle属性的：内容-->
            <div v-bind:class="myStyle">我的颜色改变了吗？</div>
        </div>
    </body>

	<script src="js/vue.js"></script>
    <script>
        var vm = new Vue({
            el:"#app",
            data:{
                rawHtml:"<strong>我们曾经有过一些故事。</strong>",
                myStyle:"fontColor"  //动态的将：div v-bind = "myStyle" 取代
            }
        });

    </script>

    <style>
        /*类选择器*/
        .fontColor{
            color: red;
        }
    </style>
~~~

- `使用JavaScript表达式：插值`

> 迄今为止，在我们的模板中，我们一直都只绑定简单的 property 键值。
>
> 但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。

~~~html
    <body>
        <div id="app">
            {{ number + 1 }}

            {{ ok ? 'YES' : 'NO' }}

            <!--
                split('')：按''分割， 返回数组  ["v", "u", "e"]
                reverse()：翻转为  [ "e", "u", "v" ]
                join("*")：将数组中的元素，用 * 拼接， 返回字符串 e*u*v
            -->
            {{ message.split('').reverse().join("*")}}

            <div v-bind:id="'list-' + id"></div>
        </div>
    </body>

    <script src="js/vue.js"></script>
    <script>
        var vm = new Vue({
           el:"#app",
           data:{
               number:5,
               ok:true,
               message:'vue',
               id:'MyId'
           }
        });
    </script>
~~~



### 3.3.2、指令

> 指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。
>
> 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

```html
    <body>
        <div id="app">
            <!--条件指令-->
            <p v-if="seen">你看到我了吗？</p>

            <!--动态属性值-->
            <p><a v-bind:href="url">点我，即可跳转</a></p>

    	  <!--
                点击事件绑定， 本来click2触发， click1一定触发
                但是加了, stop意思是，click2触发后事件完成后，便截止。
				v-on:click="" 可以缩写为@click=""
			-->
            <div @click="click1">
                <div @click.stop="click2">
                    我是click2点击事件
                </div>
            </div>
        </div>
    </body>

    <script src="js/vue.js"></script>
    <script>
        var vm = new Vue({
           el:"#app",
           data:{
               seen:true,
               url:"https://www.yangzaikongzhongfei.com/",
           },

           methods:{
                click1:function (){
                    console.log("函数click1（）生效了");
                },

               click2:function (){
                   console.log("函数click2（）也生效了");
               }
           }
        });
    </script>
```



## 3.4、绑定 HTML Class

> 绑定指令  v-bind:class

### 3.4.1、对象形式绑定

>  class="test"   v-bind:class="{active:isActive, activeGreen:isGreen}   一个test原生，两个动态绑定

~~~html
<body>
    <div id="app">
        <!-- 动态绑定class的值，class = active  当isActive为true时生效 -->
        <div v-bind:class="{active:isActive}"
        style="width:200px; height:200px; text-align:center; line-height:200px; border: solid 1px;">
        hi vue
    </div>

    <script src="js/vue.js"></script>
    <script type="text/javascript">
        var vm = new Vue({
            el : "#app",
            data : {
                isActive:true			//设置：isActive的值
            }
        });
    </script>

    <style>
        /* 设置：类active的样式 */
        .active{
            background: #FF0000;
        }
    </style>
</body>
~~~

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210302115516539.png" alt="image-20210302115516539" style="zoom: 50%;" />

---









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

