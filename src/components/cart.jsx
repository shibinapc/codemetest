import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
const Cart= () => {
    
  return (
    <>
    <div style={{backgroundColor:'white'}}>
    <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
    <img src='kiddy.png' style={{width:'100px'}}/>
    <input type='text' name='search' placeholder='search' style={{height:'30px'}}/>
    <h5><FaRegUser style={{fontSize:'20px'}} />
          Sign in
    </h5>
     <h5> <FaRegHeart style={{fontSize:'20px'}} /> 
           Favorites
    </h5>
    <h5> <AiOutlineShoppingCart style={{fontSize:'20px'}}  />
          Cart
   </h5>
    </div>
    </div>
    
    <div>
    <div>


<div style={{justifyContent:'space-around',display:'flex',padding:'20px'}}>  

<img src='m1.jpg' style={{height:'400px',width:'420px'}}/>

<img src='w2.jpg' style={{height:'400px' ,width:'420px' }}/>

<img src='kid1.jpeg' style={{height:'400px',width:'420px'}}/>



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

</div>

</div>

    </div>
    </>
  );
};

export default Cart;