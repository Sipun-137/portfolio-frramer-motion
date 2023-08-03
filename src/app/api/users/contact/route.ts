import connect from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
connect()

export async function POST(request:NextRequest){

    try {
    const reqBody=await request.json();
    const {name,email,message}=reqBody;

    const user=new User({
        name,email,message
    });

    await user.save();

    return NextResponse.json({
        message:"user created successfully",
        success:true
    })
}
catch(error:any){
    return NextResponse.json({
        error:error.message
    },{status:500}) 
}
}
