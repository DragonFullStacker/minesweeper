import React from 'react';
import './listing.css';

function Listing() {
  return (
    <div className = "listcontainer flex flex-col text-base">
      <h1> Create New Listing </h1>
      <div className = "flex flex-row step align-middle">
        <a className = "h2-font about w-1/2">Step 1: About Product</a>
        <a className = "h2-font w-1/2">Step 2: Product Details</a>
      </div>
      
    </div>
  );
}

export default Listing;
