import Logo from '../../assets/img/logo.png';
import LogoWite from '../../assets/img/logo-white.png';
import './style.css';

const Header = ({ whiteVersion }) => {
    return (
       <div className="container p-0">
            <div className="col-12">
            <header className="py-4 px-4 right">
                <img src={whiteVersion ? LogoWite : Logo} className="img-fluid" />
            </header>
            <button className="btn btn-secondary cart-button">
                <i class="fas fa-shopping-cart"></i> 2 Ítens
            </button>
        </div>
       </div>
    );
}

export default Header;