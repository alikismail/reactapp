import{BrowserRouter as Router,Route ,Routes}from 'react-router-dom'
import "./App.css";
import {Header ,Home,Popular,Games} from "./components/index";


const App =()=>{
return(
    <>
        <Router>    
            <Header  />
              <Routes>
              <Route path='/v' element={<Popular/>}/>
              <Route path='/h' element={<Home/>}/>   
              <Route path='/g'  element={<Games/>}/>
            </Routes>
        </Router>  
    </>
);
}
export default App
