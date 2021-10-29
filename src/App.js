import React, { Component } from 'react';
import Movies from './components/movies';
import {Route,Redirect,Switch} from 'react-router-dom'
import Customers from "./components/customers";
import Rentals from "./components/common/rentals";
import NotFound from "./components/common/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/common/registerForm";
import './App.css';


class App extends Component {
    render() {
        return (
            <div>


                <NavBar />
                <main className ="container" >
                    <Switch>
                        <Route path ="/register" component={RegisterForm}/>
                        <Route path ="/movies" component={Movies}/>
                        <Route path ="/login" component={LoginForm}/>
                        <Route path ="/customers" component={Customers}/>
                        <Route path ="/rentals" component={Rentals}/>
                        <Route path ="/not-found" exact component={NotFound}/>
                        <Redirect from="/" exact to ="/movies"/>
                        <Redirect to="/not-found"/>
                    </Switch>

                </main>

            </div>

        )
    }
}

export default App;