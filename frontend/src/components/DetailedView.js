import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from 'styled-components';
import { Collapse, Button } from 'react-bootstrap';

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
  const [isOpen, setIsOpen] = useState(false);

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
      {(!grammarPoint) ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border my-5" role="status"></div>
        </div>
      ) : (
        <div className="container mt-4">
          <DetailedViewWrapper>
            <div className="d-flex align-items-center py-3 ms-2">
              <i className="bi bi-book-fill" style={{ fontSize: '2rem', color: '#006400' }} />
              <h1 className="ms-3">{grammarPoint.title}</h1>
            </div>
          </DetailedViewWrapper>

          <div className='d-flex'>
            <DetailedViewWrapper className='d-flex align-items-center' style={{ flex: 1, marginRight: '30px' }}>
              <i className="bi bi-translate ms-2" style={{ fontSize: '2rem', color: '#007BFF'}} />
              <span className='ms-3' style={{ fontSize: '18px' }}>{grammarPoint.titleTranslation}</span>
            </DetailedViewWrapper>
            <DetailedViewWrapper className='d-flex align-items-center' style={{ textAlign: 'center' }}>
              <i className="bi bi-graph-up-arrow ms-2" style={{ fontSize: '2rem', color: '#800080'}} />
              <span className='ms-3' style={{ fontSize: '18px' }}>{grammarPoint.jlptLevel}</span>
            </DetailedViewWrapper>
          </div>

          <DetailedViewWrapper>
            <h3 className="mb-3 ms-2">
              <i className="bi bi-chat-dots" style={{ fontSize: '2rem', color: '#cc6600'}} />
              <span className="ms-3">Examples</span>
            </h3>
            {grammarPoint.examples.map((example, index) => (
              <div key={index} className="card mb-4">
                <div className="card-body">
                  <p className="card-text">Sentence: {example.sentence}</p>

                  <Button onClick={() => setIsOpen(!isOpen)} variant="primary" size="sm">Sentence translation</Button>
                  <Collapse in={isOpen} className='mt-2'>
                    <p>{example.sentenceTranslation}</p>
                  </Collapse>

                  <p className="card-text mt-3">Source: {example.source}</p>
                  <div className="embed-responsive embed-responsive-16by9" style={{ maxWidth: '1024px', width: '100%', margin: 'auto' }} >
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        className="embed-responsive-item"
                        src={example.videoURL}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: 'absolute', width: '100%', height: '100%' }}
                      ></iframe>
                    </div>
                  </div>
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
