import Logo from '../../assets/img/logo-white.png';
import illustration from '../../assets/img/illustration.png';

const Cadastro = () => {
    return (
        <div className="container-fluid h-100 bg-primary">
            <div className="row">
                <div className="col-12">
                    <img src={Logo} />
                </div>
                <div className="col-6">
                    <img src={illustration} />
                </div>
                <div className="col-6">
                    <div className="box">
                        <h2> Falta pouco para fazer o seu pet feliz. </h2>
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Nome Completo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;