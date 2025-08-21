import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './components/Login';
import Layout from './components/Layout';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <Layout>
          {/* Dashboard content will be added here later */}
        </Layout>
      ) : (
        <Login />
      )}
    </div>
  );
}


export default App;
