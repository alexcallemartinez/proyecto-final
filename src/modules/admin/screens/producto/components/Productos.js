import React,{useContext} from 'react'
import Swal from 'sweetalert2';
import CategoriasContext from '../../../../../context/admin/categoriasContext';
import ProductosContext from '../../../../../context/admin/productosContext';
import { deleteProducto } from '../../../../../services/admin/productosService';



const Productos = () => {
    const {productos,cargandoProductos, obtenerProductos, setModalEditar,setProductoEditar}=useContext(ProductosContext);

    const {categorias}=useContext(CategoriasContext);

    const  eliminar = prod_id =>{
        Swal.fire({
            title:"¿Seguro de eliminar el producto",
            icon:"error",
            text:"Los cambios serán irreversibles ",
            showCancelButton:true
        }).then(rpta=>{
            if(rpta.isConfirmed){
                deleteProducto(prod_id).then(data=>{
                    if(data.prod_id){
                        obtenerProductos();
                        Swal.fire({
                            title:"Eliminado",
                            icon: "success",
                            timer:700,
                            showCancelButton:false,
                            position:"top-end"
                        })
                    }
                })
            }
        })
    }
    
    return (
        <section className="col-md-8">
           <div className="card shadow">
               <div className="card-body">
                {
                    cargandoProductos ?
                    <div className="alert alert-info text-center" role="alert">
                    <h4 className="alert-heading">Cargando producto</h4>

                    <div className="spinner-border" role="status">
                   <span className="sr-only">Loading...</span>
                    </div>
                     </div> 
                    
                    :
                    (
                    <>
                    <div className="text-right mb-3">
                    <button className="btn btn-success" onClick={()=>{
                       obtenerProductos();
                   }}>Refrescar tabla</button>
                </div>
               <div className="table-responsive">
                   <table className="table table-bordered table-striped">
                       <thead>
                           <tr>
                               <th>ID</th>
                               <th>Nombre</th>
                               <th>Precio</th>
                               <th>Stock</th>
                               <th>SKU</th>
                               <th>Categoria</th>
                               <th>imagen</th>
                               <th>acciones</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               productos.map((objProducto)=>{
                                   return (<tr key={objProducto.prod_id}>
                                       <td>{objProducto.prod_id}</td>
                                       <td>{objProducto.prod_nom}</td>
                                       <td>{objProducto.prod_pre}</td>
                                       <td>{objProducto.prod_stock}</td>
                                       <td>{objProducto.prod_sku}</td>
                                       <td>{
                                       (categorias.find(objCategoria=> +objCategoria.cat_id === +objProducto.cat_id))?.cat_nom
                                       }</td>
                                       <td><img src={objProducto.prod_img} alt="" width="65"/></td>
                                       <td>
                                           <div className="d-flex">
                                           <button className="btn btn-secondary" onClick={()=>{
                                               setProductoEditar(objProducto);
                                               setModalEditar(true);
                                           }}>
                                               Editar
                                          </button>
                                          <button className="btn btn-danger" onClick={()=>{
                                           eliminar(objProducto.prod_id)
                                          }}>Eliminar</button>
                                          </div>
                                       </td>
                                   </tr>)
                               })
                           }
                       </tbody>
                   </table>
               </div>

                    </>


                    )
                }
                   
               </div>
           </div>

        </section>
    )
}

export default Productos
