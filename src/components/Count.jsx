import { useEffect, useState } from "react";

const Count = () => {

    const [count, setCount] = useState(1)

    useEffect(() => {

    },[count])

    const increment = () => {
        setCount(prevCount => (prevCount + 1))
    }
    const decrement = () => {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
    }

    
  return (
    <div className="form-container">
      <div className="count-container">
        <button onClick={decrement}>Previous</button>
        <span className="counter-value">User {count}</span>
        <button onClick={increment}>Next</button>
      </div>
    </div>
  );
};

export default Count;
