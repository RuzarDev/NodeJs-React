import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
        name:'authUser',
        initialState: {username:'',email:'',password:'',isAuth:false,admin:false},
        reducers: {
            setAuthUser:(state,action)=>{
            const {username,email,password,isAuth,admin} = action.payload

                state.username = username;
                state.email = email;
                state.password = password;
                state.isAuth = isAuth;
                state.admin = admin;
            }
        }
    }
)


export const {setAuthUser} = userSlice.actions
export default userSlice.reducer