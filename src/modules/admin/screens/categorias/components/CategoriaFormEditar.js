import React, { useContext, useState } from 'react'
import Swal from "sweetalert2";
import CategoriasContext from '../../../../../context/admin/categoriasContext';
import { putCategoria } from '../../../../../services/admin/categoriaService';


const CategoriaFormEditar = () => {

    const {categoriaEditar,setModalEditar,obtenerCategorias}=useContext(CategoriasContext);
    const [formulario,setFormulario]=useState(categoriaEditar);

    const handleChange = e => {
        setFormulario({
          ...formulario,
          [e.target.name]: e.target.value
        });
      }

      const submit = (e) => {
        e.preventDefault();
    
        Swal.fire({
          title: `¿Seguro de editar la categoria ${categoriaEditar.cat_nom} por ${formulario.cat_nom}?`,
          icon: "question",
          text: "Los cambios se guardarán en la base de datos",
          showCancelButton: true
        }).then(rpta => {
          if (rpta.isConfirmed) {
            putCategoria(formulario).then(data => {
              if (data.cat_id) {
                setModalEditar(false);
                obtenerCategorias();
                Swal.fire({
                  title: "Editado!",
                  icon: "success",
                  timer: 700,
                  showCancelButton: false
                });
              }
            });
          }
        })
    
      }

    return (
        <form onSubmit={submit}>

        <div className="form-group">
          <label htmlFor="cat_id">Id:</label>
          <input type="text"
            id="cat_id"
            name="cat_id"
            className="form-control"
            value={formulario.cat_id}
            onChange={handleChange} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="cat_nom">Nombre:</label>
          <input type="text"
            id="cat_nom"
            name="cat_nom"
            placeholder="Ejm: Panaderia"
            className="form-control"
            value={formulario.cat_nom}
            onChange={handleChange} />
        </div>
        <div className="form-group">
        <button className="btn btn-primary"
          type="submit">Editar Producto</button>
      </div>

        </form>
    )
}

export default CategoriaFormEditar
