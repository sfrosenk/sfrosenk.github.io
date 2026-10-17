import { useEffect, useState } from "react";
import { fetchAbout } from "../api";

export default function About() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAbout()
      .then(setData)
      .catch(() => setError("Could not load about info. Is the backend running?"));
  }, []);

  if (error) return <p className="status">{error}</p>;
  if (!data) return <p className="status">Loading...</p>;

  const { currently_reading, strava_streak_days, strava_url, books_read_this_year } = data.life ?? {};

  return (
    <section className="about">
      <h1>{data.name}</h1>
      <p className="tagline">{data.tagline}</p>
      <p className="bio">{data.bio}</p>
      <ul className="links">
        {Object.entries(data.links).map(([label, url]) => (
          <li key={label}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="life-stats">
        <ul>
          <li>
            <span>currently reading: </span>
            {currently_reading?.title ? (
              <a href={currently_reading.goodreads_url} target="_blank" rel="noopener noreferrer">
                {currently_reading.title}
              </a>
            ) : (
              <span className="placeholder">—</span>
            )}
          </li>
          <li>
            <span>strava streak: </span>
            {strava_streak_days != null ? (
              <a href={strava_url} target="_blank" rel="noopener noreferrer">
                {strava_streak_days} days
              </a>
            ) : (
              <span className="placeholder">—</span>
            )}
          </li>
          <li>
            <span>books read this year: </span>
            {books_read_this_year != null ? (
              <span>{books_read_this_year}</span>
            ) : (
              <span className="placeholder">—</span>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}
