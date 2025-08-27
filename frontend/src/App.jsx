import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import './App.css';

function App() {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>; // Or a proper spinner component
  }

  return (
    <Routes>
      {isAuthenticated ? (
        // If the user IS authenticated, provide the main application routes.
        // The Layout component will wrap all these pages.
        <Route path="/" element={<Layout />}>
          {/* The "index" route automatically redirects from "/" to "/dashboard" */}
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          
          {/* A catch-all for any other authenticated route redirects to the dashboard */}
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>
      ) : (
        // If the user IS NOT authenticated, only show login routes.
        <>
          <Route path="/login" element={<Login />} />
          {/* Any other path will redirect to the login page */}
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}



export default App;
