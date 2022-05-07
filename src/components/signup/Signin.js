import '../signup/signup.css'

function Signup() {

    return(
        <div>
            <h1 className='signup-h1'>Create Account</h1>
            <div className='signup-form-div'>
            <form className='signup-form'>
                <label className='signup-label'>Firstname:</label><br/>
                <input className='signup-input' type='text' required></input><br/>

                <label className='signup-label'>Lastname:</label><br/>
                <input className='signup-input' type='text' required></input><br/>

                <label className='signup-label'>Username:</label><br/>
                <input className='signup-input' type='text' required></input><br/>

                <label className='signup-label'>Tel number:</label><br/>
                <input className='signup-input' type='tel' pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" required></input><br/>

                <label className='signup-label'>Mail:</label><br/>
                <input className='signup-input' type='email' required></input><br/>

                <label className='signup-label'>Adress:</label><br/>
                <input className='signup-input' type='text' required></input><br/>

                <div className='state-postal-div'>
                <div className='state-div'>
                <label className='state-postal-label'>State / Province:</label><br/>
                <input className='state-postal-input' type='text' required></input><br/>
                </div>

                <div className='postal-div'>
                <label className='state-postal-label'>Postal / Zip-code:</label><br/>
                <input className='state-postal-input' type='text' required></input><br/>
                </div>
                </div>

                <label className='signup-label'>City:</label><br/>
                <input className='signup-input' type='text' required></input><br/>

                <div className='btn-div'>
                    <input className='signup-btn' type='reset' value='Reset'></input>
                    <input className='signup-btn' type='submit' value='Submit'></input>
                </div>
            </form>
            </div>
        </div>
       
    )       
}

export default Signup;