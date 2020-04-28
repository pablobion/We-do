import React from 'react'
import Modal from './Modal'
import Wedo from '../../wedo/wedo.js'
import './sla.css'


export default props => (
    <div className='containerpage' style={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}}>
        <div className='infos'>    
            <h1>{props.name}</h1>
        </div>
        <div style={{width: '100%'}}>
            {/* <Modal className='delete'/> */}
            <div className='wedo'>

            <Wedo idcard={props.id}/>
            </div>
        </div>
    </div>
)