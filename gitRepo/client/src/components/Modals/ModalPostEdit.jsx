import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../styles/admin/edit.scss';
import {fetchEdit, fetchUpload} from "../../http/fetchs";
import {handleUpload} from "../../handlers/handlers";

function ModalWindow({ title, item, setI }) {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edits, setEdits] = useState({
        author: item.author,
        date: item.date,
        title: item.title,
        subtitle: item.subtitle,
        img: '',
        categories: item.categories
    });


    async function handleEdit() {

        const editedPost = { ...edits};
            if(imageUrl===''){
                editedPost.img = item.img
            }
            else {
                editedPost.img = `http://localhost:3000/${imageUrl}`; // Устанавливаем ссылку на изображение
            }
        try {
            const response = await fetchEdit(item,editedPost)
            if (!response.ok) {
                throw new Error('Failed to update post');
            }
            const updatedPostData = await response.json();
            console.log('Post updated successfully:', updatedPostData);
        } catch (error) {
            console.error('Error updating post:', error.message);
        }

        setI(prevState => prevState + 1);
        handleClose();
    }






    const handleChange = e => {
        const { name, value } = e.target;
        setEdits(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


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
                    <form className="edit-post-form">
                        <div className="form-group">
                            <label htmlFor="post_author">Author</label>
                            <input type="text" id="post_author" name="author" required onChange={handleChange}
                                   value={edits.author}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="post_date">Date</label>
                            <input type="text" id="post_date" name="date" required onChange={handleChange}
                                   value={edits.date}/>
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" id="post_title" name="title" onChange={handleChange}
                                   value={edits.title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="post_title">Subtitle</label>
                            <textarea id="post_title" name="subtitle" rows="10" required onChange={handleChange}
                                      value={edits.subtitle}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Categories</label>
                            <input type="text" name="categories" required onChange={handleChange}
                                   value={edits.categories}/>
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="file" name="image"
                                   onChange={e => setEdits({...edits, img: e.target.files[0]})}/>
                            <button onClick={(e) => handleUpload(e,edits,setImageUrl)}>Загрузить</button>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleEdit} variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;
