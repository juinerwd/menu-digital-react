import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import style from './header.module.scss';
import logoImg from '../../../images/logo.png';

const Header = () => {
    const [openClose, setOpenClose] = useState(false);
    const [isActive, setActive] = useState(false);

    const inputEl = useRef(null);

    const getHour = new Date();
    useEffect(() => {
        hour();
    },[])
    const hour = () => {
        let h = getHour.getHours();
        if (h === 16 || h === 17 || h === 18 || h === 19 || h === 20 ||h === 21 || h === 22) {
            setOpenClose(true);
        }else {
            setOpenClose(false);
        }
    }
    const onButtonClick = () => {
        setActive(!isActive);
        inputEl.current.focus();
    }
    return (
        <header>
            <div className={style.header__btn}>
                <div className={style.container__goback}>
                    <Link className={style.goback} to="/"><i className="fas fa-chevron-left"></i></Link>
                </div>
                <div className={`${style.search} ${isActive && style.active}`}>
                    <input type="text" ref={inputEl} className={style.input} placeholder="search..." />
                    <button className={style.btn} onClick={onButtonClick}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div className={style.welcome}>
                <h1>Bienvenidos</h1> 
            </div>
            <div className={style.header__info}>
                <div className={style.info__business}>
                    <p>Horario: Lunes - Miércoles</p>
                    <span className={style.hour}>4PM - 11PM</span>
                </div>
                <div className={style.logo}>
                    <img src={logoImg} alt="Logo" />
                    <span className={`${style.open__close} ${openClose ? style.open : style.close}`}>{openClose ? 'Abierto' : 'Cerrado'}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;