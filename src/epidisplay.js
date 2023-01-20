import React from "react";


export default class Edisplay extends React.Component {
    constructor() {
        super()
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch("http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes").then(resp => {
            console.log(resp)
            return resp.json().then((data) => this.setState({ data: data }))
        })
    }

    render() {
        if (this.state.data == null) {
            return <p style={{ backgroundColor: "red", margin: "50px" }}>LOADING...</p>
        }

        return <div > <br /> <br />
            <div  >
                <h2 style={{ color: "white" }}>Unlimited movies, <br />TV shows and more.<br /></h2> <br />
                <h4 style={{ color: "white" }}>Watch anywhere. Cancel anytime.
                    Ready to watch? </h4><br /><br />
            </div>


            <div className="card-text-bg-dark mb-3 " style={{ width: "30rem", display: "run-in", margin: "50px" }} >
                

                {this.state.data._embedded.episodes.map((e) => {
                    return (<div className="card-body mb-12" style={{ color: "white" }} ><img src={e.image.original} width={"200px"} height={"200px"} class="card-img-top">
                    </img><h3 className="card-title">{e.name}</h3>

                   

                    <p dangerouslySetInnerHTML={{__html: e.summary}}></p>

                        <p><h5 >Episode Info:</h5> Number: season-{e.season} {" ," }  Airdate: {e.airdate}{"  ,"} Runtime: {e.runtime}minutes
                            Ratings: {e.rating.average}</p>

                        <button class="btn btn-danger"><a href={e.url}>Watch</a></button><br /><br /><br /><br /><br /><br /><br /><br />

                    </div>)

                })


                }

            </div>







        </div>
    }
}