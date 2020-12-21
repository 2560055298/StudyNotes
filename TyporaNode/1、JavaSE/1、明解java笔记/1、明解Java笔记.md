~~~
找合适的题，做合适的笔记。												---老洋
~~~





# 1、第二章

## ①、知识点

###  ⑴、Scanner类中的：next() 和 nextLine()方法解析

- **首先**：我们先看看Scanner类的继承树，了解一下它

<img src="https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203141213685.png" alt="image-20201203141213685" style="zoom: 80%;" />

---



- **其次：**我们看看它有的（方法）

  ![image-20201203153805157](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203153805157.png)

---



==比较一下next() 和nextLine()== 

- **执行：**next（）时

![image-20201203183743926](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203183743926.png)

---

- **执行**：nextLine()时

![image-20201203183136983](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture4/image-20201203183136983.png)



---



## ②、第二章：习题

### ⑴、2-8

- **题目：**

  ![image-20201202071052900](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202071052900.png)

- **代码：**

  ~~~java
  import java.util.Random;
  import java.util.Scanner;
  
  public class Demo01 {
      public static void main(String[] args){
          //1、设置：从键盘输入
          Scanner stdIn = new Scanner(System.in);
  
          //2、创建：随机数发生器
          Random rand = new Random();
  
          //3、生成：[0, 10]的随机数， 然后（减去5）模拟出[-5, 5]的随机数
          int randNum = rand.nextInt(11) - 5;
  
          //4、键盘输入一个（整数）
          System.out.print("整数值：");           //无序换行
          int num = stdIn.nextInt();
  
          //5、打印一下：随机数，为了验证，结果的正确性
          System.out.println("生成[-5, 5]之间的随机数是：" + randNum);
  
          //6、打印：整数 + [-5, 5]随机数
          System.out.println("生成了该值+-5范围内的随机数,是" + (num + randNum));
  
  
      }
  }
  
  
  ~~~

  

- **代码图：**

  ![image-20201202072449423](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202072449423.png)

- **运行图：**

![image-20201202072702879](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202072702879.png)

​			



### ⑵、2-9

~~~
此处：只解第三题， 会第三题，前两题（必会）。
~~~

- 题目

  ![image-20201202073232920](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202073232920.png)

- 代码

  ~~~java
  import java.util.Random;
  
  /**
   * 解题思路：
   *      1、通过：rand.nextDouble()          -->> [0.0, 1.0)
   *      2、通过：[0, 1) - 1                 -->> [-1.0, 0.0)
   *      3、通过：rand.nextDouble()          -->> [0.0, 1.0)
   *      4、相加：[-1.0, 0.0) + [0.0, 1.0)   -->> 结果 [-1.0, 1.0)
   *
   *      注意：很难产生的数是-1, 因为double类型的数，太多了。随机到的可能性太小
   */
  public class Demo01 {
      public static void main(String[] args){
          //1、生成随机数：发生器
          Random rand = new Random();
  
  
          //2、生成范围在：[0.0, 1.0)的随机数
          double num1 = rand.nextDouble();
          System.out.println("rand.nextDouble()的值:      " + num1);
  
          //3、通过（步骤2)获得范围在：[-1.0, 0.0]的随机数
          double  num2 = num1 - 1;
          System.out.println("rand.nextDouble() - 1后的值： " + num2);
  
          //4、生成范围在：[0.0, 1.0)的随机数
          double num3 = rand.nextDouble();
          System.out.println("rand.nextDouble()的值：   " + num3);
  
          //5、num2和num3相加：[-1.0, 0.0)  + [0.0, 1.0)  === [-1.0, 1.0)
          double result = (num2 + num3);
          System.out.println("生成[-1.0, 1.0)的随机数为：" + result);
  
      }
  }
  
  ~~~

  

- 代码图

  ![image-20201202085414159](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202085414159.png)



- 运行图

  ![image-20201202085735381](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201202085735381.png)

