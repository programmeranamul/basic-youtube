import "./App.css";
import Header from "./Components/Header/Header";
import RecomandedVideos from "./Components/RecomandedVideos/RecomandedVideos";
import SideBar from "./Components/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="main">
              <SideBar />
              <RecomandedVideos />
            </div>
          </Route>
          <Route to="/search/:searchText">
            <div className="main">
              <SideBar />
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
