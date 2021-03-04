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

## 3.1、==声明式==熏染

> 有两种方式：{{}},  v-build-字段:""
>
> 官网：https://cn.vuejs.org/v2/guide/index.html#%E5%A3%B0%E6%98%8E%E5%BC%8F%E6%B8%B2%E6%9F%93

~~~~html
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
    </script>    <body>
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
~~~~





## 3.2、数据与方法

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





## 3.3、生命周期

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

## 3.4、模板语法

> Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。
>
> 所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

### 3.4.1、插值

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



### 3.4.2、指令

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



## 3.4、绑定 属性

> 绑定html属性有两种方法： 此处以绑定class为例， 其余style等等都可以绑定。
> 	1、通过对象绑定		
>
> ​	2、通过数组绑定	

### 3.4.1、通过==对象==：绑定

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

### 3.4.2、通过==数组==：绑定

~~~html
<body>
	<div id="app">
		<!-- isActive为true时：class名称为active, 否则为'' -->
		<div 
			v-bind:class="[isActive? 'active':'', isGreen?'green':'']"
			
			style="width:200px; height:200px; text-align:center; line-height:200px; border: solid 1px;">
			hi vue
		</div>
	</div>
	
    <script src="js/vue.js"></script>
	<script type="text/javascript">
		var vm = new Vue({
			el : "#app",
			data : {
				isActive:true,			//设置：isActive的值
				isGreen:true
			}
		});
	</script>
		
		<style>
			/* 设置：类active的样式 */
			.active{
				background: #FF0000;
			}
			
			.green{
				font-size: 40px;
				color: aqua;
			}
		</style>
	</body>
~~~

### 3.4.3、对象==绑定样式==例子

~~~html
<body>
	<!-- 绑定html属性：只有两种方法（对象、数组） -->
	<div id="app" :style="{border:border,color:color, width:w,height:h}">
		hello
	</div>
	<script src="vue.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		var vm = new Vue({
			el : "#app",
			data : {
				color:"red",
				w:"100px",
				h:"100px",
				border: '1px solid'
			}
		});
	</script>
</body>
~~~



## 3.5、==条件==渲染

> 官网：https://cn.vuejs.org/v2/guide/conditional.html#v-else-if

~~~html
	<body>
		<div id="app">
			<p v-if="type === 'A'">我就是A</p>
			<p v-else-if="type === 'B'">我就是B</p>
			<p v-else>我不是上诉内容</p>
			<p v-show="status">如果为false，我就将：display 修改None, 否则看之前是块级还是行内</p>
		</div>
		
		<script src="vue.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			var vm = new Vue({
				el:"#app",
				data:{
					type:'B',
					status:false		//切记：不要写字符串， 要写bool类型
				}
			});
		</script>
	</body>
~~~



## 3.6、列表渲染

~~~html	
<body>
		<div id="app">
			<ul>
				<li v-for="(content, index) in items">
					{{index}} --- >>> {{content.message}}
				</li>
			</ul>
			<ul>
				<li v-for="(value, key) in object">
					{{key}} --->>> {{value}}
				</li>
			</ul>
		</div>
	<script src="vue.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
	var vm = new Vue({
		el : "#app",
		data : {
			items : [
				{ message: 'Foo' },
				{ message: 'Bar' }
			],
			object: {
				title: 'How to do lists in Vue',
				author: 'Jane Doe',
				publishedAt: '2016-04-10'
			}
		}
	});
	</script>
</body>
~~~



## 3.7、事件处理

### 3.7.1、处理：属性、方法

> 可以用 `v-on` 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。

~~~html
<body>
    <div id="app">
        <!--监听事件是：vm的一个属性-->
        <button v-on:click="sum += 1">sum的值：{{sum}}</button>

        <!--监听事件是：vm的一个方法-->
        <button v-on:click="skipText('剑客白丁', $event)">点击我：看看如何弹框</button>
    </div>
</body>

<script src="js/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            sum:0
        },

        methods:{
            skipText:function (str, e) {
                alert(str);
                console.log(e);
            }
        }
    });
</script>
~~~

