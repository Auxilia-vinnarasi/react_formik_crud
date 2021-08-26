import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  let history = useHistory();
  const [product, setProduct] = useState({
   
    productname: "",
    
    price: ""
  
  });

  const { productname, price} = product;
  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://60decafeabbdd9001722d05c.mockapi.io/users", product);
    history.push("/");
  };

  const validate = Yup.object({
    
    productname: Yup.string()
      .min(4, "Must be 4 charecters or more")
      .max(20, "Must be 20 characters or less")
      .required("Required"),
   
    price: Yup.string()
      .min(6, "Number must be at least 6 charaters")
      .required("Number is required")
    
  });
  return (
    <Formik
      initialValues={{
        
        productname: "",
       
        price: ""
       
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A Product</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter productname"
                  name="productname"
                  value={productname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter price"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              
              <button className="btn btn-primary btn-block">Add Product</button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddProduct;
