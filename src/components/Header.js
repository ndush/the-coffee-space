import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    
  },
  {
    url: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  
  },
  {
    url: "https://images.unsplash.com/photo-1488901517307-a8f6582fa081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
   
  },
];

const Header = () => {
  return (
    <div className="slide-container ">
       
      <Slide >
       
        {slideImages.map((slideImage, index) => (
          <div className="each-slide "   key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})`, height: 500 , margin: 30}}>
             
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Header;
