import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './Redux/store';
import PostList from './components/PostList';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Product/Products';
import Contact from './components/Contact';
import SIgnIn from './components/SignIn';
import Register from './components/Register';
import About from './components/About';
import EyeLiner from './components/Product/EyeLiner';
import Blush from './components/Product/Blush';
import All from './components/Product/All';
import Bronzer from './components/Product/Bronzer';
import Foundation from './components/Product/Foundation';
import Lipstick from './components/Product/Lipstick';
import Lipliner from './components/Product/Lipliner';
import Cart from './components/Cart';
import Mascara from './components/Product/Mascara';
import Nails from './components/Product/Nails';
import { ToastContainer } from 'react-toastify';





function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <ToastContainer />
            <Navbar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />

              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/Signin' element={<SIgnIn />} />
              <Route path='/register' element={<Register />} />
              <Route path='/cart' element={<Cart />} />
              {/* <Route path='/cartdetails' element={<CartDetails/>} /> */}
              <Route path='/all' element={<All />} />
              <Route path='/blush' element={<Blush />} />
              <Route path='/bronzer' element={<Bronzer />} />
              <Route path='/foundation' element={<Foundation />} />
              <Route path='/lipstick' element={<Lipstick />} />
              <Route path='/lipliner' element={<Lipliner />} />
              <Route path='/eyeliner' element={<EyeLiner />} />
              <Route path='/mascara' element={<Mascara />} />
              <Route path='/nails' element={<Nails />} />


            </Routes>
            {/* <PostList /> */}
          </BrowserRouter>
        </div>
      </Provider>
    </>
  );
}

export default App;
