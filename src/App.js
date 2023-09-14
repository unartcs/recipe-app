import "./App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Search />
        <Category />
        <Pages />
      </HashRouter>
    </div>
  );
}

export default App;
