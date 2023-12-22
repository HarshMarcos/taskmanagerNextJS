import { NextResponse } from "next/server"
import jwt from "jsonwebtoken";
import { connectdb } from "@/helper/db"
import { User } from "@/models/user";


export async function GET(request){
    const authToken = request.cookies.get("authToken")?.value;
    console.log(authToken);

    const data = jwt.verify(authToken, process.env.JWY_KEY);
    console.log(data);
    await connectdb();
    const user = await User.findById(data._id).select("-password")
    
    return NextResponse.json({user})
}