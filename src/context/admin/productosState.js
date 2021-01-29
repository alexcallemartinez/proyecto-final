import React, { useEffect, useState } from 'react'
import { getProductos } from '../../services/admin/productosService';
import ProductosContext from './productosContext';


const ProductosState = ({ children }) => {


    const [productos, setProductos] = useState([]);
    const [cargandoProductos, setCargandoProductos] = useState(true);
    const [modalEditar, setModalEditar]=useState(false);
    const [productoEditar, setProductoEditar]=useState({});

    const obtenerProductos = () => {

        setCargandoProductos(true);

        getProductos().then(data => {
            console.log("llegó la data");
            setProductos(data);
            setCargandoProductos(false);
        });
    }



    useEffect(() => {
        obtenerProductos();

    }, [])

    return (
        <ProductosContext.Provider value={{
            productos: productos,
            cargandoProductos: cargandoProductos,
            modalEditar:modalEditar,
            productoEditar:productoEditar,
            setProductoEditar:setProductoEditar,
            setModalEditar:setModalEditar,
            obtenerProductos: obtenerProductos
        }}>
            {children}

        </ProductosContext.Provider>
    )
}

export default ProductosState
