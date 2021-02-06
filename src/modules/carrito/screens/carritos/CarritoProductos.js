import React, { useContext } from 'react'
import ProductosContext from '../../../../context/admin/productosContext';
import CarritoProducto from './CarritoProducto';


const CarritoProductos = () => {

    const {productos,setCarrito}=useContext(ProductosContext);

    
    return (
        <>
      
        
      <main className ="container-fluid mt-1 " >
     

        <div className="row">
            {
              productos.map((objProducto) => {
                return (<CarritoProducto key={objProducto.prod_id} 
                    objProducto={objProducto} 
                    setCarrito={setCarrito}/>)
            })
           }
           
              </div>
              
            </main>
              
              </>
    )
}

export default CarritoProductos
