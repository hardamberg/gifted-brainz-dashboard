import React from "react";
import Gifted from "./images/Gifted-Brainz-PNG.png"
import "../component/Signup.css"
import { Link } from "react-router-dom";


const Signup =()=>{
    return(


    <section>

        <div className="logo">
            <img className="giftedlogo" src={Gifted} alt="" />
            <h1>Sign Up</h1>

        </div>

        <div className="form">

            <div>
            <h2>Username</h2>
            <input className="input" type="text" />
            </div>


            <div >
            <h2>Enter your Email</h2>
            <input  className="input" type="text" />
            </div>


            <div >
            <h2>password</h2>
            <input className="input" type="text" />
            </div>


            <div className="check">
                <input className="checkbox" type="checkbox" />
                <p>I Have Agreed To The <a href=".">Terms & Conditions</a> <br />And The<a href="."> Privacy & Policy </a>Of this Website.</p>
                <p>OR </p>

                
            </div>


            <div className="click">
            <p>Already have an Exixting Account ? <Link to={"/"}>Click here</Link></p>
            </div>





        </div>

    </section>
    )
}


export default Signup;
