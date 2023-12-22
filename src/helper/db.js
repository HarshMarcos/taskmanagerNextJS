import mongoose from "mongoose"
// import { User } from "../models/user.js";
// import { env } from "../../next.config";
export const connectdb = async() => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"taskmanager",
            useNewUrlParser: true
        });
        console.log("db connected");

        //testing and creating new user
        // const uuser = new User({
        //     name:"Alpha",
        //     email:"alpha@gmail.com",
        //     password:"password",
        //     about:"This is testing"
        // })

        // await uuser.save();

        // console.log(uuser);

        console.log("connected with host ",connection.host);
    } catch (error) {
        console.log("Failed to connect with data base")
        console.log(error)
    }     
}