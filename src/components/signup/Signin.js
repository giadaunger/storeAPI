import axios from 'axios';
import { useState } from 'react';
import '../signup/signup.css'

function Signup() {
    const [newUser, setNewUser] = useState({});

    const createUser = () => {
    axios.post('https://k4backend.osuka.dev/users', 
            {
                email: newUser.email,
                username:newUser.username,
                password:newUser.password,
                role: "user",
                name:{
                    firstname:newUser.firstName,
                    lastname: newUser.lastName
                },
                address:{
                    city:newUser.city,
                    street:newUser.street,
                    number:newUser.number,
                    zipcode:newUser.zipcode
                },
                phone:newUser.phone
            }
        )
        .then(res=> res.json())
        .then(json=>console.log(json))
}

    const handleChange = (e) => {
       const field =  e.target.name
        const value = e.target.value
        setNewUser(prevState => ({...prevState, [field]: value }) )
    }

    return(
        <div>
            <h1 className='signup-h1'>Create Account</h1>
            <div className='signup-form-div'>
            <form className='signup-form'>
                <label className='signup-label'>Firstname:</label><br/>
                <input name='firstName'  onChange={handleChange} value={newUser?.firstName} className='signup-input' type='text' required/><br/>

                <label className='signup-label'>Lastname:</label><br/>
                <input name='lastName' onChange={handleChange} value={newUser?.lastName} className='signup-input' type='text' required/><br/>

                <label className='signup-label'>Email:</label><br/>
                <input name='email'  onChange={handleChange} value={newUser?.email} className='signup-input' type='text' required/><br/>

                <label className='signup-label'>Username:</label><br/>
                <input name='username'  onChange={handleChange} value={newUser?.username} className='signup-input' type='text' required/><br/>

                <label className='signup-label'>password:</label><br/>
                <input name='password'  onChange={handleChange} value={newUser?.password} className='signup-input' type='password' required/><br/>
                <label className='signup-label'>Tel number:</label><br/>
                <input name='phone'  onChange={handleChange} value={newUser?.phone} className='signup-input' type='tel' pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" required/><br/>

                <label className='signup-label'>Street:</label><br/>
                <input name='street'  onChange={handleChange} value={newUser?.street} className='signup-input' type='text' required/><br/>
                <label className='signup-label'>Number:</label><br/>
                <input name='number'  onChange={handleChange} value={newUser?.number} className='signup-input' type='number' required/><br/>

                <label className='state-postal-label'>Postal / Zip-code:</label><br/>
                <input name='zipcode'  onChange={handleChange} value={newUser?.zipcode} className='state-postal-input' type='text' required/><br/>

                <label className='signup-label'>City:</label><br/>
                <input name='city'  onChange={handleChange} value={newUser?.city} className='signup-input' type='text' required/><br/> 

                <div className='btn-div'>
                    <input className='signup-btn' type='reset' value='Reset'/>
                    <input onClick={createUser} className='signup-btn' type='submit' value='Submit'/>
                </div>
            </form>
            </div>
        </div>
       
    )       
}

export default Signup;