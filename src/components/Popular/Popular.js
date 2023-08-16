import Cart from "../Cart/Cart"
import info from "./information"
import React,{Component} from "react"

class popular extends Component {
  constructor(){
   super()
   this.state={inf:info}
  }
  createcart(information){
   const cart=information.map(infor =>
     <Cart Name={infor.Name} src={infor.src} About={infor.About} youtube={infor.youtube}/>
     );
     return cart;
  }
   render(){
   return (
     <div className="Games">
       <h1> Most Popular </h1>
      {this.createcart(this.state.inf)}
    
     </div>
   )
 }
 }
 export default  popular