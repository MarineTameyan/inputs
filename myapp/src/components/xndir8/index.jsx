import React, { useState } from "react";
import "./style.css"

export const Xndirut = () =>{
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [bordercolor, setBorderColor] = useState('black')

    const handleLoginChange = (e) =>{
        setLogin(e.target.value)
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    const handleButtonChange = () =>{
        if(login.length && password.length){
            setBorderColor('green')
        }else{
            setBorderColor('red')
        }
    }

    return <div className="validation">
        <label>
            <input type="text" placeholder="Login" onChange={handleLoginChange} style={{borderColor: bordercolor}}/>
        </label>
        <label>
            <input type="password" placeholder="Password" onChange={handlePasswordChange} style={{borderColor: bordercolor}}/>
        </label>
        <button onClick={handleButtonChange}>Click</button>
    </div>
}