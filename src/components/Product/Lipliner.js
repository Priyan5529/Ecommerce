import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { addToCart } from '../../Redux/Features/Cart.slice';
import './Lipstick.css';


const Lipliner = () => {

    const liplinerData = useSelector((state) => state.post.posts);
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
                        <h4 className='display-flex fw-bolder text-center'>Some coffee, some music, and a LIPLINER to make the day! #coffeemusiclipliner</h4>
                        <Card.Img className='lipstickimg' variant="top" src="https://swarnathesagigirl.com/wp-content/uploads/2021/01/0.jpg" />
                    </Card>
                    {liplinerData?.map((item) => (
                        <Card className='lipcards' item={item} key={item.id}>
                            <Card.Img className='lip_image' variant="top" src={item.image_link} alt={item.name} />
                            <Card.Body>
                                <Card.Title className='liptitle'>{item.name}</Card.Title>
                                <Card.Text className='lipprice'>
                                    Price: ${item.price}
                                    <p className='liprating'>Rating: {item.rating}</p>
                                </Card.Text>
                                <Button className='lipstick' variant='dark' onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </ul>
        </div>
    )
}

export default Lipliner;
