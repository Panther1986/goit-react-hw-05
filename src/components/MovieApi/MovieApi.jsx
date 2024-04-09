import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODllZTM5MDY5Y2RkNmViYjliOWVkYjEyNGU4ZDRhYSIsInN1YiI6IjY2MGM1ZjcwOWM5N2JkMDE3Y2E1NzlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5GCyJnD3id-ojK0JfV0Hv6YdftvbhJvPg073sYnsrE";

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    toast.error("Ooooops something went wrong, please reload the page 😞");
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          query: query,
        },
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    toast.error("Ooooops something went wrong, please reload the page 😞");
    return [];
  }
};

export const fetchMovieDetails = async (moviesId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${moviesId}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    toast.error("Ooooops something went wrong, please reload the page 😞");
    return null;
  }
};

export const fetchMovieCast = async (moviesId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${moviesId}/credits`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.cast;
  } catch (error) {
    toast.error("Ooooops something went wrong, please reload the page 😞");
    return [];
  }
};

export const fetchMovieDataReviews = async (moviesId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3//movie/${moviesId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    toast.error("Ooooops something went wrong, please reload the page 😞");
    return [];
  }
};
