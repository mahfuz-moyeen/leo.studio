import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import MenuBar from './components/MenuBar/MenuBar';
import Register from './components/Login/Register/Register';
import './App.css';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
