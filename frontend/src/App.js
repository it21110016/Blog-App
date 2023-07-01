// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import ViewBlog from './pages/ViewBlog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path='/addBlog' element={<AddBlog/>}/>
          <Route path='/ViewBlog/:id' element={<ViewBlog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
