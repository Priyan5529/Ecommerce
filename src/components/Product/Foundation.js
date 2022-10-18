import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Bronzer.css';
import { useNavigate } from 'react-router';
import { addToCart } from '../../Redux/Features/Cart.slice';

const Foundation = () => {

    const foundationData = useSelector((state) => state.post.posts);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        navigate('/cart');
    };


    return (
        <div>
            <ul>
                <div className='bro'>
                    <Card className='bronzer_1'>
                        <h4 className='display-flex fw-bolder text-center'>My face, "MY CANVAS!"</h4>
                        <Card.Img className='img' variant="top" src="https://i.ytimg.com/vi/4r2S8-iVpCQ/maxresdefault.jpg" />
                    </Card>
                    {foundationData?.map((item) => (
                        <Card className='bcards' key={item.id}>
                            <Card.Img className='fimage' variant="top" src={item.image_link} alt={item.name} />
                            <Card.Body>
                                <Card.Title className='btitle'>{item.name}</Card.Title>
                                <Card.Text className='bprice'>
                                    Price: ${item.price}
                                    <p className='brating'>Rating: {item.rating}</p>
                                </Card.Text>
                                <Button className='bronzer' variant='dark' href='/cart' onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </ul>
        </div>
    )
}

export default Foundation;
