import React, { useContext, useEffect, useState } from "react";
import ProductosContext from "../../../context/admin/productosContext";
import CarritoCart from "./carritos/CarritoCart";
import CarritoFiltro from "./carritos/CarritoFiltro";
import CarritoHeader from "./carritos/CarritoHeader";
import CarritoProductos from "./carritos/CarritoProductos";


const CarritoScreen = () => {
 
  const {carrito=[],termino,setCarrito,setTermino}=useContext(ProductosContext);
 
  return (
  <>
  <CarritoHeader/>
  <CarritoFiltro setTermino={setTermino}/>
        {
          termino.trim().length >2 ?
                <div className="row">
                <div className="col">
                    <p className="text-muted text-center">Resultados para la búsqueda :{termino}</p>
                </div>
            </div>: null
            }
      <main className="container-fluid mt-5">
  
        <div className="row">
          <div className="col-8">
           
          <CarritoProductos termino={termino}  setCarrito={setCarrito}/>
           
          </div>
          <div className="col-md-3 ">
              <CarritoCart carrito={carrito} setCarrito={setCarrito}/>
              </div>
          
          </div>
      </main>
     
   </>
  );
};

export default CarritoScreen;
