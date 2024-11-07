import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import { ActionButton } from "../components/ActionButton";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSearchQuery } from "../redux/todoSlice";
import { SearchBar } from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const { filter, searchQuery } = useSelector((state) => state.todos);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <h2>Your TodoList</h2>

      <SearchBar keyword={searchQuery} keywordChange={handleSearchChange} />
      <div className="filters">
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">Semua</option>
          <option value="completed">Selesai</option>
          <option value="uncompleted">Belum Selesai</option>
        </select>
      </div>

      <TodoList />

      <div className="homepage__action">
        <Link to="/add">
          <ActionButton>+</ActionButton>
        </Link>
      </div>
    </div>
  );
};

export default Home;
