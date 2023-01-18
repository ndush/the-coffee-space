import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <div className="container mt-10">
      <h1 className="text-center  text-[#FF0000]">
        Who We Are
      </h1>

      <p className="text-xl tracking-tight text-dark-600">
        Many coffee shops don’t make it because they underestimate or ignore
        these basic business needs. They fall victim to only caring about their
        selection of drinks and pastries. These business owners lack the
        business savvy and dedication, which ends up hurting them in the end.
        When it comes down to it, the best espresso drinks will never be able to
        save a poorly run coffee shop. Don’t let your coffee shop dreams go up
        in steam like that. By being here, you already know that having a
        passion for coffee does not equate being able to run a successful
        business. You know you can’t cut corners, and you know that you will
        need more than inventory and a few friends as customers to make your
        business viable. The most successful coffee shop store owners not only
        know the coffee industry but the business side as well. And if you
        didn’t know all of that, you do now. Knowledge is power. We can help you
        use it.
      </p>
    </div>
    <div className="fixed bottom-0 left-0  w-screen h-12">
      
      <Footer />
    </div>
    </>
  );
};

export default About;
