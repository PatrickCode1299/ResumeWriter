import './component.css';
import resume from './files/resume.png'
const ResumePreview = () =>{
    return (
        <div className="resume-preview">
        <div className='img-holder'>
        <img className='resume-img' src={resume} style={{width:'200px', height:'200px', left:'200px'}} />
        <img className='resume-img' src={resume} style={{width:'200px', height:'200px', top:'200px', left:'100px'}} />
        </div>
            <div className='resume-prev-content'>
                <h2>3 Steps. 5 Minutes.</h2>
                <p>Getting your dream job can seem like an impossible task, we are here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals..</p>
                <button className='resume-builder-btn' style={{marginBottom:'5px'}}>Create Resume Now</button>
            </div>
        </div>
    )
}
export default ResumePreview;