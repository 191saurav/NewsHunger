import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export class News extends Component {
  //   articles =  [
  //     {
  //         "source": {
  //             "id": "news24",
  //             "name": "News24"
  //         },
  //         "author": "Khanyiso Tshwaku",
  //         "title": "Dewald 'Baby AB' Brevis smacks 57 as Titans crush Dolphins in CSA T20 opener",
  //         "description": "Young batting sensation Dewald Brevis, better known as 'Baby AB,' top scored for the Titans as they got their Cricket SA T20 campaign off to the perfect start by beating the Dolphins on Monday.",
  //         "url": "https://www.news24.com/sport/Cricket/T20Challenge/dewald-baby-ab-brevis-smacks-57-as-titans-crush-dolphins-in-csa-t20-opener-20221017",
  //         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/7433/9a89068b03aa4249b114310977a8716e.jpg",
  //         "publishedAt": "2022-10-17T18:28:21+00:00",
  //         "content": "<ul><li>Dewald 'Baby AB' Brevis marked his return to South African domestic cricket with a 50 that allowed the Titans to beat the Dolphins by 34 runs. </li><li>Brevis made 57 off 44 balls in what was… [+1932 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "bbc-sport",
  //             "name": "BBC Sport"
  //         },
  //         "author": null,
  //         "title": "'Performance of their lives' - but Scots need more",
  //         "description": "Stunning two-time T20 world champions West Indies is one of the greatest moments in Scottish cricket - but the team's task has only just begun.",
  //         "url": "http://www.bbc.co.uk/sport/cricket/63282537",
  //         "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/C942/production/_127222515_scot.jpg",
  //         "publishedAt": "2022-10-17T17:22:28.9039094Z",
  //         "content": "Stunning two-time T20 world champions West Indies is one of the greatest moments in Scottish cricket - but the team's task has only just begun.\r\nThe Scots beat Group B's favourites by 42 runs in the … [+4692 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "google-news-in",
  //             "name": "Google News (India)"
  //         },
  //         "author": null,
  //         "title": "\"Sourav Ganguly Being Deprived\": Mamata Banerjee Makes An Appeal To PM",
  //         "description": "Mamata Banerjee today said Sourav Ganguly, who has been replaced as the Indian cricket board chairman, \"had been deprived\" and appealed to Prime Minister Narendra Modi to send him to the ICC (International Cricket Council).",
  //         "url": "https://www.ndtv.com/india-news/mamata-banerjees-appeal-to-pm-narendra-modi-sourav-ganguly-must-be-allowed-to-contest-icc-election-3438368",
  //         "urlToImage": "https://c.ndtvimg.com/2022-10/0glqu5vg_sourav-ganguly-mamata-banerjee-ani-650-_650x400_17_October_22.jpg",
  //         "publishedAt": "2022-10-17T14:02:00+00:00",
  //         "content": "Mamata Banerjee said Sourav Ganguly had been \"unfairly left out\".\r\nKolkata: Mamata Banerjee today said Sourav Ganguly \"has been deprived\" of his post as Indian cricket board chairman and appealed to … [+2078 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "espn-cric-info",
  //             "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //         "publishedAt": "2020-04-27T11:41:47Z",
  //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "espn-cric-info",
  //             "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //         "publishedAt": "2020-03-30T15:26:05Z",
  //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
  // ]

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c0570d840dd04937b1a184a05ad830a3&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c0570d840dd04937b1a184a05ad830a3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async () => {
    console.log("next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c0570d840dd04937b1a184a05ad830a3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
    
  }
  render() {
    return (
      <div className='container my-3' >
        <h1 className='text-center'>NewsHunger-Top headlines</h1>
        <Spinner/>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 71) : " "} description={element.description ? element.description.slice(0, 95) : " "} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}


        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}

export default News
