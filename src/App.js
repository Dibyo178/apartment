import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          </Switch>
      </Router>
  
  );
}

export default App;
