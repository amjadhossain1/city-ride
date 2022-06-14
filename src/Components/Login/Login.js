import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';
import "./Login.css";
const Login = () => {
    const { signInUsingGoogle } = useAuth();
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
                <div className=''>
                    <h2>LogIn</h2>
                    <form onSubmit="">
                        <input  className='input' type="email" placeholder='Enter your E-mail' />
                        <br /><br />
                        <input className='input' type="password" />
                        <br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                    <br />
                    <p>New to City-Ride? <Link to="/register">Create Account</Link></p>
                    ----------Or----------
                    <br />
                <button className='btn btn-outline-dark btn-regular' onClick={handleGoogleLogin}>Google</button>
                <br /><br />
                <button class="btn btn-outline-dark btn-regular">Github</button>
                </div>
        </>
    );
};

export default Login;