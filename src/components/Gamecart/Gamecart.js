import "./Gamecart.css"
import React from 'react'

const Gamecart = (props) => {
  const app=props.app;
  const Buttonclick=(props)=>{
   window.open(app) ;
   
  }
  return (

       <div className="game-cart">
     <img className="img-game" src={props.src}/>
    
     <div className="watch">
      <h4>{props.Name}</h4>
      <p>
     {props.About}
      </p>
      <button className="but-install" onClick={Buttonclick} >
       install
      </button>
      </div>
    </div>
   
  )
}

export default Gamecart
