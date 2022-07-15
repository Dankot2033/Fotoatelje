import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ReactGA from 'react-ga';

//Google Analytics cookies are waiting for users consent
if(sessionStorage.getItem("cookieConsent") === "given"){
  ReactGA.initialize("UA-130316272-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log("GA enabled");
}else{
  window['ga-disable-UA-XXXXXX-Y'] = true;
  console.log("/index.js: Google Analytics waiting for cookie consent");
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);