const prompt =require('prompt-sync')({sigint: true});
// require뭐시기 들어가는 애들은 걍 복붙이 가장 편하다.
/*
prompt - get numbers from user
total variable - keep track of total
while loop - continuously ask for numbers 
*/

let num = Number(prompt("Enter a number: "))
let sum = 0; //sum을 쓸 때 웬만해서는 걍 0부터 시작하는게 최고다 90프로 이상!

while(num !== 0){ // <- 걍 num != 0 의 경우 음수를 넣을 수 있다.
    sum += num // sum = sum + num
    console.log("Sum: " + num)
    num = Number(prompt("Enter another number: "))
}

console.log("Final Sum: " + sum)