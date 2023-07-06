import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a9fd0a28d3944e7baae254cce73a5c99');
        const jsonData = await response.json();
        setData(jsonData.articles);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <div className="App">
      <div>
        <h1>Data Component</h1>
        <ul>
          {data.map((element, index) => {
            return <li key={index}>{element.title}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
