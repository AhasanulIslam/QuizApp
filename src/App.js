import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import From from './component/Admin/From';
import Login from './component/Admin/Login';
import Navber from './component/Navber';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     
     {/* <From /> */}
     {/* <Login /> */}
     <Routes>

     <Route exact path='/signup' element={< From />}></Route>
     <Route exact path='/' element={< Login />}></Route>
     <Route exact path='/nav' element={< Navber />}></Route>


     </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
