import React from "react";
import styles from "../styles.js";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted.jsx";

function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="text-gray-600 font-bold ">
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white flex-1 font-bold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            The Next
            <br className="" />
            <span className="text-gradient"> Generation</span>{" "}
            <br className="sm:block hidden" />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="text-white font-bold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]">
          {" "}
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div>
        <img src={robot} alt="billing"
        className="w-[100%] h-[100%] relative z-[5]" />

        {/* <div className="absolute z-[1] w-[80%] h-[35%] top-0 pink__gradient" /> */}
        <div className="absolute z-[1] w-[30%] h-[50%] bottom-0 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient" />

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
