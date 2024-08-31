import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Cart from './cart';
const image1='/kiddy1.png';
const image2='/kiddy2.png';
const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2];

  const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }

  
 
  const Cart = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/cart')
  }
  // const user = useSelector((state) => state.user.user);

  return (
    <>
    <div style={{backgroundColor:'white'}}>
    <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
    <img src='kiddy.png' style={{width:'100px'}}/>
   
   <input type='text' name='search' placeholder='search' style={{height:'30px'}}/>
    
    <div class="nav-icon">
      <a href="#"><i class='bx bx-search'></i></a>
    </div>
    <h5 onClick={logout}><FaRegUser style={{fontSize:'20px'}} />
          Sign in
    </h5>
     <h5> <FaRegHeart style={{fontSize:'20px'}} /> 
           Favorites
    </h5>
    <h5> <AiOutlineShoppingCart style={{fontSize:'20px'}}  />
          Cart
   </h5>
  
    </div>
        <center>
      {/* <h1>"Style is a way to say who you are without having to speak..!"</h1> */}
      </center>
      <div style={{justifyContent:'space-around',display:'flex'}}>
    
      <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}></div>
        <div  style={{backgroundColor:'white',display:"flex",alignContent:'center', gap:'300px'}}> 
      
    
   
        <div style={{border:"black,",borderColor:"black"}}></div>
        {/* <input type='radio'></input> */}
        <select  style={{width:'100px',height:"50px"}}>
        <option  value='none' selected disabled hidden >BOYS</option>
            <option>T-shirt</option>
            <option>shirt Price</option>
            <option>pant</option>
            <option>trouser</option>
        </select>
        <select  style={{width:'100px',height:"50px"}}>
        <option  value='none' selected disabled hidden >GIRLS</option>
            <option>T-shirt</option>
            <option>shirt Price</option>
            <option>pant</option>
            <option>trouser</option>
        </select>

        <select  style={{width:'100px',height:"50px"}}>
        <option  value='none' selected disabled hidden >BABIES</option>
            <option>T-shirt</option>
            <option>shirt Price</option>
            <option>pant</option>
            <option>trouser</option>
        </select>
        <div style={{borderColor:"black"}}></div>
        </div>
        </div>
        
        <div>
            
            <div style={{ position: 'relative', width: '1500px', overflow: 'hidden', margin: 'auto' ,padding:'20px'}}>
                {/* Previous button */}
                <button
                    style={{
                        
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        cursor: 'pointer',
                        zIndex: 1
                    }}
                    onClick={prevSlide}
                >
                    &#10094;
                </button>

                {/* Image */}
                <img
                    src={images[currentIndex]}
                   
                    style={{ width: '100%', display: 'block' }}
                />

                {/* Next button */}
                <button
                    style={{
                       
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        cursor: 'pointer',
                        zIndex: 1
                    }}
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>
        </div>
      
<div>

        <div style={{justifyContent:'space-evenly',display:'flex'}}> <p style={{alignItems:'end', fontStyle:'italic',fontSize:'30px'}}>Our Top Categories</p>
         <p style={{fontSize:'20px'}}>Sorted By : <button style={{width:'100px',height:'50px',backgroundColor:'white'}}> All Category </button> </p>
         </div>
        <div style={{justifyContent:'space-around',display:'flex'}}>  
      
      <img src='m1.jpg' style={{height:'400px'}}/>
      
      <img src='w2.jpg' style={{height:'400px'}}/>
      
      <img src='kid1.jpeg' style={{height:'400px'}}/>
      
      <img src='image.png' style={{height:'400px'}}/>
    
      
      </div>
      </div>
      <div  style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1490px',padding:'10px'}}>
      <div>
        <a href="#"><FaRegHeart style={{fontSize:'20px'}} /></a>
      <h3>Allen Solly Gents Jacket</h3>
      <p>black jacet</p>
      <h4>Rs 2999/-</h4>
      <div class="star-rating" style={{color:'gold'}}>
        <span class="star" data-value="1">★</span>
        <span class="star" data-value="2">★</span>
        <span class="star" data-value="3">★</span>
        <span class="star" data-value="4">★</span>
        <span class="star" data-value="5">★</span>
    </div>
    <a href='#'><button onClick={Cart} style={{backgroundColor:'pink', height:'30px'}}>Add To Cart</button></a>
    </div>
    <div >
        <a href="#"><FaRegHeart style={{fontSize:'20px'}} /></a>
      <h3>The W Women Baba suit</h3>
      <p>White women full length suit</p>
      <h4>Rs 1999/-</h4>
      <div class="star-rating" style={{color:'gold'}}>
        <span class="star" data-value="1">★</span>
        <span class="star" data-value="2">★</span>
        <span class="star" data-value="3">★</span>
        <span class="star" data-value="4">★</span>
        <span class="star" data-value="5">★</span>
    </div>
    <a href='#'><button onClick={Cart} style={{backgroundColor:'pink', height:'30px'}}>Add To Cart</button></a>
    </div>
    <div>
        <a href="#"><FaRegHeart style={{fontSize:'20px'}} /></a>
      <h3>Denim Kids Wear Full Version</h3>
      <p>Colourful cotton full type for kids</p>
      <h4>Rs 1699/-</h4>
      <div class="star-rating" style={{color:'gold'}}>
        <span class="star" data-value="1">★</span>
        <span class="star" data-value="2">★</span>
        <span class="star" data-value="3">★</span>
        <span class="star" data-value="4">★</span>
        <span class="star" data-value="5">★</span>
    </div>
    <a href='#'><button onClick={Cart} style={{backgroundColor:'pink', height:'30px'}}>Add To Cart</button></a>
    </div>
    <div>
        <a href="#"><FaRegHeart style={{fontSize:'20px'}} /></a>
      <h3>Lullaby Babies Wear</h3>
      <p>Cotton comfort for babies </p>
      <h4>Rs 999/-</h4>
      <div class="star-rating" style={{color:'gold'}}>
        <span class="star" data-value="1">★</span>
        <span class="star" data-value="2">★</span>
        <span class="star" data-value="3">★</span>
        <span class="star" data-value="4">★</span>
        <span class="star" data-value="5">★</span>
    </div>
    <a href='#'><button onClick={Cart} style={{backgroundColor:'pink', height:'30px'}}>Add To Cart</button></a>
    </div>
    </div>
    

     
    

      <div >
            </div>
      
            <div style={{alignContent:'start',display:'fl',justifyContent:"space-around",flexDirection:'column',width:'1450px',padding:'20px'}}>
                            <h3>Contact Details</h3>
                            <p>
                                <span class="fa-phone">Telephone:</span>(212)888-77-88
                                <br/>   <span class="fa-envelope">Email:</span>
                                <br/>  <a href="mailto:info@joomla51.com">shib@gmail.com</a>
                                <br/>  <span class="fa-link">Website:</span>
                                <br/> <a href="http://www.joomla51.com">www.dreszone.com</a>
                            </p>
                            <p >The Dunes, Top Road,
                              <br/> Street12,
                              <br/> New York City
                                </p>
                           
                      </div>
                      </div>
                    
                       
               
                
           
        
    
    </>
  );
};

export default Home;
