import React, {useState} from 'react';
import './listing.css';
import AboutProduct from './aboutProduct';
import ProductDetails from './productDetails';
import { createGlobalStyle } from 'styled-components';

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
      <div className = "flex flex-row step align-middle">
        <button className = "bg-btn w-1/2 about  text-base" onClick = {() => setStep(1)}>Step 1: About Product</button>
        <button className = "bg-btn w-1/2  text-base" onClick = {() => setStep(2)}>Step 2: Product Details</button>
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
          
          <input className = "input-field text-base" type = "text" placeholder='Title' value = {title} name = "title" onChange = {(e) => setTitle(e.target.value)} />
          <input className = "input-field text-base" type = "text" placeholder = "Price" value = {price} name = "price" onChange = {(e) => setPrice(e.target.value)}/>
          <select className = "input-field text-base">
            <option value = "availibility">Availibility</option>
          </select>

        <div className = "addPhotos">

        </div>
   

      <button className = "next-btn">POST</button>
      </div>
        )
      }
   

    </div>
  );
}

export default Listing;
