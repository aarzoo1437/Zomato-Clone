import React from 'react';
import './start.css'
// import './style.html'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const start = ()=>{

    return (
        <div className='body'>
            {/* NAVBAR */}
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">BLOG</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
                </ul>
            </div>
            </nav>

            {/* headings */}

            <h1>Make the most of your trips to...</h1>
            
            {/* BUTTONS */}
            <div className='bttns'>
                <div id="cold" className='mainPage'>
                    <button id="cb" className='btn'>
                        Cold Places
                    </button>
                </div>

                <div id="mild" className='mainPage'>
                    <button id="mb" className='btn'>
                        Mild Places
                    </button>
                </div>

                <div id="hot" className='mainPage'>
                    <button id="hb" className='btn'>
                        Hot Places
                    </button>
                </div>
            </div>
            
        </div>
    )
}


export default start;