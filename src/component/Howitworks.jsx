import React from 'react'
import styled from 'styled-components'
import Businessman from '../component/images/Businessman.png'
import Recruiterwoman from '../component/images/Recruiterwoman.png'
import Threewomen from '../component/images/Threewomen.png'
import Youngcouple from '../component/images/Youngcouple.png'
import {FcGraduationCap} from "react-icons/fc"
import {SiWindows11} from "react-icons/si"
import {TbMoneybag} from "react-icons/tb"
import {AiOutlineArrowRight} from "react-icons/ai"

const Howitworks = () => {
  return (
  <Wrapper>
    <section>
    <div >
        <button className='Btnnn'>How It Works</button>
    </div>
    <div className='image'>
      <div>
          <img src={Threewomen} alt="/" />
          <p>Nigerians And Other african countries <br />Can Come And Challenge One Another.</p>
          <p>In A Daily Active Quiz Competion And <br /> Stand A Chance To Win Cash Prize More <br /> Than #100,000 Weekly/Monthly <br /> Respectively Or Its Equivalent In USDT. </p>
      </div>
       <div>
      <img src={Recruiterwoman} alt="/" />
      <p>You Will Acquire Valuable Skills <br /> And knowledge In Blockchain, <br /> De-Fi, NFTs, UI/UX design, <br />Fashion/Cosmetic And So On.  </p>
      </div>
    </div>


    <div className='image'>

      <div>
         <img className='businessman' src={Businessman} alt="" />
         <p>You Will Participate In Intellectual <br /> Contest  For A Life Changing Prize. <br />You Have The Chance To Join Our <br />Innovative And Creative Team </p>
      </div>

      <div>
      <img src={Youngcouple} alt="" />
      <p>You Enjoy Steady Affiliate <br /> Earnings. Refer Your Freinds And <br />Earn 40% Affiliate Commission</p>
      </div>

    </div>
       <div id='courses' className='joint'>
         <div className='Column'>
             <FcGraduationCap/>
             <h1>Learn</h1>
            <p>You will Be Taught By Our <br />Experience And Qualified <br />Teachers, And Get Update <br /> Through Our Website,Telegram <br /> Page and Newsletters </p>
            <button className='btn1'>Learn More<AiOutlineArrowRight/></button>
         </div>


          <div className='column2'>
            <SiWindows11/>
            <h1>Quiz</h1>
            <p>Test Your Intellectual <br /> Growth And Win Weekly/ <br />Monthly Prizes Respectively </p>
            <button className='btn2'>Learn More<AiOutlineArrowRight/></button>

          </div>


          <div className='column3'>
            <TbMoneybag/>
            <h1>Quiz</h1>
            <p>Test Your Intellectual <br /> Growth And Win Weekly/ <br />Monthly Prizes Respectively </p>
            <button className='btn3'>Learn More<AiOutlineArrowRight/></button>

          </div>
        </div>
    </section>
  </Wrapper>
  )
}


const Wrapper =styled.section`
padding: 0px 5rem;
height: 100vh;
.Btnnn{
  display: flex;
  background-color:transparent;
  border: 2px solid black;
  margin-left:30rem;
  margin-bottom: 25px;
  padding: 10px 40px;
  color: black;
  font-weight: bolder;
  border-radius: 0%;
}

.btn1{
  background-color:white;
  border-color:blue;
  color:blue;
  padding: 10px 20px;
  display: flex;
  justify-content:center ;
  align-items: center;
  margin-top: 20px;
}
.btn2, .btn3{
  background-color:blue;
  color:white;
  padding: 10px 20px;
  display: flex;
  justify-content:center ;
  align-items: center;
  margin-top: 30px;

}

.column h1,.column p{
  padding-top: 30px;
}

.Column{
  background-color: blue;
  color:white;
  border-radius: 10px;
  height:50vh;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
svg{
  font-size:2rem;
}
.column2, .column3{
  background-color: white;
  box-shadow:0 4px 4px black;
  height: 50vh;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  border-radius: 10px;
  
}

.Column2{


}
.joint{
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  

}

.businessman{
  margin-top: 25px;
}
.image{
  display: flex;
  flex-direction: row;
 justify-content: space-around;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 font-size:17px ;
}

.image img{
  height: 25vh;
  background-color:lightblue;
  border-radius: 15px;
  margin-left: 40px;
  
}


    
`

export default Howitworks;
