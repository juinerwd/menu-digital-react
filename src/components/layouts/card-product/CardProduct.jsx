import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';

import useProduct from '../../../hook/useProduct';
//import prod from '../../../images/products/hamburguesa.jpg';

import productStyle from './cardProduct.module.scss';

const CardProduct = (props) => {
    const buttonEl = useRef();
    const {infoProducto} = useProduct();
    if (!localStorage.getItem('product')) {
        localStorage.setItem('product','[]');
    }

    const [amountP, setAmountP] = useState(0);
    
    const mas = (e) => {
        addProductLocalStorage(e);
    }

    const addProductLocalStorage = (item) => {
        let getCarrito = JSON.parse(localStorage.getItem('product'));
        for(let i of infoProducto){
            if(i.id === item){
                var registro = i
            }
        }
        if(!registro){
            return
        }
        for (let i of getCarrito){
            if(i.id === item){
                i.count++;
                setAmountP(i.count);
                localStorage.setItem('product',JSON.stringify(getCarrito));
                return;
            }
        }
        registro.count = 1;
        getCarrito.push(registro);
        localStorage.setItem('product',JSON.stringify(getCarrito));
    }
    const lessProductLocalStorage = (item) => {
        let getCarrito = JSON.parse(localStorage.getItem('product'));
        for(let i of infoProducto){
            if(i.id === item){
                var registro = i
            }
        }
        if(!registro){
            return
        }
        for (let i of getCarrito){
            if(i.id === item){
                i.count--;
                setAmountP(i.count);
                localStorage.setItem('product',JSON.stringify(getCarrito));
                return;
            }
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
                        <span>{`$ ${Number.parseFloat(props.item.price).toFixed(3)}`}</span>
                    </div>
                    <div className={productStyle.amount} id="amount">
                        <button className={productStyle.menus} onClick={() => lessProductLocalStorage(props.item.id)}>-</button>
                        <span>{props.item.count}</span>
                        <button ref={buttonEl} className={productStyle.plus} value={props.item.id} onClick={() => mas(props.item.id)}>+</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardProduct;