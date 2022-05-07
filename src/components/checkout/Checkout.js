import {useSelector} from  'react-redux';
function Checkout() {
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <div className="App">Checkout:
      {cartItems?.map(item => {
        return (
          <p>
            {item.title} {item.quantity}
          </p>
        )
      })}
    </div>
  );
}

export default Checkout;
