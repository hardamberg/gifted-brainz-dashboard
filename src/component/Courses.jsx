import React from 'react'
import styled from 'styled-components'

const Courses = () => {
  return (
    <Wrapper id='courses'>

        <div>
          
            <button className='btn-1'>Available Courses</button>

        </div>
    </Wrapper>
  )
}

const Wrapper =styled.section`
height: 100vh;
width:100%;
font-family: Georgia, 'Times New Roman', Times, serif;

.btn-1{
    background-color: transparent;
    border: 2px solid black;
    margin-left: 30rem;
    border-radius: 0px;
    color: black;
    font-weight: bolder;
    

}

    
`

export default Courses;
