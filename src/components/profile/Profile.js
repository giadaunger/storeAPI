import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector(state => state.user.user)

    return (
      <div className="App">Profile: {user?.name.firstname}</div>
    );
  }
  
  export default Profile;
  