import React, {useState} from 'react';

import ProductContext from './contexts/ProductContext';
import PublicRoutes from './routes/public.routes';

// API
import {pruducts} from './APIs/products.json';

function App() {

  /* const dataProduct = []; */
  const [dataPLS, setDataPLS] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [getIdProduct, setGetIdProduct] = useState(0);
  const [getInfoProductLS, setGetInfoProductLS] = useState(0);
  const [objectProductLS, setObjectProductLS] = useState([]);
  const [search, setSearch] = useState({value: ''});
  const infoProducto = pruducts;
  
  return (
    <ProductContext.Provider value={{
      infoProducto,
      dataProducts,
      setDataProducts,
      getIdProduct,
      setGetIdProduct,
      products,
      setProducts,
      dataPLS,
      setDataPLS,
      getInfoProductLS,
      setGetInfoProductLS,
      objectProductLS,
      setObjectProductLS,
      search,
      setSearch
    }}>
      <PublicRoutes />
    </ProductContext.Provider>
  );
}

export default App;
