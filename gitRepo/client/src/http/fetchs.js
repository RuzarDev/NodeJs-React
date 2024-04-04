import axios from "axios";

export const fetchEdit = async (item,editedPost)=>{
 return await fetch(`http://localhost:3000/posts/${item.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedPost)
    });
}
export const fetchUpload = async (formData)=>{
  return  await axios.post('http://localhost:3000/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}