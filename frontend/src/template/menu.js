import React from 'react'

export default props =>(

    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='/'>
                    <i className='fa fa-calendar-check-o'> WedoApp</i>
                </a>
            </div>
        

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href='/cards'>Cards</a></li>
                    <li><a href='/wedos'>Wedos</a></li>
                    <li><a href='/about'>Sobre</a></li>              
                </ul>
            </div>
        </div>

    </nav>
)