### 3.7.2、事件修饰符

> 看官网API

~~~
在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。
~~~

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

~~~html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 --> 
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
~~~

## 3.8、表单输入绑定

~~~
你可以用 v-model 指令在表单 <input>、<textarea>及 <select>元素上创建（双向数据）绑定。

它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model本质上不过是语法糖。

它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源。
~~~



### 3.8.1、文本

~~~Html
    <body>
        <div id="app">
     <!--文本框中：输入的内容，会同步到model, 然后再声明渲染，取出来就是：和文本框一样的-->
            <input type="text" v-model="message" placeholder="来编辑我啊">
            <p>Message is: {{ message }}</p>
        </div>
    </body>

    <script src="js/vue.js"></script>
    <script>
        var vm = new Vue({
            el:"#app",
            data:{
                message:""
            }
        });
    </script>
~~~

### 3.8.2、多行文本

~~~html
<body>
    <div id="app">
    <p>多行文本框输入的内容：如下</p>
    <p>{{message}}</p>
    <textarea v-model="message" cols="30" rows="10" placeholder="请输入....">		</textarea>
    </div>
</body>

<script src="js/vue.js"></script>
<script>
    var vm = new Vue({
    el:"#app",
    data:{
   		 message:""
   		 }
    });
</script>
~~~

### 3.8.3、复选框

~~~html	
<body>
    <div id="app">
        <input type="checkbox" id="java" name="java" value="Java" v-model="myCheckbox"/>
        <label for="java">Java</label>

        <input type="checkbox" id="python" name="python" value="Python" v-model="myCheckbox"/>
        <label for="python">Python</label>

        <input type="checkbox" id="c++" name="c++" value="C++" v-model="myCheckbox"/>
        <label for="c++">C++</label>

        <p>看看我选了哪些：myCheckbox: {{myCheckbox}}</p>
    </div>
</body>

<script src="js/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            myCheckbox:[]
        }
    });
</script>
~~~

### 3.8.4、单选框

~~~html
    <body>
        <div id="app">
            <input type="radio" id="man" value="Man" v-model="sex">
            <label for="man">男</label>
            
            <input type="radio" id="woman" value="Woman" v-model="sex">
            <label for="woman">女</label>

            <p>猜猜我是男还是女：sex = {{sex}}</p>
        </div>
    </body>

    <script src="js/vue.js"></script>
    <script>
        var vm = new Vue({
            el:"#app",
            data:{
                sex:""
            }
        });
    </script>
~~~



### 3.8.5、下拉框(单选)

~~~html
    <body>
        <div id="app">
            <select name="" id="selected" v-model="message">
                <option value="" selected disabled>---请选择---</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>

            <p>你选择了：{{message}}</p>

        </div>



    </body>

    <script src="js/vue.js"></script>

    <script>
        new Vue({
            el:"#app",
            data:{
                message:""
            }
        });
    </script>
~~~

- 用v-for实现

~~~html
<body>
        <div id="app">
            <select name="sel" v-model="mySelected">
  <option v-for="item in select" v-bind:value="item.text">{{item.text}}</option>
            </select>
            <span>当前选择的为：{{mySelected}}</span>
        </div>
</body>

	<script src="js/vue.js"></script>
    <script>
        var vm = new Vue({
            el:"#app",
            data:{
                mySelected:'A',

                select:[
                    {text:'A'},
                    {text:'B'},
                    {text:'C'}
                ]
            }
        });
    </script>
~~~







### 3.8.6、下拉框（多选）

> select 标签中加一个属性：multiple

~~~
<select name="sel" multiple v-model="value">
~~~



## 3.9、组件基础

- 全局注册

~~~html
<body>
    <div id="app">
        <!--可以进行：复用-->
        <my-component></my-component>
        <my-component></my-component>
    </div>

</body>

<script src="js/vue.js"></script>
<script>
    //创建一个：全局组件， 参数为（组件名小写， 数据{起始函数）, 模板}）
    Vue.component('my-component', {
        //用函数的目的：是为了确保复用（组件时）初始值都是相同的
        data:function () {
            return {
                //返回数字：0
                count:0
            }
        },

        template:'<button v-on:click="count++">你点我显示我的值：count = {{count}}</button>'
    });

    new Vue({
        el:"#app"
    });
