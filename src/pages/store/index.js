import Header from '../../components/header';
import './style.css';

const Store = () => {
    return (
        <div className="h-100">
            <Header whiteVersion={false} />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-2">
                        <img
                            src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
                            className="img-fluid store-logo" />
                        <b>PetLove</b>
                        <div className="store-infos">
                            <i className="fas fa-star"></i>
                            <text>
                                <b>2,8</b>
                            </text>
                            <i className="fas fa-money-bill"></i>
                            <text>$$$</text>
                            <i className="fas fa-map-marker-alt"></i>
                            <text>2,9km</text>
                        </div>
                        <label className="badge bg-dark">Frete Grátis</label>
                    </div>
                    <div className="col-10">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;