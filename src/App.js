// import logo from './logo.svg';
import './App.css';
import Head from './components/Head/Head';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* RESUME */}
        <Head></Head>
        <About></About>
        <Resume></Resume>
        <Works></Works>
        <Contact></Contact>
      </header>
      <body>
        <Router>
          <Switch>
            <Route exact path="/Head" component={Head}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Contact" component={Contact}></Route>
            <Route exact path="/Resume" component={Resume}></Route>
            <Route exact path="/Works" component={Works}></Route>
          </Switch>
        </Router>
        
      

      </body>
    </div>
  );
}

export default App;
