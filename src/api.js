import React from "react";
export default class PropertiesComp extends React.Component{
  constructor(){
    super()
    this.state={
      name:"Anil"
    }

  }





  render(){
    return <div>
      <h1>Hiii My name is <Name name={this.state.name}/></h1>
      <button onClick={()=>this.setState({name:"Peter"})}>Update</button>

      



    </div>
  }
}

function Name(props){
  return <p>{props.name}</p>

}

// function Genre(props) {

//   let col = props.col

//   return props.d.map((x, i) => { return <li style={{ color: col }}> {x}</li> });



// }

// <ul type="none"> genres:<Genre d={this.state.Data.genres} col={"Red"} /> </ul>

