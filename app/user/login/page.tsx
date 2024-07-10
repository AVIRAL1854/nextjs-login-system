"use client"
import Button from "@/components/button";
import Label from "@/components/label";
import axios from "axios";
import { useState } from "react";

export default function login(){

    const[email,setEmail]=useState("");
    // const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const handler= async()=>{

        console.log(email);
        
        const headers={
            "a":45466
        }

        const data={
            "email":email,
            
            "password":password
        }

        const params={
            "name":"Aviral"
        }
        
        const res3=await axios.post("http://localhost:3000/api/userlogin",data,{headers});
        if(res3.data.body.flag){
          alert(res3.data.body.msg)
          console.log(res3.data.body);
          window.location.href="/user/success";
        }
        else{
          
          alert("sorry you are not logged in check your 'username'and 'password'")
          console.log(res3.data.body);
        }

    }


    return (
      <div className="font-bold  flex-rows place-content-center justify-center h-screen w-full bg-gradient-to-r from-10% from-indigo-500 via-blue-500 via-30% to-emerald-500 text-white">
        
        <div className="  flex justify-center  text-5xl font-bold">
          Login account here
        </div>
        <div className="flex-rows justify-center  place-content-center ">
          <Label
            setvar={setEmail}
            type={"text"}
            value={"Email"}
            placeholder={"xyz@gmail.com"}
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