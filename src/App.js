import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import NotFound from './componenets/NotFound';
import Products from './componenets/product/Product';
import AllProduct from './componenets/product/AllProduct';
import Productdetail from './componenets/product/productdetail';


function App() {
  return (
    <Router>
    <div className='app'>
      <Switch>
      <Route path="/NotFound" component={NotFound} />  
      <Route path="/productdetail/:id" exact component={Productdetail} />  
  
      <Route path="/AllProduct" exact component={AllProduct} />  
      <Route path="/" exact component={Products} />  
      <Redirect to="/not-found" />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
