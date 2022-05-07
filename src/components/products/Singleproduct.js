import { useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import {useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {setProduct} from '../store/products/index';

function Singleproduct() {
  const product = useSelector(state => state.products.product);
  const dispatch = useDispatch()
  const params = useParams()
  const id = params.id

  useEffect(() => {
    axios.get( `https://k4backend.osuka.dev/products/${id}`).then(({ data }) => {
        dispatch(setProduct(data))
      })
    }, [id]);

  return (
    <div className="App">
        {product.title}
    </div>
  );
}

export default Singleproduct;
