import '../home/home.css'
import banner from '../home/banner.jpeg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="App">
        <h1 className='home-h1'>Welcome to fake store</h1>
        <img src={banner} alt='banner' className='banner' /> 
        <Link to='/products' className='btn-link'>
        <button className='home-btn'>Start shopping</button>
        </Link>
    </div>
  );
}

export default Home;
