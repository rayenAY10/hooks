import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [movies, setMovies] = useState([
    // Initialize your movies data here
    // Example:
    {
      id: 1,
      title: 'avengers endgame',
      description: 'after some avengers and their family goes to realty stones the rest of avengers will return at time to bring all the stones to bring the back but after bringing them back thanos 2013 come to the present to kill them but all the avengers and wakanda and the guardians of the galaxy will team up and fight him ',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',
      rating: 8.4,

    },

    {
      id: 1,
      title: 'spider-man no way home',
      description: 'after peter s identity was revealed the world know him and he went to doctor strange to do somthingto delete this but he broke the spell and he bring his variants from another dimensions and the villains and he will team up with his variants to fight them',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
      rating: 9.3,

    },

    {
      id: 1,
      title: 'ant-man and the wasp quantumania',
      description: 'after jannet return from the quantum realm and cassie grew up she want to be like her dad and she make a satelie between quantum realm and and our realm and jannet want to destroy it because it s dangerous but it was to late and they moved on quantum realm and they seen the most iconic vilain kang the conqueror and ant-man will fight him',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYjg5YmUwN2ItNTE2MS00MGUzLThjZDYtODRlNDViMDdhZmYxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      rating: 7.6,

    },

    {
      id: 1,
      title: 'captain america civil war',
      description: 'third movie of captain america he will gonna show us a big fight between the avengers team',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg',
      rating: 7.4,

    },

    {
      id: 1,
      title: 'avengers infinity war',
      description: 'in this movie this will come at first time and he will took the infinity stones and the avengers will fight him',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
      rating: 8.8,

    },

    {
      id: 1,
      title: 'avengers age of ultron',
      description: 'This movie is the continue of the avengers movie new valains ultron',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
      rating: 8.1,

    },

    {
      id: 1,
      title: 'spider-man across the spider-verse',
      description: 'in this movie we gonna look on another adventure with miles morales in the spider-verse and new caracters will come',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg',
      rating: 8.49,

    },

    {
      id: 1,
      title: 'avengers',
      description: 'in this movie we will be the building of the avengers team',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      rating: 9.4,

    },

  
    // Add more movies as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (filters) => {
    const { title, rating } = filters;
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
      );
    });
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      {/* You can add a form to add new movies */}
    </div>
  );
}

export default App;
