```
强者以前也并非强者。															--老洋
```

## 1、首先查看：有没有公钥和私钥

### 	1.1、命令

```
ls -al ~/.ssh
```

![image-20201111075812765](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111075812765.png)



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

![image-20201107072648678](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201107072648678.png)



![image-20201107073211471](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201107073211471.png)



4、有了：公钥和私钥以后，需要把公钥（存放到GitHub）

![image-20201111080251780](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201111080251780.png)

## 5、添加git remote (为远程库，建立别名)

![image-20201107075214395](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201107075214395.png)



## 6、删除git -remote -v中的内容

![image-20201107075412050](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201107075412050.png)

## 7、推送到远程仓库

![image-20201107075720412](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201107075720412.png)

