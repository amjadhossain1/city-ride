import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';

const Register = () => {
  const { signInUsingGoogle, signUsingEmailAndPassword } = useAuth();
    const [createUser, setCreateUser] = useState({email:"", password:"", confirmPassword:""});
  
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
        })
    }

  
  return (
    <>
      <Header></Header>
      <div>
        <div>
          <h2>Create Account</h2>
          <form onSubmit="">
            <input onChange={(e)=> setCreateUser(createUser.email=e.target.value)} className='input' type="email" name="" id="" placeholder='Enter Your E-mail' />
            <br /><br />
            <input className='input' type="password" name="" id="" placeholder='Enter Password' />
            <br /><br />
            <input className='input' type="password" name="" id="" placeholder='Confirm Password' />
            <br /><br />
            <input type="submit" value="Submit" />
          </form>
          <p>Already has an account? <Link to="/login">LogIn</Link></p>
          ----------Or----------
          <br />
          <button className='btn btn-outline-dark btn-regular' onClick={handleGoogleLogin}>Google</button>
          <br /><br />
          <button className='btn btn-outline-dark btn-regular'>Github</button>
        </div>
    </div>
    </>
  );
};

export default Register;