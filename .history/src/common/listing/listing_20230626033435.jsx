import React, {useState} from 'react';
import './listing.css';
import AboutProduct from './aboutProduct';
import ProductDetails from './productDetails';

function Listing() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [availibility, setAvailability] = useState(true);


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
        step === 1 ? 
        ( <div className = "photo flex flex-col">
            <h2 className = "h2-font">Add Photo </h2>
            <p>You can add at least 1 photo for this category</p>
            <p>First picture - is the title picture. You can change the order of photos: just grab your photos and drag</p>

            <div className = "addPhotos">

            </div>

            <button className = "next-btn">NEXT</button>
      </div>) 
        : 
        (
          <div className = "photo flex flex-col">
          
          <input type = "text" placeholder='Title' value = {title} name = "title" onChange = {(e) => setTitle(e.target.value)}/>
          <input type = "text" placeholder = "Price" value = {price} name = "price" onChange = {(e) => setPrice(e.target.value)}/>
          <select >
            <option value = "availibility">Availibility</option>
          </select>

        <div className = "addPhotos">

        </div>
   

      <button className = "next-btn">NEXT</button>
      </div>
        )
      }
   

    </div>
  );
}

export default Listing;
