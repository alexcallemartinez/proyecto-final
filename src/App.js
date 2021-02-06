import React from "react";
import {
  HashRouter,
  
  Route,
  Switch,
} from "react-router-dom";
import AuthState from "./context/auth/authState";
import AdminRouter from "./modules/admin/AdminRouter";
import AuthRouter from "./modules/auth/AuthRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import Private from "./Private";
import CarritoRouter from "./modules/carrito/CarritoRouter";

const App = () => {
  return (
    <HashRouter>
      <AuthState>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Private path="/admin" component={AdminRouter} />
          {/* <Redirect to="/auth/login"/>  */}

          <Route path="/" component={CarritoRouter} />
        </Switch>
      </AuthState>
    </HashRouter>
  );
};

export default App;
