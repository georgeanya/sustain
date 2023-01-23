import type { NextPage } from "next";
import ErrorPage from "./404";
import Download from "./download";
import { useState } from "react";

import Hero from "../components/hero";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section6 from "../components/section6";
import Section5 from "../components/section5";
import Faq from "../components/faq";

const Home: NextPage = () => {
  const [time, setTime] = useState(false)
   
  function toggleTimeTrue() {
    setTime((time) => time = true)
  }
  function toggleTimeFalse() {
    setTime((time) => time = false)
  }
  
  return (
    <div>
      <Hero />
      {/* <Section1 /> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 time={time} toggleTrue={toggleTimeTrue} toggleFalse={toggleTimeFalse} />
      <Faq />
    </div>
  );
};

export default Home;
