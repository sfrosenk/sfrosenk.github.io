import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <span className="site-name">Sarah Rosenkrantz</span>
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}
