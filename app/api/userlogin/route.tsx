// import { Prisma } from "@prisma/client";
// import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import client from "@/db";

// const client = new PrismaClient();

export function GET(req: NextRequest) {
  return NextResponse.json({
    msg: "login here",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const email = body.email;
  const password = body.password;

  try {
    const details = await client.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });

    if (details) {
      return NextResponse.json({
        body: {
          details: details,
          flag: 1,
          msg: "you have been successfully login in this !",
          email: email,
        },
      });
    } else {
      return NextResponse.json({
        body: {
          flag: 0,
          msg: `there is error :`,
        },
      });
    }
  } catch (e) {
    return NextResponse.json({
      body: {
        flag: 0,
        msg: `there is error : ${e}`,
      },
    });
  }
}
