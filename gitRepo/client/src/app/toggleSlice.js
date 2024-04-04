import {createSlice} from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name:'isDark',
    initialState: {value:false},
        reducers: {
        toggle:state=>{
            state.value = !state.value
        }
        }
}
)


export const {toggle} = toggleSlice.actions
export default toggleSlice.reducer