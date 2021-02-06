import React, { useContext, useState } from 'react'
import ProductosContext from '../../../../context/admin/productosContext';

const CarritoFiltro = () => {
    
    const {setTermino}=useContext(ProductosContext);
 

    const [buscar, setBuscar]= useState("");

    const handleChange=(e)=>{
        setBuscar(e.target.value);
    }

const handleSubmit = (e) =>{
    e.preventDefault();
   setTermino(buscar)
}
    return (
        <>
        <div className="col-md-2 mt-1">
        <form onSubmit={handleSubmit}>
                <input type="text"className="form-control" placeholder="Buscar Productos"
                 value={buscar}
                 onChange={handleChange} />
        </form>
    </div>
    </>
    )
}

export default CarritoFiltro
