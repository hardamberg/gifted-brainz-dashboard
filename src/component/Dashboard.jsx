import React, { useState } from 'react'
import styled from 'styled-components';
import Logo from "../component/images/Gifted-Brainz-PNG.png"
import {AiOutlineDashboard} from "react-icons/ai"
import {MdOutlineRunCircle} from "react-icons/md"
import {TiGroupOutline} from "react-icons/ti"
import {ImSpinner} from "react-icons/im"
import {FcGraduationCap} from "react-icons/fc"
import {TfiWallet} from "react-icons/tfi"
import {FaPeopleArrows} from "react-icons/fa"
import {AiFillMoneyCollect} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {FiHelpCircle} from "react-icons/fi"
import {HiUserGroup} from "react-icons/hi"
import Arrow from "../component/images/Arrow 4.png"



const Dashboard = () => {
    const [menu, setMenu] = useState(false);
    const handleChange = () => {
        setMenu(!menu)
    }

  return (
    <Wrapper>

        <div className={`whole ${menu ? 'show' : 'whole'}`} >


            <div className='up'>
                <div className='Top'>
                    <img onClick={handleChange} className='logo' src={Logo} alt="" />
                    <img onClick={handleChange} className={` item ${menu ? 'getout top' : 'item'}`} src={Arrow} alt="" />
                </div>

                <div className={`dash dashh ${menu ? 'show' : 'dashh'}`}>
                    <span className='icon'><AiOutlineDashboard/></span>
                    <span className={`item ${menu ? 'getout' : 'item'}`}> Dashboard</span>
                </div>
          </div>


          <div>
            <div className="dashh">
                <span className='icon'><MdOutlineRunCircle/> </span>
                <span className={`item ${menu ? 'getout' : 'item'}`}>Quiz Competition</span>
            </div>

            <div className="dashh">
                <span className='icon'><TiGroupOutline/></span>
                <span className={`item ${menu ? 'getout' : 'item'}`}> Quiz Leaderboard</span>
            </div>

            <div className="dashh">
                <span className='icon'><ImSpinner/></span>
                <span className={`item ${menu ? 'getout' : 'item'}`}>  Spin To Win</span>
            </div>

            <div className="dashh">
                <span className='icon'><FcGraduationCap/></span>
                <span className={`item ${menu ? 'getout' : 'item'}`}> Courses</span>
            </div>

            <div className="dashh">
                <span className='icon'><TfiWallet/> </span>
                <span className={`item ${menu ? 'getout' : 'item'}`}> Payment</span>
            </div>

            <div className="dashh">
                <span className='icon'><FaPeopleArrows/> </span>
                <span className={`item ${menu ? 'getout' : 'item'}`}> Referrals History</span>
            </div>

            <div className="dashh">
                <span className='icon'><AiFillMoneyCollect/></span>
                <span className={`item ${menu ? 'getout' : 'item'}`}> Earnings History</span>
            </div>
          </div>

          <div className='bottom'>

            <div className="heys">
                 <span className='icon'><FiSettings/></span>
                <span className={`item ${menu ? 'getout' : 'item'}`}> Settings</span>
            </div>

            <div className="heys">
                <span className='icon'><FiHelpCircle/></span>
                <span className={`item ${menu ? 'getout' : 'item'}`}> Get Help</span>
            </div>

            <div className="heys">
                <span className='icon'><HiUserGroup/></span>
                <span className={`item ${menu ? 'getout' : 'item'}`}> Community </span>
            </div>

          </div>
       </div>

    </Wrapper>
      
  )
}

const Wrapper = styled.section`

width: 100%;
height: 100vh;
font-family: Arial, Helvetica, sans-serif;

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.whole{
    
    /* background-color:whitesmoke; */
    width: 250px;
    border-right: 2px solid black;
    font-size: 10px;
    transition: all .5s ease;
}
.heys{
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    height: 50px;

}
.heys:hover{
    background-color: wheat;
}
.show{
    width: 80px;
    /* padding: 0 20px; */
}
.up{
    padding-bottom: 30px;
}

.top{
    padding-right: 20px;
    height: 25px;
    padding-top: 20px;
}
.bottom{
    background-color: blue;
    cursor: pointer;
}
.getout{
    display: none;
}
.item{
    font-size: 14px;
    cursor: pointer;
    /* display: block; */
}
.dash{

    display: flex;
    background-color:blue ;
    align-items: center;
}

.dashh{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    height: 50px;
}
.dashh:hover{
    background-color: blue;
    cursor: pointer;
}



.Top{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding-bottom: 10px;
   height: 7vh;
}
.logo{
    height: 7vh;
    cursor: pointer;
    
}
svg{
    height: 60px;
}

.icon{
    font-size: 30px;
    padding-right: 10px;
    padding-top: 10px;
    margin-left: 10px;
}


`

export default Dashboard;
