import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hook/useProduct';

import detailStyle from './detailProduct.module.scss';

import Footer from '../../components/layouts/footer/Footer';

const DetailProduct = (props) => {
    const {id} = useParams();
    const data = useProduct();
    let dataLocalStorage = localStorage.getItem(`product${id}`);
    let dataLS = JSON.parse((dataLocalStorage === null ? 0 : dataLocalStorage));
    let dataLs = (dataLS === 0 ? 0 : dataLS.count);
    const [num, setNum] = useState(dataLs);
    /* const [dataProduct, setDataProduct] = useState(data); */


    useEffect(() => {
        const getData = localStorage.getItem(`product${id}`);
        if (getData !== null) {
            const dataStorage = JSON.parse(getData)
            if (dataStorage.count === 0 || num === 0) {
                if (num === 0) {
                    localStorage.removeItem(`product${id}`);
                }
            }
            if (dataStorage.count !== null) {
                const getAmountElementLocalStorage = localStorage.length;
                //console.log(getAmountElementLocalStorage);
                data.setGetIdProduct(getAmountElementLocalStorage);
            }
        }
    },[num, id]);

    const plus = () => {
        setNum(num + 1);
        addProductLocalStorage();
    }
    const less = () => {
        if (num === 0) {
            setNum(num);
            removeProductLocalStorage();
        }else {
            setNum(num - 1);
            changeAmountProductLocalStorage();
            if (num === 0) {
                removeProductLocalStorage();
            }
        }
    }

    const addProductLocalStorage = () => {
        localStorage.setItem(`product${id}`,  JSON.stringify({id:id, count: num + 1}));
    }
    const changeAmountProductLocalStorage = () => {
        localStorage.setItem(`product${id}`, JSON.stringify({id:id, count: num - 1}));
    }
    const removeProductLocalStorage = () => {
        if (num === 0) {
            localStorage.removeItem(`product${id}`);
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
            <Footer />
        </>
    )
}

export default DetailProduct;


/* 




*/