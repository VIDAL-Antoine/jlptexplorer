import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from 'styled-components';

const DetailedViewWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
`;

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
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border my-5" role="status">
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-4">


      <DetailedViewWrapper>
      <header className="text-center py-3">
        <h1><i className="bi bi-book-fill" style={{ color: '#000000' }}/> {grammarPoint.title}</h1>
      </header>
      </DetailedViewWrapper>

      <div style={{ display: 'flex' }}>
      <DetailedViewWrapper style={{ flex: 1, marginRight: '30px' }}>
        <i className="bi bi-translate" style={{ color: '#0000ff' }}/> {grammarPoint.englishTranslation}
      </DetailedViewWrapper>
      <DetailedViewWrapper>
        <i className="bi bi-graph-up-arrow" style={{ color: '#00ff00' }}/> {grammarPoint.jlptLevel}
      </DetailedViewWrapper>
      </div>

      <DetailedViewWrapper>
      <h3><i className='bi bi-chat-dots' style={{ color: '#ff9800' }} /> Examples</h3>
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
      </DetailedViewWrapper>
    </div>
  );
};

export default DetailedView;
