import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

import startStyle from './start.module.scss';

const Start = () => {
    return (
        <div className={startStyle.container__start}>
            <div className={startStyle.figure}>
                <div className={startStyle.social__media}>
                    <a className={startStyle.socialred} href="https://www.facebook.com/productospicatoon" target='__blank'><i className="fab fa-facebook-square"></i></a>
                    <a className={startStyle.socialred} href="https://wa.me/573142098439"><i className="fab fa-whatsapp-square"></i></a>
                </div>
                <img className={startStyle.logo} src={logo} alt="Logo" />
            </div>
            <div className={startStyle.welcome}>
                <h1>Bienvenido</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className={startStyle.redirect__menu}>
                <Link className={startStyle.btn} to="/home">Ver menú <i className="fas fa-chevron-right"></i></Link>
            </div>
        </div>
    )
}

export default Start;