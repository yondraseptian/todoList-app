import { Link } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import PropTypes from "prop-types";
export const Header = ({ toggleTheme, theme }) => {
  return (
    <header>
      <h1>
        <Link to="/">TodoList App</Link>
      </h1>
      <button onClick={toggleTheme} className="toggle-theme">
        {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  toggleTheme: PropTypes.func,
  theme: PropTypes.string,
};
