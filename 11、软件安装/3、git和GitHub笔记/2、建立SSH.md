```
强者以前也并非强者。															--老洋
```



# 1、建立SSH

> 建立：SSH直接看博客：
>
> https://lolitasian.blog.csdn.net/article/details/79094257?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control



# 2、添加git remote (为库SSH，建立别名)

- **查看远程库别名**

~~~
git -remote -v
~~~

![image-20201226185458553](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201226185458553.png)

---

- **gitHub复制（https 或 SSH）**

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201226185707515.png" alt="image-20201226185707515" style="zoom: 33%;" />

---

- **添加：远程库别名**

~~~
git remote add 远程库别名 HTTPS地址（或）SSH地址
~~~

![image-20201226190118017](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201226190118017.png)



- **补充：如何删除（远程库）别名呢？**

~~~
git remote remove 远程库别名
~~~

![image-20201130202007281](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201130202007281.png)



- **推送方式**

![](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201130202015870.png)



# 3、总结

![image-20201226182954221](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture6/image-20201226182954221.png)