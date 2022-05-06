import '../products/product.css'
import {Link} from 'react-router-dom'

function Products({ data }) {
  return (
    <div>
        <h1 className='products-h1'>Products</h1>
        <div className="products-container">
      {data.map((product)=> ( 
          <div key={product.id} className="card">
            <Link to={`/products/${product.id}`}>
           <div><img src={product.image} alt="#" className='product-img'/></div>
           </Link>
           <div className="card-description">
               <h6>{product.title}</h6>
               <h6>{`Price: ${product.price}`}</h6>
           </div>
          </div>
      ))}
    </div>
    </div>
  );
}

export default Products;
