import React from 'react';

import { useRef, useState, useEffect } from "react";

import { FaRegUserCircle } from "react-icons/fa";

import { FiMail } from "react-icons/fi"

import { BsFillLockFill } from "react-icons/bs"

const imageUrl =
        "https://res.cloudinary.com/dirwn9yno/image/upload/v1676207185/getblack/istockphoto-1346094859-612x612_xoyuk2.jpg"


const Login = () => {


    return (
        <section className='lg_sect' style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}>

                <form action="">
                    <h2 className='f_text'>Sign in</h2>
                    <p className='f_text'>Welcome back, continue into your account with your email and password.</p>
                    <div className="input-container">
                        <FaRegUserCircle className="f_icon"/>
                        <input className="input-field" type="text" placeholder="Your email" name="usrnm" />
                    </div>


                    <div className="input-container">
                        <BsFillLockFill className='f_icon'/>
                        <input className="input-field" type="password" placeholder="Your password" name="psw" />
                    </div>
                      <div className="f_btn">
                    <button type="submit" className="l_btn btn">Sign in</button>
                    </div>
                </form>
        </section>
    )
}

export default Login