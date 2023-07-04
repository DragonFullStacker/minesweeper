import React from 'react'

import { FaRegUserCircle } from "react-icons/fa";

import { FiMail } from "react-icons/fi"

import { BsFillLockFill } from "react-icons/bs"



const imageUrl =
    "https://res.cloudinary.com/dirwn9yno/image/upload/v1676207185/getblack/istockphoto-1346094859-612x612_xoyuk2.jpg"


const Register = () => {


    return (
        <section className='rg_section' style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}>
                <form action="">
                    <h2 className='f_text'>Sign up</h2>
                    <p className='f_text'>Hey stranger, let’s get to know you more. Create an
                       account with your verified information.</p>
                    <div className="input-container">
                        <FaRegUserCircle className="f_icon"/>
                        <input className="input-field" type="text" placeholder="Your name" name="usrnm" />
                    </div>

                    <div className="input-container">
                        <FiMail className='f_icon'/>
                        <input className="input-field" type="text" placeholder="Your email" name="email" />
                    </div>

                    <div className="input-container">
                        <BsFillLockFill className='f_icon'/>
                        <input className="input-field" type="password" placeholder="Your password" name="psw" />
                    </div>
                    <div className="input-container">
                        <BsFillLockFill className='f_icon'/>
                        <input className="input-field" type="password" placeholder="Confirm password" name="psw" />
                    </div>

                    <div className="f_btn">
                         <button type="submit" className="s_btn btn">Sign up</button>
                    </div>    
                </form>
        </section>
    )
}

export default Register