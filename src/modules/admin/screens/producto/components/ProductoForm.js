import React,{useContext, useState} from 'react'
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';
import CategoriasContext from '../../../../../context/admin/categoriasContext';
import ProductosContext from '../../../../../context/admin/productosContext';
import { postProducto } from '../../../../../services/admin/productosService';

const formularioVacio = {
        prod_nom:"",
        prod_pre:0,
        prod_img:"",
        cat_id:0,
        prod_stock:0,
    
    }

const ProductoForm = () => {

const   [formulario,setFormulario]= useState({...formularioVacio});
const [sku, setSku]=useState(uuidv4());
const {obtenerProductos}=useContext(ProductosContext);
const {categorias} =useContext(CategoriasContext)

const handleChange=e=>{
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    });
}
const submit=(e)=>{
    e.preventDefault();
    Swal.fire({
        title:"¿Seguro de crear el producto",
        icon:"question",
        text:"Los cambios se guardaran en la base de datos",
        showCancelButton:true
    }).then(rpta=>{
        if (rpta.isConfirmed){
            //consumir el servicio
            postProducto({...formulario,prod_sku: sku }).then(data =>{
                if(data.prod_id){
                    setFormulario(formularioVacio);
                    setSku(uuidv4());
                        obtenerProductos();
                        Swal.fire({
                            title:"Hecho!",
                            text:"EL producto a sido creado con exito",
                            icon:"success",
                            showCancelButton:false,
                            timer:500,
                            position:"top-right"
                        })
                }
            })
        }    
    
    })


}

    return (
        <section className="col-md-4 animate__animated animate__fadeInRightanimate__animated animate__fadeInRight">
            <div className="card shadow">
                <div className="card-body">
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label htmlFor="prod_nom" >Nombre</label>
                            <input className="form-control" type="text" id="prod_nom" placeholder="Ejm Capuccino" name="prod_nom" value={formulario.prod_nom} onChange={handleChange} />
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
                            <input className="form-control" type="text" id="prod_sku" readOnly name="prod_sku" value={sku}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cat_id">Categoria</label>
                            <select name="cat_id" id="cat_id" value={formulario.cat_id}
                            className="form-control" onChange={handleChange}>
                                <option value="0">--Selecione--</option>
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
                            <button className="btn btn-primary" type="submit">Crear producto</button>
                        </div>
                    </form>
                </div>

            </div>

        </section>
    )
}

export default ProductoForm
