# 1、背景

~~~
写html表格，常常容易忘记的一个点：
	只对：行（各个字段）设置了（宽、高） ； 忘记了：给（表格）table标签，设置宽高
    影响：（行、列合并时）， 会出现（宽、高）无效现象。
~~~



# 2、table标签：未设置宽高

> 当进行：行、列（合并时）出现效果如下：

![image-20210410195915413](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210410195915413.png)

---



# 3、table标签：设置宽高后

> 当进行：行、列（合并时）出现效果如下：

![image-20210410200303839](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture9/image-20210410200303839.png)





# 4、代码

## 4.1、未设置：table宽高代码

~~~html	
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <style>
        tr{
            height: 30px;
        }

        td{
            width: 60px;
        }

        table{
            text-align: center;
            border-spacing: 0;

        }
    </style>
</head>
<body>
    <!--实现功能：添加表格， 并且逐行换色（奇数行：灰色）（偶数行：白色）-->
    <table border="solid 1px" >
        <caption>CSDN能力认证级别</caption>

       <tr>
           <td colspan="2"></td>
           <td colspan="4"></td>
           <td colspan="3"></td>
       </tr>

        <tr>
            <td colspan="2"></td>
            <td colspan="4"></td>
            <td colspan="3"></td>
        </tr>

        <tr>
            <td colspan="2">C1</td>
            <td colspan="4">见习工程师能力认证</td>
            <td colspan="3">在校生：200元</td>
        </tr>

        <tr>
            <td colspan="2">C4</td>
            <td colspan="4">专项工程师能力认证</td>
            <td colspan="3">在校生：3000元</td>
        </tr>

        <tr>
            <td colspan="2">C5</td>
            <td colspan="4">全栈工程师认证</td>
            <td colspan="3">在校生：8000元</td>
        </tr>

    </table>
</body>
</html>
~~~







## 4.2、设置：table宽高代码

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <style>
        tr{
            height: 30px;
        }

        td{
            width: 60px;
        }

        table{
            height: 150px;
            width: 540px;
            text-align: center;
            border-spacing: 0;

        }
    </style>
</head>
<body>
    <!--实现功能：添加表格， 并且逐行换色（奇数行：灰色）（偶数行：白色）-->
    <table border="solid 1px" >
        <caption>CSDN能力认证级别</caption>

       <tr>
           <td colspan="2"></td>
           <td colspan="4"></td>
           <td colspan="3"></td>
       </tr>

        <tr>
            <td colspan="2"></td>
            <td colspan="4"></td>
            <td colspan="3"></td>
        </tr>

        <tr>
            <td colspan="2">C1</td>
            <td colspan="4">见习工程师能力认证</td>
            <td colspan="3">在校生：200元</td>
        </tr>

        <tr>
            <td colspan="2">C4</td>
            <td colspan="4">专项工程师能力认证</td>
            <td colspan="3">在校生：3000元</td>
        </tr>

        <tr>
            <td colspan="2">C5</td>
            <td colspan="4">全栈工程师认证</td>
            <td colspan="3">在校生：8000元</td>
        </tr>

    </table>
</body>
</html>
~~~



