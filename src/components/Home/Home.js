import Firstcont from '../Firstcont/Firstcont'
import Container from'../Container/Container'
import Popular from '../Popular/Popular'
import Games from '../Games/Games'
const Home = (props) => {
  return (
    <div>
       <Firstcont>
             <div >
                <Container/>
                <Popular/>
                <Games/>
             </div>
            </Firstcont> 
            {props.children} 
    </div>
  )
}

export default Home
