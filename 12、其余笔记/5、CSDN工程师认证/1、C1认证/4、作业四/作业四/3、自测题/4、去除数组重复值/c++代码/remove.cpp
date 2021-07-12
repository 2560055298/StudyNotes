#include <iostream>
#include<algorithm>
using namespace std;


int removeRepeat(int array[], int n){
    int len = 1;

    for(int i = 0; i < n; i++){
        if(array[len - 1] != array[i]){
            array[len++] = array[i]; 
        }
    }

    return len;

}

int main(void){
    int array[] = {8, 7, 2, 1, 5, 0, 1, 9, 2};
    int n = sizeof(array) / sizeof(array[0]);

    sort(array, array+n);

    int useLength = removeRepeat(array, n);

    for(int i = 0; i < useLength; i++){
        cout << array[i] << " ";
    }

}