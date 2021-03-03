import React, { useState } from 'react';

import useProduct from '../../hook/useProduct';
// Estilos
import homeStyle from './home.module.scss';
// Componentes
import Header from '../../components/layouts/header/Header';
import CardProduct from '../../components/layouts/card-product/CardProduct';
import Footer from '../../components/layouts/footer/Footer';


const Home = () => {
  const data = useProduct();
  const [dataCategory, setDataCategory] = useState(data.infoProducto);
  const [changeCategories, setChangeCategories] = useState(1);

  const categories = [
    {"id": 1, "category": 'Recomendado'},
    {"id": 2, "category" : 'Hamburguesas'},
    {"id": 3, "category" : 'Salchipapa'},
    {"id": 4, "category" : 'Perros'}
  ]

  const changeCategory = (e) => {
    const getcategory = e.target.value.toLowerCase();
     /*  e.preventDefault(); */
     setChangeCategories(getcategory);
  }
  //console.log(changeCategories);
  //${homeStyle.active}
  return (
    <>
    <Header />
    <main>
      <section className={homeStyle.categories} id="categories">
          <h2>Categorías</h2>
          <div className={homeStyle.category}>
              {
                categories.map(c => (
                  <button className={`btnCategory`} key={c.id} value={c.id} onClick={changeCategory}>{c.category}</button>
                ))
              }
              {/* <button className="btnCategory">Todo</button>
              <button className="btnCategory">Hamburguesas</button>
              <button className="btnCategory">Salchipapa</button>
              <button className="btnCategory">Perros</button> */}
          </div>
      </section>
      <section className={homeStyle.products} id="products">
          <h2>Recomendados</h2>
          {
            dataCategory.map(item => (
              (item.recommended === changeCategories || item.category === changeCategories) && <CardProduct key={item.id} item={item} />
            ))
          }
      </section>
    </main>
    <Footer />
    </>
  );
}
export default Home;