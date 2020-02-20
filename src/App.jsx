import React from 'react';
import { useUser } from 'reactfire';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProviderContext } from './assets/states/provider';
import LoginScreen from './assets/components/login/LoginScreen';
import Home from './assets/views/Home';
// import AboutJob from './assets/components/CreateJob/AboutJob';
import Routerjob from './assets/views/RouterJob';
// import AddjobForm from './assets/components/CreateJob/CreateJob';
// import CreateProfile from './assets/views/CreateProfile';
import './App.css';

function App() {
  const user = useUser();

  return (
    <div className="App">
      <ProviderContext>
        <BrowserRouter>
          {!user && <LoginScreen />}
          {user && <Home />}
        </BrowserRouter>
      </ProviderContext>
    </div>
  );
}

export default App;
