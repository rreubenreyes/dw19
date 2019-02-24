import React, { Component } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

class ContentComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    const {
      id,
      title,
      description,
      location,
      comments,
      pictures,
      votes
    } = this.props;

    const pics = pictures.map(pic => {
      return <img src={pic} alt="#" />;
    });

    const comms = comments.map(comm => {
      return <li>{comm}</li>;
    });

    return (
      <div class="content-component container card col s12 m6">
        <div class="card-content">
          <h2 class="content-component title blue-text">{title}</h2>
          <div>{description}</div>
          <div>{location}</div>
          <div>{pics}</div>
          <ul>{comms}</ul>
          <div>{votes}</div>
        </div>
        <div class="images">
          <img src="https://lorempixel.com/250/250/nature/1" />
          <p className="legend">Legend 1</p>

          <img src="https://lorempixel.com/250/250/nature/2" />
          <p className="legend">Legend 2</p>

          <img src="https://lorempixel.com/250/250/nature/3" />
          <p className="legend">Legend 3</p>
        </div>
      </div>
    );
  }

  static defaultProps = {
    id: '1', // required
    title: 'BIG TITLE', // required
    description:
      'hackathon location lorem ispumowjfoiwjeofij honda mazda BMW lexus',
    comments: ['fun location'],
    pictures: [
      'data:image/png;base64,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'
    ],
    votes: 0
  };

  /*
  {
    fences: {
        inside: [{
            id: string
            title: string
            description: string
            location: string
            comments: [string]
            pictures: [string]
            votes: interger
        }],
        outside: [{
            id: string
            title: string
            description: string
            location: string
            comments: [string]
            pictures: [string]
            votes: interger
        }]
    }
}
  */
}

export default ContentComponent;
