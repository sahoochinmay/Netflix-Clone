import React from "react";
import { useState, useEffect } from "react";
import axios from "../config/axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl , setTrailerUrl] =useState("")
  useEffect(() => {
    async function fetchData() {
      const request = await axios(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }
  const handleTrailer = (movie) =>{
    if(trailerUrl !== ""){
      setTrailerUrl("")
    }else{
      movieTrailer(movie?.name ,{tmdbId: movie?.id})
      .then((url) =>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'))
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie?.poster_path) ||
              (!isLargeRow && movie?.backdrop_path)) && (
              <img
              onClick={() =>handleTrailer(movie)}
                key={movie?.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
              />
            )
        )}
      </div>
      {trailerUrl !== "" ? <YouTube
        videoId={trailerUrl} 
        opts={opts}
      />: null}
    </div>
  );
};

export default Row;
