import NavBar from './Components/NavBar';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
import { Link } from 'react-router-dom'

function App() {
    const title = ' welcome to sow blog'
  return (
    <Router>
      <div className="App">
        <NavBar />
      <div className = 'content'>
        <Switch>
          <Route exact path = '/'>
          <Home />
         </Route>
         <Route path = '/create'>
          <Create />
         </Route>
         <Route path = '/blogs/:id'>
          <BlogDetails />
         </Route>
         <Route path = '*'>
          <div> Page not found </div>
          <Link to = '/'> Go back </Link>
         </Route>
        </Switch>  
      </div>
      </div>
    </Router>
  );
}

export default App;
