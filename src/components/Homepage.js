import React, { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import Header from "./Header";
import Footer from "./Footer";


const Homepage = () => {
  const [coffee, setCoffee] = useState([])

useEffect(()=>{
  fetch("http://localhost:3000/coffee")
  .then((res) => res.json())
  .then((coffeeList)=> setCoffee(coffeeList))
  
}, [])

  return (
    <>
      <Header/>
    <div className="container">
     
      <div className="row">
      <div   className="col">
      <div className="card-collection card mx-auto">
        {coffee.map((coffeeItem)=>{
          return(
           
            <CoffeeCard
            key={coffeeItem.id} 
            coffeeId={coffeeItem.id}
            title={coffeeItem.title}
            imageUrl={coffeeItem.image_url}
            
          />

          )
        })}
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Homepage;
