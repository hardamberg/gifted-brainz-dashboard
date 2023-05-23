import React from 'react'
import styled from 'styled-components';
function Loader(){
    return(
        <Wrapper>
            <div style={{height:"100vh", width:"100%", position:"fixed", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h2 className='loading' style={{color:"white", fontSize:"45px"}}></h2>
        </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

.loading{
    animation: animate 0.5s infinite linear; 
    height: 80px;
    width: 80px;
    background-color: transparent;
    border-left: 5px solid blue;
    border-right: 5px solid black;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-radius: 50px;
}
@keyframes animate {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

`


export default Loader;