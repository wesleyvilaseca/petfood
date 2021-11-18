import './style.css';
import { useState, useEffect } from 'react';
import Dock from 'react-dock';
import Product from '../product/list';

const Sidebar = () => {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        window.addEventListener('openCart', () => {
            if (!opened) {
                setOpened(true);
            } else {
                setOpened(false)
            }
        })
    }, [opened])



    return (
        <div className={opened ? 'nav-cart active' : 'nav-cart'}>

            <div className="container-fluid h-100 pt-4 sidebar">
                <div className="nav-cart-toogle" onClick={() => (setOpened(false))}>
                    <i class="fas fa-times"></i>
                </div>
                <h5 align="center">Minha Sacola (5)</h5>
                <div className="row products">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((p) => (
                        <Product />
                    ))}
                </div>

                <div className="row align-items-end footer">
                    <div className="col-12 d-flex justify-content-between align-center">
                        <b className="d-inline-block">Total</b>
                        <h3>R$ 10,00</h3>
                    </div>
                    <button className="btn btn-lg btn-primary rounded-0 h-50 align-items-center">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
}


export default Sidebar;