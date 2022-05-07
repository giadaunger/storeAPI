import { Link } from 'react-router-dom';
import "../login/login.css";


function Login() {
    return (
        <div>
            <h1 className='login-h1'>Login</h1>
            <div className="Login">
            <form className='login-form'>
                <label className='login-label'>Username:</label><br/>
                <input className='login-input' type='text' required></input><br/>

                <label className='login-label'>Password:</label><br/>
                <input className='login-input' type='password' required></input><br/>

                <div>
                <input className='login-btn' type='submit' value='Submit'></input>
                </div>
            </form>
      
    </div>
    <div className='register-div'>
    <p>Don't have an acooutn? Register for free!</p>
      <Link to='/signup' className='btn-link'>
      <button className='register-btn'>Click to create an acount</button>
      </Link>
    </div>
        </div>
    );
}

export default Login;
