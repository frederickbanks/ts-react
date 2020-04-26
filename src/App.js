import React from "react";
import "./App.css";
import {AppHeader} from "./components/AppHeader";
import {MainMenu} from './components/MainMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import './assets/css/fontello.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'



library.add(faTwitter, faFacebook, faAngleDown)
 

function App() {
  return (
    <div>
      <>
        <AppHeader />
        <MainMenu />

      </>
    </div>
  );
}

export default App;
