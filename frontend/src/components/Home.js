import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
  <div>
    <div className="container text-center mt-5">
        <h1 className="display-4">Welcome to GramExplorer</h1>
    </div>

    <p className="lead mx-3">Your go-to resource for exploring Japanese Language Proficiency Test (JLPT) grammar points using examples from video games. Dive into the world of language learning and gaming with us!</p>
    <p className="lead mx-3">Choose a JLPT level and select the grammar point you want to know about. "Unclassified" correspond to grammar points that are not in the JLPT but are rather common and important to know.</p>

    <p className='mx-3'>What is the purpose of this website?</p>
    <p className='mx-3'>If you've learned language at school or on some website, you've noticed that the examples are rather generic and forgettable. This leads to difficulty on learning the grammar point. As a gamer myself, I have noticed that I have much less trouble learning a specific grammar point upon seeing (or listening) it in a game. The reason is since the sentence has context it is less generic and is easier to remember.</p>
    <p className='mx-3'>This is the reason why I've decided to collect and gather sentences from video games that illustrate the grammar points. The goal here is to learn Japanese and so the structure and grammar points listed will be similar to the JLPT. It is for foreigners the only way to organize and grasp your progress in Japanese.</p>
  </div>
  );
};

export default Home;
