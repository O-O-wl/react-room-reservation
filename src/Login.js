import React from 'react';
import './Login.css';
import Menu from './Menu';

class Login extends React.Component{
  constructor(props){
    super(props);
    let only=props.only

    let userList=[
      {id:"201331024" ,name:"이동영"  ,password:"1111" },
      {id:"201331022" ,name:"원준식"  ,password:1111 },
      {id:"201331015" ,name:"방효근"  ,password:1111 },
      {id:"201535029" ,name:"이주연"  ,password:1111 },
      {id:"201535037" ,name:"최은선"  ,password:1111 }
    ]

    this.state={
      login:false,
      name:"default",
      Pid:"",
      Ppw:"",
      userList:userList,
      only:only
    }
  }

input(event){
  let target = event.target;
  let name = target.name;
  let value=target.value;
  this.setState({
    [name]:value
  })
  }

searchUser(user){
  if(user.id===this.state.Pid)
    if(user.password===this.state.Ppw)
            this.setState({login:true , name:user.name});


  else
  { this.setState({login:false})}
}


Login(){

    this.state.userList.map((user)=>this.searchUser(user))


  }
Logout(){
  this.setState({login:false,Ppw:"",Pid:""})
}

  render(){

    if(this.state.login){
      return(
        <div>
          <div className="userON">
            <strong>{this.state.name}님 안녕하세요! </strong>
            <button type="button" onClick={this.Logout.bind(this)} > 로그아웃</button>
          </div>
      <Menu value={this.state.login} userID={this.state.Pid} />
      </div>
    );}


    else{
        return(
          <div className="inputForm">
            <div>
                ID    :<input type="text" name="Pid" value={this.state.Pid} onChange={this.input.bind(this)}/>
            </div>
            <div>
            PassWord :<input type="text" name="Ppw" value={this.state.Ppw} onChange={this.input.bind(this)}/>
            </div>
            <div>
            <button type="button" onClick={this.Login.bind(this)} > 로그인</button>
            </div>
            <Menu value={this.state.login} userID={this.state.Pid} />

          </div>


        );

  }
}
}
Login.defaultprops={only:false}
export default Login;
