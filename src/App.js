import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MenuBar } from './Components/Menu bar/MenuBar';
import { HomePage } from './Pages/HomePage';
import { Footer } from './Components/Footer/Footer';
import { Discover } from './Components/Discover/Discover';

function App() {
  return (
   <Router>
   <MenuBar/>
    <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/discover' element={<Discover/>} ></Route>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
