import React, { useEffect, useState } from 'react'
import { getProductos } from '../../services/admin/productosService';
import ProductosContext from './productosContext';


const ProductosState = ({ children }) => {


    const [productos, setProductos] = useState([]);
    const [cargandoProductos, setCargandoProductos] = useState(true);
    const [modalAgregar,setModalAgregar]=useState(false);
    const [modalEditar, setModalEditar]=useState(false);
    const [productoEditar, setProductoEditar]=useState({});
    const [termino,setTermino]=useState("");
    const [carrito,setCarrito]=useState([]);
    

    

    const obtenerProductos = () => {
        setCargandoProductos(true);
        getProductos(termino).then(data => {
            console.log("llegó la data");
            setProductos(data);
            setCargandoProductos(false);
        });
    }



    useEffect(() => {
        obtenerProductos();

    }, [termino])

    return (
        <ProductosContext.Provider value={{
            productos: productos,
            cargandoProductos: cargandoProductos,
            modalAgregar:modalAgregar,
            modalEditar:modalEditar,
            productoEditar:productoEditar,
            termino:termino,
            carrito:carrito,
            setTermino:setTermino,
            setCarrito:setCarrito,
            setProductoEditar:setProductoEditar,
            setModalAgregar:setModalAgregar,
            setModalEditar:setModalEditar,
            obtenerProductos: obtenerProductos
        }}>
            {children}

        </ProductosContext.Provider>
    )
}

export default ProductosState
