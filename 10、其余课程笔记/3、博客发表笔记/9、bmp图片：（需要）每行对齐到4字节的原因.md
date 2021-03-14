~~~
立志做一名优秀的开源社区程序员。					---老洋
~~~

# bmp图片：（需要）每行对齐到4字节的原因。

## 1、首先要先明白：

- 内存分配单位是4字节。
- 位图中每行（像素数据）是连续的，（下一行）和（上一行）（不能共1个）分配单元(4字节)。
- 每行像素（数据长度）必须是（4字节的倍数）， （字节数 % 4）  不等于0时， 后续字节用0补齐。



## 2、我们先来看：不满足4个字节的图

![image-20201226082450955](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201226082450955.png)

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201226083402436.png" alt="image-20201226083402436" style="zoom:50%;" />



## 3、解决方法

- 读取的时候， 跳过：最后 124 - 123.75 = 0.25 ，  0.25 * 4 = 1字节   （这一个字节）
-  因为：这1个字节是被（默认8位用 0000 0000填充）
- 注意：因为（这张图）高是142，所以共有142行， 都需要跳过这（1个字节）共跳过142个字节。





~~~c
伪代码：
// 显示图片
    int color;
    char r, g, b;			  //red, green, blue (RGB)
    int i, j;
    char* p = pix_array;      //指向：读出图片的像素数组

    //line_bytes：存放（图片1行）的（字节总数）， 注意此处，强转为int了
	//line_bytes =  (165*24/8) == 123.75  因为是int 接收，变成了 123 
    int line_bytes = width * bpp / 8;		//width是图片宽， bpp是位深度， 

    //padd_bytes存放：需要（1行总字节数，要成为4的倍数）需要补齐的字节数
	//padd_bytes = 123 % 4 == 3(不为0), 4-3 == 1（1个字节），所以每行：要跳过1个字节
    int padd_bytes = (line_bytes % 4 == 0) ? 0 : (4 - line_bytes % 4);
    
    for (i = height-1; i >=0; i--)
    {
        for (j = 0; j < width; ++j)
        {
            b = *p++;
            g = *p++;
            r = *p++;

            color = r << 16 | g << 8 | b;
            lcd_draw_point(i, j, color);    
        }

        //地址递增，满足一行是4的整数倍
        p += padd_bytes;
    }
~~~



## 4、跳过填充字节：后的效果图

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201226092211129.png" alt="image-20201226092211129" style="zoom:50%;" />

## 5、问题：联系方式

```java
若有问题:请联系qq2560055298 										---老洋
```

