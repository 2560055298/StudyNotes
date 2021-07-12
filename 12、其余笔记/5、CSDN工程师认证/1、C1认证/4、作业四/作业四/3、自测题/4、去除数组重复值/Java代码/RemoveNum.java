/**
 * Author: 老洋
 * Date:  2021/4/18 20:22
 */
package com.yyy;

import java.util.Arrays;

//去除数组[8, 7, 2, 1, 5, 0, 1, 9, 2]中重复的值，相同的值只保留⼀个
public class RemoveNum {
    public static void main(String[] args){
        int a[] = {8, 7, 2, 1, 5, 0, 1, 9, 2};
        Arrays.sort(a);

        System.out.println("（升序排序）去除前：" + Arrays.toString(a));

        int use_Length = removeNum(a);

        System.out.print("（升序排序）去除后：[ ");
        for(int i = 0; i < use_Length; i++){
            System.out.print(a[i] + " ");
        }
        System.out.print("]");
    }

    public static int removeNum(int a[]){
        int length = 1;

        for(int i = 0; i < a.length; i++){
            if(a[length-1] != a[i]){
                a[length++] = a[i];
            }
        }

        return length;
    }
}