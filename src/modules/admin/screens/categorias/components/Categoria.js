import React,{useContext, useState} from 'react'
import Swal from "sweetalert2";
import CategoriasContext from '../../../../../context/admin/categoriasContext';
import { deleteCategoria } from '../../../../../services/admin/categoriaService';
import { MDBDataTableV5 } from 'mdbreact';


const Categoria = () => {
  const {categorias,cargandoCategorias,obtenerCategorias,setModalAgregar,setModalEditar,setCategoriaEditar}=useContext(CategoriasContext);


    const eliminar = cat_id => {
        Swal.fire({
          title: "¿Seguro de eliminar el producto?",
          icon: "error",
          text: "Los cambios serán irreversibles joven!",
          showCancelButton: true
        }).then(rpta => {
          if (rpta.isConfirmed) {
            deleteCategoria(cat_id).then(data => {
              if (data.cat_id) {
                obtenerCategorias();
                Swal.fire({
                  title: "Eliminado!",
                  icon: "success",
                  timer: 700,
                  showCancelButton: false
                  
                })
              }
            })
          }
        })
      }


  const [datatable] = useState({
    columns: [
        { label: "Id", field: "cat_id" },
        { label: "Nombre", field: "cat_nom" },
        { label: "acciones", field: "acciones" },
        
    ],
    rows:categorias.map((objCategoria)=>{
      return{
        ...objCategoria,
        cat_id:+objCategoria.cat_id,
        cat_nom:objCategoria.cat_nom,
        acciones:(
        <>
        <div className="d-flex">
        <button className="btn btn-secondary mr-2" onClick={() => {
      setCategoriaEditar(objCategoria);
      setModalEditar(true);
    }}>
      Editar
    </button>
    <button className="btn btn-danger" onClick={() => {
      eliminar(objCategoria.cat_id);
    }}>
      Eliminar
    </button>
 
        </div>
        </>
        )
       }
    })
});

    
    return (
        <section className="col">
        <div className="card shadow">
            <div className="card-body">
            <button className="btn btn-primary success" onClick={() => {
                    setModalAgregar(true);
                  }}>
                      
                  <i className="fas fa-plus-circle"></i>
                  </button>
                  
             {
                 
                 cargandoCategorias ?
                 <div>...cargando</div> :
                 (
                 <>
                 <button className="btn btn-warning" onClick={()=>{
                    obtenerCategorias();
                }}><i className="fas fa-sync-alt"></i></button>
                <hr/>

                  <MDBDataTableV5 data={datatable} searchTop
                  searchBottom={false}
                  responsive
                  striped
                  bordered
                  pagingTop
                 infoLabel={["Mostrando","a","de","categorias"]}
                 displayEntriesLabel={["Filas","Por"]}
                 fixed
                 searchLabel="Buscar"/>

            

                 </>


                 )
             }
                
            </div>
        </div>

     </section>
    )
}

export default Categoria
