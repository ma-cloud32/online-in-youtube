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

// // Arrow function
//  const arrowSum=(a,b)=>{
//     console.log(a+b); 
//  }

//  const arrowMul =(a,b)=>{
//     console.log(a*b);
//  }
  
//  function countVowels(str){
//     let count =0;
//     for(const char of str){
//        if(char ==="e"|| char ==="a"|| char ==="o"|| char ==="u"|| char ==="i") {
//         count++;
//        }
//      }
//      console.log(count);
//  }
//  countVowels("education");
 
 
// //  myFunction("string");
//  // calculate the vowel

// //  let arr  = [5,6,2,1,101,3];
  
// //  const output = arr.reduce((prev,curr)=>{
// //     return  prev > curr?prev : curr;
// //  });

// //  console.log(output);

// //   5>6 = 6


//  // let's practice
//  // Question 1
 
// //  let arr = [98,76,93,74,91,92];

// //   let Arr  = arr.filter((val) =>{
// //    return val > 90;
// //   });

// //   console.log(Arr);

// // Qusetion 02

 let  arr = [1,2,3,4,5,6,7,8,9,10];

let sum = arr.reduce((res, curr)=>{
   return res + curr;
});

console.log("sum = ", sum);

let fact = arr.reduce((res,curr)=>{
   return res*curr;
});

console.log("fact" ,fact);



