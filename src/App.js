import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Boxes from "./components/Box";

const App = () => {
  return (
    <Router>    
      <div className="App">
        <Link to='/foo'>Go to foo</Link>
        <br />
        <Link to='/bar'>Go to bar</Link>
        <Switch>
          <Route path='/foo' component={Foo} />
          <Route path='/bar' component={Bar} />
        </Switch>
        <Boxes />
        <Boxes />
        <Boxes />
        <Boxes />
        <Boxes />
        <Boxes />
        <Boxes />
        <Boxes />
        <Boxes />
      </div>
    </Router>
  );
}

const Foo = () => {
  return <div>Foo</div>
}

const Bar = () => {
  return <div>Bar</div>
}

export default App;
