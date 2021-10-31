import React from 'react';
import './App.css';
import Row from './components/Row.js'

function App() {
  return (
    <div className="App">
      <Row title="Originals Chill"/>
      <Row title="Trending Now"/>
      <Row title="Top Rated"/>
      <Row title="Action"/>
      <Row title="Comedy"/>
      <Row title="Horror"/>
      <Row title="Romance"/>
      <Row title="Documentaries"/>
    </div>
  );
}

export default App;

