import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductosState from "../../context/admin/productosState";
import CarritoState from "../../context/carrito/carritoState";
import CarritoHeader from "./screens/carritos/CarritoHeader";
import CarritoScreen from "./screens/CarritoScreen";


const CarritoRouter = () => {
  return (
    <>
    
       <CarritoState> 
       <ProductosState>
      <Switch>
     
      <Route path="/cart" component={CarritoScreen} />
      </Switch>
      </ProductosState>
       </CarritoState> 
    </>
  );
};

export default CarritoRouter;
