/**
 * Author: 老洋
 * Date:  2021/4/18 20:32
 */
package com.yyy;

import java.util.Arrays;

//使⽤⾮递归⽅式对数组[8, 7, 12, 1, 5, 0, 6, 9, 2]执⾏折半查找
public class BinarySelect {
    public static void main(String[] args){
        int array[] = {8, 7, 12, 1, 5, 0, 6, 9, 2};

        //首先进行排序：
        Arrays.sort(array);

        //打印排序后的：数组
        System.out.println("排序后的数组为：" + Arrays.toString(array));

        //折半查找元素
        int num = 6;           //需要查询的：数字
        Integer arrayIndex = binarySelect(array, num);

        if(arrayIndex != null){
            System.out.println("查找数字：" + num +"  ==>> 数组索引为：" + arrayIndex);
        }else{
            System.out.println("数组中不存在数字：" + num);
        }
    }

    public static Integer binarySelect(int[] array, int num){
        int beginIndex = 0;                     //开始索引
        int endIndex = array.length - 1;        //结束索引

        while(beginIndex <= endIndex){
            Integer midIndex = (beginIndex + endIndex) / 2;

            if(array[midIndex] == num){
                return midIndex;            //找到了
            }else if(array[midIndex] < num){
                beginIndex = midIndex + 1;
            }else{
                endIndex = midIndex - 1;
            }
        }
        return null;
    }
}