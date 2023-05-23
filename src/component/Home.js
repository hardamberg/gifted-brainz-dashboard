// import React, { useState, useEffect } from 'react'
import Front from "../component/Front";
// import Loader from './Loader';
import Navbar from "./Navbar";
import About from "../component/About";
import Howitworks from "../component/Howitworks";
import Courses from './Courses';

const Home = () => {
  // const [isLoading, setLoading] = useState(true);
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setLoading(!isLoading)
  //   }, 5000);
  // },[])

  return (
    // <>
    //   {
    //     isLoading ? (<Loader/>) : (
    //       <div>
    //         <Navbar/> 
    //         <Front/>
    //         <About/>
    //         <Howitworks/>
    //         <Courses/>
    //       </div>
    //     )
    //   }   
    // </>
          <section>
            <Navbar/> 
            <Front/>
            <About/>
            <Howitworks/>
            <Courses/>
            </section>
        )
      }   


export default Home;
