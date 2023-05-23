import React from 'react'
import styled from 'styled-components';
import Dashboard from './Dashboard';
import {AiOutlineSearch} from "react-icons/ai"

const Boxxx = () => {
  return (
    <Wrapper>

    <div>
    <Dashboard/>
    </div>


    <div>


        <div className='Next'>
            <h1>Dashboard</h1>
            <span className='input'><input type="search" placeholder='search here.....'/> </span>
            <span className='search'><AiOutlineSearch/></span>

        </div>

        <div className='welcome'>
            <h1>Welcome, Jays</h1>
        </div>

        <div className='all'>

            <div className='earnings'>
                <h1>Total Earnings</h1>
                <h1>#203,907</h1>
            </div>

            <div className='points'>
                <h1>Total Points</h1>
                <h1>203,907 SQP</h1>
            </div>

             <div className='referrals'>
                <h1>Referrals Earnings</h1>
                <h1>#203,907</h1>
            </div>
        </div>

        <div className='Table'>
            <h1>Earnings History</h1>

            <table className='table'>
                <tr className='border-bottom'>
                    <th className='rightmargin'>Task</th>
                    <th>Total Answered</th>
                    <th>Points</th>
                </tr>

                <tr className='border-bottom'>
                    <td>1. What is UI/UX</td>
                    <td>15</td>
                    <td>20pts</td>
                </tr>

                <tr className='border-bottom'>
                    <td>2. Principles of Design</td>
                    <td>15</td>
                    <td>10pts</td>
                </tr>

                <tr className='border-bottom'>
                    <td>3. Interaction Design</td>
                    <td>15</td>
                    <td>20pts</td>
                </tr>

                <tr className='border-bottom'> 
                    <td>4. User Research</td>
                    <td>15</td>
                    <td>50pts</td>
                </tr>

                 <tr className='border-bottom'>
                    <td>5. Prototype</td>
                    <td>15</td>
                    <td>40pts</td>
                </tr>

                <tr className='border-bottom'>
                    <td>6. Data Analysis</td>
                    <td>15</td>
                    <td>50pts</td>
                </tr>
            </table>
        </div>

    </div>


    </Wrapper>


      

  )
}
const Wrapper=styled.section`
    background-color: azure;
    display: flex;
    flex-direction: row;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    .search{
        position: absolute;
        right: 38%;
        padding-top: 5px;
    
    }
    .border-bottom{
       padding-bottom: 20px;
    }

    .table{
        margin-left: 50px;
    }

    .Table{
        font-size: 20px;
        margin-left: 60px;
    }
    .rightmargin{
        padding-right: 200px;
    }
    .sqp{
        display: flex;
        flex-direction: row;
    }
    .all{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .earnings{
        background-color: blue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 250px;
        margin-left: 60px;
        cursor: pointer;
    }

    .points{
        background-color: orange;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width:250px;
        margin-left: 70px;
        cursor: pointer;
    }
    .referrals{
        background-color: green;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 250px;
        margin-left: 70px;
        cursor: pointer;
    }

    .welcome{
        margin-left: 70px;
    }
    .input input{
        padding: 8px 100px;
        border-radius: 20px;
    }
    .input{
        margin-left:50px;
    }
    .Next{
       display: flex;
       flex-direction: row;
       align-items: center;
       margin-left: 70px;
    }
`
export default Boxxx;
