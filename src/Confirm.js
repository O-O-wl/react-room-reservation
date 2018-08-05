import React from 'react';

class Confirm extends React.Component{

  render(){
    let ID=this.props.userID;
    return(
      <div>
      {ID}님의 예약현황입니다.
      </div>
    )

  }
}
export default Confirm;
