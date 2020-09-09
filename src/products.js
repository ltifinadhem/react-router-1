import React from "react";
import { Route, Link} from "react-router-dom";
import Product from "./product";

const Products = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Available",
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];

  var linkList = productsData.map((product) => (
    <li>
      <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
    </li>
  ));

  return (
    <div >
  
      <div 
      style={{
        float: "left",
        padding: "10px",
        width: "30%",
        background: "rgb(240, 240, 240)",
        margin: "20px"
      }}
      >
        <h3> Products</h3>
        <ul> {linkList} </ul>
      </div>

      <Route
        path={`${match.path}/:productId`}
        render={(props) => <Product data={productsData} {...props} />}
      />
      <Route
        exact
        path={match.path}
        render={() => <div style={{
          textAlign:"center"
        }}>Please select a product.</div>}
      />
    </div>
  );
};
export default Products;
