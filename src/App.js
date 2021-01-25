import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signIn" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
