import React, { Component } from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './ContentComponent.css';
const uuidv4 = require('uuid/v4');

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
      return (
        <div key={uuidv4()}>
          <img alt="" src={pic} />
        </div>
      );
    });

    const comms = comments.map(comm => {
      return (
        <li key={uuidv4()}>
          <blockquote>
            <i>{comm}</i>
          </blockquote>
        </li>
      );
    });

    return (
      <div className="content-component container card">
        <div className="card-content">
          <h2 className="content-component title blue-text">{title}</h2>
          <div>{description}</div>
          <div>{location}</div>
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={4}
            slidesToShow={4}
            scrollOnDevice={true}
          >
            {pics}
          </InfiniteCarousel>
          <ul>{comms}</ul>
          <div>
            <i className="material-icons">thumb_up</i>
            {votes}
          </div>
        </div>
      </div>
    );
  }

  static defaultProps = {
    id: '1', // required
    title: 'BIG TITLE', // required
    description:
      'hackathon location lorem ispumowjfoiwjeofij honda mazda BMW lexus',
    comments: [
      'fun location',
      'hot garbage',
      'never been so insulted in my life'
    ],
    pictures: [
      'http://lorempixel.com/400/400/sports/1/',
      'http://lorempixel.com/400/400/sports/2/',
      'http://lorempixel.com/400/400/sports/3/',
      'http://lorempixel.com/400/400/sports/4/',
      'http://lorempixel.com/400/400/sports/5/',
      'http://lorempixel.com/400/400/sports/6/'
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
