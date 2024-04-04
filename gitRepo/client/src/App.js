import React from 'react';
import './styles/app.scss'
import {Provider, useDispatch} from "react-redux";
import store from "./app/store";
import AppRouter from "./components/AppRouter";

const App = () => {

    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
};

export default App;