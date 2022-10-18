import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import { ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Products from './Product/Products';
import { useDispatch } from "react-redux";
import { fetchEyeliner, fetchFoundation, fetchLipstick, fetchPostList } from '../Redux/Features/Post.slice';


const Home = () => {

  const dispatch = useDispatch();

	const getData = () => {
		dispatch(fetchPostList());
	};

  const getEyeliner = () => {
		dispatch(fetchEyeliner());
	};

  const getFoundation = () => {
		dispatch(fetchFoundation());
	};

  const getLipstick = () => {
		dispatch(fetchLipstick());
	};

  return (
    <>
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="img1"
            src="https://tse1.mm.bing.net/th?id=OIP.mzkpbZ7R8MAVoUJxbLf3jQHaE7&pid=Api&P=0"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='fw-bold'>Maybelline FLASH Sale</h1>
            <p className='fw-bold'>Get UPTO 50% OFF on all Products</p>
            <ButtonGroup>
              <Button variant="outline-dark" value="Button 1">
                <Link to="/all" onClick={getData}>SHOP NOW</Link>
              </Button>
            </ButtonGroup>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="img1"
            src="https://www.nykaa.com/media/wysiwyg/6923492587443_MMEbanner.jpg?tr=w-400,pr-true"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className='fw-bold'>UNMISSABLE DEALS ON EYE CARE</h1>
            <p className='fw-bold'>GRAB THE OFFER VALID TILL STOCKS LAST </p>
            <ButtonGroup>
              <Button variant="outline-dark" value="Button 1">
                <Link to="/eyeliner" onClick={getEyeliner}>SHOP NOW</Link>
              </Button>
            </ButtonGroup>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="img1"
            src="https://swarnathesagigirl.com/wp-content/uploads/2020/06/Maybelline-Fit-Me-min.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className='fw-bold'>EXCLUSIVE DISCOUNTS</h1>
            <p className='fw-bold'>Get UPTO 30% OFF on FIT me!.</p>
            <ButtonGroup>
              <Button variant="outline-dark" value="Button 1">
                <Link to='/foundation' onClick={getFoundation}>SHOP NOW</Link>
              </Button>
            </ButtonGroup>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img
            className="img1"
            src="https://3.bp.blogspot.com/-T9UVNQmV8ho/W2HcTnsJtgI/AAAAAAABLMg/kBaNrjzKw9UOXpOWlgX9rSzl1QYhZkWdgCLcBGAs/s1600/maybelline%2Blipstick%2Bsale%2Baug%2B2018.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h1 className='fw-bold'>MAYBELLINE LIPSTICK SALE</h1>
            <p className='fw-bold'>USE CODE P100 OFF to grab the OFFER.</p>
            <ButtonGroup>
              <Button variant="outline-dark" value="Button 1">
                <Link to='/lipstick' onClick={getLipstick}>SHOP NOW</Link>
              </Button>
            </ButtonGroup>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <Products />
    </>
    
  );
}

export default Home;
