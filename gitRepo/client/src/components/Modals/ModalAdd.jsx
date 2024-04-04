import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import {handleUpload, Upload} from "../../handlers/handlers";

function ModalAdd({ title, setI }) {
    const [imageUrl, setImageUrl] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setEdits({
            author: '',
            date: '',
            title: '',
            subtitle: '',
            img: '',
            categories: ''
        });
    };
    const handleShow = () => setShow(true);
    const [edits, setEdits] = useState({
        author: '',
        date: '',
        title: '',
        subtitle: '',
        img: '',
        categories: ''
    });



    const handleAddPost = async () => {
        try {
            const newPost = { ...edits,categories:edits.categories.split(','),img:`http://localhost:3000/${imageUrl}` };
            const response = await axios.post('http://localhost:3000/posts', newPost, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Post successfully added', newPost);
        } catch (e) {
            console.error('Error add post');
        }
        setI(state=>state+1)
        handleClose()
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setEdits(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <Button className='w-100 mt-2' variant="primary" onClick={handleShow}>
                {title}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="edit-post-form">
                        <div className="form-group">
                            <label htmlFor="post_author">Author</label>
                            <input type="text" id="post_author" name="author" required onChange={handleChange}
                                   value={edits.author} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="post_date">Date</label>
                            <input type="text" id="post_date" name="date" required onChange={handleChange}
                                   value={edits.date} />
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" id="post_title" name="title" onChange={handleChange}
                                   value={edits.title} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="post_title">Subtitle</label>
                            <textarea id="post_title" name="subtitle" rows="10" required onChange={handleChange}
                                      value={edits.subtitle}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Categories</label>
                            <input type="text" name="categories" required onChange={handleChange}
                                   value={edits.categories} />
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="file" name="image"
                                   onChange={e => setEdits({ ...edits, img: e.target.files[0] })} />
                            <button onClick={(e) => handleUpload(e,edits,setImageUrl)}>Загрузить</button>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddPost}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAdd;
