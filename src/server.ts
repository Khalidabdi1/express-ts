
import express,{Request,Response} from "express"


let app =express();

app.get("/",(req:Request,res:Response)=>{
   res.send("re")
})

app.listen(4000,()=>{
    console.log("is work")
})