import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const DataDisplay = ({ jlptLevel }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/grammar-points/${jlptLevel}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [jlptLevel]);

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>
          <Link to={`/${jlptLevel}/${item._id}`}>
            <h2>{item.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
