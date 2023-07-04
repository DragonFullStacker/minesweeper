import React from 'react';
import './listing.css';

function Listing() {
  return (
    <div className = "listcontainer flex flex-col text-base">
      <h1> Create New Listing </h1>
      <div className = "flex flex-row step align-middle">
        <button className = "h2-font about w-1/2 align-middle">Step 1: About Product</button>
        <buttton className = "h2-font w-1/2">Step 2: Product Details</buttton>
      </div>
      
    </div>
  );
}

export default Listing;
