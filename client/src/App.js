import React from 'react';
import './App.css';
import Row from './components/Row.js'
import requests from './requests.js';
import Banner from './components/Banner.js'
import NavBar from './components/NavBar.js';


function App() {
  return (
    <div className="app">
      <NavBar />

      <Banner />

      <Row title="Chill New Movies" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Populaire" fetchUrl={requests.fetchTrending} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horreur" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaire" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
