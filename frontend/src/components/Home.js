import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding-left: 16px;
  padding-top: 25px;
  padding-bottom: 16px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
`;

const Home = () => {
  return (
  <div>
    <div className="container text-center mt-4 mb-4">
        <h1 className="display-4">Welcome to JLPTExplorer</h1>
    </div>

    <HomeWrapper className='mx-4'>
      <p className="lead mx-3">Your go-to resource for exploring Japanese Language Proficiency Test (JLPT) grammar points using examples from video games. Dive into the world of language learning and gaming with us!</p>
      <p className="lead mx-3">Choose a JLPT level and select the grammar point you want to know about. "Unclassified" corresponds to grammar points that are not in the JLPT but are rather common and important to know.</p>
    </HomeWrapper>

    <HomeWrapper className='mx-4'>
      <p className='mx-3'><strong>What is the purpose of this website?</strong></p>
      <p className='mx-3'>If you've learned a language at school or on some website, you've likely noticed that the examples are rather generic and forgettable. This leads to difficulty in learning the grammar point. As a gamer myself, I have observed that I have much less trouble learning a specific grammar point when seeing (or hearing) it in a game. The reason is that, since the sentence has context, it is less generic and easier to remember.</p>
      <p className='mx-3'>This is why I've decided to collect and gather sentences from video games that illustrate the grammar points. The goal here is to learn Japanese, so the structure and grammar points listed will be similar to those in the JLPT.</p>
    </HomeWrapper>

    <HomeWrapper className='mx-4'>
      <p className='mx-3'><strong>Contact:</strong> You can reach out to me if you have any questions via this email: avidal78390@gmail.com</p>
    </HomeWrapper>
  </div>
  );
};

export default Home;
