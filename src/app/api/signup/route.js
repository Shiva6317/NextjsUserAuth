import { NextRequest, NextResponse } from "next/server";
import Connectiondb from "@/db/db";
import User from "@/model/user";
import bcryptjs from "bcryptjs"

export async function POST(nextRequest, nextResponse) {

    try {
        await Connectiondb();
        // console.log(nextRequest);
        const body = await nextRequest.json();
        // console.log(body)
        // check email already exist or not
        if(!body.email && ! body.name && ! body.password){
            return NextResponse.json({success:false,message:"name email and password require"});

        }
        const Alreadyexist_User = await User.find({ email: body.email })

        console.log(Alreadyexist_User )
        if(!Alreadyexist_User){
            console.log("email already exist");
            return NextResponse.json({ success: false,message:"email already axist" })
        }
        const salt = await bcryptjs.genSalt(12)
        const hashpassword = await bcryptjs.hash(body.password, salt)
        // console.log(hashpassword);
        const newdata = await User({
            name: body.name,
            email: body.email,
            password: hashpassword
        });

        const result = await newdata.save();


        return NextResponse.json({ result: result, success: true,message:"user resister successfully" });

    } catch (error) {
        return NextResponse.json({ success: false })
    }


}