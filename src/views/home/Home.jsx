import React, { useState } from 'react';

import useProduct from '../../hook/useProduct';
// Estilos
import homeStyle from './home.module.scss';
// Componentes
import Header from '../../components/layouts/header/Header';
import CardProduct from '../../components/layouts/card-product/CardProduct';
import Footer from '../../components/layouts/footer/Footer';


const Home = () => {
  const {infoProducto, search} = useProduct();
  if (!localStorage.getItem('product')) {
    localStorage.setItem('product','[]');
  }
  const dataCategory = infoProducto;
  const [changeCategories, setChangeCategories] = useState(1);
  let getCarritototal = JSON.parse(localStorage.getItem('product'));
  const [totalLS] = useState(getCarritototal.length);

  const categories = [
    {"id": 1, "category": 'Recomendado'},
    {"id": 2, "category" : 'Hamburguesas'},
    {"id": 3, "category" : 'Salchipapa'},
    {"id": 4, "category" : 'Perros'},
    {"id": 5, "category" : 'Picada'}
  ]

  const changeCategory = (e) => {
    setChangeCategories(parseInt(e.target.value));
  }

  return (
    <>
    <Header />
    <main>
      <section className={homeStyle.categories} id="categories">
          <h2>Categorías</h2>
          <div className={homeStyle.category}>
              {
                categories.map(c => (
                  <button className={`btnCategory ${c.id === changeCategories && homeStyle.active}`} key={c.id} value={c.id} onClick={changeCategory}>{c.category}</button>
                ))
              }
          </div>
      </section>
      <section className={homeStyle.products} id="products">
          <h2>Recomendados</h2>
          {
            dataCategory.map(item => (
              (item.recommended === changeCategories || item.category === changeCategories || item.name.toLowerCase() === search.value) && <CardProduct key={item.id} item={item} category={changeCategories} />
            ))
          }
      </section>
    </main>
    <Footer totalLS={totalLS} />
    </>
  );
}
export default Home;