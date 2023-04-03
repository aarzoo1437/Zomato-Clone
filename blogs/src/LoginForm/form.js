import React from 'react'
import "./form.css"
const form = () =>{
    return (
        <div className='form'>
            <form action=''>
                
                <input placeholder='Enter username' type={"text"} id = "username" className='input'></input>
                <br></br>
                <input placeholder='Enter Password' type={"password"} id = "password" className='input'></input>
                <br></br>
                <button type='submit' id='submit'>Submit</button>
                <br></br>
                <a id='forgot' href='#'>forgot password? || </a>
                <a id='create' href='#'>create account</a>
            </form>
        </div>
    )
}

export default form;

