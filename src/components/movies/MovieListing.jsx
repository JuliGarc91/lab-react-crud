import { Link } from 'react-router-dom';
import "../shows/Show.css"; // css used for shows display also can be used for movies display

const MovieListing = ({ movie }) => {
  return (
    <article className="show">
      <h3 className="title">
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      </h3>
      <p className="description">{movie.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {movie.listedIn}
        </p>
        <p>
          <span>Duration:</span> {movie.duration}
        </p>
      </aside>
    </article>
  );
}

export default MovieListing;