import React, {useContext, useState} from 'react'
import Swal from "sweetalert2";
import CategoriasContext from '../../../../../context/admin/categoriasContext';
import { postCategoria } from '../../../../../services/admin/categoriaService';




const formularioVacio={

    cat_nom:"",
}

const CategoriaForm = () => {


    const [formulario, setFormulario]=useState({...formularioVacio});
    const {obtenerCategorias,setModalAgregar}=useContext(CategoriasContext);
    

    const handleChange = e => {
        setFormulario({
          ...formulario,
          [e.target.name]: e.target.value
        });
      }

      const submit = (e) => {
        e.preventDefault();
        Swal.fire({
          title: "¿Seguro de crear el categoria?",
          icon: "question",
          text: "Los cambios se guardarán en la base de datos",
          showCancelButton: true
        }).then(rpta => {
          if (rpta.isConfirmed) {
            //consumir el servicio
            postCategoria({ ...formulario}).then(data => {
              //verificando que un producto se haya creado
              if (data.cat_id) {
                setFormulario(formularioVacio);
                obtenerCategorias();
                setModalAgregar(false);
                Swal.fire({
                  title: "Hecho!",
                  text: "La categoria ha sido creado con éxito",
                  icon: "success",
                  timer: 700,
                  showCancelButton: false,
                  
                });
              }
            });
          }
        })
    
      }


    return (
      
          
            <form onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="cat_nom">Nombre:</label>
                <input type="text"
                  id="cat_nom"
                  name="cat_nom"
                  placeholder="Tecnologia"
                  className="form-control"
                  value={formulario.prod_nom}
                  onChange={handleChange} />
              </div>
              <div className="form-group">
                <button className="btn btn-primary"
                  type="submit">Crear Categoria</button>
              </div>
            </form>
  
    )
}

export default CategoriaForm
