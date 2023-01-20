import React from "react";
export default class Tableone extends React.Component{
    constructor(){
        super()
        this.tabledata=[
            {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          }]

    }

    render(){
        return <div> 
            <h1>User Details</h1>
            <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>           
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
                
            </tr>
            {this.tabledata.map(ele=>{
                return <tr> 
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.username}</td>
                    <td>{ele.email}</td>
                    <td>{ele.address.street}, {ele.address.suite}, {ele.address.city}, {ele.address.zipcode}, {ele.address.geo.lat}, {ele.address.geo.lng}</td>
                    <td>{ele.phone}</td>
                    <td>{ele.website}</td>
                    <td>{ele.company.name}, {ele.company.catchPhrase}, {ele.company.bs}</td>
                </tr>
            }
            )}
        </table> <br/>

        </div>
    }
}