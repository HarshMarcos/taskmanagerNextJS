import { connectdb } from "@/helper/db"
import { User } from "@/models/user";
import { NextResponse } from "next/server"
connectdb();
export async function GET(request){

    let users = [];

    try {
        users = await User.find();
        return NextResponse.json({
            users,
            success:true
        })    
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to get users",
            success:false
        })
    }
}


//create user
export async function POST(request){

    //fetch user detail from request

    const { name,email,password,about,profileURL } = await request.json();

    //create user object with user model
    const user = new User({
        name,email,password,about,profileURL
    });

    try {
        const createdUser = await user.save();
        const response = NextResponse.json({
        user, status:201,
    });
    return response;
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Failed To create user",
            status: false,
        })
    }
}

export function DELETE(request){
    console.log("delete api called")
    
    return NextResponse.json({
        messsage:"delted",
        status:true
    })

}

export function PUT(){

}