import { FaTwitterSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return ( 
        <div className="footer-section">
            {/* <h5>Footer section</h5> */}
            <a href="https://twitter.com/b4c1c_" className="icons-social">
                <FaTwitterSquare />
            </a>
            <a href="https://github.com/b4c1c" className="icons-social">
                <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/goran-b-59a170134/" className="icons-social">
                <FaLinkedin />
            </a>
            
        </div>
        
     );
}
 
export default Footer;
