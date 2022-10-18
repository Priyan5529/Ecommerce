import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Blush.css';
import { useNavigate } from 'react-router';
import { addToCart } from '../../Redux/Features/Cart.slice';

const Blush = () => {
    const blushData = useSelector((state) => state.post.posts);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        navigate('/cart');
    };

    return (
        <div>
            <ul>
                <div className='blush'>
                    <Card className='blush_1'>
                        <h4 className='display-flex fw-bolder text-center'>Nothing is else is required when you have a blush by your side!</h4>
                        <Card.Img className='img' variant="top" src="https://i.pinimg.com/originals/11/73/24/1173241b9e0edfe11faa2119103686ec.jpg" />
                    </Card>
                    {blushData?.map((item) => (
                        <Card className='blushcards' key={item.id}>
                            <Card.Img className='blushimage' variant="top" src={item.image_link} alt={item.name} />
                            <Card.Body>
                                <Card.Title className='blushtitle'>{item.name}</Card.Title>
                                <Card.Text className='blushprice'>
                                    Price: ${item.price}
                                    <p className='blushrating'>Rating: {item.rating}</p>
                                </Card.Text>
                                <Button variant='dark' href='/cart' onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </ul>
        </div>
    )
}

export default Blush;
