import React from 'react';
import './App.css';
import Row from './components/Row.js'
import requests from './requests.js';
import Banner from './components/Banner.js'


function App() {
  return (
    <div className="app">

      {/* Navbar */}


      {/* la banniere */}
      <Banner/>

      {/* les films */}

      <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow = {true}/>
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title="Action" fetchUrl = {requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl = {requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl = {requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
