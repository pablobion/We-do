import React from 'react'
import {Link} from 'react-router-dom'

export default props =>(
    <div className='zoom_buttons'>
        <Link to="/createcard">
        <button type="button" className="btn btn-success" onClick={props.createcard}>
            <i className='fa fa-plus'></i>  
        </button>
        </Link>

        <button type="button" className="btn btn-info" onClick={props.zoomin}>
            <i className="fa fas fa-search-plus"></i>
        </button>

        <button type="button" className="btn btn-info" onClick={props.zoomout}>
            <i className="fa fas fa-search-minus"></i>
        </button>
    </div>
)