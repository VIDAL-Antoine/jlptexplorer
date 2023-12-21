import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    return (
      <div class="d-flex justify-content-center align-items-center">
        <div class="spinner-border my-5" role="status">
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">{grammarPoint.title}</h2>
      <p>JLPT Level: {grammarPoint.jlptLevel}</p>
      <p className="mb-4">English Translation: {grammarPoint.englishTranslation}</p>

      <h3>Examples</h3>
      {grammarPoint.examples.map((example, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <p className="card-text">Sentence: {example.sentence}</p>
            <p className="card-text">Source: {example.source}</p>
            <p className="card-text text-center">
              {/* Video URL: <a href={example.videoURL} target="_blank" rel="noopener noreferrer">{example.videoURL}</a> */}
              <iframe
                width="560"
                height="315"
                src={example.videoURL} // https://www.youtube.com/embed/eI4an8aSsgw works
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedView;
