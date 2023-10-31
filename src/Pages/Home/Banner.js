import React from 'react'
import { FaSearch} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import video from "../../banner.mp4"

const Banner = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="content">
          <div className="overlay"></div>
          <video src={video} muted autoPlay loop typeof='video/mp4'></video>
            <div className="text-content">
              <h2>Freepik</h2>
              <p>Create moving stories with professional stock videos</p>
              <h6>Find stunning royalty-free footage and motion graphics</h6>
              <form>
                <div className="form-control">
                  <NavLink to="/search">
                  <input type="text" placeholder='search here...' />
                     <button ><FaSearch/></button>
                   </NavLink>
                </div>
              </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner
