#include <stdio.h>


//利用：创建中间变量
void change01(int* a, int* b){
    int temp = *a;
    *a = *b;
    *b = temp; 
}

//利用：利用原始变量（异或）
void change02(int* a, int* b){
   *a = *a ^ *b;
   *b = *a ^ *b;
   *a = *a ^ *b;
}

//利用：利用原始变量（加、减法） 
void change03(int* a, int* b){
    *a = *a + *b;   
    *b = *a - *b;   
    *a = *a - *b;  
}

int main(void){
    int a = 1;
    int b = 2;

    printf("交换前：(%d, %d)\n", a, b);
    change03(&a, &b);
    printf("交换后：(%d, %d)\n", a, b);
}