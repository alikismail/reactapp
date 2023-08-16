import React,{Component} from "react"
import info from "./Gamesinfo"
import Gamecart from "../Gamecart/Gamecart";
import "./Games.css";

class Games extends Component {
 constructor(){
  super()
  this.state={inf:info}
 }
 createcart(information){
  const cart=information.map(infor =>
    <Gamecart Name={infor.Name} src={infor.src} app={infor.app} />
    );
    return cart;
 }
  render(){
  return (
    <div className="Games">
      <h1>Games</h1>
     {this.createcart(this.state.inf)}
   
    </div>
  )
}
}

export default Games
