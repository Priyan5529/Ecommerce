import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Signin_img from './Signin_img';

const SignIn = () => {
    
    const [inpval,setInpval] =useState({

        email: '',
        password: '',
    });

    const [data,setData] = useState([]);

    const getdata = (e)=>{
        // console.log(e.target.value);

        const {value,name} = e.target;
        console.log(value,name);

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    }

    const addData =(e) => {
        e.preventDefault();

        const{email,password} =inpval;

       if (email === "")
       {alert("Email is required")
    }else if (!email.includes("@")){
        alert("missed @ in email field")
    }else if (password === ""){
        alert ("password is required")
    }else{
        console.log(" data added succesfuly");

    localStorage.setItem("Signin" , JSON.stringify([...data,inpval]));
}
    }
    return (
        <div>
            <>
                <div className='container mt-3'>
                    <section className='d-felx justify-content-center'>
                        <div className=' mt-3 p-3' style={{ width: '100%' }}>
                            <h3 className='text-center col-lg-4'>Sign In</h3>
                            <Form>
                                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                    <Form.Control type="email"name='email' placeholder="Enter Email" onChange={getdata} />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
                                    <Form.Control type="password" name='password' placeholder="Password" onChange={getdata} />
                                </Form.Group>
                                <Button className='d-flex justify-content-center text-align-center' onClick={addData}
                                style={{ background: 'rgb(67, 185, 127)' }} variant="outline-dark" type="submit">
                                    Submit
                                </Button>
                                <p className='mt-3' >New to account?<span><NavLink to='/register'>Register Here</NavLink></span></p>
                                {/* <Link to='/register'onClick={addData}>Register Here</Link> */}
                            </Form>
                        </div>
                        <Signin_img />
                    </section>
                </div>
            </>
        </div>
    )
}

export default SignIn;
