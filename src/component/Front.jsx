import React from "react";
import styled from "styled-components"
// import Card from "./Card";
// import facebook from "./images/icon-facebook.svg";
import Group1 from '../component/images/Group1.png'
import {Link} from "react-router-dom"


const Front = ()=>{

    return(
         <Wrapper>
            <div className="frontpage">

                <div className="part1">
                    <h1>We Breed And Reward <br /> Intellectuals</h1>
                    <p>Earn And learn Unlimitedly As A Member...</p>

                    <button  className="btn-2"> <Link to="/signup">Get Started</Link></button>
                </div>


                <img className="image" src={Group1} alt="" />

            </div>
       </Wrapper>
    )

}

const Wrapper =styled.section`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;


.frontpage{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.image{
    height: 80vh;
}
a{
    color: white;
}
.part1{
    padding-left: 10rem;
    padding-top: 5rem;
}
.nav{
    display: flex;
    justify-content:space-around;
    padding-bottom: 20px;
}
.btn-2{
    padding: 10px 30px;
    background-color: blue;
    color: white;
    border-radius: 10px;
    border: none;
}


    

`



export default Front;