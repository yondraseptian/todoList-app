import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import { ActionButton } from "../components/ActionButton";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSearchQuery } from "../redux/todoSlice";
import { SearchBar } from "../components/SearchBar";
import styles from "../styles/style.module.css";
import useSearch from "../hooks/useSearch";

const Home = () => {
  const dispatch = useDispatch();
  const { filter, todos } = useSelector((state) => state.todos);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const { query, setQuery, filteredData } = useSearch(todos, "title");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <h2>Your TodoList</h2>

      <SearchBar keyword={query} keywordChange={handleSearchChange} />

      <div className="filters">
        <select
          value={filter}
          onChange={handleFilterChange}
          className={styles.select} // Apply the CSS class from the module
        >
          <option value="all" className={styles.option}>
            Semua
          </option>
          <option value="completed" className={styles.option}>
            Selesai
          </option>
          <option value="uncompleted" className={styles.option}>
            Belum Selesai
          </option>
        </select>
      </div>

      <TodoList todos={filteredData} />

      <div className={styles.homepageAction}>
        <Link to="/add">
          <ActionButton>+</ActionButton>
        </Link>
      </div>
    </div>
  );
};

export default Home;
