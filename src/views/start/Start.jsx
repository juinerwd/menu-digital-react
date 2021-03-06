import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

import startStyle from './start.module.scss';

const Start = () => {
    return (
        <div className={startStyle.container__start}>
            <div className={startStyle.figure}>
                <div className={startStyle.social__media}>
                    <Link className={startStyle.socialred} to="/"><i className="fab fa-facebook-square"></i></Link>
                    <Link className={startStyle.socialred} to="/"><i className="fab fa-whatsapp-square"></i></Link>
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