import React, { useState, createContext, useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import jwt_decode from "jwt-decode";

export const UserContext = createContext({});

export function UserProvider({ children }) {
    const { keycloak } = useKeycloak();

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const { token, authenticated } = keycloak;

        if (!authenticated) return;

        localStorage.setItem('access_token', token);

        const userTokenDecoded = jwt_decode(token);
        const { name, email } = userTokenDecoded;

        setUserName(name);
        setUserEmail(email);

    }, [keycloak]);

    const userContextObject = { userName, userEmail }

    return <UserContext.Provider value={userContextObject}>{children}</UserContext.Provider>
}