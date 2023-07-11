// import logo from './logo.svg';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import ViewBlog from './pages/ViewBlog';
import UpdateBlog from './pages/UpdateBlog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/addBlog' element={<AddBlog />} />
          <Route path='/viewBlog/:id' element={<ViewBlog />} />
          <Route path='/updateBlog/:id' element={<UpdateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
