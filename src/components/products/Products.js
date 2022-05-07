import {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/products/index';
import { setCartItem } from '../store/cart/index';
import '../products/product.css'

function Products() {
  const products = useSelector(state => state.products.products);
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch()

  const handleAddProduct = (product) => {

    const productExist = cartItems.find((item) => item.id === product.id);

    if(productExist) {
      dispatch(setCartItem(cartItems.map((item) => item.id === product.id ?
      {...productExist, quantity: productExist.quantity + 1}:item)));
      
    }else {
      dispatch(setCartItem([...cartItems, {...product, quantity: 1}]));
    }
  }

  useEffect(() => {
    axios.get('https://k4backend.osuka.dev/products').then(({ data }) => {
      dispatch(setProducts(data))
    })
  }, []);

  return (
    <div>
        <h1 className='products-h1'>Products</h1>
        <div className="products-container">
      {products.map((product)=> ( 
          <div key={product.id} className="card">
            <Link to={`/products/${product.id}`}>
           <div><img src={product.image} alt="#" className='product-img'/></div>
           </Link>
           <div className="card-description">
               <h6>{product.title}</h6>
               <h6>{`Price: ${product.price} :-`}</h6>
           </div>
           <div>
                <button className='add-btn' onClick={() => handleAddProduct(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
