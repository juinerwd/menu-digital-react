import React, {useState, useEffect} from 'react';

//import useProduct from '../../../hook/useProduct';

import footerStyle from './footer.module.scss';

const Footer = () => {
    /* const dataP = useProduct();
    /* let dataId = 0; 
    const [num, setNum] = useState(0);

    useEffect(() => {
        getIdProduct();
    }, [])

    const getIdProduct = () => {
        /* dataP.infoProducto.map(id => {
            dataId = id.id;
        }) 

        console.log(localStorage.getItem('product1'))
    } */

    return (
        <footer className={footerStyle.figure}>
            <div className={footerStyle.btn__car}>
                <button><i className="fas fa-shopping-cart"></i></button>
            </div>
            <div className={footerStyle.footer__btn}>
                <a href="/home"><i className="fas fa-home"></i></a>
                <button><i className="fas fa-cog"></i></button>
            </div>
        </footer>
    )
}

export default Footer;
