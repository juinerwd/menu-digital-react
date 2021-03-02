import React from 'react';
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'; */

import ProductContext from './contexts/ProductContext';
import PublicRoutes from './routes/public.routes';

// API
import {pruducts} from './APIs/products.json';


function App() {
 /*  const [count, setCount] = useState(0); */
  const infoProducto = pruducts;
  return (
    <ProductContext.Provider value={{
      infoProducto,
      idProduct: 0,
      count: 0
    }}>
      <PublicRoutes />
    </ProductContext.Provider>
  );
}
/* 
<Router>
      <ProductContext.Provider value={{
        infoProducto,
        idProduct: 0,
        count: 0
      }}>
        <Switch>
          <Route path="/detail-product/:id">
              <DetailProduct />
              <Footer />
          </Route>
          <Route path="/order">
              <Order />
          </Route>
          <Route path="/home">
              <Header />
              <Home />
              <Footer />
          </Route>
          <Route path="/">
              <Start />
          </Route>
        </Switch>
        
        </ProductContext.Provider>
    </Router>
 */
export default App;
