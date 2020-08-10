import React, {useState} from 'react';
import './App.css';
import PrivateRoutes from './private-routes/privateRoutes';




function App() {
  const [role, setRole] = useState(localStorage.getItem('role')?'user': 'guest');
  return (
    <div className="App">
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
