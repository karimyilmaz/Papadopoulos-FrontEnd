import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import Hero from './Components/Hero/Hero'
import Home from './Pages/Home/Home'
import Card from './Components/Card/Card'
import Button from './Components/Button/Button'
import Subscribe from './Components/Subscribe/Subscribe'
import {MainContext} from './context'
import {getCookie} from './cookie'
import './App.css';
import ValidateOrRegister from './Pages/ValidateOrRegister/ValidateOrRegister'
 

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      lang: 'en',
      setLang: (language) => {
        this.setState({...this.state, lang: language})
      },
      user_info: getCookie(), 
      setUserInfo: (userinfo) => {
        this.setState({...this.state, user_info: userinfo})
      }
    }
  }
  
  render(){
    console.log('app rendered', this.state)
    return (

        <div>
          <Router>
            
            <MainContext.Provider value={this.state}>
              <switch>
                  < Route  exact path='/login' render={(props) => < ValidateOrRegister  {...props} to='login'/> } />
                  < Route exact path='/signup' render={(props) => < ValidateOrRegister  {...props} to='signup'/> } />
                  < Route  exact path='/' component={Home} />
              </switch>
            </MainContext.Provider>    
            
          </Router>    

        </div>
            
    );
  }
}

export default App;

    