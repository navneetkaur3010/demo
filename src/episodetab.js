import React from "react";
;
export default class Epitab extends React.Component{
    constructor(){
        super()
        this.state={
            data:null
        }

    }


    componentDidMount() {
        fetch("http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes").then(resp => {
            console.log(resp)
            return resp.json().then((data) => this.setState({ data: data }))
        })
    }

    render(){
        
        
        if (this.state.data == null) {
            return <h1 style={{ backgroundColor: "blue" }}>LOADING...</h1>
        }
        return  <div>
            <h1>API Data Table</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Url</th>
                    <th>Name</th>
                    <th>Season</th>
                    <th>Number</th>
                    <th>Type</th>
                    <th>Airdate</th>
                    <th>Airtime</th>
                    <th>Airstamp</th>
                    <th>Runtime</th>
                    <th>Rating</th>
                    <th>Image</th>
                    <th>Summary</th>
                    <th>Link</th>
                </tr>

                

                {this.state.data._embedded.episodes.map((e) => {
                    return <tr>
                        <td>{e.id}</td> 
                        <td><a href={e.url }> {e.url }</a></td>
                        <td>{e.name}</td>
                        <td >{e.season}</td>
                        <td>{e.number}</td>
                        <td>{e.type}</td>
                        <td> {e.airdate}</td>
                        <td>{e.airtime}</td>
                        <td>{e.airstamp}</td>
                        <td>{e.runtime}</td>
                        <td>{e.rating.average}</td>
                        <td><img src={e.image.medium} width={"100px"} height={"100px"}></img>  <img src={e.image.original} width={"100px"} height={"100px"}></img></td>
                        <td dangerouslySetInnerHTML={{__html: e.summary}} ></td>
                        <td> <a href={e._links.self.href}>{e._links.self.href}</a></td> 
                        
                    
                    </tr>
                })}
            </table>

        </div>
    }
}