import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Lipstick.css';
import { useNavigate } from 'react-router';
import { addToCart } from '../../Redux/Features/Cart.slice';

const EyeLiner = () => {

    const eyelinerData = useSelector((state) => state.post.posts);

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
                        <h4 className='display-flex fw-bolder text-center'># EYES tells Stories </h4>
                        <Card.Img className='lipstickimg' variant="top" src="https://www.nahdionline.com/media/Maybelline/5f7bd692-a53a-4279-ac36-fd17938a120a.__CR0_0_1464_600_PT0_SX1464_V1___.jpg?rand=1611565158" />
                    </Card>
                    {eyelinerData?.map((item) => (
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

export default EyeLiner
