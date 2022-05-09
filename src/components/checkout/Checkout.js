import {useSelector} from  'react-redux';
import '../checkout/checkout.css'
function Checkout() {
  const cartItems = useSelector(state => state.cart.cartItems)
  
  return (
    <div className="App">
      <h1 className='checkout-h1'>Checkout</h1>
      {cartItems?.map(item => {
        return (
          <>
          <div className='checkout'>
            <div className='checkout-div'>
              <img src={item.image} alt={item.title} className='checkout-img' />
            <p className='checkout-p'>{item.title}</p>
            <p className='checkout-p'>{item.quantity} st</p>
            </div>
          </div>
          </>
        )
      })}
      <button>clear cart</button>
    </div>

  );
}

export default Checkout;
