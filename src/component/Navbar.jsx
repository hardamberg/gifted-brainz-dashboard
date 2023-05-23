import React from "react";
import styled from "styled-components";
import Logo from "../component/images/Gifted-Brainz-PNG.png"
import { Link } from "react-router-dom";



const Nav=()=>{

    return (

        <Wrapper>
            <div className="nav">

               <img className="logo" src={Logo} alt="" />

                <div className="Navv">
                    <ul className="Nav-list">
                        <a href="#courses"><li>Course</li></a>
                         <li>Career</li>
                         <a href="#about"><li>About Us</li></a>
                    </ul>

                   <Link to={"/signin"}> <button className="btn">Sign In</button></Link>
                </div>
            </div>
        </Wrapper>
    )

}

const Wrapper=styled.div`
    background-color: white;
    color: black;
    padding: 0px 30px;

    a{
        color: black;
    }

    .Nav-list{
        display: flex;
        flex-direction: row;
        margin-right: 30px;
       
        
        
    }
    .Navv{
        display: flex;
        flex-direction: row;
    }

   .Nav-list li{
    list-style: none;
    margin-right: 40px;
    margin-top: 25px;
    padding-bottom: 20px;
    font-weight: bolder;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
   }

   .nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   }

   .btn{
    padding: 10px 40px;
    background-color: blue;
    color: white;
    margin-bottom: 30px;
    border-radius: 20px;
    border: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-bottom: 25px;
   }

   .logo{
    height: 20vh;
   }
`

export default Nav;