import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Bronzer.css';
import { useNavigate } from 'react-router';
import { addToCart } from '../../Redux/Features/Cart.slice';


const Bronzer = () => {

    const bronzerData = useSelector((state) => state.post.posts);
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
                        <h4 className='display-flex fw-bolder text-center'>A woman with bronzer is the best stared at!</h4>
                        <Card.Img className='img' variant="top" src="https://tse1.mm.bing.net/th?id=OIP.YWO3Mp3mfYpO3ocxF4_h_QHaEK&pid=Api&P=0" />
                    </Card>
                    {bronzerData?.map((item) => (
                        <Card className='bcards' key={item.id}>
                            <Card.Img className='bimage' variant="top" src={item.image_link} alt={item.name} />
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

export default Bronzer
