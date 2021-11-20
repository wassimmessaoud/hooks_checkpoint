import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal} from 'react-bootstrap'; 
const Add = ({addMovie}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [rating,setRating] = useState(0);
    const handleSubmit =()=>{
        addMovie ({title, description, posterUrl, rating});
        setRating(0);
        setTitle('');
        setDescription('');
        setPosterUrl('');
        handleClose();
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(flase);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button variant="primary" onClick={handleShow}>
                Add Movie

            </button>
            < Modal show={show} onHide={handleClose}>
              <Modal.Header>
                  <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <input type ='text' name ='' placeholder ='set the title of your Movie' onChange={(e)=>setTitle(e.target.value)}/>
                  <br/>
                  <input type ='text' name ='' placeholder ='set the description of your Movie' onChange={(e)=>setDescription(e.target.value)}/>
                  <br/>
                  <input type ='text' name ='' placeholder ='set the posterUrl of your Movie' onChange={(e)=>setPosterUrl(e.target.value)}/>
                  <br/>
                  <input type ='text' name ='' placeholder ='set the rating of your Movie' min='0' max='5' onChange={(e)=>setRating(e.target.value)}/>
              </Modal.Body>
              <Modal.Footer>
                  <button variant="secondary" onCLick={handleClose}>
                      Close
                  </button>
                  <button variant="primary" onClick={handleSubmit}>
                      save Changes
                  </button>
              </Modal.Footer>
            </Modal>
                
           
        </div>
    )

}
export default Add