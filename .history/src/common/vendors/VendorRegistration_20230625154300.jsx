import React from 'react';
import './vendor.css';

function VendorRegistration() {
  return (
  
    <div className = "flex flex-col text-base register">
 
    <h1>Register Your Business</h1>
    <h2>Please provide all required details to register your business with us.</h2>
    <hr></hr>
      <div className = "flex flex-col ">
        <h2 className = "bold">Business Owner *</h2>
        <div className = "flex flex-row justify-between">
          <div className = "firstName flex flex-col firstName">
            <input type="text" name="firstName" id="username" autocomplete="username" className="input-field rounded "/>
            <label>First Name</label>
          </div>

          <div className = "lastName flex flex-col  lastName">
            <input type="text" name="lastName" id="username" autocomplete="username" className="input-field rounded"/>
            <label >Last Name</label>
          </div>
        </div>
      </div>
      
      <div className = "businessName flex flex-col">
        <h2 className = "bold">Business Name*</h2>
        
        <div className = "flex flex-row justify-between"> 
          <div className = "flex flex-col bussName">
            <br></br>
            <input type = "text" name = "businessName" className="input-field rounded "/>
          </div>
          
          <div className = "flex flex-col justify-items-end bussType">
            <label className = "bold" for = "bussType">Type of Business</label>
            <select  name = "bussType" id = "bussType" className = "rounded input-field"></select>
          </div>
          
          <div className = "flex flex-col justify-items-end  others">
          <br></br>
            <input type = "text" name = "other" placeholder='Others' className = "rounded input-field"/>
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
        <input type = "text" placeholder='ex: myname@example.com'  className = "rounded input-field"/>
      </div>

      <div className = "address flex flex-col w-full">
        <h2 className = "bold">Address *</h2>
        <input type = "text"  className = "rounded input-field"/> 
      </div>

      <div className = "other flex flex-col">
        <div className = "flex flex-row justify-between">
          <div className = "flex flex-col city">
            <label>City</label>
            <input type = "text"  className = "rounded input-field"/>
          </div>
          <div className = "flex flex-col state">
            <label>State / Province </label>
            <input type = "text"  className = "rounded input-field"/>
          </div>
        </div>
        
        <div className = "flex flex-row justify-between">
          <div className = "flex flex-col city">
            <label>Postal / Zip Code</label>
            <input type = "text" className = "rounded input-field" />
          </div>
          <div className = "state flex flex-col">
            <label> Country </label>
            <select className = "input-field rounded"></select>
          </div>
        </div>
    </div>

    <button type="submit" className=" bg-yellow-500 submit rounded-md  text-white">Submit Registration</button>
</div>
  );
}

export default VendorRegistration;
