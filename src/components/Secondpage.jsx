import React,{useEffect} from "react";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Secondpage = () => {
  const hstyle = {
    color: "white",
    marginTop: ".5rem",
  };

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.imgsect',{
      scrollTrigger:{
        trigger:'.imgsect',
        scrub:true,
      }
      ,scale:0.5
    })
  })
  return (
    <div
      className='scp'
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, #000000 56.85%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 900,
          margin: "0 auto",
          display: "flex",
          justifyContent:'center'
        }}
      >
        <div className='imgsect'
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px",
          }}
          width="350px"
        >
          <img width="100%" src="./Resources/cardpic1.jpg" alt="" />
          <h3 style={hstyle}>Topia</h3>
        </div>
        <div 
          className='imgsect'
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px",
          }}
          width="350px"
        >
          <img width="100%" src="./Resources/cardpic2.jpg" alt="" />
          <h3 style={hstyle}>Hland</h3>
        </div>
      </div>
      <div
        style={{
          width: 600,
          margin: "0 auto",
          display: "flex",
        }}
      >
        <p className='para' style={{ color: "white", textAlign: "center",marginTop:'1rem' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
      </div>
    </div>
  );
};

export default Secondpage;
