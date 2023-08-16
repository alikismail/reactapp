import{BrowserRouter as Router,Route ,Routes}from 'react-router-dom'
import "./App.css";
import {Header ,Home,Popular,Games} from "./components/index";


const App =()=>{
return(
    <>
        <Router>    
            <Header  />
              <Routes>
              <Route path='V' element={<Popular/>}/>
              <Route path='' element={<Home/>}/>   
              <Route path='G'  element={<Games/>}/>
            </Routes>
        </Router>  
    </>
);
}
export default App
