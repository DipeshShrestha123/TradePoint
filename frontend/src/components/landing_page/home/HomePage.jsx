import React from "react";
import Hero from "../home/Hero";
import Awards from "../../award/Awards"
import Stats from "../../stats/Stats"
import Pricing from "../../pricing/Pricing"
import Education from "../../education/Education"
import OpenAccount from "../../open_account/OpenAccount"
import Footer from "../../footer/Footer"

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
