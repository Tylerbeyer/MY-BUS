import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './components/Login';
import './App.css';

function App() {
  const { user, token, logout, loading } = useContext(AuthContext);

  // Show a loading state while the app is checking for a token
  if (loading) {
    return <div>Loading application...</div>;
  }

  return (
    <div className="App">
      {user && token ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>You are logged in.</p>
          <button onClick={logout}>Logout</button>
          {/* The main application dashboard will go here in the future */}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
