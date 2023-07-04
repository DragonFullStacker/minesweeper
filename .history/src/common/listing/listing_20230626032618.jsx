import React, {useState} from 'react';
import './listing.css';
import AboutProduct from './aboutProduct';
import ProductDetails from './productDetails';

function Listing() {
  const [step, setStep] = useState(1);

  return (
    <div className = "listcontainer flex flex-col text-base justify-center">
      <h1> Create New Listing </h1>
      <div className = "flex flex-row step align-middle text-base">
        <a className = "w-1/2 ">Step 1: About Product</a>
        <a className = "w-1/2">Step 2: Product Details</a>
      </div>
      
      <div className = " flex flex-row">
        <select className = "listingSelect category" >
          <option value = "">Category</option>
        </select>

        <select className = "listingSelect location" >
          <option value = "">Select Location</option>
        </select>
      </div>
      {
        step == 1 ? <AboutProduct /> : <ProductDetails />
      }
      <div className = "photo flex flex-col">
        <h2 className = "h2-font">Add Photo </h2>
        <p>You can add at least 1 photo for this category</p>
        <p>First picture - is the title picture. You can change the order of photos: just grab your photos and drag</p>

        <div className = "addPhotos">

        </div>
      </div>

      <button className = "next-btn">NEXT</button>

    </div>
  );
}

export default Listing;
