import React from "react";
import { render } from "react-dom";
export default class Tabledata extends React.Component{


    constructor(){
    super()
    this.fruits=["Apple","Banana","Pineapple","Grapes"]
    this.stockData=[

        {

            company: "Twitter Inc",

            ticker: "TWTR",

            stockPrice: "22.76 USD",

            timeElapsed: "5 sec ago",

          },

          {

            company: "Square Inc",

            ticker: "SQ",

            stockPrice: "45.28 USD",

            timeElapsed: "10 sec ago",

          },

          {

            company: "Shopify Inc",

            ticker: "SHOP",

            stockPrice: "341.79 USD",

            timeElapsed: "3 sec ago",

          },

          {

            company: "Sunrun Inc",

            ticker: "RUN",

            stockPrice: "9.87 USD",

            timeElapsed: "4 sec ago",

          },

          {

            company: "Adobe Inc",

            ticker: "ADBE",

            stockPrice: "300.99 USD",

            timeElapsed: "10 sec ago",

          },

          {

            company: "HubSpot Inc",

            ticker: "HUBS",

            stockPrice: "115.22 USD",

            timeElapsed: "12 sec ago",

          },

      ];
     
}


render(){
    return (<div>
        <table>
            <tr>
                <th>Company</th>
                <th>Ticker</th>
                <th>stockprice</th>
                <th>timeelapsed</th>
            </tr>
            {this.stockData.map(ele=>{
                return <tr> 
                    <td>{ele.company}</td>
                    <td>{ele.ticker}</td>
                    <td>{ele.stockPrice}</td>
                    <td>{ele.timeElapsed}</td>
                </tr>
            }
            )}
        </table>

        <br/><hr/><br/>

        <div style={{textAlign:"left"}}>
            Fruits:
        <ul>
            {
            this.fruits.map((ele)=>{
                return <li>{ele}</li>
            }
            )}
        </ul>
        </div>
       
      

    </div>)
}
}