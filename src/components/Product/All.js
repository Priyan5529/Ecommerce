import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './Lipstick.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import { addToCart } from '../../Redux/Features/Cart.slice';

const All = () => {

    const postListData = useSelector((state) => state.post.posts);

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
                        <h4 className='display-flex fw-bolder text-center'>Put on our cosmetics and be the show stopper.</h4>
                        <Card.Img className='lipstickimg' variant="top" src="https://www.mapanache.com/wp-content/uploads/2018/11/og-banner-maybelline-1200x628_1591353201.jpg" />
                    </Card>
                    {postListData?.map((item) => (
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

export default All;
