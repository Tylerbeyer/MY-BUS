import React from 'react';

/**
 * Main application layout component.
 * Includes a sidebar for navigation and a main content area.
 * @param {object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered in the main content area.
 */
const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar Navigation */}
      <aside style={{ width: '220px', background: '#f4f4f4', padding: '1rem' }}>
        <h2>MyBus</h2>
        <nav>

          <ul>
            <li style={{ listStyle: 'none', marginBottom: '1rem' }}>Dashboard</li>
            <li style={{ listStyle: 'none', marginBottom: '1rem' }}>Employees</li>
            <li style={{ listStyle: 'none', marginBottom: '1rem' }}>Customers</li>
            <li style={{ listStyle: 'none', marginBottom: '1rem' }}>Scheduling</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1>Welcome, Master Admin</h1>
        </header>
        {children}
      </main>
    </div>
  );
};

export default Layout;
