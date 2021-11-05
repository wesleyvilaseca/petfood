import illustration from '../../assets/img/illustration.png';
import Header from '../../components/header';

const Cadastro = () => {
    return (
        <div className="container-fluid h-100 bg-primary">
            <div className="row">
                <Header whiteVersion={true} />
                <div className="col-6 text-right my-auto">
                    <img src={illustration} class="img-fluid" />
                </div>
                <div className="col-6">
                    <div className="box col-8">
                        <h2> Falta pouco para fazer o seu pet feliz. </h2>
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Nome Completo" />
                        <input type="email" className="form-control form-control-lg mb-3" placeholder="Email" />
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Telefone" />
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="CPF" />
                        <input type="date" className="form-control form-control-lg mb-3" placeholder="Data de Nascimento" />
                        <div class="d-grid gap-2">
                            <button className="btn btn-lg btn-secondary"> Finalizar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;