import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import MenuBar from './components/MenuBar/MenuBar';
import Blog from './components/Pages/Blog/Blog';
import Home from './components/Pages/Home/Home/Home';
import About from './components/Pages/About/About'
import Login from './components/Pages/Login/Login/Login';
import Register from './components/Pages/Login/Register/Register';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import User from './components/Pages/User/User';
import './App.css';
import NotFound from './components/Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut/>
          </RequireAuth>
        }/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
