import React from 'react';
import { useData } from './DataContext';

const Form = () => {
  const { addFormData } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = e.target.elements.name;
    const emailInput = e.target.elements.email;
    const mobileInput = e.target.elements.mobile;
    const addressInput = e.target.elements.address;
    const name = nameInput ? nameInput.value : '';
    const email = emailInput ? emailInput.value : '';
    const mobile = mobileInput ? mobileInput.value : '';
    const address = addressInput ? addressInput.value : '';

    const formData = { name, email, mobile, address };

    addFormData(formData);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input type="email" className="form-control" id="exampleInputPassword1" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mobile</label>
          <input type="number" className="form-control" id="exampleInputPassword1" name="mobile" placeholder="Mobile" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Address</label>
          <input type="text" className="form-control" id="exampleInputPassword1" name="address" placeholder="Address" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
