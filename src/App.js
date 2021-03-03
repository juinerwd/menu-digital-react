import React, {useState} from 'react';

import ProductContext from './contexts/ProductContext';
import PublicRoutes from './routes/public.routes';

// API
import {pruducts} from './APIs/products.json';

function App() {

  /* const dataProduct = []; */
  const [dataProducts, setDataProducts] = useState([]);
  const [amountProduct, setAmountProduct] = useState(0);
  const infoProducto = pruducts;
  /* const dataProducts = [
    {idProduct: 0, count: 0}
  ]; */
  return (
    <ProductContext.Provider value={{
      infoProducto,
      dataProducts,
      setDataProducts,
      amountProduct,
      setAmountProduct
    }}>
      <PublicRoutes />
    </ProductContext.Provider>
  );
}

export default App;
