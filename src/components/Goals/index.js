import Plus from '../../assest/icons/plus.svg';
import { InfoGoals } from '../../views/InfoGoals';
import './goals.css'

export const Goals = () => {
   return <div>
           <div className="title-goals">
              <span className="goals">Tus Metas</span>
              <span className="plus"><img src={Plus} alt="plus"></img></span>
          </div>   
          <InfoGoals/>    
   </div>

}