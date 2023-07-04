import React from "react"
import logo from "../../components/assets/images/company-logo.png";
import { Link, Route, Router } from "react-router-dom"
import {Register} from "../auth/Register.jsx"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search...' />
            <span>All Category</span>
          </div>
          <Router>
          <div className='icon f_flex width'>
            <Link to="/signup">
              Sign Up
            </Link>
            {/* <i className='fa fa-user icon-circle'></i> */}
            <div className='cart'>
              {/* <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link> */}
              <Route path = '/login' component = {Register} />
              <Link to="/login" className="btn">
                 Login
              </Link>
            </div>
          </div>
          </Router>
        </div>
      </section>
    </>
  )
}

export default Search
