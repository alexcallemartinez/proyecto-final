import React, { useReducer } from "react";
import CarritoContext from "./carritoContext";
import CarritoReducer from "./carritoReducer";

const CarritoState = ({ children }) => {
  const [state, dispatch] = useReducer(CarritoReducer, {
    categoria_global: null,
    producto_global: null,
  });

  const seleccionarCategoriaGlobal = (objCategoria) => {
    // intentar seleccionar o settear una categoria global
    dispatch({
      data: objCategoria,
      type: "SELECCIONAR_CATEGORIA",
    });
  };

  const seleccionarProductoGlobal = (objProducto) => {
    dispatch({
      data: objProducto,
      type: "SELECCIONA_PRODUCTO",
    });
  };

  return (
    <CarritoContext.Provider
      value={{
        categoria_global: state.categoria_global,
        producto_global: state.producto_global,
        seleccionarCategoriaGlobal: seleccionarCategoriaGlobal,
        seleccionarProductoGlobal: seleccionarProductoGlobal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;
