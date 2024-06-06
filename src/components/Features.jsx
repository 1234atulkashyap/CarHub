// import React from 'react'
import Card from "./Card";

const Features = () => {
  return (
    <div className="max-w-[1280px] mx-auto" id="feature">
      <h1 className="text-4xl font-bold m-6 flex justify-center">Choose Best Cab</h1>
      <div className="flex gap-5 flex-wrap justify-center">
        <Card heading="Economy class" Rs = "10" />
        <Card heading="Standard class" Rs = "15" />
        <Card heading="Business class" Rs = "20" />
      </div>
    </div>
  );
};

export default Features;
