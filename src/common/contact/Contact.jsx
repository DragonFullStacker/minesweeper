import { useState } from "react";
import addressLogo from "../../images/address-logo.png";
import phoneLogo from "../../images/phone-logo.png";
import emailLogo from "../../images/email.logo.png";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const { fullName, email, message } = formData;

  // handle the onChange for the form
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // handle the onSubmit from the form
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
    console.log(formData);
  };

  return (
    <>
      <div className="container contact_main">
        <header className="contact-header">
          <h1 className="">Contact Us</h1>
          <p className="">
            Want to get in touch with us? We’d love to hear from you and our
            team is happy to assist. Here’s how you can reach us.
          </p>
        </header>
        <div className="logo_row">
          {/* the location icons and details section */}
          <div className="">
            <div className="icon_row">
              <div className="con_sect">
                <div className="">
                  <img
                    src={addressLogo}
                    alt="addressLogo"
                    className=""
                  />
                </div>
                <div className="ml-10">
                  <h1 className="">Address</h1>
                  <p className="">
                    Peterburi Tee 24, <br /> Tallinn, Estonia. 11411
                  </p>
                </div>
              </div>
              <div className="con_sect">
                <div className="">
                  <img
                    src={phoneLogo}
                    alt="phoneLogo"
                    className=""
                  />
                </div>
                <div className="ml-10">
                  <h1 className="">Phone</h1>
                  <p className="text-md">+37256766107</p>
                </div>
              </div>
              <div className="con_sect">
                <div className="">
                  <img
                    src={emailLogo}
                    alt="emailLogo"
                    className=""
                  />
                </div>
                <div className="ml-10">
                  <h1 className="">Email</h1>
                  <p className="text-md">support@getblack.ca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="card-body">
                <h5 className="card-title">Send Message</h5>
                {/* form section */}
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={onChange}
                      className=""
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      type="email"
                      value={email}
                      id="email"
                      onChange={onChange}
                      className=""
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="">
                    <textarea
                      value={message}
                      id="message"
                      onChange={onChange}
                      className=""
                      placeholder="Type your message..."
                      required
                    ></textarea>
                  </div>
                  <div className="mt-6 w-full">
                    <button
                      type="submit"
                      className=""
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
