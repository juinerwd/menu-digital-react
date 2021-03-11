import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import style from './header.module.scss';
import logoImg from '../../../images/logo.png';

import useProduct from '../../../hook/useProduct';

const Header = () => {
    const {search, setSearch} = useProduct();
    const [openClose, setOpenClose] = useState(false);
    const [isActive, setActive] = useState(false);
    const getHour = new Date();
    const getDay = new Date();
    const inputEl = useRef(null);

    useEffect(() => {
        hour();
    })

    const hour = () => {
        let h = getHour.getHours();
        if (getDay.getDay() === 1 || getDay.getDay() === 2 || getDay.getDay() === 3) {
            if (h >= 16 && h <= 22) {
                setOpenClose(true);
            }else {
                setOpenClose(false);
            }
        }else {
            setOpenClose(false);
        }
    }
    const onButtonClick = () => {
        setActive(!isActive);
        inputEl.current.focus();
    }

    const handleChange = (e) => {
        setSearch({value: e.target.value});
    }
    return (
        <header className={style.header__component}>
            <div className={style.header__btn}>
                <div className={style.container__goback}>
                    <Link className={style.goback} to="/"><i className="fas fa-chevron-left"></i></Link>
                </div>
                <div className={`${style.search} ${isActive && style.active}`}>
                    <input type="text" ref={inputEl} className={style.input} placeholder="search..." value={search.value} onChange={(e) => handleChange(e)} />
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