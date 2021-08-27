import Home from '../../assest/icons/home.svg';
import List from '../../assest/icons/format list bulleted.svg';
import Invest from '../../assest/icons/invest.svg';
import User from '../../assest/icons/account circle.svg';
import More from '../../assest/icons/dots.svg';
import { useState, useEffect } from 'react';
import './footer.css';

 function Footer  ()  {
    const[show,setShow] = useState(false);    
    useEffect (window.onscroll = () => {        
        setShow(window.pageYOffset === 0 ? false : true);        
        return () => window.onscroll = null;   
    })

    return <footer className={show ? "sticky" : "Footer"}>     
               <div className="card__footer">      
                <div className="card__home">
                     <img src={Home} alt="Home"/>
                   </div>
                   <p className="footer1">Inicio</p>
                   <div className="card__history">
                     <img src={List} alt="List"/>
                   </div>
                   <p className="footer2">Historial</p>
                   <div className="card__plusmenu">
                     <img src={Invest} alt="Invest"/>
                   </div>
                   <p className="footer3">Ahorrar</p>
                   <div className="card__perfile">
                     <img src={User} alt="User"/>
                   </div>
                   <p className="footer4">Mi Perfil</p>
                   <div className="card__pluss">
                     <img src={More} alt="More"/>
                   </div>
                   <p className="footer5">Más</p>  
                        
               </div>
       </footer>
 
}

export default Footer;