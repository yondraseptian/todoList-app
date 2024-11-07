import PropTypes from "prop-types";
import styles from "../styles/style.module.css";

export const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <div>
      <input  className={styles.searchBarInput}
        type="text"
        placeholder="cari berdasarkan judul..."
        value={keyword}
        onChange={keywordChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
