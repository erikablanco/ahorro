import './navbar.css';
import './mediaquery.css';
import Bell from '../../assest/icons/bell.svg';

function NavBar () {
   return <div  className="navbar" >
           <span className="text-1">Hola, Camila</span>
           <span className="bell"><img src={Bell} alt="bell"></img></span>
         </div>
   
}

export default NavBar;