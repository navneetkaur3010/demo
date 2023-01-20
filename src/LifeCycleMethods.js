import React from 'react'
class LifeCycleMethods extends React.Component{
    constructor()
    {
        super()
        this.state={
            num:1
        }
    }
    componentDidMount()
    {
        console.log("ComponentDidMount() called")
    }
    componentWillMount()
    {
        console.log("ComponentWillMount() called")
    }    
    componentWillUpdate()
    {
        console.log("componentWillUpdate() called")
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate() called")
    }
    increment=()=>{
        this.setState({num:this.state.num+1})
    }
    shouldComponentUpdate()
    {
        if(this.state.num<5)
        {
            return true
        }
        else{
            return false
        }
    }
    render()
    {
        console.log("render() called")
        return <div>Life Cycle Methods
            <p>https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</p>
            <button onClick={this.increment}>submit</button>
            {this.state.num}
        </div>
    }
}
export default LifeCycleMethods