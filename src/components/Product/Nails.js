import React from 'react';
import { useSelector, useDispatch} from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Lipstick.css';
import { useNavigate } from 'react-router';
import { addToCart } from '../../Redux/Features/Cart.slice';

const Nails = () => {
    const nailsData = useSelector((state) => state.post.posts);

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
                        <h4 className='display-flex fw-bolder text-center'>"shine your nails with MAYBELLINE!"</h4>
                        <Card.Img className='lipstickimg' variant="top" src="http://1.bp.blogspot.com/-KW7nIGDxHWM/VTTdaIkbDyI/AAAAAAAASdA/8TdUVcBal9Y/s1600/Maybelline%2BColor%2BShow%2BGo%2BGraffiti%2BNail%2BPolish%2BRebel%2BSwatches%2BIndia.jpg" />
                    </Card>
                    {nailsData?.map((item) => (
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

export default Nails;
