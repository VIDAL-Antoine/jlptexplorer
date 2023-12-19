import React, { useState, useEffect } from 'react';

const DataDisplay = ({ jlptLevel }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/data/${jlptLevel}`);
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
          <h2>{item.title}</h2>
          <p>JLPT Level: {item.jlptLevel}</p>
          <h3>Examples:</h3>
          {item.examples.map((example, index) => (
            <div key={index}>
              <p>Sentence: {example.sentence}</p>
              <p>Source: {example.source}</p>
              <p>Video URL: <a href={example.videoURL} target="_blank" rel="noopener noreferrer">{example.videoURL}</a></p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
