import React from 'react';

const DetailProduct = () => {
    return (
        <>
            
            </header>
            <main>
                <div className="img-product">
                    <img src="" alt="" />
                </div>
                <section className="section-detail-product">
                    <div className="info">
                        <h2>Hamburguesa de la casa</h2>
                        <p>Pan artesanal, carne de la casa, tocineta, queso americano, cebolla carmelizada, lechuga y tomate.</p>
                    </div>
                    <div className="price-amount">
                        <span>$15.000</span>
                        <div className="amount">
                            <button>-</button>
                            <span>2</span>
                            <button>+</button>
                        </div>
                    </div>
                </section>
                <div className="personalize">
                    <div className="personalization">
                        <h3>Personaliza</h3>
                        <p>Como tú quieras</p>
                    </div>
                    <hr />
                    <div className="select">
                        <p>Sin tomate</p>
                        <input type="checkbox" name="tomato" value="tomato" />
                    </div>
                    <hr />
                    <div className="select">
                        <p>Sin cebolla</p>
                        <input type="checkbox" name="tomato" value="tomato" />
                    </div>
                    <hr />
                    <div className="select">
                        <p>Sin lechuga</p>
                        <input type="checkbox" name="tomato" value="tomato" />
                    </div>
                    <hr />
                    <div className="select">
                        <p>Sin salsas</p>
                        <input type="checkbox" name="tomato" value="tomato" />
                    </div>
                    <hr />
                    <div className="gravy">
                        <h3>Elige las salsa que deseas </h3>
                        <p>Máximo 5</p>
                    </div>
                    <hr />
                    <div className="select">
                        <p>Salsa de Ajo</p>
                        <input type="checkbox" name="tomato" value="tomato" />
                    </div>
                    <hr />
                    <div className="select">
                        <p>Salsa Roja</p>
                        <input type="checkbox" name="tomato" value="tomato" />
                    </div>
                    <hr />
                    <div className="select">
                        <p>Salsa Rosada</p>
                        <input type="checkbox" name="tomato" value="tomato" />
                    </div>
                    <hr />
                </div>
            </main>
        </>
    )
}

export default DetailProduct;
