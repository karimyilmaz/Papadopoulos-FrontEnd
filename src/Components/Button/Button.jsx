import React from 'react'
import './Button.css'

// const colors = ['btn-blue','btn-yellow']

let Button = (props) => {
    // let color = ''
    // if(colors.includes(props.color)){
    //     color = props.color
    // }else{
    //     color = 'btn-blue'
    // }

    return (
        <button className={props.classn}>{props.content}</button>
    )
}


export default Button