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

  return (
    <div>
    {(!grammarPoint) ?
    (      
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border my-5" role="status">
        </div>
      </div>
    ) : (
      <div className="container mt-4">
        <DetailedViewWrapper>
        <div className="d-flex align-items-center py-3 ms-2">
          <i className="bi bi-book-fill" style={{ fontSize: '2rem', color: '#006400'}} />
          <h1 className="ms-3">{grammarPoint.title}</h1>
        </div>
        </DetailedViewWrapper>

        <div className='d-flex'>
          <DetailedViewWrapper className='d-flex align-items-center' style={{ flex: 1, marginRight: '30px' }}>
            <i className="bi bi-translate ms-2" style={{ fontSize: '2rem', color: '#007BFF'}} />
            <span className='ms-3' style={{ fontSize: '18px' }}>{grammarPoint.englishTranslation}</span>
          </DetailedViewWrapper>
          <DetailedViewWrapper className='d-flex align-items-center' style={{ textAlign: 'center' }}>
            <i className="bi bi-graph-up-arrow" style={{ fontSize: '2rem', color: '#800080'}} />
            <span className='ms-3' style={{ fontSize: '18px' }}>{grammarPoint.jlptLevel}</span>
          </DetailedViewWrapper>
        </div>

        <DetailedViewWrapper>
          <h3 className='mb-3 ms-2'>
            <i className="bi bi-chat-dots" style={{ fontSize: '2rem', color: '#cc6600'}} />
            <span className='ms-3'>Examples</span>
          </h3>
          {grammarPoint.examples.map((example, index) => (
            <div key={index} className="card mb-4">
              <div className="card-body">
                <p className="card-text">Sentence: {example.sentence}</p>
                <p className="card-text">Source: {example.source}</p>
                <p className="card-text text-center">
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
    )}
    </div>
  );
};

export default DetailedView;
