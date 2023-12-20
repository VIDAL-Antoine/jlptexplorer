import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailedView = () => {
  const { id, jlptLevel } = useParams();
  const [grammarPoint, setGrammarPoint] = useState(null);

  useEffect(() => {
    const fetchGrammarPoint = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/grammar-points/${jlptLevel}/${id}`);
        const data = await response.json();
        setGrammarPoint(data);
      } catch (error) {
        console.error('Error fetching grammar point:', error);
      }
    };

    fetchGrammarPoint();
  }, [jlptLevel, id]);

  if (!grammarPoint) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{grammarPoint.title}</h2>
      <p>{grammarPoint.jlptLevel}</p>
      {grammarPoint.examples.map((example, index) => (
            <div key={index}>
              <p>Sentence: {example.sentence}</p>
              <p>Source: {example.source}</p>
              <p>Video URL: <a href={example.videoURL} target="_blank" rel="noopener noreferrer">{example.videoURL}</a></p>
            </div>
          ))}
      
    </div>
  );
};

export default DetailedView;
