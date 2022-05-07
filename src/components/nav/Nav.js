import '../nav/nav.css'
import { Link } from 'react-router-dom';

function Nav() {
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
                <Link to='/products' className='nav-link'>
                    <li className='nav-li'>Products</li>
                </Link>
                <Link to='/login' className='nav-link'>
                    <li className='nav-li'>Login</li>
                </Link>
                <Link to='/checkout' className='nav-link'>
                    <li className='nav-li'>Checkout</li>
                </Link>

                <Link to='/admin' className='nav-link'>
                    <li className='nav-li'>Admin</li>
                </Link>
                <Link to='/profile' className='nav-link'>
                    <li className='nav-li'>Profile</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;
