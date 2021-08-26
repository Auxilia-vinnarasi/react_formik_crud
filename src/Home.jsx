import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Home = () => {
  const history = useHistory();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(
      `https://60decafeabbdd9001722d05c.mockapi.io/users/${id}`
    );
    loadProducts();
  };

  const loadProducts = async () => {
    const result = await axios.get(
      `https://60decafeabbdd9001722d05c.mockapi.io/users`
    );
    setProduct(result.data);
  };
  return (
    <div className="home-page">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
          
            <th scope="col">Product Name</th>
         
            <th scope="col">Price</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
            
              <td>{product.productname}</td>
              
              <td>{product.price}</td>

              {/* <Link class="btn btn-outline-primary mr-2" to={`./edituser/${product.id}`}>Edit</Link> */}
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push(`/editproduct/${product.id}`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
