import './header.css';
import './mediaquery.css';
import Clock from'../../assest/icons/clock.svg';
import Mobilesignal from '../../assest/icons/mobilesignal.svg';
import Wifi from '../../assest/icons/wifi.svg';
import Battery from '../../assest/icons/battery.svg';
import MediaQuery from 'react-responsive/dist/Component';

function Header ()  {
    return <div className="header">          
               
              <span className="clock"><img src={Clock} alt="clock"/></span>
              <span className="signal"><img src={Mobilesignal} alt="mobilesignal"/></span>
              <span className="wifi"><img src={Wifi} alt="Wifi"/></span>
              <span className="battery"><img src={Battery} alt="battery"/></span>
              <MediaQuery minWidth={1224}></MediaQuery>
          </div>
} 

export default Header;