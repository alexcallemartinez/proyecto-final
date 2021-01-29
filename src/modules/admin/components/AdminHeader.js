import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../../../context/auth/authContext'

const AdminHeader = () => {

    const {usu_nom,cerrarSesion}=useContext(AuthContext)

  return (
    <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-ligth border">
            <Link className="navbar-brand" to="#">Mantenimiento</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                        <NavLink className="nav-link" ClassName="active" exact to="/admin/home">Home </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" ClassName="active" to="/admin/categoria">Categorias </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" ClassName="active"   to="/admin/producto">Productos </NavLink>
                    </li>
                    
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-danger mr-2" onClick={()=>{
                  cerrarSesion();
                    } }><i className="fas fa-door-open"></i></button>
                  <span>{usu_nom}</span>
                </form>
            </div>
        </nav>
    </header>
  )
}

export default AdminHeader
