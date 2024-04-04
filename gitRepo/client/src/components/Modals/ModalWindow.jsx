import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Card, Form, FormControl, Row} from "react-bootstrap";


function ModalWindow({title,item,setI}) {
    const [show, setShow] = useState(false);
    const [edits, setEdits] = useState({username:item.username,email:item.email,password:item.password,isAdmin:item.admin})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const  handlerEdit = async ()=>{
        const editedUser = {email:edits.email,username:edits.username,password:edits.password,admin:edits.isAdmin}
       await fetch(`http://localhost:3000/users/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedUser)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update user');
                }
                return response.json();
            })
            .then(updatedUserData => {
                console.log('User updated successfully:', updatedUserData);
            })
            .catch(error => {
                console.error('Error updating user:', error.message);
            });
        setI(prevState => prevState+1)
        handleClose()
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {title}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card className="p-5">
                        <Form className='d-flex flex-column'>
                            <h3>email</h3>

                            <Form.Control
                                onChange={(e)=>setEdits({...edits,email:e.target.value})}
                                value={edits.email}
                                className={'mt-3'}/>
                            <h3>username</h3>

                            <Form.Control
                                onChange={(e)=>setEdits({...edits,username: e.target.value})}
                                value={edits.username}

                                className={'mt-3'}
                            />
                            <h3>password</h3>

                            <Form.Control
                                onChange={(e)=>setEdits({...edits,password: e.target.value})}
                                value={edits.password}

                                className={'mt-3'}
                            />
                            <h4 className={'mt-2'}>isAdmin</h4>
                             <Form.Switch
                                 onChange={(e)=>setEdits({...edits,isAdmin: e.target.checked})}
                                 checked={edits.isAdmin}
                                 className='mt-3'
                             />
                        </Form>
                    </Card>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>handlerEdit()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;