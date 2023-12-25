import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectdb } from "@/helper/db";

connectdb();
export async function POST(request) {
  // connectdb()

  const { email, password } = await request.json();
  try {
    const user = await User.findOne({
      email: email,
    });
    if (user === null) {
      throw new Error("User Not Found");
    }

    const matched = bcrypt.compareSync(password, user.password);

    if (!matched) {
      throw new Error("Password not matched");
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWY_KEY
    );

    const response = NextResponse.json({
      message: "Login Success",
      success: true,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    return response;

    // console.log(token)

    // console.log(user)
    // return NextResponse.json(token)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to login",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
