import { useEffect, useState } from "react";
import PersonForm from "./PersonForm";
import Shimmer from "./Shimmer";

const Body = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchData(count);
  }, [count]);

  const fetchData = async (id) => {
    try {
      setLoading(true);
     
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const json = await data.json();
      setUsers(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const increment = () => {
    setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
  };
  
  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  return (
    <div className="body-container">
      {loading ? (
        <Shimmer />
      ) : (
        <PersonForm
          personData={users}
          count={count}
          increment={increment}
          decrement={decrement}
        />
      )}
    </div>
  );
};

export default Body;
