import React from "react";
import { feedback } from "../constants";
import styles, { layout } from "../styles";
import FeedbackCard from "./FeedbackCard";

function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative overflow-x-hidden`}
    >
      <div className="absolute z-[0] w-[80%] h-[40%] rounded-full blue__gradient -right-[50%]"/>
      {/* <div className="absolute z-[0] w-[60%] h-[60%] rounded-full white__gradient -right-[50%] -top-[10%]"/> */}
      <div
        className={`flex md:flex-row flex-col w-full relative z-[1] sm:mb-16 mb-6  font-bold items-center justify-between`}
      >
        <h1 className={`${styles.heading2} font-poppins`}>
          What people are
          <br className="sm:block hidden" /> saying about us
        </h1>

        <div className=" w-full  items-center justify-center flex md:flex-row flex-col sm:mb-16 mb-6 md:mt-5 relative z-[1] ">
          <p className={`${styles.paragraph} text-left items-center`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          {feedback.map((card)=>(
            <FeedbackCard key={card.id} {...card}/>
          ))}
        </div>
    </section>
  );
}

export default Testimonials;
