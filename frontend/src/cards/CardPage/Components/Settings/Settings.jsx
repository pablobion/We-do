import React, {useState} from 'react'
import { Button, Modal} from 'react-bootstrap';



export default props =>{




   
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
    
        const handleShow = () => setShow(true);
      
            return (
              <>
                <Button variant="dark" onClick={handleShow}><i class="fa fas fa-cog"></i></Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{fontSize: 20}}>Você realmente deseja excluir este card?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Não será possivel reverter!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={() => props.delete()}>Delete</Button>
                  </Modal.Footer>
                </Modal>
              </>
            )
}
