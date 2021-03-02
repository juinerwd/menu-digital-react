import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';

//import useProduct from '../../../hook/useProduct';

//import prod from '../../../images/products/hamburguesa.jpg';

import productStyle from './cardProduct.module.scss';

const CardProduct = (props) => {
    const buttonEl = useRef();
    //const productInfo = useProduct();
    //let getIdProduct = [];
    const [num, setNum] = useState(localStorage.getItem( `product${props.item.id}` || 0 ));
    /* const [disable, setDisabled] = useState(true); */

    useEffect(() => {
        if (num === null) {
            localStorage.setItem(`product${props.item.id}`, 0);
        }else{
            localStorage.setItem(`product${props.item.id}`, parseInt(num));
        }
    },[num, props.item.id])

    const mas = () => {
        if (num === null) {
            setNum(1)
        }else {
            setNum(parseInt(num) + 1);
        }
        /* setDisabled(false);  */
    }
    const menos = () => {
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
                        <button ref={buttonEl} className={productStyle.menus} onClick={menos}>-</button>
                        <span>{num == null ? 0 : num}</span>
                        <button className={productStyle.plus} onClick={mas}>+</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardProduct;