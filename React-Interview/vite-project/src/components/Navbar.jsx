import { Link } from "react-router-dom";
import "../styles.css"
import { useTheme } from "../theme-context";

const Navbar = () => {

    const {theme,toggleTheme}=useTheme();
    console.log(theme);
  return (
    <div className="navbar">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
    </div>
  );
};

export default Navbar;
