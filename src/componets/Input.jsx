import React from "react";


const Input = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit} className='input_form'>
      <label htmlFor="inputSearch" className="input_label">Write a number between 1 and 126 </label>
      <input className="input_item" id="inputSearch" type="text" placeholder="Write a number between 1 and 126"/>
      <button className="input_button">Search</button>
    </form>
  );
};

export default Input;
