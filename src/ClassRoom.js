import React from 'react';

class ClassRoom extends React.Component{

constructor(props)
{
  super(props);

/*  let BuildingDetail=[
  {name:"승연관",buildingnum:1,classRoom:["1406","1407","1501","1502","1503","1504","1505","1506"]},
  {name:"일만관",buildingnum:2,classRoom:["B103","B104","B105","B2101","B2102","2401","2402"]},
  {name:"월당관",buildingnum:3,classRoom:["3301","3302,3501","3502","3503","3504"]},
  {name:"나눔관",buildingnum:5,classRoom:["5A101","5A102","5A103","5A104","5A201","5A202","5A203","5A204","5A205","5A206"]},
  {name:"이천환 기념관",buildingnum:6,classRoom:["6110","6500"]},
  {name:"새천년관",buildingnum:7,classRoom:["7104","7201","7202","7204","7205","7206","7207","7208","7301","7302","7303","7304","7305","7306","7307","7308","7309"]},
  {name:"중앙도서관",buildingnum:8,classRoom:["대여가능한 강의실 없음"]},
  {name:"성미가엘성당/ 피츠버그홀",buildingnum:9,classRoom:["대여가능한 강의실 없음"]},
  {name:"미가엘관",buildingnum:12,classRoom:["M201","M202","M203","M204","M205","M301","M401","M402","M403","M404","M406","M407"]}]
*/

}

selectRoom(index){
  this.setState({classIndex:index})

}

renderClassRoom(room,index){
  return(
    <li onClick={this.selectRoom.bind(this,index)}>{room}</li>
  )
}

  render(){
    let BuildingList=this.props.BuildingList;
    let Buildingindex=this.props.BuildingIndex;
    let selectBuilding=BuildingList[Buildingindex];
      this.state={
        classRoom:selectBuilding,
        classIndex:-1,


      }

  let ClassRoom=this.state.classRoom.classRoom;
  let tag_ClassRoom=ClassRoom.map((room,index)=>this.renderClassRoom(room,index));
  return(
    <ul>
    {tag_ClassRoom}
    </ul>
  );

  }

}
export default ClassRoom;
