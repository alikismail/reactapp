import "./Cart.css"
const Cart = (props) => {
 const youtube=props.youtube;
  const Buttonclick=(props)=>{
   window.open(youtube) ;
   
  }
  return (
   
    <div className="Cart">
     <img className="img" src={props.src}/>
    
     <div className="watch">
      <h4>{props.Name}</h4>
      <p>
     {props.About}
      </p>
      <button className="but" onClick={Buttonclick}>
       watch
      </button>
      </div>
    </div>
  )
}

export default Cart
