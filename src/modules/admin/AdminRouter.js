import React from 'react'
import { Switch, Route } from "react-router-dom";
import CategoriaState from '../../context/admin/categoriaState';
import ProductosState from '../../context/admin/productosState';
import AdminHeader from './components/AdminHeader';
import CategoriaScreen from './screens/categorias/CategoriaScreen';
import HomeScreen from './screens/home/HomeScreen';
import ProducoScreen from './screens/producto/ProducoScreen';

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <ProductosState>
        <CategoriaState>
      <Switch>
        <Route path="/admin/home" component={HomeScreen} />
        <Route path="/admin/categoria" component={CategoriaScreen} />
        <Route path="/admin/producto" component={ProducoScreen} />
      </Switch>
      </CategoriaState>
      </ProductosState>
    </>
  )
}

export default AdminRouter
