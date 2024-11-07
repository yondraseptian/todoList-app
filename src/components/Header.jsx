import { Link } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import PropTypes from "prop-types";
import styles from "../styles/style.module.css";

export const Header = ({ toggleTheme, theme }) => {
  return (
    <header>
      <h1>
        <Link to="/">TodoList App</Link>
      </h1>
      <button onClick={toggleTheme} className={styles.toggleTheme}>
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
