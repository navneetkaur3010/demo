//class and function
import React from "react";
class Sample  extends React.Component{

    constructor(){
        super()
        this.count=0
        this.incrementbyone=this.incrementbyone.bind(this)
        this.state={
            data:0
        }
    }

    incrementbyone(){
        this.setState({data:this.state.data+1})
    }

    render(){

        return <div>
             class component 
             <p> value:{this.state.data} </p>

             <button onClick= {this.incrementbyone}> Increment by 1 </button>

             </div>
    }
}

export default Sample








//you may define export default class while del=claring class 
/*
import React from "react";

export default Sample class Sample  extends React.Component{
    constructor(){
        super()

    }
    render(){
        return <div> class component </div>

    }
}

*/