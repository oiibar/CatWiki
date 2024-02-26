import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/breeds").then((response) => {
      setBreeds(response.data);
    });
  }, []);

  return <div className="App">{breeds.map((breed) => console.log(breed))}</div>;
}

export default App;