</script>
~~~

- 局部注册

> 在new Vue({components:{}  })

~~~html
    <body>
        <div id="app">
            <!--可以进行：复用-->
            <my-component></my-component>
            <my-component></my-component>
        </div>

    </body>

    <script src="js/vue.js"></script>
    <script>

        new Vue({
            el:"#app",

            //局部注册
            components:{
                //局部组件名
                myComponent:{
                    data:function () {
                        return {
                            //返回数字：0
                            count:0
                        }
                    },

     template:'<button v-on:click="count++">你点我显示我的值：count = {{count}}</button>'
                }
            }
        });
    </script>
~~~

- 主键实例：自定义（li标签)组件

> 注意：组件格式
>
> Vue.component('组件名', {props[组件外部传入参数],  template: '自定义组件标签html'})

~~~html
    <body>
        <div id="app">
            <my-li v-for="item in message" v-bind:content="item"></my-li>
        </div>

    </body>

    <script src="js/vue.js"></script>

    <script>
        Vue.component('my-li',{
            //外部组件：传参
            props:['content'],
            //模板
            template: '<li>{{content}}</li>'
        })


        new Vue({
            el:"#app",
            data:{
                message:['Java', 'Python', 'PHP']
            }
        });
    </script>

~~~



# 4、单文件组件

> 单文件组件：产生的原因

在很多 Vue 项目中，我们使用 `Vue.component` 来定义全局组件，

紧接着用 `new Vue({ el: '#container '})` 在每个页面内指定一个容器元素。

这种方式在很多中小规模的项目中运作的很好，在这些项目里 JavaScript 只被用来加强特定的视图。但当在更复杂的项目中，或者你的前端完全由 JavaScript 驱动的时候，下面这些缺点将变得非常明显：

