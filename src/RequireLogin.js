
import React from 'react';
import Login from './Login';
import requireLogin2 from './loginr.png';
import './requireLogin.css';

class RequireLogin extends React.Component{
  render(){
    return(
      <div className="board">
        <div className="notice2" >
          로그인후에 이용해 주시기 바랍니다.


        </div>
          <img id="notice" src={requireLogin2} />
      </div>
    );
  }
}
export default RequireLogin;
