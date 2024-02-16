
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {

    const id = useParams().id;
    const product= useSelector(state => state.products).find(product => product.id === parseInt(id))
    const [name, setName]=useState(product.name);
    const [price, setPrice]=useState(product.price);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const updateProduct = () => {
        dispatch({type:'UPDATE_PRODUCT',payload:{id:parseInt(id),name:name,price:price}})
        navigate('/')
    }


  return (
    <div>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
    <button onClick={()=>updateProduct()}>update</button>

    </div>
  )
}

export default EditProduct