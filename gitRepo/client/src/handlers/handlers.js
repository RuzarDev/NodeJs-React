import axios from "axios";

   export const handleUpload = async (e,edits,setImageUrl) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', edits.img);

        try {
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setImageUrl(response.data.imagePath);
            console.log('Image uploaded successfully:', response.data.imagePath);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

export const handlerDelete = async (id,setI,who)=>{
    await fetch(`http://localhost:3000/${who}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            return response.json();
        })
        .then(updatedUserData => {
            console.log('User Deleted successfully:');
        })
        .catch(error => {
            console.error('Error Delete user:', error.message);
        });
    setI(prevState => prevState+1)
}