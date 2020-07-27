import React, {useState} from 'react';
import './App.css';




function App() {
  const [role, setRole] = useState("guest");
  return (
    <div>
      <privateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
