import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import CategoriasContext from '../../../../../context/admin/categoriasContext';
import ProductosContext from '../../../../../context/admin/productosContext';
import { deleteProducto } from '../../../../../services/admin/productosService';
import { MDBDataTableV5 } from 'mdbreact';


const Productos = () => {
    const { productos, cargandoProductos, obtenerProductos, setModalAgregar, setModalEditar, setProductoEditar } = useContext(ProductosContext);

    const { categorias } = useContext(CategoriasContext);

    const eliminar = prod_id => {
        Swal.fire({
            title: "¿Seguro de eliminar el producto",
            icon: "error",
            text: "Los cambios serán irreversibles ",
            showCancelButton: true
        }).then(rpta => {
            if (rpta.isConfirmed) {
                deleteProducto(prod_id).then(data => {
                    if (data.prod_id) {
                        obtenerProductos();
                        Swal.fire({
                            title: "Eliminado",
                            icon: "success",
                            timer: 700,
                            showCancelButton: false,

                        })
                    }
                })
            }
        })
    }

    // -----inicia la tabla

    const datatable = {
        columns: [
            { label: "Id", field: "prod_id" },
            { label: "Nombre", field: "prod_nom" },
            { label: "Precio", field: "prod_pre" },
            { label: "Stock", field: "prod_stock" },
            { label: "SKU", field: "prod_sku" },
            { label: "Categoria", field: "cat_id" },
            { label: "Imagen", field: "prod_img" },
            { label: "acciones", field: "acciones" },

        ],
        rows: productos.map((objProductos) => {
            return {
                ...objProductos,
                prod_id: +objProductos.prod_id,
                prod_nom: objProductos.prod_nom,
                prod_pre:objProductos.prod_pre,
                prod_stock:objProductos.prod_stock,
                prod_sku:objProductos.prod_sku,
                cat_id:categorias.find(objCategoria => +objCategoria.cat_id === +objProductos.cat_id)?.cat_nom,
                prod_img:<img src={objProductos.prod_img} alt="" width="65"/>,

                acciones: (
                    <>
                        <div className="d-flex">
                            <button className="btn btn-secondary mr-2" onClick={() => {
                                setProductoEditar(objProductos);
                                setModalEditar(true);
                            }}>
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger" onClick={() => {
                                eliminar(objProductos.prod_id);
                            }}>
                                <i className="fas fa-times"></i>
                            </button>

                        </div>
                    </>
                )
            }
        })
    };

    // termina la tabla

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

                                    <button className="btn btn-success" onClick={() => {
                                        obtenerProductos();
                                    }}><i className="fas fa-sync-alt"></i></button>
                                    <hr />
                                    {/* aquiva */}
                                    <MDBDataTableV5 data={datatable} searchTop
                                        searchBottom={false}
                                        responsive
                                        striped
                                        bordered
                                        pagingTop
                                        infoLabel={["Mostrando", "a", "de", "productos"]}
                                        fixed
                                        searchLabel="Buscar" />

                                </>


                            )
                    }

                </div>
            </div>

        </section>
    )
}

export default Productos
