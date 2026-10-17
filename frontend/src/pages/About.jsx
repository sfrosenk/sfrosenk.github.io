import { useEffect, useState } from "react";
import { fetchAbout } from "../api";

export default function About() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAbout()
      .then(setData)
      .catch(() => setError("Could not load about info."));
  }, []);

  if (error) return <p className="status">{error}</p>;
  if (!data) return <p className="status">Loading...</p>;

  return (
    <section className="about">
      <h1>{data.name}</h1>
      <p className="tagline">{data.tagline}</p>
      <p className="bio">{data.bio}</p>
      <ul className="links">
        {Object.entries(data.links).map(([label, url]) => {
          const isMailto = url.startsWith("mailto:");
          return (
            <li key={label}>
              <a
                href={url}
                className={isMailto ? "" : "ext"}
                target={isMailto ? undefined : "_blank"}
                rel={isMailto ? undefined : "noopener noreferrer"}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
