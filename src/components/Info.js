import { FaMailBulk } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Info = () => {

    

    return (

        <div className="info-container">
            
            <img className="avatar-img" src="/images/myAvatar.png" alt="" />
            
            <h4>b4c1c</h4>
            <p>frontend developer</p>
            <div className="btns-container">
                <a href="https://www.linkedin.com/in/goran-b-59a170134/"  className="btns btn-email"> <FaMailBulk />Email</a>
                <a href="https://www.linkedin.com/in/goran-b-59a170134/" className="btns btn-linkedin"> <FaLinkedin />LinkedIn</a>
            </div>
        </div>
    );
}
 
export default Info;