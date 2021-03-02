import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

import startStyle from './start.module.scss';

const Start = () => {
    return (
        <div className={startStyle.container__start}>
            <div className={startStyle.figure}>
                <div className={startStyle.social__media}>
                    <a href="">F</a>
                    <a href="">W</a>
                    <a href="">I</a>
                </div>
                <img className={startStyle.logo} src={logo} alt="Logo" />
                {/* <div className={startStyle.container__logo}>
                    
                </div> */}
            </div>
            <div className={startStyle.welcome}>
                <h1>Bienvenido</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className={startStyle.redirect__menu}>
                {/* <a className={startStyle.btn} href="/home">Ver menú <i className="fas fa-chevron-right"></i></a> */}
                <Link className={startStyle.btn} to="/home">Ver menú <i className="fas fa-chevron-right"></i></Link>
            </div>
        </div>
    )
}

export default Start;