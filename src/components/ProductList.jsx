import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";





const ProductList = () => {

    const products = useSelector((state)=>state.products);
    const dispatch = useDispatch();

    // console.log(products)
  return (
    <>
    {products?.map((product)=>{
        return (
            <div key={product.id}>
                 <span>{product.id}</span>
                 - <span>{product.name}</span>
                 - <span>{product.price}</span> 
                 {/* {console.log(product)} */}
                 -<button onClick={()=>dispatch({type:'DELETE_PRODUCT',payload:product.id })}>delete</button>
                 -<Link to={`/${product.id}/edit`}>
                     <button >Edit</button>
                 </Link>
            </div>
        )
    })}
    
    </>
  )
}
export default ProductList