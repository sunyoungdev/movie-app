import React, { Component } from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import './assets/scss/reset.scss';
import './assets/scss/App.scss';

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const API_KEY = '30681930d9f8a4d49ec75249be9647a1';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const data = await axios.get(url);
    const movies = data.data.results;

    this.setState({
      movies,
      isLoading: false
    });
    console.log(this.state.movies);

  };

  componentDidMount () {
    this.getMovies();
  };

  render() {
    const { isLoading } = this.state
    return (
      <section className="container">
        {
          isLoading 
          ? <div className="loading">
              <span className="loader__text">Loading..</span>
            </div>
          : <div className="movie">
              {this.state.movies.map((movie) => {
                return (
                  <Movie 
                    id={movie.id}
                    title={movie.title}
                    release={movie.release_date}
                    poster={movie.poster_path}
                    overview={movie.overview}
                    genres={movie.genre_ids}
                  />
                );
              })}
            </div>
        }
      </section>
    );
  }
}

export default App;