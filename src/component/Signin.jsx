import React from "react"
import "../component/Signin.css"
import Logo from "../component/images/Gifted-Brainz-PNG.png"
import { Link } from "react-router-dom"


const Signin =()=>{

    return(
        <section>


             <div className="Logo">
                 <img className="logo" src={Logo} alt="" />
                <h1>Sign In</h1>
                </div>

            <div className="form">
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
                <p>Remember me</p>
                </div>



                <Link to={"/signup"}><button>Sign In</button></Link> 

            <p>Don't have an account <Link to={"/signup"}>Sign up</Link></p>
            </div>




        </section>
    )
}

export default Signin;