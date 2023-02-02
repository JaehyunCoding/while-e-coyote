const prompt =require('prompt-sync')({sigint: true});

let n = Number(prompt("Enter a value for ."))
let sum1 = 0
let sum2 = 0
let sum3 = 0
let x = 1

while(n<=x){
    if(n=1){
        sum1=0
        sum3 = sum1 + sum2
    }
    if(n=2){
        sum2=1
        sum3 = sum1 + sum2
    }
    if(n>=3){
        sum3 = sum1 + sum2
        sum2 = sum1
        sum3 = sum2
    }
    if(x=n)
    console.log(sum3)
}
