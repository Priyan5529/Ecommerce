import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  const [inpval,setInpval] =useState({

    name:'',
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

    const{name,email,password} =inpval;

    if(name === ""){alert("name is required")}
   else if (email === "")
   {alert("Email is required")
}else if (!email.includes("@")){
    alert("missed @ in email field")
}else if (password === ""){
    alert ("password is required")
} else{
  console.log(" data added succesfuly");
  localStorage.setItem("register" , JSON.stringify([...data,inpval]));
}
}
  return (
    <>
      <div className='container mt-3'>
        <section className='d-felx justify-content-between'>
          <div className='left_data mt-3 p-3' style={{ width: '100%' }}>
            <h3 className='text-center col-lg-4'>Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Full Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
                <Form.Control type="password" name='password'onChange={getdata} placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-4"name='date' onChange={getdata} controlId="formBasicEmail">
                <Form.Control type="date" /> 
              </Form.Group>
              <Button className='d-flex justify-content-center text-align-center col-lg-4' onClick={addData} 
              style={{ background: 'rgb(67, 185, 127)' }} variant="outline-dark" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className='right_data mt-5' style={{ width: '100%' }}>
            <div className='sign_img mt-5'>
              <img src='https://www.maybelline.com/~/media/mny/us/signin/birthday-page-asset_1000x795-v3.jpg' style={{ maxwidth: 400 }} alt='' />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Register;
