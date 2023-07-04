import React from "react";

function Blog() {
 return (
   <div className="">
    <div className="blog_main">
    <header className="blog_header">
        <h1 className="my-4 font-extrabold text-4xl">
            GetBlack Blog
        </h1>
    </header>

    <section className="blog_img-sect">
            <div className="blog-img">
              <img
                src="https://res.cloudinary.com/dirwn9yno/image/upload/v1664363233/getblack/image_a4xw74.png" 
                alt=""
                className=""
              />
            </div>
            <h3 className="font-bold my-4">Online shopping - An alternative to shopping in the mall.</h3>
            <p>September 21, 2022</p>
    </section>    


    </div>
   </div>
 );
      
}

export default Blog;