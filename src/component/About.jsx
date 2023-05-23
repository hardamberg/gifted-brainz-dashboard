import React from "react"
import Styled from 'styled-components'

const About = () => {
  return (

    <Wrapper id="about">

    <div className='next'>
        <h1 className="Gifted">About Gifted Brainz</h1>
        <p className="para">This Is A Platform Where Where Africans Can Learn <br /> And Challenge Others In Active Quiz Competition <br />And Stand A Chance To Win Cash Prizes Up <br /> To #200,000 Or Its Equivalent in USDT.Its An <br /> Initiative That Seeks To promote Intellectual <br /> Growth,And Also Seek to Educate And Enligthen <br /> Africans With Information,Knowledge And Skill In <br />Areas Such As Africa History,Sport, Web <br /> Development, BlockChain, Cryptocurrency, <br /> Quantum mechanics, programming Etc... </p>
      
    </div>

    </Wrapper>
  )
}

const Wrapper =Styled.section`
    background-color:blue;
    height:100vh;
    

    

    .next{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      padding-top:5rem;

      .para{
        padding-top:30px;
        font-size:17px;
        color: white;
      }

      .Gifted{
        color: white;
       
      }

      
      
      
      }
    



`



export default About;
