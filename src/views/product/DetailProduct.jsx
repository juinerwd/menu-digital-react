import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import useProduct from '../../hook/useProduct';

import detailStyle from './detailProduct.module.scss';

const DetailProduct = (props) => {
    const {id} = useParams();
    const {infoProducto} = useProduct();
    let getCarritototal = JSON.parse(localStorage.getItem('product'));
    const [totalLS] = useState(getCarritototal.length);

    return (
        <>
            <header className={detailStyle.header__detail}>
                <div className={detailStyle.header__btn}>
                    <div className={detailStyle.container__goback}>
                        <Link className={detailStyle.goback} to="/home"><i className="fas fa-chevron-left"></i></Link>
                    </div>
                    <div className={`${detailStyle.text__detail}`}>
                        <h5>Detalle del producto</h5>
                    </div>
                </div>
            </header>
            {
                infoProducto.map( product => (
                    product.id === parseInt(id) && (
                        <main className={detailStyle.main} key={product.id}>
                            <div className={detailStyle.img__product}>
                                <img src={`https://i.ibb.co/Trdf3jr/maxresdefault.jpg`} alt="" />
                            </div>
                            <section className={detailStyle.section__detail__product}>
                                <div className={detailStyle.info}>
                                    <h2>{product.name}</h2>
                                    <p>Pan artesanal, carne de la casa, tocineta, queso americano, cebolla carmelizada, lechuga y tomate.</p>
                                </div>
                                {/* <div className={detailStyle.price__amount}>
                                    <span>$15.000</span>
                                    <div className={detailStyle.amount}>
                                        <button onClick={less}>-</button>
                                        <span>{num}</span>
                                        <button onClick={plus}>+</button>
                                    </div>
                                </div> */}
                            </section>
                        </main>
                    )
                ))
            }
            <footer className={detailStyle.footer__detail}>
                <div className={detailStyle.btn__car}>
                <Link to="/order"><button><i className="fas fa-shopping-cart"></i></button></Link>
                    <div className={`${detailStyle.amount__car} ${totalLS === 0 && detailStyle.disabled }`}>
                        <span>{totalLS}</span>
                    </div>
                </div>
                <div className={detailStyle.footer__btn}>
                    <a href="/home"><i className="fas fa-home"></i></a>
                    <button><i className="fas fa-cog"></i></button>
                </div>
            </footer>
        </>
    )
}

export default DetailProduct;


/* 




*/