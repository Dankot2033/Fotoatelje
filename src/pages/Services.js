import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//  PAGES  //
import Gravid from "./packages/Gravid";
import Nyfödd from "./packages/Nyfödd";
import Barn from "./packages/Barn";
import Porträtt from "./packages/Porträtt";
import Familj from "./packages/Familj";
//  PAGES END  //

const Services = () => {
    return(
        <Router>
            <main id="services">
                <header>
                    <nav id="packageNavigation">
                        <Link to="/services/gravid">* Gravid *</Link>
                        <Link to="/services/nyfödd">* Nyfödd *</Link>
                        <Link to="/services/barn">* Barn *</Link>
                        <Link to="/services/porträtt">* Porträtt *</Link>
                        <Link to="/services/familj">* Familj *</Link>
                    </nav>
                </header>

                <Switch>
                    <Route path="/services/gravid"><Gravid /></Route>
                    <Route path="/services/nyfödd"><Nyfödd /></Route>
                    <Route path="/services/barn"><Barn /></Route>
                    <Route path="/services/porträtt"><Porträtt /></Route>
                    <Route path="/services/familj"><Familj /></Route>
                </Switch>
            </main>
        </Router>
    );
}

export default Services;