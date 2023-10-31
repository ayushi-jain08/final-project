import React from 'react'
import "../Category/Category.scss";
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <div className='category'>
    <div className="row">
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  width={400} height={300} style={{objectFit:'cover'}}/>
            <NavLink to="/singlecategory/mobile">
            <button className='btn'>Mobile</button>
            </NavLink>
          
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  width={400} height={290} style={{objectFit:'cover'}}/>
            <NavLink to="/singlecategory/laptop">
            <button className='btn'>Laptop</button>
            </NavLink>
            </div>
        </div>
    <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  width={400} height={600} style={{objectFit:'cover'}}/>
        <NavLink to="/singlecategory/computer">
            <button className='btn'>Computer</button>
            </NavLink>
        </div>
    </div>
    <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""  width={450} height={200} style={{objectFit:'cover'}}/>
        <NavLink to="/singlecategory/watch">
            <button className='btn'>Watch</button>
            </NavLink>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/4947543/pexels-photo-4947543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""  width={450} height={390} style={{objectFit:'cover'}}/>
        <NavLink to="/singlecategory/accessories">
            <button className='btn'>Accessories</button>
            </NavLink>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Category
