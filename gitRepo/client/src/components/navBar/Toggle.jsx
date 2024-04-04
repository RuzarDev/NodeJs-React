import React from 'react';
import '../../styles/navBar/Toggle.scss'
import {useDispatch, useSelector} from "react-redux";
import {toggle} from "../../app/toggleSlice";
const Toggle = () => {
    const isDark = useSelector(state => state.Dark.value)
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(toggle())
    }

    return (
        <div className='toggle-container'>
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={()=>handleClick()}
                checked={isDark}
            />
            <label htmlFor="check">Dark mode</label>
            
        </div>
    );
};

export default Toggle;