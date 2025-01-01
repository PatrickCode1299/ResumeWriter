import './component.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Description=()=>{
    let current_navigation=useLocation();
    console.log(current_navigation.pathname);
    return (
        <div className='description-container'>
            <h2>Create an ATS Prove Resume<br /> Within Minutes.</h2>
            <div>
                <p>Make Use of Our AI Powered Resume Builder, and build a resume that bypass the ATS checker for most job postings, ever wondered why you keep submitting your resume for job applications and not getting called.
                    Yes, you do not necessarily have a bad resume, but your resume isn't ATS optimised..
                </p>
                {current_navigation.pathname === '/create' ? "":<Link to="/create"><button  className="resume-builder-btn">Build Resume</button></Link>}
            </div>
        </div>
    )
}

export default Description;