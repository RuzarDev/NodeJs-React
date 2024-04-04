import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, useNavigate} from "react-router-dom";

function SideBar({setMenu}) {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className={'w-100'}>
                Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Button className='w-100 mt-3' onClick={()=>navigate('/blog')}>Home</Button>
                    <Button className='w-100 mt-3' onClick={()=>setMenu('users')}>Users</Button>
                    <Button className='w-100 mt-3' onClick={()=>setMenu('posts')}>Posts</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar;