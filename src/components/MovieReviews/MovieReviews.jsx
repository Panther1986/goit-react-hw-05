import { useState, useEffect } from "react";
import { fetchMovieDataReviews } from "../MovieApi/MovieApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchMovieDataReviews(moviesId);
        setReviews(reviewsData);
      } catch (error) {
        toast.error("Ooooops something went wrong, please reload the page 😞");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [moviesId]);
  if (loading) {
    return <div>Loading, please wait 🤔</div>;
  }

  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default MovieReviews;
