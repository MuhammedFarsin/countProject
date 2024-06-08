import React from "react";

const PersonForm = ({ personData, count, increment, decrement }) => {
  const { name, email } = personData;


  return (
    <div className="form-container">
      <div className="data-container">
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
      <div className="count-container">
        <button onClick={decrement}>Previous</button>
        <span className="counter-value">User {count}</span>
        <button onClick={increment}>Next</button>
      </div>
    </div>
  );
};

export default PersonForm;
