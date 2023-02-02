const prompt =require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number: "))
let sum = 0

while(sum < 100){
    console.log(num)
    num = num*2
    sum = num
}
console.log("Final Doubling ends at " + sum)