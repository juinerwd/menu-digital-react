import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';

//import prod from '../../../images/products/hamburguesa.jpg';

import productStyle from './cardProduct.module.scss';

const CardProduct = (props) => {
    const buttonEl = useRef();
    /* const productInfo = useProduct(); */
    const [amountProduct, setAmountProduct] = useState(0);
    /* const [getId, setGetId] = useState(0);
    const [num, setNum] = useState(); */

    /* const [disable, setDisabled] = useState(true);  */
    /* console.log(num); */
    useEffect(() => {
        const getData = localStorage.getItem(`product${props.item.id}`);
        if (getData !== null) {
            const dataStorage = JSON.parse(getData)
            if (dataStorage.count === 0 || amountProduct === 0) {
                if (amountProduct === 0) {
                    localStorage.removeItem(`product${props.item.id}`);
                }
            }
            if (dataStorage.count !== null) {
                const getAmountElementLocalStorage = localStorage.length;
                console.log(getAmountElementLocalStorage);
            }
        }
    },[amountProduct, props.item.id]);

    const mas = (e) => {
        setAmountProduct(amountProduct + 1);
        addProductLocalStorage();
    }
    const menos = () => {
        if (amountProduct === 0) {
            setAmountProduct(amountProduct);
            removeProductLocalStorage();
        }else {
            setAmountProduct(amountProduct - 1);
            changeAmountProductLocalStorage();
            if (amountProduct === 0) {
                removeProductLocalStorage();
            }
        }
    }

    const addProductLocalStorage = () => {
        localStorage.setItem(`product${props.item.id}`,  JSON.stringify({id:props.item.id, count: amountProduct + 1}));
    }
    const changeAmountProductLocalStorage = () => {
        localStorage.setItem(`product${props.item.id}`, JSON.stringify({id:props.item.id, count: amountProduct - 1}));
    }
    const removeProductLocalStorage = () => {
        if (amountProduct === 0) {
            localStorage.removeItem(`product${props.item.id}`);
        }
    }
    return (
        <>
            <div className={productStyle.product}>
                <div className={productStyle.info__img}>
                    <img className={productStyle.img__product} src={`https://i.ibb.co/Trdf3jr/maxresdefault.jpg`} alt="" />
                </div>
                <div className={productStyle.data__pruduct}>
                    <div className={productStyle.data}>
                        <Link to={`/detail-product/${props.item.id}`}>
                            <h4>{props.item.name}</h4>
                        </Link>
                        <p>Mas vendido</p>
                        <span>{`$ ${props.item.price}`}</span>
                    </div>
                    <div className={productStyle.amount} id="amount">
                        <button className={productStyle.menus} onClick={menos}>-</button>
                        <span>{amountProduct}</span>
                        <button ref={buttonEl} className={productStyle.plus} value={props.item.id} onClick={mas}>+</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardProduct;


/* 
const [num, setNum] = useState(localStorage.getItem( `product${props.item.id}` || 0 ));
    /* const [disable, setDisabled] = useState(true); 
    console.log(num);
    useEffect(() => {
        if (num === null) {
            localStorage.setItem(`product${props.item.id}`, 0);
        }else{
            localStorage.setItem(`product${props.item.id}`, parseInt(num));
        }
    },[num, props.item.id])

 */
/* let esta = productInfo.dataProducts.find(ojt => ojt.idProduct === props.item.id);

        if (esta) {
            productInfo.setDataProducts([
                {
                    idProduct: props.item.id,
                    count: amountProduct + 1
                }
            ]);
        }else {
            productInfo.setDataProducts([
                ...productInfo.dataProducts,
                {
                    idProduct: props.item.id,
                    count: amountProduct
                }
            ]);
        } */

        /* console.log(productInfo.dataProducts); */