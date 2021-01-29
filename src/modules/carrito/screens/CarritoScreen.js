import React, { useEffect, useState } from "react";
import { getProductos } from "../../../services/admin/productosService";
import {
  getCategorias,
  getCategoriasById,
} from "../../../services/admin/categoriaService";
import CarritoHeader from "./carritos/CarritoHeader";

const CarritoScreen = (props) => {
  const cat_id = props.match.params.id || 1;

  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState([]);

  const fetchCategorias = () => {
    getCategorias().then((data) => {
      if (data) {
        setCategorias(data);
      }
    });
  };

  const fetchCategoryById = () => {
    getCategoriasById(cat_id).then((data) => {
      setCategoria(data);
    });
  };

  const obtenerProductos = () => {
    getProductos().then((data) => {
      const listaprodutos = data?.filter(
        (objProducto) => objProducto?.cat_id === cat_id
      );
      console.log(listaprodutos);

      setProductos(listaprodutos);
    });
  };

  useEffect(() => {
    console.log(cat_id);
    fetchCategorias();
  }, []);

  useEffect(() => {
    obtenerProductos();
  }, []);

  useEffect(() => {
    fetchCategoryById();
  }, []);

  return (
    <div>
      <CarritoHeader categorias={categorias} />
      <main>
        <div className="card-body">
          <div className="col-sm-4 col-form-label col-form-label-lg">
            Categoria:{categoria && <div className="col-sm-6 col-form-label">{categoria?.cat_nom}</div>}
            
          </div>
          <div className="row">
            {productos &&
              productos.map((producto) => 
                    <>
                     <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card shadow h-100">
                <img src={producto.prod_img} alt="" height="200px"  className="img-card-top"/>
                <div className="card-body">
                    <p className="card-title">{producto.prod_nom}
                     </p>
                     <p className="card-text">
                         <small className="text-muted">Precio:</small> <br/>
                         <strong> S/ {producto.prod_pre}</strong>
                     </p>
                </div>
                <div className="card-footer text-right">
                    <button className="btn btn-outline-dark" >
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
                 
                    </>
            
              )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarritoScreen;
