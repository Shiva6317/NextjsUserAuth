"use client"


import Link from "next/link"
import axios from 'axios'
import { useState } from "react"
import "../globals.css"
import { useRouter } from "next/navigation"








const initiallogindata = {
    email: "",
    password: ""
}


export default function Login() {
    const [logindata, setlogindata] = useState(initiallogindata);
    const router = useRouter();
    const onvaluechange = (e) => {
        setlogindata({ ...logindata, [e.target.name]: e.target.value })
        // console.log(logindata)
    }


    const login = async (e) => {

        try {
            const response = await axios.post('/api/login', logindata);
            console.log(response);
            if (response.data.message === "Email not Registerd") {
                router.push("/signup")
            }

            if (response.data.success) {
               
                router.push("/")

            }

        } catch (error) {
            console.log("api not calls successfully")
        }

    }


    return (
        <div id="main" className=" flex items-center justify-center h-screen w-screen ">
            {/* <div className="bg-green-500 max-h-96 w-96 z-10"> */}
            <div id="home" className="bg-white h-4/6 w-96 flex items-center flex-col  justify-center ">
                <h1 className="text-3xl mb-5">Login🥇page</h1>
                <div className="h-6/6 w-6/6  mt-6">
                    <span>Email</span><br />
                    <input
                        name='email'
                        onChange={(e) => { onvaluechange(e) }}

                        className="h-10 w-72 border-2 border-solid outline-none px-4 text-lg"></input>
                </div>
                <div className="h-6/6 w-6/6  mt-6">
                    <span>Password</span><br />
                    <input
                        name='password'
                        onChange={(e) => { onvaluechange(e) }}
                        className="h-10 w-72 border-2 border-solid outline-none px-4 text-lg "></input>
                </div>
                <button className=" mt-5 h-10 w-72 border-2 border-solid border-black uppercase font-bold rounded-2xl hover:text-white hover:border-white" onClick={(e) => { login(e) }}>Login</button>

                <label className="h-6/6 w-6/6  mt-10">Don't have an account   <Link href="/signup" className="text-blue-300" >register</Link></label>
                {/* </div> */}
            </div>
        </div>
    )
}