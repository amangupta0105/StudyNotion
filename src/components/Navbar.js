import {Link} from "react-router-dom";
import logo from '../assets/Logo.svg';
import './Navbar.css';
import toast from 'react-hot-toast';

function Navbar(props) {
    let login = props.login;
    let setlogin = props.setlogin;

    function LogOutHandler() {
        setlogin(false);
        toast.success('Logged Out');
    }

    return (
        <div className="navbar">

            <Link to='/'>
                <img src={logo} alt='logo'/>
            </Link>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>

            {
                !login
                    ? <div >
                            <Link to='/login'>
                                <button className="navbar-btn">LogIn</button>
                            </Link>
                            <Link to='/signup'>
                                <button className="navbar-btn">SignUp</button>
                            </Link>
                        </div>
                    : <div>
                            <Link to='/'>
                                <button onClick={LogOutHandler} className="navbar-btn">LogOut</button>
                            </Link>
                            <Link to='/dashboard'>
                                <button className="navbar-btn">Dashboard</button>
                            </Link>
                        </div>
            }
        </div>
    )
}

export default Navbar;
