const prompt =require('prompt-sync')({sigint: true});

let str = prompt("Enter whatever you want. ")

let count = 0
while(count < 10){
    console.log(str)
    count = str.length
    str += str    
}