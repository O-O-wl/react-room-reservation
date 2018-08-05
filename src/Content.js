import React from 'react';
import './Content.css';
import Welcome from './Welcome';
import RequireLogin from './RequireLogin';
import Reservation from './Reservation';
import Confirm from './Confirm';

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state={
    index:-1,
    login:false
  }}

  render(){
    let ID= this.props.userID;
    let selectedIndex=this.props.value;
    let onoff=this.props.onoff
    this.state=({index:selectedIndex});
    this.state=({login:onoff})

if(this.state.login){
  if(selectedIndex===1)
    return(
        <span ><Reservation userID={ID} /></span>
      );
if(selectedIndex===2)
    return(
        <span ><Confirm userID={ID} /></span>
    );

else
  return(<span ><Welcome /></span>);

  }

else{
  if(selectedIndex===1)
    return(
        <span><RequireLogin /></span>
      );
if(selectedIndex===2)
    return(
        <span ><RequireLogin /></span>
    );

else
  return(<span ><Welcome /></span>);

  }
}

}
export default Content;
