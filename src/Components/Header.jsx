import './component.css';
import hexarexLogo from "./files/hexarex.png";
import { Link } from 'react-router-dom';
const Header = () =>{
    return (
        <nav>
            <span className='logo'><Link to="/"><img style={{width:40, height:40}} src={hexarexLogo} alt="hexarex logo" loading='lazy'/>RESUME</Link></span>
            <ul>
            <li>Resources</li>
            <li>Premium Services</li>
            <li>Career Advice</li>
            <li>Faq</li>
            </ul>
            <span><button>Login</button>  <button>Register</button></span>
        </nav>
    )
}
export default Header;