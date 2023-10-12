
import Connectiondb from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/model/user";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";




export async function POST(nextRequest) {

    try {
        await Connectiondb();
        const body = await nextRequest.json();
        const userinfo = await User.findOne({ email: body.email })
        if (!userinfo) {

            return NextResponse.json({ success: false, message: "Email not Registerd" })

        }

        const checkpassword = await bcryptjs.compare(body.password, userinfo.password)
        console.log(checkpassword)
        if (!checkpassword) {
            console.log("password not correct");
            return NextResponse.json({ success: false, message: "Password not correct please enter correct password" })

        }
        const tokendata = {
            user: userinfo.name,
            id: userinfo._id
        }
        const jwt_key= "shivjeetpaswanuserinformationtoken"
        const token = jwt.sign(tokendata, jwt_key, { expiresIn: "7d" });

        const response = NextResponse.json({  success: true, message: "user login successfully" });

        response.cookies.set('token', token, { httpOnly: true });
        return response;
    } catch (error) {
        return NextResponse.json({ Error: error, success: false, message: "user not login" });
    }
}



