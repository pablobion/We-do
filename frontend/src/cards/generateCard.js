import React from 'react'

export default props => {

    return (
    <div className='card 1' style={{width: props.width, height: props.height}} onClick={props.onClick}>
        <div className='card_image'>
            <img src='https://i.redd.it/b3esnz5ra34y.jpg'></img>
        </div>
    
        <div className="card_title title-white" style={{fontSize: props.fontSize}}>
            <p>{props.title}</p>
        </div>
    </div>
    )
   
}