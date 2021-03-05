import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styleOrder from './order.module.scss';

import useProduct from '../../hook/useProduct';

const Order = () => {
    let costoEnvio = 2.000;
    var sendDataName = [];
    const {infoProducto} = useProduct()
    let getCarrito = JSON.parse(localStorage.getItem('product'));
    const [changeAmount, setChangeAmount] = useState({});
    
    const getTotal = () => {
        let total = 0;
        for(let i of getCarrito){
            total += Number.parseFloat(i.count).toFixed(3) * Number.parseFloat(i.price).toFixed(3);
        }
        return total;
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
                setChangeAmount({id:i.id, amount: i.count});
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
                if (i.count > 0) {
                    i.count--;
                    setChangeAmount({id:i.id, amount: i.count});
                    localStorage.setItem('product',JSON.stringify(getCarrito));
                    return;
                }
                if(i.count <= 0) {
                    for(let i in getCarrito){
                        if(getCarrito[i].id === item){
                            getCarrito.splice(i, 1);
                        }
                    }
                    localStorage.setItem('product', JSON.stringify(getCarrito));
                    return;
                }
                
            }
        }
    }
    const deleteProductLocalStorage = (item) => {
        let getCarrito = JSON.parse(localStorage.getItem('product'));
        for(let i in getCarrito){
            if(getCarrito[i].id === item){
                getCarrito.splice(i, 1);
            }
        }
        localStorage.setItem('product', JSON.stringify(getCarrito));
        /* console.log(getCarrito) */

    }
    
    const subtotal = Number.parseFloat(getTotal()).toFixed(3);
    const preciTotal = getTotal() + costoEnvio;
    //const dataWhatsapp = sendProductWhatsupp();
    console.log();
    getCarrito.map(i => {
        sendDataName.push(`*${i.name}* *Cantidad*: ${i.count} *Precio*: ${i.price.toFixed(3)}`);
    })
    /* console.log(``);
    console.log(sendDataAmount.toString()); */
    return (
        <>
            <header className={styleOrder.header__order}>
                <div className={styleOrder.header__btn}>
                    <div className={styleOrder.container__goback}>
                        <Link to="/home" className={styleOrder.goback__order}><i className="fas fa-chevron-left"></i></Link>
                    </div>
                    <div className={`${styleOrder.text_order}`}>
                        <h5>Mi pedido</h5>
                    </div>
                </div>
            </header>
            <main className={styleOrder.main__order}>
            {
                getCarrito.map((item) => (
                    //<CardProduct key={item.id} item={item} />
                    <div className={styleOrder.product} key={item.id}>
                        <div className={styleOrder.info__img}>
                            <img className={styleOrder.img__product} src={`https://i.ibb.co/Trdf3jr/maxresdefault.jpg`} alt="" />
                        </div>
                        <div className={styleOrder.data__pruduct}>
                            <div className={styleOrder.data}>
                                <div className={styleOrder.name__delete}>
                                    <Link to={`/detail-product/${item.id}`}>
                                        <h4>{item.name}</h4>
                                    </Link>
                                    <button className={styleOrder.btn__delete} onClick={() => deleteProductLocalStorage(item.id)}><i className="fas fa-trash-alt"></i></button>
                                </div>
                                <p>Mas vendido</p>
                                <span>{`$ ${Number.parseFloat(item.price).toFixed(3)}`}</span>
                            </div>
                            <div className={styleOrder.amount} id="amount">
                                <button className={styleOrder.menus} onClick={() => lessProductLocalStorage(item.id)}>-</button>
                                <span>{changeAmount.id === item.id ? changeAmount.amount : item.count}</span>
                                <button className={styleOrder.plus} value={item.id} onClick={() => addProductLocalStorage(item.id)}>+</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </main>
            <footer className={styleOrder.footer_Order}>
                <div className={styleOrder.container}>
                    <div>
                        <div className={styleOrder.subtotal}>
                            <h3>Sub total</h3>
                            <span>{`$ ${subtotal === 0 ? 0 : subtotal}`}</span>
                        </div>
                        <div className={styleOrder.cost__shipping}>
                            <h3>Costo envío</h3>
                            <span>$ {Number.parseFloat(getTotal()).toFixed(3) === 0 ? 0 : costoEnvio.toFixed(3)}</span>
                        </div>
                        <div className={styleOrder.total}>
                            <h3>Total</h3>
                            <span>$ {preciTotal.toFixed(3) === 0 ? 0 : preciTotal.toFixed(3)}</span>
                        </div>
                        <div className={styleOrder.send_order}>
                            <a href={`https://wa.me/573225271447?text=${sendDataName.toString()} Total: ${getTotal().toFixed(3)}`}>
                                <button>Enviar pedido</button>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Order;