import './App.css';
import Header from "./Header/Header";
import Dashboard from './Dashboard/Dashboard';
import NotFound from './NotFound/NotFound';
import AddEmp from "./Employee/AddEmp";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UpdateEmp from './Employee/UpdateEmp';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>  
          <Route path='' element={<Dashboard/>}></Route>
          <Route path='showAll' element={<Dashboard/>}></Route>
          <Route path='addEmp' element={<AddEmp/>}></Route>
          <Route path='updateEmp' element={<UpdateEmp/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
