#include<iostream>
using namespace std;

int main(){
    // Selection Sort 
    int arr[6] = {67,78,1,0,9,10};
    // Suppose if wehave 6 length element arrays then after 5 iteration the array will be sorted 
    for(int i = 0 ;i<6-1;i++){
        int min = i;
        for(int j = i+1 ; j<6 ;j++ ){
            if(arr[min]>arr[j]) min = j;
        }
        int temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    for(int i = 0 ;i<6;i++){
        cout<<arr[i]<<" ";
    }
    
}


