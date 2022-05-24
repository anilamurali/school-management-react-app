import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstudent from './Component/Addstudent';
import Searchstudent from './Component/Searchstudent';
import Addfaculty from './Component/Addfaculty';
import Facultysearch from './Component/Facultysearch';
import Viewstudent from './Component/Viewstudent';
import Viewfaculty from './Component/Viewfaculty';
import Nav from './Component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Addstudent/>}/>
      <Route path='/stsearch' exact element={<Searchstudent/>}/>
      <Route path='/stview' exact element={<Viewstudent/>}/>
      <Route path='/addfaculty' exact element={<Addfaculty/>}/>
      <Route path='/fsearch' exact element={<Facultysearch/>}/>
      <Route path='/facultyview' exact element={<Viewfaculty/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
