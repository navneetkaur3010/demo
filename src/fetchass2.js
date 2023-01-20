import React from "react";
export default class Fetchtab2 extends React.Component{
    constructor()
    {
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/albums").then(res=>{
            return res.json()
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
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                </tr>

                {this.state.data.map((e)=>
                    <tr>
                        <td>{e.userId}</td>
                        <td>{e.id}</td>
                        <td>{e.title}</td>
                    </tr>
            )}
            </table>
        </div>

        
    }
}