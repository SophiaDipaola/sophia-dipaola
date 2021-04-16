

import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import routes from './config/routes'

import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      
     {routes}
    </div>
  );
}

export default App;
