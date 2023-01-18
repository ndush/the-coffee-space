import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const Profile = () => {
  const [name, setName] = useState("Damaris Muange");
  const [email, setEmail] = useState("mdamarisnduku@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+254 727234454");
  const [github, setGithub] = useState("https://github.com/ndush");
  const [linkedIn, setLinkedIn] = useState("https://www.linkedin.com/in/damaris-nduku-10104424/");

  return (
    <>
      <div className="container ">
        <div className="container mt-10 text-xl2  tracking-tight text-dark-600">
          <h1 className="text-center text-[#FF0000] underline ">MY PROFILE</h1>
          <center>
            <h6>Name: {name}</h6>
            <h1>Email: {email}</h1>
            <h3>Number: {phoneNumber}</h3>
            <h3> {github}</h3>
            <h3>{linkedIn}</h3>
          </center>
        </div>
      </div>
      <div className="fixed bottom-0 left-0  w-screen h-12">
      
        <Footer />
      </div>
    </>
  );
};

export default Profile;
