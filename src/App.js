import Addtask from './component/Addtask';
import './App.css';
import Home from './component/Home';
import Landing from './component/Landing';
import Login from './component/Login';
import Signup from './component/Signup';
 import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Tasklist from './component/Tasklist';
import Edit from './component/Edit';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/Addtask">
            <Addtask/>
          </Route>
          <Route path="/Edit:id">
            <Edit/>
          </Route>
          <Route path="/tasklist">
            <Tasklist/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

