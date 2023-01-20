import React from "react"
class FetchExample extends React.Component{
    constructor()
    {
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>
            {
               return res.json()
            })
        .then(data1=>{
            console.log(data1)
            this.setState({data:data1})
        })
    }
    render()
    {
        return <div>Fetch Data
            {
                this.state.data.map((e)=> <div><span>Title:{e.title}</span><br/></div>)
            }
        </div>
    }
}

export default FetchExample