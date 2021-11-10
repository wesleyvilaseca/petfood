import './style.css';

const Product = () => {
    return (
        <div className="product col-md-3">
            <img src="https://images.tcdn.com.br/img/img_prod/699275/racao_ligeiro_adulto_carne_para_caes_de_todas_as_racas_4751_1_fa43070cf46f3cfec70d8066c0a07c60.jpg" className="img-fluid align-center" />
            {/* <button className="btn btn-primary rounded-circle"> + </button> */}
            <h4>
                <label className="badge bg-primary">R$ 60,00</label>
            </h4>
            <small>
                <b>Ração Ligeiro Adulto Carne para Cães de Todas as Raças</b>
            </small>
            <div className="d-grid mt-2">
                <button className="btn btn-sm btn-primary">
                    <i class="fas fa-shopping-cart me-2"></i>
                    <span>Adicionar</span>
                </button>
            </div>
        </div>
    )
}

export default Product;