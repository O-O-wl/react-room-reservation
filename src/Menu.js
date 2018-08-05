import React from 'react';
import Content from './Content'

class Menu extends React.Component{

constructor(props){
  super(props);
  let menu=[
    {name:"HOME"},
    {name:"RESERVATION"},
    {name:"CONFIRM"}
  ]
  let onoff=this.props.value;
  this.state={
    menu:menu,
    index:-1,
    onoff:onoff
  }

}

changeIndex(index){
  this.setState({index:index})
}

renderMenu(menu,index){
  if(index===this.state.index){
    return(<li onClick={this.changeIndex.bind(this,index)}><b><i>{menu.name}</i></b></li>)

  }
  else {
  return(  <li onClick={this.changeIndex.bind(this,index)}>{menu.name}</li>);}
  }


render(){
  let userID=this.props.userID;
  let catagory=this.state.menu;
  let menu=catagory.map((menu,index)=>this.renderMenu(menu,index));
  return (

    <div >
      <ul>
        {menu}

      </ul>

    <Content value={this.state.index} onoff={this.state.onoff} userID={userID}/>
    </div>

  );
}
}
export default Menu;
