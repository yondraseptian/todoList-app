import PropTypes from "prop-types";

export const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <div className="search-bar">
      <input
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
