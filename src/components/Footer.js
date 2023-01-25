import { FaTwitterSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return ( 
        <div className="footer-section">
            {/* <h5>Footer section</h5> */}
            <a href="" className="icons-social">
                <FaTwitterSquare />
            </a>
            <a href="" className="icons-social">
                <FaGithubSquare />
            </a>
            <a href="" className="icons-social">
                <FaLinkedin />
            </a>
            
        </div>
        
     );
}
 
export default Footer;
