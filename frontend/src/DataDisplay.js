import React, { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>JLPT Level: {item.jlptLevel}</p>
          <h3>Examples:</h3>
          <ul>
            {item.examples.map((example, index) => (
              <li key={index}>
                <p>Sentence: {example.sentence}</p>
                <p>Source: {example.source}</p>
                <p>Video URL: <a href={example.videoURL} target="_blank" rel="noopener noreferrer">{example.videoURL}</a></p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
