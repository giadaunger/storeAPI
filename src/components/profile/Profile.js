import { useSelector } from 'react-redux';
import '../profile/profile.css'

function Profile() {
  const user = useSelector(state => state.user.user)

    return (
      <div className="App"><h1 className='profile-h1'>Profile</h1> 
      <div className='profile-div'>
        <p>Firstnam: {user?.name.firstname}</p>
        <p>Lastname: {user?.name.lastname}</p>
        <p>Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
        <p>Phone number: {user?.phone}</p>
        <p>Address: {user?.address.street} {user?.address.number}, {user?.address.zipcode} {user?.address.city}</p>
      </div>
      </div>
    );
  }
  
  export default Profile;
  