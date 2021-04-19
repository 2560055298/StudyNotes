#include <stdio.h>

int main(void){
    int sum = 0;

    //奇数是：不能被2整除的数（1、3、5、7）
    for(int i = 0; i < 300; i++){
        if(i % 2 != 0){
            sum += i;
        }
    }

    printf("(0, 300)之间的奇数和为：%d", sum);
}