import React from 'react';

const AdminHeader = ({menu}) => {
    return (
        <div className={menu === 'users' ? "user-item" : "post-item"}>
            <div className={menu === 'users' ? "user-email" : "post-id"}>Id</div>
            <div
                className={menu === 'users' ? "user-email" : "post-author"}>{menu === "users" ? "Email" : "Author"}</div>
            <div
                className={menu === 'users' ? "user-username" : "post-date"}>{menu === "users" ? "Username" : "Date"}</div>
            <div
                className={menu === 'users' ? "user-password" : "post-title"}>{menu === "users" ? "Password" : "Title"}</div>
            <div className={menu === 'users' ? "user-password" : ""}>{menu === "users" ? "admin" : ""}</div>
            <div className={menu === 'users' ? "user-password" : "post-actions"}>Actions</div>

        </div>
    );
};

export default AdminHeader;