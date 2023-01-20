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
        return <div  >
            <h1><hr></hr>Fetch Data</h1><hr/><br/>
            <table>
                <tr>
                <th>User id</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                </tr>
            {
                this.state.data.map((e)=> 
                    <tr >
                        <td>{e.userId}</td>
                        <td>{e.id}</td>
                        <td>{e.title}</td>
                        <td>{e.body}</td>
                        </tr>
                        )
            }
            </table>
        </div>
    }
}

export default FetchExample