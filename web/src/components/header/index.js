import { useSelector } from 'react-redux'
import Logo from '../../assets/transferir.png';
import LogoWhite from '../../assets/Imagem.png';

import { Link } from 'react-router-dom'
import './styles.css'

const Header = ({ whiteVersion, hideCart }) => {

    const { cart } = useSelector(state => state.shop);

    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }

    return(
        <div className="col-12">
            <header className="py-4 px-4 text-center">
                <Link to="/home"><img src={whiteVersion ? Logo : LogoWhite} className="img-fluid" /></Link>
            </header>
            {!hideCart && (<button onClick={() => openDrawer()} className="btn btn-secondary cart-button">
            <span className="mdi mdi-cart"></span>    
                {cart.length}
            </button>)}
        </div>
    )
}

export default Header