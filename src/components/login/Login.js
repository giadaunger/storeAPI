import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {setUserInfo} from '../../store/user/index'
import { useNavigate } from "react-router-dom";
import "../login/login.css";


function Login() {
    let navigate = useNavigate();
    const [user, setUser] = useState({});
    const dispatch = useDispatch()

    const logInUser = () => {
        axios.post('https://k4backend.osuka.dev/auth/login', {
            username: user.username, password: user.password
        }).then(res => {
           console.log(res.data.userId) 
            return axios.get(`https://k4backend.osuka.dev/users/${res.data.userId}`)})
            .then(user => dispatch(setUserInfo(user.data)) )
            .catch(err => console.log(err));
            navigate("/products");
    }

    const handleChange = (e) => {
        const field =  e.target.name
         const value = e.target.value
         setUser(prevState => ({...prevState, [field]: value }) )
     }

    return (
        <div>
            <h1 className='login-h1'>Login</h1>
            <div className="Login">
            <form className='login-form'>
            <label className='signup-label'>Username:</label><br/>
                <input name='username'  onChange={handleChange} value={user?.username} className='signup-input' type='text' required/><br/>

                <label className='signup-label'>password:</label><br/>
                <input name='password'  onChange={handleChange} value={user?.password} className='signup-input' type='password' required/><br/>
                <div>
                <input onClick={logInUser} className='login-btn' type='submit' value='Submit'/>
                </div>
            </form>
      
    </div>
    <div className='register-div'>
    <p>Don't have an account? Register for free!</p>
      <Link to='/signup' className='btn-link'>
      <button className='register-btn'>Click to create an acount</button>
      </Link>
    </div>
        </div>
    );
}

export default Login;
