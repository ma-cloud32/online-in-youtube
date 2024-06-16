//  function myFunction(msg,n){
//     console.log(msg*n);
// }
// myFunction("I love Js",100); // Not a Number

// function sum(x,y){
//     console.log(x+y);
// }

// function sum(a,b){
//     s = a+b;
//     return s;
// }
//  let val = sum(3,8)
//  console.log(val)
 
// sum function
//  function sum(a,b){
//     return a+b;
//  }
  
//  // multiply by function
//  function  multi(x,y){
//     return x*y;
//  }

// Arrow function
 const arrowSum=(a,b)=>{
    console.log(a+b); 
 }

 const arrowMul =(a,b)=>{
    console.log(a*b);
 }
  
 function countVowels(str){
    let count =0;
    for(const char of str){
       if(char ==="e"|| char ==="a"|| char ==="o"|| char ==="u"|| char ==="i") {
        count++;
       }
     }
     console.log(count);
 }
 countVowels("education");
 
 
//  myFunction("string");
 // calculate the vowel
