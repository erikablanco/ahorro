import './infocase.css';
import './mediaquery.css';
import Donutrobot from '../../assest/img/holding_donut.svg';
import LogoSkandia from '../../assest/img/logo.png';
import Percent from '../../assest/icons/Frame 31.svg';
import Framerleft from '../../assest/icons/Frame left.svg';
import Frameright from '../../assest/icons/Frame right.svg';

export const InfoCase = () => {
    return <div className="main-case">
        
        
        <div  className="main-donut">           
            <span> <img  className="Donutrobot"src={Donutrobot} alt="Donutrobot"></img></span>            
        </div>
        <div  className="main-logos">           
            <span> <img  className="LogoSkandia"src={LogoSkandia} alt="Logoskandiat"></img></span>  
            <span> <img  className="Percent"src={Percent} alt="Percent"></img></span>        
        </div>
        <div  className="main-infocase">
            <span className="title-1">FIC Old Mutual Efectivo</span>
            <span className="title-2">$240.000</span>
            <span className="title-3">Tipo de activo</span>
            <span className="title-4">Renta Fija Depósito a la fija</span>
            <span> <img className="Framerleft"src={Framerleft} alt="Framerleft"></img></span>
            <span><img className="Frameright" src={Frameright} alt="Frameright"/></span>           
            <span className="title-5">Tu dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.</span>
        </div>            

    </div>
}