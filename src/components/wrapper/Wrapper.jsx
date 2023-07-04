import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We make it incredibly easy to shop and get your desired traditional products delivered to you.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment Method",
      decs: "We offer safe payment methods that enable you to purchase goods more securely and reliably.",
    },
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Excellent Delivery Service",
      decs: "We deliver more value than our team & customers expect.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We are here to assist you with all your inquires from Monday to Sunday and our delivery start from 10 AM to 23 PM everyday.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
