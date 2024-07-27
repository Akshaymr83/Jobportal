
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './compnents/Login/Login';
import DashBoard from './compnents/Home/Home';
import Form from './compnents/Apply';
import Profile from './compnents/Home/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<DashBoard/>} />
          <Route path="/apply" element={<Form/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;