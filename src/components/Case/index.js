import Estratega from '../../assest/img/estratega.svg';
import { InfoCase } from '../../views/InfoCase';
import './case.css'

export const Case = () => {
   return <div>
           <div className="title-case">
              <span className="case">Conoce tu portafolio</span>
              <span className="estratega"><img src={Estratega} alt="estratega"></img></span>
          </div>   
          <InfoCase/>    
   </div>

}