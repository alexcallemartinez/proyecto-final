import React,{useState,useContext} from 'react'
import ProductoForm from './components/ProductoForm'
import Productos from './components/Productos'
import { Modal } from "react-bootstrap";
import ProductosContext from '../../../../context/admin/productosContext';
import ProductoFormEditar from './components/ProductoFormEditar';



const ProducoScreen = () => {

const [formCrear, setFormCrear]= useState(false);

const {modalEditar,setModalEditar} = useContext(ProductosContext);

    return (
        <main className="container-fluid mt-5">
            <div className="row mb-4">
                <div className="col text-right">
                <button className="btn btn-success shadow" onClick={()=>{
                    setFormCrear(!formCrear);
                }}>
                    crear Producto
                </button>
                </div>
                </div>
                <div className="row">
                <Productos/>
                {
                    formCrear && <ProductoForm/>
                }
                </div>
            <Modal show={modalEditar} onHide={()=>{
                setModalEditar(false);
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProductoFormEditar/>
                </Modal.Body>
                
            </Modal>
            

        </main>
    )
}

export default ProducoScreen
