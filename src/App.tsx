import React, { useEffect, useState } from 'react';
import CardComponent from './components/CardComponent';

function App() {
  const [data, setData] = useState([]);

  const getProducts = () => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => setData(data))
  }

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <div className="mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <CardComponent item={item}/>
      ))}
      </div>
    </div>
  );
}

export default App;
