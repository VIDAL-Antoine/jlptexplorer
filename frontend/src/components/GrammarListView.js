import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import styled from 'styled-components';

const GrammarListViewWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
`;

const GrammarListView = () => {
  const { jlptLevel } = useParams();
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
  <GrammarListViewWrapper className="m-3">
      {data.length === 0 ? // if data is being fetched
      (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border my-5" role="status">
          </div>
        </div>
      ) : (
        <Card style={{ border: 'none'}}>
        <CardBody>
          <CardTitle tag="h2" className='text-center'>Grammar Points - JLPT Level {jlptLevel === "nu" ? "Unclassified" : jlptLevel.toUpperCase()}</CardTitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
              <th>日本語</th>
              <th style={{ textAlign: 'right' }}>English</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => 
                <tr key={item._id} className="border-top">
                  <td><Link to={`/${jlptLevel}/${item._id}`} className="list-group-item list-group-item-action">{item.title}</Link></td>
                  <td style={{ textAlign: 'right' }}>{item.englishTranslation}</td>
                </tr>
              )}
            </tbody>
        </Table>
        </CardBody>
      </Card>
      )}
    </GrammarListViewWrapper>
  );
};

export default GrammarListView;
