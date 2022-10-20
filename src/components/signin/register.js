import React, { useState } from "react";
import './signin.css'
import { Link } from 'react-router-dom'
import api from '../../data'


export default function Register(){
    let [username,setUserName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    async function  readData(){
        const res = await api.get("/data");
        console.log(res.data)
    }
    async function writeData(){
        // event.preventDefault();
        alert("Thank You For Signing In");
        // props.toggleLogIn(true,username);
        let req = {
            "username": username,
            "email": email,
            "password": password
           
        }
        console.log(req);
        let res = await api.post("/data",req);
        res = await api.get("/data");
        console.log(res.data);
    }
    return(
        <>
        <div className='scontainer'>
            <div className='sform'>
                <h1>Register Here</h1>
                <div>
                    <i className='fa fa-user'></i>
                    <input value={username} onChange={(e)=>{setUserName(e.target.value)}} placeholder='Username' className='inputE'/>
                </div>
                <div>
                    <i className='fa fa-envelope'></i>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='E-Mail' className='inputE'/>
                </div>
                <div>
                    <i className='fa fa-lock'></i>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' className='inputE'/>
                </div>
                <div>
                    <section>
                       <input type={"checkbox"}></input>
                        &nbsp;<p>Terms & Conditions</p>
                    </section>
                    <button onClick={writeData} >Register</button>
                </div>
                <p>Already registered with us? <Link to='/'><span>Click here</span></Link></p>
            </div>
            <img src='../imgs/signin/1.jpg' alt='img' className='simg'></img>
        </div>
        </>
    )

}