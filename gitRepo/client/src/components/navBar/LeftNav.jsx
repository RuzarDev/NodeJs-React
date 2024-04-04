import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAuthUser} from "../../app/userSlice";

const LeftNav = () => {
    const authUser = useSelector(state => state.AuthUser)
    const dispatch  = useDispatch();
    const handlerOut = ()=>{
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        localStorage.removeItem('admin')
        dispatch(setAuthUser({username: '', email: '', password: ''}))
    }
    return (
        <div className="leftside">
                {authUser.username ?
                    authUser.admin === 'true' ?
                        <div className="profile-dropdown">

                        <button className="profile-button">{authUser.username}</button>
                        <div className="dropdown-content">
                            <Link to='/admin'>Админ панель</Link>
                            <a onClick={()=>handlerOut()}>Выйти</a>
                        </div>
                        </div>

                    :
                        <div className="profile-dropdown">

                        <button className="profile-button">{authUser.username}</button>
                            <div className="dropdown-content">
                                <a onClick={() => handlerOut()}>Выйти</a>

                            </div>
                        </div>

                    :
                    <div className="auth__container">
                        <Link to={'/auth'} className="auth__link">Войти</Link>

                    </div>

            }


</div>
    );
};

export default LeftNav;