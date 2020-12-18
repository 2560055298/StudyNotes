```
强者以前也并非强者。															--老洋
```

## 1、首先查看：有没有公钥和私钥

### 	1.1、命令

```
ls -al ~/.ssh
```

![image-20201130201903222](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130201903222.png)

## 2、如果需要：（删除已有）的怎么办？

### 2.1、命令

```
rm -rvf .ssh
```

## 3、没有的情况：需要生成

### 3.1、命令

```
ssh-keygen -t rsa -C 用户名
```



![image-20201130202525673](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130202525673.png)

---



![image-20201130201922387](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130201922387.png)



4、有了：公钥和私钥以后，需要把公钥（存放到GitHub）

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130201936022.png" alt="image-20201130201936022" style="zoom:67%;" />

## 5、添加git remote (为远程库，建立别名)

![image-20201130201956779](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130201956779.png)



## 6、删除git -remote -v中的内容

![image-20201130202007281](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130202007281.png)

## 7、推送到远程仓库

![image-20201130202015870](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130202015870.png)

