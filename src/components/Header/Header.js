import './Header.css'
const Header=()=>{
  return(
    <div className='navbar'>
      <div className='icon' ></div>
      <div className='title'>
        <text>Anime <em>Watch</em></text>
      </div>
      <div className='list'>
        <ul className='list'>
        <li > <a href='/'>Home</a></li>
        <li><a href='/V'>Popular</a></li>
        <li><a href='/G'>Games</a> </li>

        </ul>
      </div>
    </div>
  )}
  export default Header ;
    
  