- **全局定义 (Global definitions)** 强制要求每个 component 中的命名不得重复
- **字符串模板 (String templates)** 缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 `\`
- **不支持 CSS (No CSS support)** 意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏
- **没有构建步骤 (No build step)** 限制只能使用 HTML 和 ES5 JavaScript，而不能使用预处理器，如 Pug (formerly Jade) 和 Babel

文件扩展名为 `.vue` 的 **single-file components (单文件组件)** 为以上所有问题提供了解决方法，并且还可以使用 webpack 或 Browserify 等构建工具。

> 如何构建？ 
>
> 1、安装依赖
>
> 2、进入vue 命令行
>
> 3、创建vue项目
>
> 4、拖入HbuildX
>
> 5、运行
>
> 6、查看终端本地网页

- `第一步：安装依赖`

~~~
1、安装npm：需要node.js支持
   查看版本：npm -v
  
2、安装vue-cli
npm install -g @vue/cli					//如果想加速，可（先安装）淘宝镜像

3、安装webpack
npm install -g webpack					//webpack是JavaScript打包器
~~~

- `第二步：进入vue命令行`

> cmd：vue ui



- `第三步：创建vue项目`

![image-20210302215816513](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210302215816513.png)

- `第四步：拖入HbuildX`

![image-20210302220400220](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210302220400220.png)

- `第五步：选择App.vue运行`

![image-20210302220435273](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210302220435273.png)



- `第六步：查看终端本地网页`

![image-20210302220501925](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210302220501925.png)

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210302220514254.png" alt="image-20210302220514254" style="zoom:50%;" />

---





# 5、Vue的7大属性

## 5.1、el属性

> 用来指示vue编译器从什么地方开始解析 vue的语法，可以说是一个占位符。





## 5.2、data属性

> 用来组织从view中抽象出来的属性，可以说将视图的数据抽象出来存放在data中。



## 5.3、template属性

> 用来设置模板，会替换页面元素，包括占位符。



## 5.4、methods属性

> 放置页面中的业务逻辑，js方法一般都放置在methods中



## 5.5、render属性

> 创建真正的Virtual Dom



## 5.6、computed属性

> 用来计算



## 5.7、watch属性

> watch:function(new,old){} 监听data中数据的变化 两个参数，一个返回新值，一个返回旧值，





# 6、axios异步通信

## 6.1、什么是axios

> axios不是一种新的技术。
>
> axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范

## 6.2、它有什么特点？

- 从浏览器中创建 XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF



## 6.3、哪些游览器支持？

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210304094020815.png" alt="image-20210304094020815" style="zoom: 50%;" />

---



## 6.4、axios原理基于什么？

> 基于：创建Vue（）实例， 在mounted()前，实例内容已渲染， 
>
> 进而通过自身封装的（异步请求）实现，异步交互



<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210304105015767.png" alt="image-20210304105015767" style="zoom: 33%;" />





## 6.5、实战（模板）==必看==

~~~
1、需要一个：.json文件， 可以本地，也可以远程
2、需要导入：vue、axios依赖
3、书写axios交互：代码
~~~

- `my.json文件`

~~~json
{
  "place": "新疆",
  "info": {
    "name": "剑客白丁",
    "age": 18,
    "sex": "man",
    "hobby": {
      "one": "sing",
      "two": "skip"
    }
  },

  "links": [
    {
      "name": "女书官网",
      "url": "https://www.yangzaikongzhongfei.com/"
    },

    {
      "name": "CSDN",
      "url": "https://blog.csdn.net/weixin_44537669?spm=1000.2115.3001.5343"
    },

    {
      "name": "博客园",
      "url": "https://www.cnblogs.com/yangzaikongzhongfei/"
    }
  ]
}
~~~

`代码模型`

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>学习axios</title>
    </head>

    <body>
        <div id="app">
            <!--此处：取出来是Model中（message数据）， 也就my.json中内容-->
            <p>{{message}}</p>
        </div>
    </body>

    <!-- CDN：vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- CDN：axios -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
        new Vue({
            el: '#app',
            //我们首先创建一个 data 里的 property 以最终放置信息，
            // 然后将会在 mounted 生命周期钩子中获取数据并赋值过去
            data () {
                return {
                    message: null		//view层需要显示什么，此处，就定义什么
                }
            },
            mounted () {
                axios
                    //获取本地：my.json文件数据，封装在response对象里面
                    .get('my.json')
         //等价于：.then(function(response){this.message = response.data})
         //注意：此处（如果不用）（箭头函数）， 不报错，但是不会显示出数据
                    .then(response => (this.message = response.data))
            }
        })

    </script>
</html>
~~~

## 6.6、实战：去除{{内容}}

> 因为：amount()时，页面已经（将声明渲染）显示， 但是，此时还没有数据， 所以通过v-cloak去除它

- `myTwo.json文件`

~~~json
{
  "name": "剑客白丁",
  "age": 24,
  "corporation": ["Ali", "Tenxun", "ZiJie"],
  "address": {
    "Ali" : "杭州",
    "Tenxun" : "深圳"
  }
}
~~~

- `html代码`

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>axios测试</title>
    </head>

    <style>
        div[v-cloak]{
            display: none;
        }
    </style>

    <body>
        <!--通过v-cloak去掉：起初amount()还没有异步刷新时， 出现（声明渲染{}）的尴尬-->
        <div id="app" v-cloak>
           <p>姓名： {{message.name}}</p>
           <p>年龄： {{message.age}}</p>
           <p>公司： {{message.corporation}}</p>
           <p>地点</p>
           <ol>
               <li v-for="item in message.address">{{item}}</li>
           </ol>

        </div>
    </body>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
        var vm = new Vue({
            el:"#app",
            data(){
                return{
                    message:{
                        name:null,
                        age:null,
                        corporation: null,
                        address: {
                            Ali : null,
                            Tenxun: null
                        }
                    }
                }
            },

          mounted(){
                axios
                    .get("myTwo.json")
                    .then((response)=>{this.message = response.data})
          }

        });
    </script>
</html>
~~~

- `效果图`

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture8/image-20210304120517395.png" alt="image-20210304120517395" style="zoom:50%;" />

---



