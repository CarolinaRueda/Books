import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Header from "../components/Header/Header";
import AllBooks from "../components/AllBooks/AllBooks";
import Completed from "../components/Completed/Completed";
import InfoBook from "../components/AllBooks/InfoBook/InfoBook";

function App() {
  return (
    <Router>
      <Header />
      <main className='all-container'>
        <Switch>
          <Route path='/homepage'>
            <HomePage />
          </Route>
          <Route path='/allbooks/books/:page/:book'>
            <InfoBook />
          </Route>
          <Route path='/allbooks/:page'>
            <AllBooks />
          </Route>
          <Route path='/allbooks'>
            <AllBooks />
          </Route>
          <Route path='/allbooks/completed'>
            <Completed />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
