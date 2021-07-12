/**
 * Author: 老洋
 * Date:  2021/4/18 14:55
 */
package com.yyy;

import java.util.Arrays;

//实现对数组[0,9,12,1,6,3,7,11]的冒泡排序
public class BubbleSort {
    public static void main(String[] args){
        int[] oldArray = {0,9,12,1,6,3,7,11};

        System.out.println("旧数组：" + Arrays.toString(oldArray));
        System.out.println("新数组：" + Arrays.toString(bubbleSort(oldArray)));
    }

    public static int[] bubbleSort(int[] oldArray){
        //1、复制一份（旧数组）
        int[] newArray = Arrays.copyOf(oldArray, oldArray.length);

        //2、要进行：n-1次轮， 便可以确定下n个元素
        for(int i = 0; i < newArray.length-1; i++){
            boolean flag = true;            //默认为：序列已（完成排序）

            //3、每一轮：需要进行 n - 1 - i 次交换, 便可以（冒出来一个：元素）
            for(int j = 0; j < newArray.length-1-i; j++){
                //4、进行交换
                if(newArray[j] > newArray[j+1]){
                    int temp = newArray[j];
                    newArray[j] = newArray[j+1];
                    newArray[j+1] = temp;
                    flag = false;           //说明：序列（未完成排序）
                }
            }

            if(flag){
                break;                      //为true说明：（已完成排序）, 不用再进行遍历排序了
            }
        }
        return newArray;
    }

}