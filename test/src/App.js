import React from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import Users from './components/Users/Users';


const App = () => {

    return (
            <div className='app-wrapper'>
             

                <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/:userId?'
                           render={ () => <UsersContainer/> }/>
                </Switch>


                </div>
            </div>
        )
}

export default App;