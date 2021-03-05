import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hook/useProduct';

import detailStyle from './detailProduct.module.scss';

import Footer from '../../components/layouts/footer/Footer';

const DetailProduct = (props) => {
    const {id} = useParams();
    const data = useProduct();
    /* let dataLocalStorage = localStorage.getItem(`product${id}`);
    let dataLS = JSON.parse((dataLocalStorage === null ? 0 : dataLocalStorage));
    let dataLs = (dataLS === 0 ? 0 : dataLS.count); */

    return (
        <>
            {
                data.infoProducto.map( product => (
                    product.id === id && (
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
            <Footer />
        </>
    )
}

export default DetailProduct;


/* 




*/