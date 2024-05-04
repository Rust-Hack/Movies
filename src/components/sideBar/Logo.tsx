import image from '../../image/Logo.svg'
import '../../styles/sideBar/Logo.css'

const Logo = () => {
    return (
        <div className='blockLogo'>
            <img src={image}/>
            <h1 className='logoName'>ArrowFlicks</h1>
        </div>
    );
}

export default Logo;