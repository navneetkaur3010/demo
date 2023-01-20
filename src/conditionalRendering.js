import React from "react";
import Sample from "./sample";
import App from "./App";

class ConditionalRendering  extends React.Component{

    constructor()
    {
        super()

        this.state={
            count:0
        }

        }
    
    handleClick=()=>{
        this.setState({count:this.state.count+1})

    }

    render()
    {
        return <div>
            <button onClick={this.handleClick}> Get Result </button>  <br/>

            {this.state.count} <br/>
            
            {(this.state.count%2==0)?<span>Given number is Even</span>:<span>Given number is Odd</span>}

            {(this.state.count%2==0)?<Sample/>:<App/>}

            <hr/>

          

             </div>
    }
}

export default ConditionalRendering