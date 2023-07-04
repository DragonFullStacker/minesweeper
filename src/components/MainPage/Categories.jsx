import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/categories/agriculture.png",
      cateName: "Food",
    },
    {
      cateImg: "./images/categories/electronics.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/categories/vehicles.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/categories/home.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/categories/fashion.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/categories/beauty.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/categories/animals.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/categories/babies.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/categories/groceries.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/categories/services.png",
      cateName: "Services",
    },
    {
      cateImg: "./images/categories/freestuff.png",
      cateName: "Free Stuffs",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex catg' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
