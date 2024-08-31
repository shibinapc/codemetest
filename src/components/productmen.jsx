import React from "react";

function Productmen(){


        
    return (
      <>
      <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}></div>
        <div  style={{backgroundColor:'white',display:"flex",alignContent:'center', gap:'20px'}}> 
        <img src='mb3.png' style={{width:'80px'}}/>
    
   </div>
        <div style={{border:"black,",borderColor:"black"}}></div>
        {/* <input type='radio'></input> */}
        <select  style={{width:'100px',height:"50px"}}>
            <option style={{maxWidth:'100px'}} >BABIES</option>
            <option>T-shirt</option>
            <option>shirt Price</option>
            <option>pant</option>
            <option>trouser</option>
        </select>
        <select  style={{width:'100px',height:"50px"}}>
            <option style={{maxWidth:'100px'}} >BOYS</option>
            <option>T-shirt</option>
            <option>shirt Price</option>
            <option>pant</option>
            <option>trouser</option>
        </select>

        <select  style={{width:'100px',height:"50px"}}>
            <option style={{maxWidth:'100px'}} >GIRLS</option>
            <option>T-shirt</option>
            <option>shirt Price</option>
            <option>pant</option>
            <option>trouser</option>
        </select>
        <div style={{borderColor:"black"}}></div>
    
        </>
    );
  };
  
  export default Productmen;