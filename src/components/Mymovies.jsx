import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner, Container } from 'react-bootstrap';

const MyMovie = () => {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://www.omdbapi.com/?s=Harry-potter&apikey=ea5e3928');
        const data = await response.json();

        
        if (data.Response === 'True') {
          setMovies(data.Search); 
        } else {
          console.log('Nessun film trovato');
        }
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      } 
    };

    fetchMovies();  
  }, []);  
 
  return (
    <Container className="mt-5">
      <h2 className="text-start">Film di Harry Potter</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.imdbID}>
            <div className="movie-poster">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="img-fluid rounded"
                style={{ maxWidth: '200px', height: 'auto' }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyMovie;

