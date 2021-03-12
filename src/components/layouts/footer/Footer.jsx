import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.png';

import footerStyle from './footer.module.scss';
import Swal from 'sweetalert2';

const Footer = (props) => {
    //let getCarrito = JSON.parse(localStorage.getItem('product'));
    const [state] = useState(props.totalLS);

    const handleInfo = () => {
        Swal.fire({
            title: 'Contáctanos',
            html: `<strong>Dirección:</strong> <br> <span>Carrera 6 # 1- 51 esquina Calle Bavaria Buenaventura, Colombia</span> <br><br> <strong>Teléfono:</strong> <br> <span>+57 3142098439</span>`,
            imageUrl: `${logo}`,
            imageWidth: 300,
            imageHeight: 100,
            imageAlt: 'Custom image',
        })
    }

    return (
        <footer className={footerStyle.figure}>
            <div className={footerStyle.btn__car}>
                <Link to="/order">
                    <button><i className="fas fa-shopping-cart"></i></button>
                </Link>
                <div className={`${footerStyle.amount__car} ${state === 0 && footerStyle.disabled }`}>
                    <span>{state}</span>
                </div>
            </div>
            <div className={footerStyle.footer__btn}>
                <a href="/home"><i className="fas fa-home"></i></a>
                <button onClick={handleInfo}><i className="fas fa-info"></i></button>
            </div>
        </footer>
    )
}

export default Footer;
