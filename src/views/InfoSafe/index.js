import './infosafe.css';
import IMG5 from '../../assest/img/IMG.5.png';
import IMG4 from '../../assest/img/IMG.4.png';
import IMG3 from '../../assest/img/IMG.3.png';
import Divider from '../../assest/icons/divider.svg';



 const InfoSafe = () => {
    return <div className="main-card-safe">
        <div>
          <span className="title-safe--1">10 gastos que debes evitar</span>
          <span className="text-1">Aaunque el 66% de los adultos recibió educación para el ahorro, el 44% ahorra de manera formal.</span>
        </div> 
        <div>  
          <span> <img  className="IMG5"src={IMG5} alt="IMG5"></img></span>
        </div> 
        <div>
          <span> <img  className="Divider"src={Divider} alt="Divider"></img></span>
        </div> 
        <div>
          <span className="title-safe--2">10 gastos que debes evitar</span>
          <span className="text-2">Aaunque el 66% de los adultos recibió educación para el ahorro, el 44% ahorra de manera formal.</span>
        </div> 
        <div>
           <span> <img  className="IMG4"src={IMG4} alt="IMG4"></img></span>
        </div>        
        <div>
          <span> <img  className="Divider"src={Divider} alt="Divider"></img></span>
        </div>
        <div>
          <span className="title-safe--3">10 gastos que debes evitar</span>
          <span className="text-3">Aaunque el 66% de los adultos recibió educación para el ahorro, el 44% ahorra de manera formal.</span>
        </div> 
        <div>          
          <span> <img  className="IMG3"src={IMG3} alt="IMG3"></img></span>
        </div>            

    </div>
}

export default InfoSafe;