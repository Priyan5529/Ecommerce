import React from 'react';
import './Navbar.css';
import { useSelector } from 'react-redux'; 
import store from '../Redux/store';
import { getTotals } from '../Redux/Features/Cart.slice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {cartTotalQuantity} = useSelector(state => state.cart);
  store.dispatch(getTotals());
  return (
  
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bolder fs-5" href="">
            Maybelline New York
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to ="/about">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
              </li>
            </ul>
            <div className='buttons ms-3'>
              <a href='/Signin' className='btn btn-outline-light ms-2'>
                <i className='fa fa-sign-in me-1'></i>Sign IN</a>
              <a href='/register' className='btn btn-outline-light ms-2'>
                <i className='fa fa-user-plus me-1'></i> Register</a>
                {/* <a href='/cart' className='btn btn-outline-light ms-2'>
                <i className='fa fa-cart-plus me-1'></i>Cart(0)</a> */}
                <a href='/cart' className='btn btn-outline-light ms-2'>Cart <i className='fa fa-cart-plus me-1'></i>
                <span className='rounded-pill position-absolute translate-middle badge bg-primary'>{cartTotalQuantity}</span>
                </a>
                {/* <p className='btn btn-outline-light'> total items({totalItems})</p> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


