import React from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const CarritoHeader = (props) => {
  const { categorias } = props;

  //   const [categorias, setCategorias] = useState([]);
  //   const [cargando, setCargando] = useState(true);
  //   const { seleccionarCategoriaGlobal, categoria_global } = useContext(
  //     CarritoContext
  //   );

  //   useEffect(() => {
  //     getCategorias().then((data) => {
  //       if (data) {
  //         setCategorias(data);
  //         setCargando(false);
  //       }
  //     });
  //   }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-ligth border">
        <Link className="navbar-brand" to="#">
          Carrito de compras
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {categorias.map((objCategoria) => {
              return (
                <li
                  className="nav-item"
                  style={{ textAlign: "center" }}
                  key={objCategoria.cat_id}
                >
                  <a
                    className="nav-link"
                    href={"/carrito/venta/" + objCategoria.cat_id}
                  >
                    {objCategoria.cat_nom}
                  </a>
                  {/* <Link
                    to=
                    className="nav-link"
                  ></Link> */}
                </li>
              );
            })}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-danger mr-2"
              // onClick={()=>{
              //   cerrarSesion();
              //     } }
            >
              <i className="fas fa-door-open"></i>
            </button>
            {/* <span>{usu_nom}</span> */}
          </form>
        </div>
      </nav>
    </header>
  );
};
export default CarritoHeader;
