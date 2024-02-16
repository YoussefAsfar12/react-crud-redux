
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductList from './components/ProductList'
import EditProduct from './components/EditProduct'
import AddProduct from './components/AddProduct'

function App() {


  return (
    <>
  <BrowserRouter>
  <nav style={{display:'flex',justifyContent:'space-around', margin:'20px'}}>
    <Link to='/'>Home</Link>
    <Link to='/add'>Add Product</Link>
  </nav>
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/:id/edit' element={<EditProduct/>}/>

    </Routes>


  </BrowserRouter>
    </>
  )
}

export default App
