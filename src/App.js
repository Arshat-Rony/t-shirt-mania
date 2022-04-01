import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import { Route, Routes } from 'react-router-dom';
import GrandItem from './components/GrandItem/GrandItem';

function App() {
  return (
    <div className="App">
   <Header></Header>
   <Routes>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/order' element={<Orders></Orders>}></Route>
     <Route path='/granditem' element={<GrandItem></GrandItem>}></Route>
   </Routes>
    </div>
  );
}

export default App;
