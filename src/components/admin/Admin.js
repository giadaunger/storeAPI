import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {setAllUser} from '../../store/user/index'
import axios from 'axios';
import '../admin/admin.css'

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
    <div className="App"><h1 className='admin-h1'>Admin</h1>
    <h3 className='admin-h3'>Usres:</h3>
      {allUsers.map(user => {
        return(
          <div className='admin-div'>
            <p key={user.id} className='admin-p'>{user.email}</p>
          </div>
        )
    
      })}
      <h3 className='admin-h3'>Products:</h3>
      {products.map(product => {
        return (
          <div className='admin-div'>
            <p key={product.id} className='admin-p'>{product.title}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Admin;
