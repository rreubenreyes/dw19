import React, { Component } from 'react';
// import InfiniteCarousel from 'react-leaf-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const uuidv4 = require('uuid/v4');

const StyledContentContainer = styled.div`
  padding: 0 2em;
`;

class ContentComponent extends Component {
  render() {
    const { title, description, comments, pictures, votes } = this.props.fence;

    // dummy pictures
    // const { title, description, comments, votes } = this.props.fence;

    // const pictures = [
    //   'http://lorempixel.com/400/400/sports/1/',
    //   'http://lorempixel.com/400/400/sports/2/',
    //   'http://lorempixel.com/400/400/sports/3/',
    //   'http://lorempixel.com/400/400/sports/4/',
    //   'http://lorempixel.com/400/400/sports/5/',
    //   'http://lorempixel.com/400/400/sports/6/'
    // ];

    // const pics = pictures.map(pic => {
    //   return (
    //     <div>
    //       <img src={pic} />
    //     </div>
    //   );
    // });

    const pics = pictures
      ? pictures.map(pic => {
          return (
            <div key={uuidv4()}>
              <img src={pic} />
            </div>
          );
        })
      : [];

    const comms = comments.map(comm => {
      return (
        <li key={comm.id}>
          <blockquote>
            <i>{comm.value}</i>
          </blockquote>
        </li>
      );
    });

    return (
      // <div className="content-component container card">
      <StyledContentContainer className="content-component">
        <div className="card-content">
          <h4 className="content-component title blue-text">{title}</h4>
          <div>{description}</div>
          {/* <div className="carousel-holder">
            <Carousel>{pics}</Carousel>
          </div> */}
          <ul>{comms}</ul>
          <div>
            <i className="material-icons">thumb_up</i>
            {votes}
          </div>
        </div>
      </StyledContentContainer>
    );
  }

  // static defaultProps = {
  //   id: '1', // required
  //   title: 'BIG TITLE', // required
  //   description:
  //     'hackathon location lorem ispumowjfoiwjeofij honda mazda BMW lexus',
  //   comments: [
  //     'fun location',
  //     'hot garbage',
  //     'never been so insulted in my life'
  //   ],
  //   pictures: [
  //     'http://lorempixel.com/400/400/sports/1/',
  //     'http://lorempixel.com/400/400/sports/2/',
  //     'http://lorempixel.com/400/400/sports/3/',
  //     'http://lorempixel.com/400/400/sports/4/',
  //     'http://lorempixel.com/400/400/sports/5/',
  //     'http://lorempixel.com/400/400/sports/6/'
  //   ],
  //   votes: 0
  // };
}

export default ContentComponent;
