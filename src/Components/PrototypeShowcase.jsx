import './component.css';
import Iphone from './files/images.png'
import BoxCard from './BoxCard';
const PrototypeShowcase=()=>{
    return (
        <div className='description-container' style={{backgroundColor: 'whitesmoke'}}>
            <img className='iphone' src={Iphone} alt='prototype showcase' />
            <div className='boxcard-holder'>
              <BoxCard content={{header:"Dream Job", caption:"Graphics Designer"}} />
            </div>
        </div>
       
    )
}

export default PrototypeShowcase;