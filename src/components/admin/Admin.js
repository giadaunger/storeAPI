import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {setAllUser} from '../store/user/index'
import axios from 'axios';

function Admin() {
  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.user.users)
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    axios.get('https://k4backend.osuka.dev/users').then(({ data }) => {
      dispatch(setAllUser(data))
    })
  }, [dispatch])  

  return (
    <div className="App"> Admin: 
      {allUsers.map(user => {
        return <p key={user.id} >{user.email}</p>
      })}
      -------------------- products -----------------
      {products.map(product => {
        return <p key={product.id}>{product.title}</p>
      })}
    </div>
  );
}

export default Admin;
