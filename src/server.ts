
import express,{Request,Response} from "express"

import { person,payment,personWithoutEmail ,personNOage,personREQ,personOPT} from "./Types/type";
let app =express();

let name:person ={
name:"khalid",
age:23,
email:"khalid@gamil.com"
}
let cost:number =0

let NoEmail:personWithoutEmail={
    name:"abdi",
    age:23
}

let Noage:personNOage={
    age:23
}
let opt:personOPT={
    name:"khalid"
}

function add(one:number,two:number){
    return one+two
}

let sum =<T>(num1:T,num2:T)=>{
return num1 as string + num2 as string 
}

console.log(sum(9,9))

function sum3 <T>(num1:T,num2:T,num3:T){
return num1 as string +num2 as string+ num3 as string
}
let obj:{[key:string]:string}={
    name:"khalid"
}

obj.e="e"




let req:personREQ={
    name:"khalid",
    age:2,
    email:"khalid"
}



let re:number=0
console.log(payment.price)

if(cost ===payment.price){
    re=cost

}else{
   re=cost
}





app.get("/",(req:Request,res:Response)=>{
   res.send("re")
})

app.listen(4000,()=>{
    console.log("is work")
})