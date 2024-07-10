"use client"
import Button from "@/components/button";
import Label from "@/components/label";
import axios from "axios";
import { useState } from "react";

export default function login(){

    const[email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const handler= async()=>{

        console.log(email);
        console.log("\n"+username);

        console.log("\n"+password)
        // const res = await axios.get("http://localhost:3000/api/user");
        const headers={
            "a":45466
        }

        const data={
            "email":email,
            "username":username,
            "password":password
        }

        const params={
            "name":"Aviral"
        }
        const res2 = await axios.post("http://localhost:3000/api/user",data,{headers});

        if(res2.data.body.flag){
          alert("you have logged in  successfully!");
          window.location.href = "/user/login";
        }
        else{
          alert(res2.data.body.error);
        }

        console.log(res2.data.body);
        console.log("----------------------\n");

        
        // console.log(res.data);
        
        // alert('hi')

    }


    return (
      <div className="font-bold  flex-rows place-content-center justify-center h-screen w-full bg-gradient-to-r from-10% from-indigo-500 via-blue-500 via-30% to-emerald-500 text-white">
        
        <div className="  flex justify-center  text-5xl font-bold">
          Create account here
        </div>
        <div className="flex-rows justify-center  place-content-center ">
          <Label
            setvar={setEmail}
            type={"text"}
            value={"Email"}
            placeholder={"xyz@gmail.com"}
          />
          <Label
            setvar={setUsername}
            type={"text"}
            value={"username"}
            placeholder={"xyz123"}
          />
          <Label
            setvar={setPassword}
            type={"password"}
            value={"Password"}
            placeholder={"password here...."}
          />
          <Button value="submit" handler={handler} />
        </div>
      </div>
    );
}