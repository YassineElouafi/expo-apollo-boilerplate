import React, { useState, useEffect, createContext, useMemo } from "react";
import { useQuery } from '@apollo/react-hooks';
import { ME_QUERY } from '@graphql';


export const AppContext = createContext();
export const AppProvider = useMemo( props => {

    const { loading, error, data } = useQuery(ME_QUERY);
    const [user, setUser] = useState({});

    useEffect( ()=>{
        if(!loading && !user ) setUser(data.me);
    } ,[loading]);

    if(error) alert(`Error : ${error.message}`);
    
    return (
        <AppContext.Provider value={{user}}>
            {props.children}
        </AppContext.Provider>
    )
} )