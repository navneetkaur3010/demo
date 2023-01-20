import React from "react"
export default class Episode extends React.Component {
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
        // alert(JSON.stringify(this.state.data))

        if (this.state.data == null) {
            return <h1 style={{ backgroundColor: "blue" }}>LOADING...</h1>
        }

        // alert(JSON.stringify(this.state.data.rating))


        return <div>
            <br></br><hr />
            <h1>Fetch API data</h1><hr />

            <p>
                Id: {this.state.data.id} ,  URL:  {this.state.data.url} ,  Name: {this.state.data.name} ,Type: {this.state.data.type} ,
                Language: {this.state.data.language} ,Genres:  {this.state.data.genres.map((ele) => {
                    return <b>{ele} ,</b>
                })} ,Status:  {this.state.data.status} ,Runtime:  {this.state.data.runtime} , AverageRun Time:  {this.state.data.averageRuntime} ,
                Premiered:  {this.state.data.premiered} ,OfficialSite:  {this.state.data.officialSite} ,Weight:  {this.state.data.weight} ,
                Network:  {this.state.data.network} , rating:  {this.state.data.rating.average}
                
                <ul type="none"> genres:<Genre d={this.state.data.genres} col={"Red"} /> </ul>
            </p>

            <p>
                webChannel---id: {this.state.data.webChannel.id} ,Name: {this.state.data.webChannel.name} ,Country : {this.state.data.webChannel.country} ,
                officialSite: {this.state.data.webChannel.officialSite} ,dvdCountry: {this.state.data.dvdCountry} ,
                externals----tvrage: {this.state.data.externals.tvrage} , thetvdb: {this.state.data.externals.thetvdb} ,
                imdb: {this.state.data.externals.imdb} ,Summary---{this.state.data.summary} ,Updated:  {this.state.data.updated} ,
                links: {this.state.data._links.self.href} ,Previous Episode:  {this.state.data._links.previousepisode.href}
            </p>

            <div><hr /> <h2>Episodes</h2>

                {/* <span>Episode1 : {this.state.data._embedded.episodes[0].id} ,{this.state.data._embedded.episodes[0].url} , Name: {this.state.data._embedded.episodes[0].name} ,</span> */}

                {this.state.data._embedded.episodes.map((e) => {
                    return <ol>{e.id} <br /><a href={e.url}></a> <br /> {e.name} <br /> {e.season} <br /> {e.number} <br /> {e.type} <br /> {e.airdate} <br />
                        {e.airtime} <br /> {e.airstamp} <br /> {e.runtime} <br /> {e.rating.average} <br /> {e.image.medium} <br /> {e.image.original}
                        <br /> {e.summary} <br /> <a href={e._links.self.href}> </a><br />
                        <img src={e.image.medium}></img> <br/><img src={e.image.original}></img>-----------------------------------------------------------<hr /></ol>
                })}



            </div>

        </div>
    }
}


function Genre(props) {
    let col = props.col
    return props.d.map((x, i) => { return <li style={{ color: col }}> {x}</li> });
}