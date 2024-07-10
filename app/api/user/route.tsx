// import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import client from "@/db";

// const client =new PrismaClient();

export function GET(req:NextRequest){
    return NextResponse.json({
        email:"xyz@gmail.com",
        password:12345678
    })
}

export async function POST(req:NextRequest){
    

    const body=await req.json();
    console.log(req.headers.get("a"));
    console.log(req.nextUrl.searchParams.get("name"));

    try{
        await client.user.create({
        data:{
            username:body.username,
            password:body.password,
            email:body.email
        }
        });

    
        return NextResponse.json({

        body:{
            flag:1,
            mail:body.mail,
            password:body.password
        },
        headers:{
            a:req.headers.get("a")

        },
        params:{
            value:req.nextUrl.searchParams.get("name")
        },
        msg:"you are signed in successfully"
    })
<<<<<<< HEAD

    }catch(e){
        console.log("this is the error" + e);

        return NextResponse.json({
            body:{
                flag:0,
                error:"this is the error  "+e
            }
        })

    }

    




}
=======
}
>>>>>>> aaeb110a0648d2571d84ed8f681d06d56909e73e
