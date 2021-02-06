import React, { useContext } from 'react'
import ProductosContext from '../../../../context/admin/productosContext';

const CarritoProducto = ({objProducto}) => {
    const {setCarrito}=useContext(ProductosContext);

    const agregarAlCarrito=()=>{
        
        setCarrito((prevState)=>{
  
          //verificar si el producto se encuetra en el carrito previamente
          
              let productoActual=prevState.find((producto)=>{
                  if(producto.prod_id=== objProducto.prod_id){
                      return producto;
                  }
              });
              //productoActual pudo haber sido undfind, por lo que revisareos 
              //si había o no había un producto de ese tipo en el carrito antiguo
              if(productoActual){
                  let carritoNuevo= prevState.map((producto)=>{
                      if(producto.prod_id===objProducto.prod_id){
                          producto.cant+=1;
                      }
                      return producto;
  
                  });
                  return carritoNuevo;
  
              }else{
                  return [...prevState,
                  {
                      ...objProducto,
                      cant:1
                  }
              ]
              }
          })
  
      }

    return (
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-3">
        <div className="card shadow h-100">
            <img src={objProducto.prod_img} alt="" height="180px"  className="img-card-top"/>
            <div className="card-body">
                <p className="card-title">{objProducto.prod_nom}
                 </p>
                 <p className="card-text">
                     <small className="text-muted">Precio:</small> <br/>
                     <strong> S/ {objProducto.prod_pre}</strong>
                 </p>
            </div>
            <div className="card-footer text-right">
                <button className="btn btn-light" onClick={agregarAlCarrito} >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>
    )
}

export default CarritoProducto
