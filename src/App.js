import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//  STYLES //
import './App.css';
//  STYLES END  //

//  PAGES  //
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
//  PAGES END  //

//  COMPONENTS  //
import Image from "./components/Image";
import CookiesBox from "./components/CookiesBox";
//  COMPONENTS END  //

//  IMAGES  //
import logo from "./components/img/icons/logo.png";
//  IMAGES END  //


function App(){
  return(
    <Router>
      <div className="App">

        <header>
          <a id="logo" href="/"><Image source={logo} sourceBigger={logo} alt="fotoatelje logo" /></a>
          <nav id="desktopNavigation">
            <Link to="/">Hem</Link>
            <Link to="/services">Kategori</Link>
            <Link to="/contact">Kontakt</Link>
          </nav>
        </header>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
        
        <Footer/>
        <CookiesBox/>
      </div>
    </Router>
  );
}

export default App;