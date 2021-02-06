import React from "react";
import CarritoContext from "./carritoContext";


const CarritoState = ({ children }) => {
  


  

  return (
    <CarritoContext.Provider
      value={{
        
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;
