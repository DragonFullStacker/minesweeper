import React from 'react';


function VendorRegistration() {
  return (
    <form>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <h2>Register Your Business</h2>
      <p >Please provide all required details to register your business with us.</p>
      <hr></hr>

          <h2>Business Owner *</h2>
       
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

              <div className = "Business Owner">
                <div className = "First Name">
                  <input type="text" name="firstName" id="username" autocomplete="username" className="input-field rounded"/>
                  <label >First Name</label>
                </div>

                <div className = "Last Name">
                  <input type="text" name="lastName" id="username" autocomplete="username" className="input-field rounded"/>
                  <label >Last Name</label>
                </div>
              </div>
              
              <div className = "businessName">
                <h2 >Business Name*</h2>
                <input type = "text" name = "businessName" className="input-field rounded"></input>
                <select name = "bussType"></select>
                <input type = "text" name = "other" placeholder='Others'></input>
              </div>

              <div className = "contact">
                  <h2>Contact Number</h2>
                  <div>
                    <input type = "text" name = "text"></input>
                    <label>Area Code</label>
                  </div>
                  <div>
                    <input type = "text" name = "phoneNumber"></input>
                    <label>Phone Number</label>
                  </div>
                  
              </div>
              
              <div className = "e-mail">
                <h2>E-mail *</h2>
                <input type = "text" name = "email"></input>
                <input type = "text" placeholder='ex: myname@example.com'></input>
              </div>

              <div className = "address">
                <h2>Address *</h2>
                <input type = "text"> </input>
              </div>

              <div className = "other">
                <div>
                  <div>
                    <label>City</label>
                    <input type = "text"></input>
                  </div>
                  <div>
                    <label>State / Province </label>
                    <input type = "text"></input>
                  </div>
                </div>
                
                <div>
                <div>
                    <label>Postal / Zip Code</label>
                    <input type = "text"></input>
                  </div>
                  <div>
                    <label> Country </label>
                    <select ></select>
                  </div>
                </div>
            </div>
          </div>
        </div>
   

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit Registration</button>
    </div>
</form>

  );
}

export default VendorRegistration;
