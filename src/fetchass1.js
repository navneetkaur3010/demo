import React from "react";
export default class Fetchtab1 extends React.Component{
    constructor()
    {
    super()
    this.state={
        data:[]
    }
}

componentDidMount()
{
    fetch("https://jsonplaceholder.typicode.com/users/1/todos").then(resp=>
    {
        return resp.json()

    }).then(data1=>{
        console.log(data1)
        this.setState({data:data1})
    })
}

render()
{
    return <div>

        <table>
            <tr>
                <th>Userid</th>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
            {this.state.data.map((e)=>
                <tr>
                    <td>{e.userId}</td>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.completed}</td>
                </tr>

            )}
        </table>
    </div>

}
}