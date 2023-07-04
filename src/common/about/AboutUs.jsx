import React from 'react'
import aboutimg from "../../images/about-us.png"

const AboutUs = () => {

    const data = [
        {
          cover: <i class='fa-solid fa-truck-fast'></i>,
          title: "Transparency",
          decs: "Openness with our team & clients.",
        },
        {
          cover: <i class='fa-solid fa-id-card'></i>,
          title: "Commitment",
          decs: "Our word and hard work over everything else. Our clients and vision are our guiding beacons.",
        },
        {
          cover: <i class='fa-solid fa-shield'></i>,
          title: "Self Improvement",
          decs: "We never stop learning, continous learning is paramount to us. We never stop evolving into who we want to be and where we want to be.",
        },
        {
          cover: <i class='fa-solid fa-headset'></i>,
          title: "Over Deliver",
          decs: "Deliver more value than our team & clients expect.",
        },
      ]


  return (
    <>
    <div className="about-container">
      <div className="about-section d_flex">
        <div className="about-text">
          <h3>About Us</h3>
        We are not just another Start-Up in the ecosystem.
At GetBlack, our talented teams keeps culture and creativity at the heart
 of everything we do by making an impact that matters to our clients and the GetBlack community at large.
        </div>
        <div className="about-img">
            <img src={aboutimg} alt="" />
        </div>
      </div>
      <h2>Our Company Values</h2>
      <div className="about-flex">
      {data.map((val, index) => {
            return (
              <div className='product about-card' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
          </div>
      </div>
    </>
  )
}

export default AboutUs
