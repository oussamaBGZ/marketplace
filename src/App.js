import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Category from "./components/Category";
import Home from "./components/Home";
import Product from "./components/Product";
import Menu from './components/Menu';
import Panier from "./components/Panier";
import ProduitAdmin from "./components/product";
import ProduitAdminEdit from "./components/product/Edit";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";



function App() {
  return (
    <>
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute path="/admin/product/add">
              <ProduitAdminEdit />
            </PrivateRoute>
            <PrivateRoute path="/admin/product/:id">
              <ProduitAdminEdit />
            </PrivateRoute>
            <PrivateRoute path="/admin/product">
              <ProduitAdmin />
            </PrivateRoute>
            <PrivateRoute path="/panier">
              <Panier />
            </PrivateRoute>
            <PrivateRoute path="/product/:id">
              <Product />
            </PrivateRoute>
            <PrivateRoute path="/category/:id">
              <Category />
            </PrivateRoute>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
