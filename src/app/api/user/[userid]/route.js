//api/users/{userid}

import { User } from "@/models/user";
import { NextResponse } from "next/server";

//update user
export const PUT = async(request, { params }) => {

    const { userid } = params;

    const{ name,password,about,profileURL } = await request.json();

    try {
        const user= await User.findById(userid);

        user.name=name;
        user.password=password;
        user.about=about;
        user.profileURL=profileURL;

        const updatedUser = await user.save();
        return NextResponse.json({
            updatedUser,
            message:"User Updated Successfully",
            success:true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Failed to Update User",
            success:false
        })
    }

}




//get single user
export const GET = async (request, { params }) =>{

    const { userid } = params

    try {
        const user = await User.findById(userid);
        return NextResponse.json({
            user,
            message:"User Found",
            success:true
        })
    } catch (error) {
            console.log(error);
            return NextResponse.json({
                message:"Failed to find record",
                success:false
            })

    }

}


//delete single user
export async function DELETE(request, { params }){
    
    const { userid } = params;

    try {
        await User.deleteOne({
            _id:userid
        })
        return NextResponse.json({
            message:"User deleted",
            success:true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Failed to delete User",
            success:false
        })
    }


    
}