import React, { useContext } from 'react'
import ProductosContext from '../../../../context/admin/productosContext';

const CarritoCartItem = ({objProducto}) => {
    const {setCarrito}=useContext(ProductosContext);

    const eliminarItem=()=>{
        setCarrito((prevState)=>{
      
          let carritoNuevo=prevState.filter((producto)=>{
              if(producto.prod_id !=objProducto.prod_id){
                  return producto;
              }
          })
          return carritoNuevo;
       });
      }
    return (
        <>
       
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between ">
          <div>
            <img src={objProducto.prod_img} alt="" width="30"/>
            <h6 class="my-0">{objProducto.prod_nom}</h6>
            
            </div>
            <small class="text-muted">({objProducto.cant})</small>
            <span class="text-muted">s/{objProducto.prod_pre*objProducto.cant}</span>
            <div>
            <button className="btn btn-sm btn-outline-danger btn-eliminar"
             onClick={eliminarItem}>
            <i class="fa fa-trash"></i>
            </button>
            </div>
        </li>
        
       
      </ul>
      
      
      </>
    )
}

export default CarritoCartItem
