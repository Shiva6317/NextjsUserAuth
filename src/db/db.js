import mongoose from "mongoose";


 export const Connectiondb =async()=>{

try {
const response=await mongoose.connect(process.env.DB_Url)
if(response){
    console.log("database connected successfully");
}



    
} catch (error) {
    console.log("database not connected successfully",error)
}

}


export default Connectiondb;