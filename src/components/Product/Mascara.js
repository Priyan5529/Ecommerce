import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Lipstick.css';
import { useNavigate } from 'react-router';
import { addToCart } from '../../Redux/Features/Cart.slice';

const Mascara = () => {

    const mascaraData = useSelector((state) => state.post.posts);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        navigate('/cart');
    };

    return (
        <div>
            <ul>
                <div className='lip'>
                    <Card className='lipstick_1'>
                        <h4 className='display-flex fw-bolder text-center'>The most trusted mascara brand by the ladies.</h4>
                        <Card.Img className='lipstickimg' variant="top" src="http://fashion.zarzarmodels.com/wp-content/uploads/2014/07/Beautiful-Brazilian-Fashion-Model-Adriana-Lima-Modeling-For-Maybelline-Fashion-Ads-Modeling-As-One-Of-The-Highest-Paid-Models-In-Brazil-Brasil.jpg" />
                    </Card>
                    {mascaraData?.map((item) => (
                        <Card className='lipcards' key={item.id}>
                            <Card.Img className='lip_image' variant="top" src={item.image_link} alt={item.name} />
                            <Card.Body>
                                <Card.Title className='liptitle'>{item.name}</Card.Title>
                                <Card.Text className='lipprice'>
                                    Price: ${item.price}
                                    <p className='liprating'>Rating: {item.rating}</p>
                                </Card.Text>
                                <Button className='lipstick' variant='dark' href='/cart' onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </ul>
        </div>
    )
}

export default Mascara
