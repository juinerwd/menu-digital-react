import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hook/useProduct';

import detailStyle from './detailProduct.module.scss';

const DetailProduct = (props) => {
    const {id} = useParams();
    const data = useProduct();
    const [num, setNum] = useState(localStorage.getItem( `product${id}` || 0 ));
    /* const [dataProduct, setDataProduct] = useState(data); */


    useEffect(() => {
        if (num === null) {
            localStorage.setItem(`product${id}`, 0);
        }else{
            localStorage.setItem(`product${id}`, parseInt(num));
        }
    },[num]);

    const plus = () => {
        if (num == null) {
            setNum(1)
        }else {
            setNum(parseInt(num) + 1);
        }
        /* setDisabled(false);  */
    }
    const less = () => {
        if (num === 0) {
            setNum(num);
            /* setDisabled(true); */
        }
        if (num > 0){
            setNum(num - 1);
        }
    }

    return (
        <>
            {
                data.infoProducto.map( product => (
                    product.id == id && (
                        <main className={detailStyle.main} key={product.id}>
                            <div className={detailStyle.img__product}>
                                <img src={`https://i.ibb.co/Trdf3jr/maxresdefault.jpg`} alt="" />
                            </div>
                            <section className={detailStyle.section__detail__product}>
                                <div className={detailStyle.info}>
                                    <h2>{product.name}</h2>
                                    <p>Pan artesanal, carne de la casa, tocineta, queso americano, cebolla carmelizada, lechuga y tomate.</p>
                                </div>
                                <div className={detailStyle.price__amount}>
                                    <span>$15.000</span>
                                    <div className={detailStyle.amount}>
                                        <button onClick={less}>-</button>
                                        <span>{num}</span>
                                        <button onClick={plus}>+</button>
                                    </div>
                                </div>
                            </section>
                            <div className={detailStyle.personalize}>
                                <div className={detailStyle.personalization}>
                                    <h3>Personaliza</h3>
                                    <p>Como tú quieras</p>
                                </div>
                                <hr />
                                <div className={detailStyle.select}>
                                    <p>Sin tomate</p>
                                    <input type="checkbox" name="tomato" value="tomato" />
                                </div>
                                <hr />
                                <div className={detailStyle.select}>
                                    <p>Sin cebolla</p>
                                    <input type="checkbox" name="tomato" value="tomato" />
                                </div>
                                <hr />
                                <div className={detailStyle.select}>
                                    <p>Sin lechuga</p>
                                    <input type="checkbox" name="tomato" value="tomato" />
                                </div>
                                <hr />
                                <div className={detailStyle.select}>
                                    <p>Sin salsas</p>
                                    <input type="checkbox" name="tomato" value="tomato" />
                                </div>
                                <hr />
                                <div className={detailStyle.gravy}>
                                    <h3>Elige las salsa que deseas </h3>
                                    <p>Máximo 5</p>
                                </div>
                                <hr />
                                <div className={detailStyle.select}>
                                    <p>Salsa de Ajo</p>
                                    <input type="checkbox" name="tomato" value="tomato" />
                                </div>
                                <hr />
                                <div className={detailStyle.select}>
                                    <p>Salsa Roja</p>
                                    <input type="checkbox" name="tomato" value="tomato" />
                                </div>
                                <hr />
                                <div className={detailStyle.select}>
                                    <p>Salsa Rosada</p>
                                    <input type="checkbox" name="tomato" value="tomato" />
                                </div>
                                <hr />
                            </div>
                        </main>
                    )
                ))
            }
        </>
    )
}

export default DetailProduct;