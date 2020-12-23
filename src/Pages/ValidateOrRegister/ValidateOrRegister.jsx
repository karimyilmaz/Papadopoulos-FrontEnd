import React from 'react'
import Login from '../../Components/Login/Login'
import Signup from '../../Components/Signup/Signup'
import MainContext from '../../context'
import './ValidateOrRegister.css'


let ValidateOrRegister = (props) => {
    const MainInfo = React.useContext(MainContext) 
    
     return(
        <div className="validate-register-container">
            <div className="validate-register-bg-div"></div>
            {(props.to === 'login')? <Login {...props} MainInfo={MainInfo}/> : <Signup {...props} MainInfo={MainInfo}/>}

        </div>
    )

}

export default ValidateOrRegister