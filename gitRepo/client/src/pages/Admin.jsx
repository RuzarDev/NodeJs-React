import React, { useEffect, useState } from 'react';
import SideBar from "../components/SideBar";
import '../styles/admin/Admin.scss'
import ModalAdd from "../components/Modals/ModalAdd";
import AdminMain from "../components/admin/AdminMain";
const Admin = () => {
    const [dataBaseUsers, setDataBaseUsers] = useState([]);
    const [i, setI] = useState(0)
    const [menu, setMenu] = useState('')
    const [dataBasePosts, setDataBasePosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/users");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setDataBaseUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                // Handle error (e.g., set an error state)
            }
        };
        const fetchUsers =async ()=>{
            await fetch('http://localhost:3000/posts').then(response=>response.json()).then(data=>setDataBasePosts(data.posts))
        }
        fetchUsers()
        fetchData();
    }, [i]);






    return (

        <div>
            <div className='w-100'>
                <SideBar setMenu={setMenu}/>
                <ModalAdd title={'Add post'} setI={setI}/>
            </div>
            <div className="admin-container mt-2">
                <AdminMain dataBasePosts={dataBasePosts} dataBaseUsers={dataBaseUsers} menu={menu} setI={setI}/>
            </div>
        </div>
    );
};

export default Admin;
