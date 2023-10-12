
"use client"


import Link from "next/link"
import axios from 'axios'
import { useState } from "react"
import "../globals.css"
import { useRouter } from 'next/navigation';

const initiallogindata = {
    name: "",
    email: "",
    password: ""
}
export default function Login() {
    const [logindata, setlogindata] = useState(initiallogindata)
    const router = useRouter();
    const onvaluechange = (e) => {
        setlogindata({ ...logindata, [e.target.name]: e.target.value })
        console.log(logindata)
    }
    const signup=async()=>{
        // apicall
        // console.log("signup")
       try {
        const response=await  axios.post('/api/signup',logindata);
        console.log(response.data.message);
        alert(response.data.message);
        if(response.data.success){
            router.push('/login')
        }
        
       } catch (error) {
        console.log("Api not call because of some error",error);
        
       }


    }

    return (
        <div id="main" className=" flex items-center justify-center h-screen w-screen ">
            {/* <div className="bg-green-500 max-h-96 w-96 z-10"> */}
            <div  id="home" className=" h-4/6 w-96 flex items-center flex-col  justify-center ">
                <h1 className="text-3xl mb-5">Signup🥇page</h1>
                <div className="h-6/6 w-6/6  mt-6">
                    <span>Username</span><br />
                    <input
                        name='name'
                        value={logindata.name}
                        onChange={(e) => { onvaluechange(e) }}

                        className="h-10 w-72 border-2 border-solid outline-none px-4 text-lg"></input>
                </div>
                <div className="h-6/6 w-6/6  mt-6">
                    <span>Email</span><br />
                    <input
                        name='email'
                        value={logindata.email}
                        onChange={(e) => { onvaluechange(e) }}

                        className="h-10 w-72  border-2 border-solid outline-none px-4 text-lg"></input>
                </div>
                <div className="h-6/6 w-6/6  mt-6">
                    <span>Password</span><br />
                    <input
                        name='password'
                        value={logindata.password}
                        onChange={(e) => { onvaluechange(e) }}
                        className="h-10 w-72 border-2 border-solid outline-none px-4 text-lg "></input>
                </div>
                <button className=" mt-5 h-10 w-72 border-2 border-solid border-black uppercase font-bold  rounded-2xl  hover:text-white hover:border-white" onClick={()=>{signup()}}>Signup</button>
                <label className="h-6/6 w-6/6  mt-10">I have an account   <Link href="/login" className="text-blue-300" >login</Link></label>
                {/* </div> */}
            </div>
        </div>
    )
}