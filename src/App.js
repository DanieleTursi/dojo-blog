import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create';

function App() {
  return (
    <Router>
     <div className="App">
      <Navbar/>
      <div className="content">
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
         </Switch>
      </div>
     </div>
    </Router>
  );
}

export default App;
