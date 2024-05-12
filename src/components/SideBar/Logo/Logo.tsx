import image from '../../../images/Logo.svg'
import './Logo.css'

const Logo = () => {
    return (
        <div className='blockLogo'>
            <img src={image}/>
            <h1 className='logoName'>ArrowFlicks</h1>
        </div>
    );
}

export default Logo;