import React from 'react'
import styled from 'styled-components'
import {BiAlarmAdd, BiPlus} from 'react-icons/bi'
import { MdZoomOutMap} from 'react-icons/md'
import {AiOutlineHeatMap} from 'react-icons/ai'


const styledcomponentsexample = () => {
  return (
    <Wrapper>
        <div className="adams">
            <BiPlus/>
            <BiPlus/>
            <BiPlus/>
            <BiPlus/>
            <BiPlus/>
            <BiPlus/>
            <BiPlus/>
            <BiPlus/>
            <BiPlus/>
        </div>
        <div className="bolu"><BiAlarmAdd /></div>
        <div className="alfa"><MdZoomOutMap/><AiOutlineHeatMap/></div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: flex;
width: 100%;

.adams{
    background-color: green;
    height: 100vh;
    width: 35%;
}
.bolu{
    height: 100;
    width: 40%;
}
.alfa{
    background-color: green;
    height: 100;
    width: 35%;
}
`
export default styledcomponentsexample;
