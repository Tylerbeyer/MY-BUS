import React, { createContext, useState, useEffect } from 'react';
import apiClient from '../api';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('auth_token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // When the app loads, check if a token exists
        if (token) {
            // Set the token in the api client headers
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // Fetch the user data
            apiClient.get('/user')
                .then(response => {
                    setUser(response.data);
                })
                .catch(() => {
                    // If token is invalid, remove it
                    localStorage.removeItem('auth_token');
                    setToken(null);
                    setUser(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [token]);

    /**
     * Handles user login.
     * @param {object} credentials - The user's email and password.
     */
    const login = async (credentials) => {
        const response = await apiClient.post('/login', credentials);
        const { access_token, user } = response.data;
        
        // Store the token in local storage
        localStorage.setItem('auth_token', access_token);
        
        // Set the token and user state
        setToken(access_token);
        setUser(user);

        // Set the token for all subsequent api requests
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    };

    /**
     * Handles user logout.
     */
    const logout = async () => {
        try {
            await apiClient.post('/logout');
        } catch (error) {
            console.error('Logout failed, but clearing client-side session anyway.', error);
        } finally {
            // Clear the user and token from state and local storage
            setUser(null);
            setToken(null);
            localStorage.removeItem('auth_token');
            // Remove the authorization header
            delete apiClient.defaults.headers.common['Authorization'];
        }
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
