import React from 'react'

export default props =>(
    <div className='zoom_buttons'>
    <button type="button" className="btn btn-success">
        <i className='fa fa-plus'></i>  
    </button>

    <button type="button" className="btn btn-info" onClick={props.zoomin}>
        <i className="fa fas fa-search-plus"></i>
    </button>

    <button type="button" className="btn btn-info" onClick={props.zoomout}>
        <i className="fa fas fa-search-minus"></i>
    </button>
</div>
)