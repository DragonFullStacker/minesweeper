import React from 'react';
import './listing.css';

function Listing() {
  return (
    <div className = "listcontainer flex flex-col text-base">
      <h1> Create New Listing </h1>
      <div className = "flex flex-row">
        <button className = "bg-btn bg-green-500 rounded-l-lg">Step 1: About Product</button>
        <button className = "bg-btn bg-green-500 rounded-r-lg">Step 2: Product Details</button>
      </div>
      
    </div>
  );
}

export default Listing;
