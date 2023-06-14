import React, { Component } from 'react'
import Newitem from './Newitem'

export class New extends Component {
  articles = [
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }, 
    {
      "source": {
        "id": "esn-cric-info",
        "name": "ESPN aCric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/2910103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    }, 
    {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "",
      "title": "Giant rubber duck returns to Hong Kong - with a friend - CNN",
      "description": "The giant bath toys were reunited after one half of the duo was briefly deinflated by organizers due to hot weather.",
      "url": "https://www.cnn.com/videos/style/2023/06/12/giant-ducks-hong-kong-return-cprog-lon-orig-cw.cnn",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230609012339-01-hk-rubber-ducks-052523.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-06-12T15:01:14Z",
      "content": null
  }, 
  {
    "source": {
        "id": null,
        "name": "Variety"
    },
    "author": "Selome Hailu",
    "title": "‘They Wanted Me to Drink Their Saliva’ Variety",
    "description": "Adapted from the video game of the same name, HBO’s “The Last of Us” finds Pedro Pascal’s Joel in a post-apocalyptic landscape not unlike “The Walking Dead,” the zombie series that gave Steven Yeun…",
    "url": "https://variety.com/2023/tv/features/pedro-pascal-steven-yeun-the-last-of-us-beef-road-rage-interview-1235632116/",
    "urlToImage": "https://variety.com/wp-content/uploads/2023/06/Variety-Actors-on-Actors-Full-Pascal-Yeun.jpg?crop=0px%2C10px%2C960px%2C539px&resize=1000%2C563",
    "publishedAt": "2023-06-12T15:00:27Z",
    "content": "Adapted from the video game of the same name, HBO’s “The Last of Us” finds Pedro Pascal’s Joel in a post-apocalyptic landscape not unlike “The Walking Dead,” the zombie series that gave Steven Yeun h… [+10434 chars]"
},
{
    "source": {
        "id": null,
        "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Hunter Valley: Ten people killed in wedding bus crash in Australia - BBC",
    "description": "The bus was returning from a wedding in the Hunter Valley, north of Sydney, when it overturned.",
    "url": "https://www.bbc.com/news/world-australia-65874374",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5736/production/_130062322_306d8fda49265ba127d96a162bedd15cb9387b9f.jpg",
    "publishedAt": "2023-06-12T14:57:41Z",
    "content": "At least 10 people have died and 15 others are in hospital after a wedding bus crashed in an Australian wine region north of Sydney, officials say.\r\nThe passengers were returning from a wedding at a … [+2691 chars]"
}
  ]

  constructor() {
    super();
    console.log("Xin chao ban den voi newitem");
    this.state = {
      articles: this.articles
    }
  }
  render() {
    return (
      <div className='container my-4 '>
        <h1 className='text-center my-4'>TIN TỨC MỚI NHẤT</h1>
        <div className='row '>
          {this.state.articles.map((element) => {
            return <div className='col-md-4 my-4' key={element.url}>
              <Newitem title={element.title.length >= 50?element.title.slice(0, 40)+"...":element.title} blogContent={element.publishedAt} imageUlr={element.urlToImage} newULR={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default New
