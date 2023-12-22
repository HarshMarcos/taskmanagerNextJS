import { NextResponse } from "next/server";


export function middleware(request){
    console.log("Middleware executed")
    const authToken = request.cookies.get("authToken")?.value;

    if(request.nextUrl.pathname==='/api/login'){
        return;
    }

    const loggedInUserNotAccessPaths = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === '/signup'

    if(loggedInUserNotAccessPaths){
        if(authToken){
            return NextResponse.redirect(new URL("/profile/user",request.url));
        }
    }else{
        if(!authToken){
            return NextResponse.redirect(new URL("/login",request.url));
        }else{
            //verify
        }
    }
    console.log(authToken)
    // return NextResponse.redirect(new URL('/home', request.url));
}


export const config = {
    matcher: ["/","/login","/signup","/add-task","/show-task","/profile/:path*","/api/:path*"]
}