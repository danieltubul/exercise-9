import React from 'react';
import './Styles/App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'

import Header from "./Components/Header";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import HomePage from "./Pages/HomePage";
import AddNewPost from "./Pages/NewPost";
import PostPage from "./Pages/PostPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            isLoggedIn: false,
            firstname: '',
            user_id: '',
        }
    }

    setLoginToTrue = (e) => {
        this.setState({
            isLoggedIn: true
        })
    }

    setLoginToFalse =(e) =>{
        this.setState({
            isLoggedIn: false
        })
    }


    setNameAndId = (data) => {
        this.setState({
            firstname: data.first_name,
            user_id: data.user_id,
        })

    }

    render (){
        return (
            <div className="app-header">
                <Router>
                    <Header isLoggedIn={this.state.isLoggedIn} firstname={this.state.firstname} user_id={this.state.user_id} onLogout={this.setLoginToFalse}/>
                    <Switch>
                        <Route path ="/register" component={RegisterPage}/>
                        <Route path="/login" component={() => <LoginPage onLoginSuccess={this.setLoginToTrue} changeNameAndIdOnLoginSuccess={this.setNameAndId} />}/>
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
}

export default App;
