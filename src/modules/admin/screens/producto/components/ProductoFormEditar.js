import React,{useContext, useState} from 'react'
import Swal from "sweetalert2";
import CategoriasContext from '../../../../../context/admin/categoriasContext';
import ProductosContext from '../../../../../context/admin/productosContext';
import { putProducto } from '../../../../../services/admin/productosService';



const ProductoFormEditar = () => {

    const {productoEditar,setModalEditar,obtenerProductos}=useContext(ProductosContext)
    const {categorias}=useContext(CategoriasContext);
    const   [formulario,setFormulario]= useState({...productoEditar});
    



    const handleChange=e=>{
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }

    const submit=(e)=>{
        e.preventDefault();
        Swal.fire({
            title:`¿Seguro de editar el producto ${productoEditar.prod_nom} por ${formulario.prod_nom}?`,
            icon:"question",
            text:"Los cambios se guardaran en ña base de datos",
            showCancelButton:true
        }).then(rpta=>{
            if (rpta.isConfirmed){
                //consumir el servicio de editar

                putProducto({...formulario}).then(data=>{
                        if(data.cat_id){
                            setModalEditar(false);
                            obtenerProductos();


                            Swal.fire({
                                title:"Editado!",
                                icon:"success",
                                timer:700,
                                showCancelButton:false
                            })
                        }
                });
                
            }    
        
        })
    
    
    }

    return (
        <form onSubmit={submit}>
              <div className="form-group">
                            <label htmlFor="prod_nom" >ID</label>
                            <input className="form-control" type="text" id="prod_id" name="prod_id" value={formulario.prod_id} onChange={handleChange} readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prod_nom" >Nombre</label>
                            <input className="form-control" type="text" id="prod_nom" placeholder="Ejm Tv Smart 70" name="prod_nom" value={formulario.prod_nom} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label  htmlFor="prod_pre">Precio</label>
                            <input className="form-control" type="number" id="prod_pre" value={formulario.prod_pre} onChange={handleChange} name="prod_pre"    />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prod_stock" >stock</label>
                            <input className="form-control" type="number" id="prod_stock" name="prod_stock" value={formulario.prod_stock} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prod_sku" >SKU</label>
                            <input className="form-control" type="text" id="prod_sku" readOnly name="prod_sku" value={formulario.prod_sku} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cat_id">Categoria</label>
                            <select  className="form-control" type="number" id="cat_id" name="cat_id" value={formulario.cat_id} onChange={handleChange} readOnly >
                                <option value="0">--Seleccione--</option>
                                {
                                    categorias.map(objCategoria=>{
                                        return <option value={objCategoria.cat_id} key={objCategoria.cat_id}>
                                            {objCategoria.cat_nom}

                                        </option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="prod_img" >imagen</label>
                            <textarea  className="form-control" type="number" id="prod_img" name="prod_img" value={formulario.prod_img} onChange={handleChange}  />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Editar producto</button>
                           
                        </div>
                        
                    </form>
    )
}

export default ProductoFormEditar
