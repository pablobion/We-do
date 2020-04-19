import React from 'react'

export default props =>{

  const keyHandler = (e) =>{
    if(e.key === 'Enter'){
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    }
  }

  return (
    <div role='form' className='todoForm'>
     <div className='col-xs-12 col-sm-9 col-mid-10'>
            <input id='description' className='form-control' placeholder='Adicione uma Tarefa'
            value={props.description}
            onKeyUp={keyHandler}
            onChange={props.handleChange}
            ></input>
     </div>

     <div className='col-xs-12 col-sm-3 col-mid-2'>
         <div>

         <button className='btn btn-primary' onClick={props.handleAdd} >
           <i className='fa fa-plus'></i>  
         </button>

         <button className='btn btn-info' onClick={props.handleSearch}>
            <i className="fa fas fa-search"></i>
         </button>

         <button className='btn btn-warning' onClick={props.handleClear} >
           <i className='fa fa-close'></i>  
         </button>
         </div>
     </div>

 </div>
  )
}
