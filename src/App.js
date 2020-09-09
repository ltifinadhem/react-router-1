import React from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import Category from "./category";
import Products from "./products";
import Login from "./login";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Admin = () => (
  <div>
    <h2>Hello admin</h2>
  </div>
);

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const App = () => {
  const [auth, setAuth] = useState(false);
  const prod = (x) => setAuth(x);
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route
          path="/login"
          render={(props) => <Login auth={prod} {...props} />}
        />
        <PrivateRoute authed={auth} path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};

export default App;
