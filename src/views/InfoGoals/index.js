import './infogoals.css';
import './mediaquery.css';
import Lapto from '../../assest/img/IMG.1.png';
import Palm from '../../assest/img/IMG.2.png';
import Donut20 from '../../assest/icons/donut20.svg';
import Donut0 from '../../assest/icons/donut0.svg';
import  Barra from '../../assest/icons/Vector 4.svg';

export const InfoGoals = () => {
    return <div className="container-01">        
        
        
        <div  className="main-product-left">
            <span><img className="palm" src={Palm} alt="palm"/></span>
            <span className="product-titleone">Viaje a Islas Canarias</span>
            <span> <img  className="barra"src={Barra} alt="barra"></img></span>
            <div className="bottom-card">
            <span><img className="donut20" src={Donut20} alt="donut20"/></span>
            <span className="value-1">$8.000.000</span>
            <span className="value-2">$1.630.000</span>
            </div>
        </div>

        <div  className="main-product-rigth">
            <span><img className="laptop" src={Lapto} alt="laptop"/></span>
            <span className="product-titletwo">Macbook Pro</span>
            <span> <img className="barra"src={Barra} alt="barra"></img></span>
            <span><img className="donut0" src={Donut0} alt="donut0"/></span>
            <span className="value-3">$0</span>
            <span className="value-4">$7.000.000</span>
        </div>            

    </div>
}