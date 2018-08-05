import React from 'react';
import './Welcome.css';

import welcome from './welcome.jpg';


class Welcome extends React.Component{
  render(){
    return(<img className="welcome" src={welcome} />)
  }
}
export default Welcome;
