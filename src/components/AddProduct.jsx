
import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const addProduct = () => {
        dispatch({type:'ADD_PRODUCT',payload:{name:name,price:parseInt(price) }});
        navigate('/')
    }


  return (
    <>
     <div>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
    <button onClick={()=>addProduct()}>Add</button>

    </div>
    
    
    </>

  )
}

export default AddProduct