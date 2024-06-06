// import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import img from "../assets/1.png";

const About = () => {
  useGSAP(() => {
    gsap.to("#car", {
      y: -20,
      yoyo: true,
      duration: 0.5,
      scale: 1.25,
      opacity: 1,
      ease: "power1.inOut",
    });
    gsap.to("#book", {
      scrollTrigger: "#box", // start animation when ".box" enters the viewport
      triggerHook: "onEnter", // start after 100px from the top of the viewport
      duration: 1,
      y: -20,
      opacity: 1,
    });
  });

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center relative mt-56" id="about">
      <div className="absolute top-[-200px]">
        <img
          id="car"
          src={img}
          alt=""
          className="w-[300px] sm:w-[500px] lg:w-[700px]"
        />
      </div>
      <div className=" bg-red-100 rounded-lg flex pt-10 sm:pt-24 p-5 lg:pt-56 justify-center items-center ">
        <div
          id="book"
          className=" opacity-0 flex justify-between flex-col sm:flex-row gap-14 sm:p-20 sm:pt-0 "
        >
          <div data-aos="fade-up" data-aos-anchor-placement="center-center">
            <h3 className="font-semibold text-2xl">Best in City</h3>
            <h1 className="font-bold text-4xl mt-5">Trusted Cab Services</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              facere consectetur corrupti, sint odit nobis deleniti expedita
              veniam quod illum vel enim tenetur iure eaque? Ullam harum error
              provident tempora!
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-md mt-5">
              Book Now
            </button>
          </div>
          <div className="">
            <div>
              <h1 className="font-bold text-3xl md:text-4xl mt-5 bg-black text-white p-3">
                Book a Cab
              </h1>
              <div className=" text-sm grid sm:flex flex-wrap sm:justify-center ">
                <input
                  className="m-3 p-3 rounded-md"
                  type="text"
                  placeholder="Name"
                />
                <input
                  width="100"
                  className="m-3 p-3 rounded-md"
                  type="number"
                  placeholder="Number"
                  maxLength={10}
                />
                <input
                  className="m-3 p-3 rounded-md"
                  type="text"
                  placeholder="Start"
                />
                <input
                  className="m-3 p-3 rounded-md"
                  type="text"
                  placeholder="end"
                />
                <input
                  className="m-3 p-3 rounded-md"
                  type="text"
                  placeholder="Choose Vehical"
                />
                <button className="bg-black text-white px-10 py-2 rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
