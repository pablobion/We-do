import React from 'react'



export default props =>{

    const renderRows = () => {
        const list = props.list || []// se vier na constante coloca no props se nao na []
        return list.map(wedo =>(
            <tr key={wedo._id}>
                <td className={wedo.done ? 'markedAsDone' : ''}>{wedo.description}</td>
                <td>
                    <button type="button" className="btn btn-success" onClick={() => props.handleMarkAsDone(wedo)}>
                        <i className="fa fa-check-circle"/>
                    </button>

                    <button type="button" className="btn btn-warning" onClick={() => props.handleMarkAsPending(wedo)}>
                        <i className="fa fas fa-undo" /*hide={!wedo.done}*/ />
                    </button>

                    <button type="button" className="btn btn-danger" onClick={() => props.handleRemove(wedo)}>
                    <i className="fa fa-trash-o" aria-hidden="true" />
                    </button>

            
                </td>
            
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}