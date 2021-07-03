import './App.css';
import './custom.css';
import {Fragment} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Route,Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <Fragment>
      <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route exact path="/about" component={About}  />
            <Route exact path="/contact" component={Contact}  />
            <Route exact path="/service" component={Services}  />
            <Redirect to="/" />
          </Switch>
      <Footer/>
    </Fragment>
  );
}

export default App;
