import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { useTheme } from "./context/ThemeContext";
import { AddPage } from "./pages/AddPage";
import { EditPage } from "./pages/EditPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="app-container" data-theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;