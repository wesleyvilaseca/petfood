import Logo from '../../assets/img/logo.png';
import LogoWite from '../../assets/img/logo-white.png';

const Header = ({ whiteVersion }) => {
    return (
        <div className="col-12 py-4 px-4 text-center">
            <img src={whiteVersion ? LogoWite : Logo} className="img-fluid"/>
        </div>
    );
}

export default Header;