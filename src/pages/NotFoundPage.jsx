import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Sorry, page not found 😞</p>

      <Link to="/">Click here to go home 😻</Link>
    </div>
  );
};

export default NotFound;
