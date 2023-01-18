import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//  const VIEW_COFFEE=`http://localhost:3000/coffee'

const CoffeeDetails = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let { coffeeId } = useParams();
  console.log(coffeeId);
  const VIEW_COFFEE = () => {
    fetch(`http://localhost:3000/coffee/${coffeeId}`)
      .then((response) => response.json())
      .then((coffee) => { console.log(coffee)
        setImageUrl(coffee.image_url);
        setTitle(coffee.title);
        setDescription(coffee.description);
      });
  };
  useEffect(VIEW_COFFEE, []);
  return (
    <div className="container mt-40">
      <center>
        <img src={imageUrl} className="object-cover  h-80 " alt={title} />
        <h3>{title}</h3>
        <p  className="text-2xl hover:text-3xl ">{description}</p>
      </center>
    </div>
  );
};
export default CoffeeDetails;
