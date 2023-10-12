import mongoose from "mongoose";

const DB_Url="mongodb+srv://kali30nethunter02:WyTwGRiT206kL0ij@nextauth.livwekq.mongodb.net/auth_database?retryWrites=true&w=majority"
 export const Connectiondb =async()=>{

try {
const response=await mongoose.connect(DB_Url)
if(response){
    console.log("database connected successfully");
}



    
} catch (error) {
    console.log("database not connected successfully",error)
}

}


export default Connectiondb;