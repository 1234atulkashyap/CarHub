// import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const Home = () => {

    useGSAP(() => {
        gsap.to("#bookcar", {
          y: -20,
          yoyo: true,
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
        });
        gsap.to("#number", {
          y: -20,
          yoyo: true,
          duration: 1,
          opacity: 1,
          delay: 0.25,
          ease: "power1.inOut",
        });
        gsap.to("#domain", {
          y: -20,
          yoyo: true,
          duration: 1,
          opacity: 1,
          delay: 0.5,
          ease: "power1.inOut",
        });
        
      });


  return (
    <div className="max-w-[1280px] mx-auto" id="Home">
    <div className="flex flex-col items-center justify-center gap-5 sm:gap-10 mt-20">
      <h3
        id="bookcar"
        className="tracking-wider opacity-0 text-[#F9C747] text-3xl sm:text-4xl font-bold"
      >
        Book car Now
      </h3>
      <h1
        id="number"
        className="tracking-wider opacity-0	 font-bold text-3xl sm:text-5xl"
      >
        +91 7992233578
      </h1>
      <p
        id="domain"
        className="tracking-[8px] opacity-0 sm:tracking-[20px]		 font-semibold text-2xl sm:text-3xl"
      >
        www.carBook.com
      </p>
    </div>
  </div>
  )
}

export default Home


{/* <div className="absolute top-[110%] sm:top-[100%] z-10">
<Cars />
</div>
<div className="absolute top-[190%] z-9">
<BookCab />
</div> */}