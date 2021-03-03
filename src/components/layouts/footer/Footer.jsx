import React from 'react';

//import useProduct from '../../../hook/useProduct';

import footerStyle from './footer.module.scss';

const Footer = () => {
    /* const [state, setstate] = useState(0); */

    /* useEffect(() => {
        const getData = localStorage.getItem(`product${props.item.id}`);
        if (getData !== null) {
            const getAmountElementLocalStorage = localStorage.length;
            setstate(getAmountElementLocalStorage);
        }
    }, []) */

    return (
        <footer className={footerStyle.figure}>
            <div className={footerStyle.btn__car}>
                <button><i className="fas fa-shopping-cart"></i></button>
                <div className={footerStyle.amount__car}>
                    <span>0</span>
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
