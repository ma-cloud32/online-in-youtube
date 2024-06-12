// Primitive data type
// note: call by value
// 7 types : string ,Number, Boolean,null,undefined,Symbol,
BigInt
const score=100
const scorValue =100.3
const isLoggedIn= false
const outsidTemp = null
let userEmail= undefined
//let userEmail;
const id =Symbol('123')
const anotherId = Symbol('123') 
console.log(id===anotherId)
const i4 = 23
const i3 = 23
console.log(i4===i3)
const bigNumber=938888993399999n


// Reference (Non primitive)
// Array ,Objects,funtions
const heros=["Ahetesham","Intekhab","Inzamam"]
let myObj ={
    name:"Arshad",
    age:22,
}
 
//  const myFuntion = funtion(){
 //  console.log("hello world");
 //}
   //console.log(typeof score)
  // console.log(typeof outsideTemp)
 //  console.log(typeof heros)

 // ++++++++++++++++++++++++++++++++
// Stack (Primitive ,Heap(Non-primitive)) 
   let myYoutubename = "Md Arshad"
   let anothername = myYoutubename
    anothername= "chai or roti"
   console.log(anothername)
   console.log(myYoutubename)
   let userOne ={
       email:"use@google.com",
       upi: "user@ybl",
   }
   let userTwo = userOne
   userTwo.email ="mdarshad@google.com"
   console.log(userTwo.email);

   console.log(userOne.email);




 


 
