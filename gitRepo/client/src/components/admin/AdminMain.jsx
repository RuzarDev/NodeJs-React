import React from 'react';
import ModalWindow from "../Modals/ModalWindow";
import {Button} from "react-bootstrap";
import ModalPostEdit from "../Modals/ModalPostEdit";
import AdminHeader from "./AdminHeader";
import {handlerDelete} from "../../handlers/handlers";

const AdminMain = ({dataBaseUsers,dataBasePosts,menu,setI}) => {
    return (
        <div className="admin-main">
            <AdminHeader menu={menu} />
            {menu === "users" ?
                dataBaseUsers.map(item => (
                    <div className='user-item' key={item.id}>
                        <div className='user-password'>{item.id}</div>
                        <div className='user-email'>{item.email}</div>
                        <div className='user-username'>{item.username}</div>
                        <div className='user-password'>{item.password}</div>
                        <div className='user-password'>{item.admin ? "true" : "false"}</div>
                        <div className='user-password d-flex gap-5'>
                            <ModalWindow setI={setI} item={item} title={'edit'}/>
                            <Button onClick={() => handlerDelete(item.id,setI,'users')}>Delete</Button>
                        </div>

                    </div>
                ))
                :
                dataBasePosts.map(item => (
                    <div className='user-item' key={item.id}>
                        <div className='user-password'>{item.id}</div>
                        <div className='user-email'>{item.author}</div>
                        <div className='user-username'>{item.date}</div>
                        <div className='user-password'>{item.title}</div>
                        <div className='user-password d-flex gap-5'>
                            <ModalPostEdit title={'edit'} item={item} setI={setI}/>
                            <Button onClick={() => handlerDelete(item.id,setI,'posts')}>Delete</Button>
                        </div>

                    </div>
                ))

            }
        </div>
    );
};

export default AdminMain;