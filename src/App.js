
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components';
import Signin from './components/pages/signin';
import Signup from './components/pages/signup';
import Cardy from './components/Card/indexx.js';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    
      <div>
        <Navbar/>
        <div id="content">

        
       <Routes>
       <Route path='/' element={<Cardy/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
          <Route path="/signin" element={<Signin/>} ></Route>
          <Route path="/signup" element={<Signup/>}></Route>

       </Routes>
       </div>
     </div>
    
  );
}

export default App;
