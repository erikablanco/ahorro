import IMG from '../../assest/img/thumb.png';
import Play from '../../assest/icons/play_circle.svg';
import Vector from '../../assest/img/Vector 6.png';
import Dots from '../../assest/icons/Counter.svg';
import InfoSafe  from '../../views/InfoSafe';
import './safe.css';

export const Safe = () => {
   return <div>
           <div className="title-safe">
              <span className="safe">Las Paut@s del ahorro</span>              
          </div>   
          <div>
          <span> <img  className="IMG"src={IMG} alt="IMG"></img></span>
          </div>   
          <div>
          <span> <img  className="Play"src={Play} alt="Play"></img></span>
          </div>   
          <div>
          <span> <img  className="Vector"src={Vector} alt="LVector"></img></span> 
          <span className="title-safe-1">Esto es AHORRO</span>
          <span className="title-safe-2">Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.</span>
          </div>
          <div>
          <span> <img  className="Dots"src={Dots} alt="Dots"></img></span> 
          </div>
          <section>
          <InfoSafe/>
          </section>
            
   </div>

}