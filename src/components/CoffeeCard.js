import React from "react";
import { Link } from "react-router-dom";

const CoffeeCard = ({ title, imageUrl, coffeeId }) => {
  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <img src={imageUrl} className="object-cover w-full h-48" alt={title} />
      <div className="p-4">
        <h5 className="text-xl font-semibold tracking-tight text-dark-600">{title}</h5>

        <Link to={"/coffee/" + coffeeId } className="btn btn-light">
          Coffee Details
        </Link>
      </div>
    </div>
  );
};

export default CoffeeCard;
