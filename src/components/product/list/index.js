import './style.css';

const Product = () => {
    return (
        <div className="col-12 product-list">
            <div className="row">
                <div className="col-3">
                    <img src={"https://www.petlove.com.br/images/products/224952/product/Ra%C3%A7%C3%A3o_Seca_Pedigree_Carne_e_Vegetais_para_C%C3%A3es_Adultos_Ra%C3%A7as_M%C3%A9dias_e_Grandes_3104862_15G.jpg?1627721373"} className="img-fluid" />
                </div>
                <div className="col-7">
                    <h6><label className="badge bg-dark">R$30,00</label></h6>
                    <small>
                        <b>Ração Seca Pedigree Carne e Vegetais para Cães Adultos Raças Médias e Grandes</b>
                    </small>
                </div>
                <div className="col-2" align="right">
                    <button className="btn btn-secondary rounded-circle">-</button>
                </div>
            </div>
        </div>
    )
}

export default Product;