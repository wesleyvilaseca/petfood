import Logo from '../../assets/img/logo.png';
import LogoWite from '../../assets/img/logo-white.png';
import './style.css';

const Header = ({ whiteVersion, hideCart }) => {
    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }

    return (
        <div className="container p-0">
            <div className="col-11">
                <header className="py-4 px-4 right">
                    <img src={whiteVersion ? LogoWite : Logo} className="img-fluid" />
                </header>
                {!hideCart && (
                    <button
                        onClick={() => openDrawer()}
                        className="btn btn-secondary cart-button">
                        <i class="fas fa-shopping-cart"></i> 2 Ítens
                    </button>
                )}

            </div>
        </div>
    );
}

export default Header;