import React from "react";
import Hero from "../pricing/Hero";
import Brokerage from "../pricing/Brokerage";
import OpenAccount from "../../open_account/OpenAccount";
import Footer from "../../footer/Footer";

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Brokerage />
      <Footer/>
    </>
  );
}

export default PricingPage;
