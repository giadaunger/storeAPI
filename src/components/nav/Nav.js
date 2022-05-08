import '../nav/nav.css'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from  'react-redux';
import {resetProducts} from '../../store/products/index'
import {resetUser} from '../../store/user/index'
function Nav() {
    const user = useSelector(state => state.user.user)
const dispatch = useDispatch()

    const logOut = () => {
        dispatch(resetProducts())
        dispatch(resetUser())

    }
    console.log(user)
  return (
    <div className="App">
        <nav>
            <ul className='nav-ul'>
            <Link to='/' className='nav-link'>
                    <li className='nav-li logo'>Logo</li>
                </Link>
                <Link to='/' className='nav-link'>
                    <li className='nav-li'>Home</li>
                </Link>
                
                {user ? (
                <>
                <Link to='/products' className='nav-link'>
                    <li className='nav-li'>Products</li>
                </Link> 
                    <Link to='/checkout' className='nav-link'>
                    <li className='nav-li'>Checkout</li>
                </Link>
                <Link onClick={logOut} to='/' className='nav-link'>
                    <li className='nav-li'>Logout</li>
                </Link>
                </>) 
               : <> <Link to='/login' className='nav-link'>
                <li className='nav-li'>Login</li>
                    </Link>
                </>
                }
                {user ? user?.role === 'admin' ?
                <Link to='/admin' className='nav-link'>
                    <li className='nav-li'>Admin</li>
                </Link>
                  : <Link to='/profile' className='nav-link'>
                  <li className='nav-li'>Profile</li>
              </Link>  : null
              }
            </ul>
        </nav>
    </div>
  );
}

export default Nav;
