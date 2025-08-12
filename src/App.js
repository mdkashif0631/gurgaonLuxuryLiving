import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Elan from './PLP/Elan';
import Trump from './Trump_plp/Trump';


function Layout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elanpresidential" element={<Elan />} />
        <Route path="/trumptower" element={<Trump />} />
      </Routes> 
    </>
  );
}


function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
