import React, { useRef, useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import {Link} from 'react-router-dom'
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import {setCookie, getCookie} from '../../cookie'
import './Login.css'


const axios = require('axios').default 

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            phone: {
                type: 'text',
                value: ''
            },
            password: {
                type: 'password',
                value: ''
            },
            issue: { 
                message: '',
                showIssue: false
            }
        }
        this.inputPassword = React.createRef()
        
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        if(this.state.password.value.trim() != ''){
            
            axios.post('http://localhost:3000/login', {
                phone: this.state.phone.value,
                password: this.state.password.value
            })
            .then((response) => response.data)
            .then((data) => { //ON SUCCESS REDIRECT TO HOME PAGE , ON FAILURE STAY ON THE PAGE AND DISPLAY THE ISSUE MESSAGE
                console.log(data)
                if(data.token){
                    //SET THE COOKIE
                    console.log('success')
                    setCookie(data) //{token: ..., name: ..} to cookie local storage
                    this.props.MainInfo.setUserInfo(getCookie())
                    this.props.history.push('/') 
                }else 
                    this.setState({...this.state, issue: {message: data.message, showIssue: true }})
            
                })
            .catch((err) => console.log("error on login"))
        }
    }

    onChangePwdHandler = (event) => {
        let value = event.target.value
        console.log(value)
        this.setState({...this.state , password: {...this.state.password, value: value}})
    }

    onChangePhoneHandler = (event) => {
        console.log(event)
        console.log('onchange phone handler')
            if(typeof(event) == 'undefined'){
                this.setState({...this.state , phone: {...this.state.phone, value: ''}})
            }
        
        else {
            this.setState({...this.state , phone: {...this.state.phone, value: event}})
        }   
    }

    
    
    checkBoxHandler = () => {
        
        if (this.inputPassword.current.type === "password") {
            this.inputPassword.current.type = "text";
        } else {
            this.inputPassword.current.type = "password";
        }
      }
      
    
    render() {
        console.log('rendered')
        
        
        return(
            <div className="signup-login-div" onSubmit={this.onSubmitHandler}>
                {this.props.MainInfo.lang == 'en'? <h1>Login</h1> : <h1 id = 'ar'>تسجيل الدخول</h1>}
                <form className="login-form-div">
                    
                    <div className="phone-div">
                        {this.props.MainInfo.lang == 'en'? <label htmlFor="phone">Phone Number</label> : <label dir="rtl" htmlFor="phone" id = 'ar'>رقم الهاتف</label>}
                        <PhoneInput
                            id = "phone"
                            placeholder="Enter phone number"
                            value={this.state.phone.value}
                            onChange={this.onChangePhoneHandler}
                            countries = {["US","GR", "KW", "LB"]}
                            required
                            />
                    </div>    
                                                
                    <div className="password-div">
                        {this.props.MainInfo.lang == 'en'? <label htmlFor="password">Password</label> : <label dir="rtl" htmlFor="password" id = 'ar'>كلمه السر</label>}
                        <input id='password' ref={this.inputPassword} type={this.state.password.type} placeholder='Password' 
                        value={this.state.password.value} onChange={this.onChangePwdHandler} required/>
                    </div>
                    
                    <div className="show-password-div">
                        <input type="checkbox" onClick={this.checkBoxHandler} />
                        {this.props.MainInfo.lang == 'en' ? <label>Show Password</label> : <label id = 'ar'>عرض كلمة المرور</label>}                 
                    </div>     
                    
                    {this.state.issue.showIssue && <div className="issue-div"><ReportProblemIcon/><p>{this.state.issue.message}</p></div>}
                    
                    <button type='submit' id={this.props.MainInfo.lang == 'ar' ? 'ar' : ''}>{this.props.MainInfo.lang == 'en' ? "Login" : "تسجيل"}</button>

                </form>
                {this.props.MainInfo.lang == 'en' ? <p id='dont-have-account'>Dont have an account? <Link to="/signup">Signup</Link> Here</p> :
                <p id='dont-have-account'><span id='ar'> لا تملك حساب هنا <Link to="/signup">سجل</Link></span></p>}
            </div>  
        )
    }
}

export default Login