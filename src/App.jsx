import "./styles.css";
import React from "react";
import Home from "./Home";

import AddProduct from "./AddProduct";
import Product from "./Product";

import EditProduct from "./EditProduct";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
      
          <Route exact path="/AddProduct" component={AddProduct} />
          <Route exact path="/EditProduct/:id" component={EditProduct} />
          <Route exact path="/product/:id" component={Product} />
        
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
