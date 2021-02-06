import React, { useContext, useEffect, useState } from 'react'
import ProductosContext from '../../../../context/admin/productosContext';
import CarritoCartItem from './CarritoCartItem';

const CarritoCart = ({objProducto}) => {
    const {carrito,setCarrito}=useContext(ProductosContext);
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = carrito.reduce((prev, item) => {
                return prev + (item.prod_pre * item.cant)
            },0)

            setTotal(total)
            console.log(total);
        }

        getTotal()

    },[carrito])

    return (
        <>
           
            <h4 className="d-flex justify-content-between align-items-center mb-3">
           <span className="text-muted">Carrito</span>
           <span className="badge badge-secondary badge-pill">3</span>
           </h4>
            
            <div className="card" >
                    {
                      carrito.length===0?
                      <p className="text-muted">
                          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                          Carrito vacio
                      </p> :
                      carrito.map((objProducto)=>{
                        return (<CarritoCartItem objProducto={objProducto}
                        setCarrito={setCarrito} key={objProducto.prod_id}/>)
                    })
                  }
               
               </div>
               <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$</strong>
               </li>
          
            </>
    
    
    )
}

export default CarritoCart
