import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import the AuthContext


/**
 * Main application layout component.
 * Includes a sidebar for navigation and a main content area.
 * @param {object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered in the main content area.
 */
const Layout = () => {
  const { isAuthenticated, logout } = useContext(AuthContext); // Get auth state and logout function

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar Navigation */}
      <aside style={{ width: '220px', background: '#ffffff', padding: '1rem', borderRight: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>MyBus</h2>
        <nav style={{ flex: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <Link to="/dashboard" style={{ textDecoration: 'none', color: '#333', fontSize: '1.1rem', display: 'block', padding: '0.5rem 1rem', borderRadius: '5px', transition: 'background-color 0.2s' }}>Dashboard</Link>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <Link to="/employees" style={{ textDecoration: 'none', color: '#333', fontSize: '1.1rem', display: 'block', padding: '0.5rem 1rem', borderRadius: '5px', transition: 'background-color 0.2s' }}>Employees</Link>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              {/* Using a non-functional link for now */}
              <span style={{ color: '#999', fontSize: '1.1rem', display: 'block', padding: '0.5rem 1rem' }}>Customers</span>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              {/* Using a non-functional link for now */}
              <span style={{ color: '#999', fontSize: '1.1rem', display: 'block', padding: '0.5rem 1rem' }}>Scheduling</span>
            </li>
          </ul>
        </nav>
        
        {/* Logout Button */}
        {isAuthenticated && (
          <div>
            <button 
              onClick={logout} 
              style={{ 
                width: '100%', 
                padding: '0.75rem 1rem', 
                fontSize: '1.1rem', 
                color: 'white', 
                backgroundColor: '#d9534f', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              Logout
            </button>
          </div>
        )}
      </aside>

      {/* Main Content Area - Renders the active child route */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto', backgroundColor: '#f7f7f7' }}>
        <Outlet />
      </main>
    </div>
  );
};


export default Layout;
