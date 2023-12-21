import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-4">
      <h1 className="mb-4">Grammar Points - JLPT Level {jlptLevel === "nu" ? "Unclassified" : jlptLevel.toUpperCase()}</h1>
      {data.length === 0 ? // if data is being fetched
      (
        <div class="d-flex justify-content-center align-items-center">
          <div class="spinner-border my-5" role="status">
          </div>
        </div>
      ) : (
        <div className="list-group">
          {data.map(item => (
            <Link to={`/${jlptLevel}/${item._id}`} key={item._id} className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{item.title}</h5>
                <h7>{item.englishTranslation}</h7>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
