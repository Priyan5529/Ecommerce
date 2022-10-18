import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import Card from 'react-bootstrap/Card';
import './Lipstick.css';
import { addToCart } from '../../Redux/Features/Cart.slice';



const Lipstick = () => {

    const lipstickData = useSelector((state) => state.post.posts);

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
                        <h4 className='display-flex fw-bolder text-center'>Add Colour to your LIFE with MAYBELLINE</h4>
                        <Card.Img className='lipstickimg' variant="top" src="http://3.bp.blogspot.com/-IchK-g-u_fU/Ugpmb5ebkaI/AAAAAAAAYEI/eRibKUwP5Lk/s1600/Color+Sensational.png" />
                    </Card>
                    {lipstickData?.map((item) => (
                        <Card className='lipcards' key={item.id}>
                            <Card.Img className='lip_image' variant="top" src={item.image_link} alt={item.name} />
                            <Card.Body>
                                <Card.Title className='liptitle'>{item.name}</Card.Title>
                                <Card.Text className='lipprice'>
                                    Price: ${item.price}
                                    <p className='liprating'>Rating: {item.rating}</p>
                                </Card.Text>
                                <Button className='lipstick' variant='dark' href='/cart'  onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </ul>
        </div>
    )
}

export default Lipstick;
