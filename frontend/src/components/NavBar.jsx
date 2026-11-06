import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <nav>
      
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
        About
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
        Projects
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
        Blog
      </NavLink>
      <ThemeToggle />
    </nav>
  );
}
