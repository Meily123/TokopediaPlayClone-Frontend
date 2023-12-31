import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchUser, User } from '../helper/users';

type UserContextType = {
    user: User | null;
    fetchUserData: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

type UserProviderProps = {
    children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUserData = () => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            fetchUser(authToken)
                .then((selfUser) => {
                    setUser(selfUser);
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ user, fetchUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
