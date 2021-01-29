import React from "react";
import { Route, Switch } from "react-router-dom";
import CarritoState from "../../context/carrito/carritoState";
import CarritoScreen from "./screens/CarritoScreen";

const CarritoRouter = () => {
  return (
    <>
      {/* <CarritoState> */}
      <Switch>
      <Route path="/carrito/venta/:id?" component={CarritoScreen} />
      </Switch>
      {/* </CarritoState> */}
    </>
  );
};

export default CarritoRouter;
