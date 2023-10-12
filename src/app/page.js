import Image from 'next/image'
import "./globals.css"
import Toastmessage from "@/components/toastmessage";
export default function Home() {
  return (
    <>
      <Toastmessage />
      <main id="main" className=' bg-white h-screen w-screen text-white  flex items-center justify-center z-10 '>
        <div id='home' className='bg-white h-3/6 w-3/6 flex items-center flex-col pt-5 shadow-lg shadow-white '>
          <h1 className='uppercase text-5xl text-black'>Welcome to🥇 home page</h1>
          <p className='text-black text-1xl w-4/6 break-all pt-5 uppercase'>welcome to my personalized home page <span className='text-2xl'>🤌🚴‍♂️🏄🛀.</span>
            this is my forst website in next js only for user authentication purpose <span className='text-2xl'>💇💆‍♀️🀄 </span>
            you can view and manage your account according to your you need you can store data in this website and find then when you need this is the project thankss buddy this is shiva<span className='text-2xl'>🤣👌😍🧑‍🤝‍🧑👯‍♂️🧍‍♀️ </span>
          </p>
          <button className='border-2 border-black border-solid mt-5 h-10 w-4/6 rounded-2xl text-black text-xl text-bold uppercase font-bold hover:bg-black hover:text-white'>Logout</button>

        </div>
      
      </main>
     
    </>
  )
}
