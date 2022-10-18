import React, { useState } from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import FirebaseDB from '../Firebase';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { name, email, subject, message } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please provide value in each input field")
    } 
    // else {
    //   FirebaseDB.child('contacts').push(state);
    //   setState({ name: "", email: "", subject: "", message: "" });
    //   toast.success("Form submitted successfully");
    // }
  };

  const handleInpputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  };
  return (
    <section className='contact-section'>
      <div className='conatainer'>
        <ToastContainer position='top-center' />
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div className='wrapper'>
              <div className='row no-gutters'>
                <div className='col-md-6'>
                  <div className='conatact-wrap w-100 p-lg-5 p-4'>
                    <h3 className='one mb-4'>Send us a message</h3>
                    <form id='contactForm' className='contactForm' onSubmit={handleSubmit}>
                      <div className='row'>
                        <div className='col-md-12'>
                          <div className='form-group'>
                            <input type='text' className='form-control' name='name' placeholder='Name' onChange={handleInpputChange} value={name} />
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='form-group'>
                            <input type='email' className='form-control' name='email' placeholder='Email' onChange={handleInpputChange} value={email} />
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='form-group'>
                            <input type='text' className='form-control' name='subject' placeholder='Subject' onChange={handleInpputChange} value={subject} />
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='form-group'>
                            <textarea type='text' className='form-control' name='message' placeholder='Message' cols='25' rows='5' onChange={handleInpputChange} value={message}></textarea>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='form-group'>
                            <input type='submit' value='Send Message' className='btn btn-primary' />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='col-md-6 d-flex align-items-stretch'>
                  <div className='info-wrap w-100 p-lg-5 p-4 img'>
                    <h3 className='two'>Contact US</h3>
                    <p className=' three mb-4'> we're open for any suggestion or chat for questions about our products. Please call us at +91 123-456-7890, Monday through Friday, 10AM to 5PM or email us by sending a message.</p>
                    <div className='dbox.w-100 d-flex align-items-start'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='fa fa-map-marker'></span>
                      </div>
                      <div className='text pl-3'>
                        <p className='four'>
                          <span>Address:</span> Tech Pundits, 53/3 Manikanta Complex,2nd floor,NagarBhavi, Bangalore-560072.
                        </p>
                      </div>
                    </div>
                    <div className='dbox.w-100 d-flex align-items-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='fa fa-phone'></span>
                      </div>
                      <div className='text pl-3'>
                        <p className='five'>
                          <span>Phone:</span> +91 123-456-7890
                        </p>
                      </div>
                    </div>
                    <div className='dbox.w-100 d-flex align-items-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='fa fa-envelope'></span>
                      </div>
                      <div className='text pl-3'>
                        <p className='six'>
                          <span>Email:</span><a href='#'>priyanka@gmail.com</a>
                        </p>
                      </div>
                    </div>
                    <div className='dbox.w-100 d-flex align-items-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='fa fa-globe'></span>
                      </div>
                      <div className='text pl-3'>
                        <p className='six'>
                          <span>Website:</span>
                          <a href='https://www.maybelline.com/'>www.maybelline.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact;
