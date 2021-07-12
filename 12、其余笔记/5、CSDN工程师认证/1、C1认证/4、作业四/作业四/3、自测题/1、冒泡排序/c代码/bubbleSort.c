#include <stdio.h>

//冒泡：升序排列
void bubble_sort(int array[], int length){

    for(int i = 0; i < length-1; i++){            //需要：确定n-1个位置， 第n个元素自然也就确定了
        int flag = 1;                            //flag为1时：默认为（已排序好）
        for(int j = 0; j < length-1-i; j++){    //需要：进行 n-1 - 已排序好的结点轮交换
            if(array[j] > array[j+1]){
                int temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag = 0;                       //flag为0时：默认为（未排序好）
            }       
        }

        if(flag){
            break;                              //flag为1：说明已排序好，跳出循环即可
        }
    }
}

int main(void){
    int array[] = {0,9,12,1,6,3,7,11};  
    int length = sizeof(array) / sizeof(array[0]);  //计算：长度

    printf("排序前：");
    for(int i = 0; i < length; i++){
        printf("%d ", array[i]);
    }

    bubble_sort(array, length);             //调用排序：函数

    printf("\n排序后：");
    for(int i = 0; i < length; i++){
        printf("%d ", array[i]);
    }

}