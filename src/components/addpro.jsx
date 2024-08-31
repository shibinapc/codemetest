import { useNavigate } from 'react-router-dom';

const Addproduct= () => {
     
  return (
    <>
    <div style={{backgroundColor:'beige'}}>
    <div>
        <center>
    <img src='mb3.png' style={{width:'100px'}}/>
    </center>
    </div>
    </div>
    <center>
    <div >
        <h1>Add Product</h1>
        <div>
        <label></label>
        <input placeholder='Enter Product Name*' style={{width:'278px',padding:'10px'}}
          type="email"  
         />
</div>
<div>
         <select  style={{width:'300px',height:"50px"}}>
            <option  value='none' selected disabled hidden >Choose Category</option>
              <option>Women</option>
              <option>Men</option>
              <option>Kids</option>
            </select>
            </div>
            <div>
         <select  style={{width:'300px',height:"50px"}}>
            <option  value='none' selected disabled hidden >Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            </div>
            <div>
         <select  style={{width:'300px',height:"50px"}}>
            <option  value='none' selected disabled hidden >Brand</option>
              <option>Allen Solly</option>
              <option>Tommy hilfiger</option>
              <option>Levis</option>
              <option>U.S Pollo  Assn.</option>
              <option>Zara</option>
            </select>
            </div>
            <div>
            <select  style={{width:'300px',height:"50px"}}>
            <option  value='none' selected disabled hidden >Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>Freesize</option>
            </select>
            </div>   
            <table border={1} width={300}>
            <h5>Add Image:</h5>
            <input type="file"  />
            </table>
           </div>
            </center>
   
    </>
  );
};

export default Addproduct;