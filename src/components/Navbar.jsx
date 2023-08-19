import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }


  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          
          <a><span className='text-4xl text-red-800'>C</span><span className='text-xl text-black-700'>olors</span></a>
        </div>

        <div className="navbar-end gap-4">
          <Link to="/addColors" >AddColor</Link>
          
          {user?<button onClick={handleLogOut}>Logout</button> : <Link to="/login">Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;