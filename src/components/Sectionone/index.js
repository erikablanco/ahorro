import './sectionone.css';
import './mediaquery.css'
import  IMG from '../../assest/img/IMG.png';


function Sectionone () {

    return <div>
               <section className="containerbox">
                     <span  className="containerbox--img-2"><img src={IMG} alt="imge-two"/></span>
                     <span className="containerboxb--1">Eres estratega</span>
                     <span className="containerboxb--2">Tu saldo</span>
                     <span className="containerboxb--3">$1.570.000</span>   
              </section> 
              <section>                             
                        <div className="main-table-container">             
                                <table >
                                   <tr>
                                        <td className="top-left">Inversión</td>
                                        <td className="top-right">$1.600.000</td>
                                   </tr>
                                  
                                   <tr>
                                        <td className="bottom-left">Rendimiento</td>
                                        <td className="bottom-right">-$30.000</td>
                                   </tr>               
                                </table>
                        </div> 
             </section>
         </div>     
                 
  
}

export default Sectionone;