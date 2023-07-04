import React, {useState} from 'react';
import { vendorRegister } from '../../action/vendorRegister';

import './vendor.css';

function VendorRegistration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [typeOfBusiness, setTypeOfBusiness] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [others, setOthers] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    vendorRegister({firstName, lastName, storeName, email, address, city, state,
       postalCode, country, typeOfBusiness, phoneNumber, areaCode, businessName, others});

  }
  return (
    
    <form className = "mb-6 text-base register justify-start" submit = {onSubmit}>
 
    <h1>Register Your Business</h1>
    <h2>Please provide all required details to register your business with us.</h2>
    <hr></hr>
    
    <div className = "flex flex-col ">
      <h2 className = "bold">Business Owner *</h2>
      <div className = "flex flex-row justify-between">
        <div className = "firstName flex flex-col firstName">
          <input type="text" name="firstName" id="firstname" autocomplete="username" className="input-field rounded " onChange = {(e) => setFirstName(e.target.value)}/>
          <label>First Name</label>
        </div>

        <div className = "lastName flex flex-col  lastName">
          <input type="text" name="lastName" id="lastname" autocomplete="username" className="input-field rounded" onChange = {(e) => setLastName(e.target.value)}/>
          <label >Last Name</label>
        </div>
      </div>
    </div>
    
    <div className = "businessName flex flex-col">
      <h2 className = "bold">Business Name*</h2>
      
      <div className = "flex flex-row justify-between"> 
        <div className = "flex flex-col bussName">
          <br></br>
          <input type = "text" name = "businessName" className="input-field rounded " onChange = {(e) => setBusinessName(e.target.value)}/>
        </div>
        
        <div className = "flex flex-col justify-items-end bussType">
          <label className = "bold" for = "bussType">Type of Business</label>
          <select  name = "bussType" id = "bussType" className = "rounded input-field">
              <option value = "Please select">Please Select</option>
              <option value = "shop">Shop/Cafe</option>
              <option value = "store">Store</option>
              <option value = "rentals">Rentals</option>
              <option value = "others">Others, please specify</option>
          </select>
        </div>
        
        <div className = "flex flex-col justify-items-end  others">
        <br></br>
          <input type = "text" name = "other" placeholder='Others' className = "rounded input-field" onChange = {(e) => setOthers(e.target.value)}/>
        </div>
        
        </div>
    </div>

    <div className = "contact flex flex-col">
        <h2 className = "bold">Contact Number</h2>
        <div className = "flex flex-row">
        <div className = "flex flex-col area mr-10">
          <input type = "text" name = "text" className = "rounded input-field"/>
          <label>Area Code</label>
        </div>
        <div className = "flex flex-col phoneNumber">
          <input type = "text" name = "phoneNumber"  className = "rounded input-field"/>
          <label>Phone Number</label>
        </div>
        </div>
    </div>
    
    <div className = "email flex flex-col">
      <h2 className = "bold">E-mail *</h2>
      <input type = "text" placeholder='ex: myname@example.com'  className = "rounded input-field" onChange = {(e) => setEmail(e.target.value)}/>
    </div>

    <div className = "address flex flex-col w-full">
      <h2 className = "bold">Address *</h2>
      <input type = "text"  className = "rounded input-field"/> 
    </div>

    <div className = "other flex flex-col">
      <div className = "flex flex-row justify-between">
        <div className = "flex flex-col city">
          <label>City</label>
          <input type = "text"  className = "rounded input-field" onChange = {(e) => setCity(e.target.value)}/>
        </div>
        <div className = "flex flex-col state">
          <label>State / Province </label>
          <input type = "text"  className = "rounded input-field" onChange = {(e) => setState(e.target.value)}/>
        </div>
      </div>
      
      <div className = "flex flex-row justify-between">
        <div className = "flex flex-col city">
          <label>Postal / Zip Code</label>
          <input type = "text" className = "rounded input-field" onChange = {(e) => setPostalCode(e.target.value)}/>
        </div>
        <div className = "state flex flex-col">
          <label> Country </label>
          <select className = "input-field rounded" onChange = {(e) => {console.log(e.target.value)}}>
              <option value = "Please Select">Please Select</option>
              <option value = "Please Select">Please Select</option>
              <option value = "Please Select">Please Select</option>
          </select>
        </div>
      </div>
    </div>

    <button type="submit" className=" bg-yellow-500 submit rounded-md text-white"><p className = "text-base">Submit Registration</p></button>
  </form>
  );
}

export default VendorRegistration;
