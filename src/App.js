import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import { UserProvider } from './components/UserContext/UserContext';
import Delete from './components/Delete/Delete';
import Read from './components/Read/Read';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Switch>
              <Route path="/create">
                <Create></Create>
              </Route>
              <Route path="/edit/:id">
               <Edit />
              </Route>
              <Route path="/read/:id">
                <Read></Read>
              </Route>
              <Route path="/delete/:id">
                <Delete></Delete>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
