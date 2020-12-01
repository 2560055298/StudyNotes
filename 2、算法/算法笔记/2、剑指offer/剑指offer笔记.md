# 3、 数组中重复的数字

## ①、使用方法：数组原地置换法 

```
补充：原地置换为：有序序列
```

### ⑴、代码图

![image-20201130205511135](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130205511135.png)



~~~
这个：简化版，看起来会更好
~~~

![image-20201130205611958](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130205611958.png)



### ⑵、源代码

```java
class Solution {
    //一、算法思想
        //利用：拿出现的数， 与（假设已排序好的数）比较，若与（已出现的数）相等
        //      那么说明：数字发生了重复

    //二、算法细节
        //1、检验数组：是否为空， 是否长度大于n
        //2、检测数组：每个数组是否在 0 ~ n-1范围内
        //3、遍历数组：
             //迭代判断： while(nums[i] != i) 
                    //①、若为 false   --->>>说明: 下标值[i] == i 为有序， 那么 ++i，找下一个 
                    //②、若为 true    --->>>说明：下标值[i] != i 为（无序）
                        //继续判断：if(nums[i] == nums[nums[i]]) 
                            //<1>、若为true， 说明当前nums[i] != i （本是无序），但是（其值） nums[nums[i]] ==  nums[i]  说明，前面出现过的数字，又出现了
                            //<2>、若为false, 那么将：nums[i]的值， 放到：本应该（在有序数组）中（应该在的位置）， 为后续比较做准备

    //三、测试用例
        //in:   [2, 3, 1, 0, 2, 5, 3]  
        //out:  2 OR 3

    //四、复杂度
        //Time  Complexity：O(n)     尽管代码有一个：两重循环， 但（每个数字）最多只要（交换）两次就能找到（属于它的自己的位置），所以为O(n)
        //Space Complexity: O(1)     所有操作步骤：都是在输入数组上进行的， 不需要（额外的分配内存）, 因此为O(1)

    public int findRepeatNumber(int[] nums) {
        //1、检验数组：是否为空， 是否长度大于n
        if(nums == null){
            return -1;          
        }

        //2、获取数组长度
        int length = nums.length;

        //3、检测数组：每个数组是否在 0 ~ n-1范围内
        for(int i = 0; i < length; ++i){
            if(nums[i] < 0 || nums[i] > length-1){
                return -1;
            }
        }

        //3、遍历数组：
        for(int i = 0; i < length; ++i){
            while(nums[i] != i){
                if(nums[i] == nums[nums[i]]){ //说明当前nums[i] != i （本是无序），但是
                                              //（其值） nums[nums[i]] ==  nums[i]
                    						  //说明，前面出现过的数字，又出现了  
                    return nums[i]
                }
                
                int temp = nums[i];    //没有出现时：将nums[i]的值， 放到：本应该（在有
                nums[i] = nums[temp];  //   序数组）中（应该在的位置）， 为后续比较做准备
                nums[temp] = temp;
            }
        }

        return -1;
    }
}
```



### ⑶、复杂度

![image-20201123215044041](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201123215044041.png)



## ②、法二：哈希表法

### （1）、代码图

![image-20201130205727441](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130205727441.png)

### （2）、代码

```java
class Solution {
    //一：算法思想
        //哈希表实现

    //二、算法细节
        //向哈希表中：添加数据， 如果出现一样的了， 说明找到了。set.add() 返回值为false
    
    //三、测试用例
        //[2, 3, 1, 0, 2, 5, 3]         输出：2 或 3 
    
    //四、复杂度
        //Time Complexity：O(n)
            //遍历数组一遍。使用哈希集合（HashSet），添加元素的时间复杂度为 O(1), 最坏：是单调数组， 故总的时间复杂度是 O(n)
        
        //Space Complexity: 
            //O(n)不重复的每个元素都可能存入集合，因此占用 O(n)额外空间。


    public int findRepeatNumber(int[] nums) {
        //创建Hash表
        Set<Integer> set = new HashSet<Integer>();

        //作为：重复元素
        int repeat = -1;

        for(int num:nums){
            if(num < 0 || num > nums.length-1)
                return -1;

            if(!set.add(num)){      //此时：set中，出现了相同的元素
                repeat = num;
                break;
            }
        }

        return repeat;
    }
}
```

### （3）、复杂度

![image-20201130205746481](https://gitee.com/sheep-are-flying-in-the-sky/my-picture/raw/master/picture3/image-20201130205746481.png)