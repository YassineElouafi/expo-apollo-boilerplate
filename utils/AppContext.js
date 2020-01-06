import React, { useState, useEffect, createContext } from "react";
import {AsyncStorage} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { ME_QUERY } from '@graphql';

export const AppContext = createContext();
export const AppProvider = props => {

    const {changeLoginState} = props;
    const { loading, error, data } = useQuery(ME_QUERY);
    const [user, setUser] = useState({});

    const _signout = () => {
        AsyncStorage.removeItem('AUTH_TOKEN');
        changeLoginState();
    }

    useEffect( ()=>{
        if(!loading) {
            if( ! data.hasOwnProperty('me') ) _signout();
            setUser(data.me);
        }
    } ,[loading])
    
    return (
        <AppContext.Provider value={{user,_signout}}>
            {props.children}
        </AppContext.Provider>
    )
}