import React, { useState} from 'react'
// import '../Login/node_modules/react-phone-number-input/style.css'
// import '../../../node_modules/react-phone-number-input/'
import PhoneInput from 'react-phone-number-input'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import './Signup.css'


const axios = require('axios').default 

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: {
              type: 'text',
              value: '',  
              rules: {
                  min_length: 2
              }
            },
            phone: {
                value: ''
            },
            password: {
                type: 'password',
                value: '',
                rules: {
                    max_length: 12,
                    min_length: 4
                }
            },
            issue: { 
                message: '',
                showIssue: false
            }
        }
        this.inputPassword = React.createRef()
    }

    
    //VALIDATIONS
    validateName = (name) => {
        if (name.length >= this.state.name.rules.min_length){
            console.log("valid name")
            return true 
        }
        return false
    }

    validatePhone = (phone) => {
        if(isPossiblePhoneNumber(phone)){
            console.log("valid phone")
            return true
        }
        return false
            
    }

    validatePassword = (password) => {
        const {max_length, min_length} = this.state.password.rules
        const regex = /[@!#$&_-]/
        
        if (password.length >= min_length && password.length <= max_length){
            if(password.match(regex)){
                return true
            }
        }
        return false            
    }
    //VALIDATION ENDS
    
    onSubmitHandler = (event) => {
        event.preventDefault()
        //NAME AND PASSWORD SHOULD NOT CONTAIN ONLY SPACES (Phone will not undergoes this scenario)
        if(this.state.name.value.trim().length && this.state.password.value.trim().length){
            
            if(this.validateName(this.state.name.value) && this.validatePhone(this.state.phone.value) &&
                this.validatePassword(this.state.password.value)){
                    console.log("axios")
                   
                    axios.post('http://localhost:3000/signup', {
                        name: this.state.name.value,
                        phone: this.state.phone.value,
                        password: this.state.password.value  
                    })
                    .then((response) => response.data.message)
                    .then((message) => {
                        if(message.includes('success'))
                            this.props.history.push('/login')
                        else 
                            this.setState({...this.state, issue: {message: message, showIssue: true}})  
                            
                    })
                    .catch((err) =>  console.log('error while adding user'))
                }
            else
              this.setState({...this.state, issue: {message: 'fields are not valid', showIssue: true}})  
        }
        else
           this.setState({...this.state, issue: {message: 'fields cant be empty', showIssue: true}})  
    }

    //ON CHANGE HANDLERS
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
    
    onChangeName = (event) => {
        let value = event.target.value 
        this.setState({...this.state, name: {...this.state.name, value: value}})
    }
    
    //ON CHANGE HANDLERS END
    
    checkBoxHandler = () => {
        
        if (this.inputPassword.current.type === "password") {
            this.inputPassword.current.type = "text";
        } else {
            this.inputPassword.current.type = "password";
        }
      }
      

    
    render() {
        console.log('rendered Signup')
        
        return(
            <div className="signup-login-div signup" id="signup-login-div" onSubmit={this.onSubmitHandler}>
                {this.props.MainInfo.lang == 'en' ? <h1>Sign up</h1> : <h1 id='ar'>تسجيل</h1>}
                <form className="signup-form-div">
                    
                    <div className="name-div">
                        {this.props.MainInfo.lang == 'en' ? <label htmlFor="name">Name</label> : <label id='ar' htmlFor="name" dir='rtl'>اسم</label>}
                        <input id='name' type={this.state.name.type} placeholder='First name' 
                        value={this.state.name.value} onChange={this.onChangeName} required/> 
                    </div>
                    

                    <div className="phone-div">
                        {this.props.MainInfo.lang == 'en' ?<label htmlFor="phone">Phone Number</label> : <label id='ar' htmlFor="phone" dir='rtl'>رقم الهاتف</label>}
                        <PhoneInput
                            id = "phone"
                            placeholder="Enter phone number"
                            value={this.state.phone.value}
                            onChange={this.onChangePhoneHandler}
                            // defaultCountry = {"LB"}                    
                            countries = {["US","GR", "KW", "LB"]}
                            required
                            />
                    </div>    
                                                
                    <div className="password-div">
                        {this.props.MainInfo.lang == 'en' ? <label htmlFor="password">Password</label> : <label id='ar' htmlFor="password" dir='rtl'>كلمه السر</label>}
                        <input id='password' ref={this.inputPassword} type={this.state.password.type} placeholder='Password' 
                        value={this.state.password.value} onChange={this.onChangePwdHandler} required/>
                    </div>   
                    
                    {this.state.issue.showIssue && <div className="issue-div"><ReportProblemIcon/><p>{this.state.issue.message}</p></div>}
                    
                    <div className="show-password-div">
                        <input type="checkbox" onClick={this.checkBoxHandler} />
                        {this.props.MainInfo.lang == 'en' ? <label>Show Password</label> : <label id='ar' dir='rtl'>عرض كلمة المرور</label>}                 
                    </div>     

                    <button type='submit' id={this.props.MainInfo.lang == 'ar' ? 'ar' : ''}>{this.props.MainInfo.lang == 'en' ? "Sign up" : "سجل"}</button>
                    
                </form>
            </div>
        )
    }
}

export default Signup
