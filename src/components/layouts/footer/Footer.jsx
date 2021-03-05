import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

//import useProduct from '../../../hook/useProduct';

import footerStyle from './footer.module.scss';

const Footer = (props) => {
    let getCarrito = JSON.parse(localStorage.getItem('product'));
    const [state, setstate] = useState(0);
    useEffect(() => {
        setstate(getCarrito.length)
    }, [state])
    
    
    console.log(state);
    return (
        <footer className={footerStyle.figure}>
            <div className={footerStyle.btn__car}>
            <Link to="/order"><button><i className="fas fa-shopping-cart"></i></button></Link>
                <div className={`${footerStyle.amount__car} ${props.totalLS === 0 && footerStyle.disabled }`}>
                    <span>{props.totalLS}</span>
                </div>
            </div>
            <div className={footerStyle.footer__btn}>
                <a href="/home"><i className="fas fa-home"></i></a>
                <button><i className="fas fa-cog"></i></button>
            </div>
        </footer>
    )
}

export default Footer;
