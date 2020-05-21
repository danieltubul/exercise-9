import React from 'react';
import './Styles/App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'

import Header from "./Components/Header"
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import HomePage from "./Pages/HomePage";
import AddNewPost from "./Pages/NewPost";
import PostPage from "./Pages/PostPage";

function App() {
  return (
      <div className="app-header">
          <Router>
        <Header/>

        <Switch>
            <Route path='/post/:id' component = {PostPage}/>}/>
            <Route path="/about" component={AboutMe}/>
            <Route path="/contact" component={ContactMe}/>
            <Route path="/add-post" component={AddNewPost}/>
            <Route path="/" component={HomePage}/>
        </Switch>
          </Router>
      </div>
  );
}

export default App;
