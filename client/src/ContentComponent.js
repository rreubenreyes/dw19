import React, { Component } from 'react';

class ContentComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return <div class="content-component">Hello</div>;
  }

  static defaultProps = {
    id: '1',
    title: 'string',
    description: 'hackathon',
    location: 'Galvanize',
    comments: ['fun location'],
    pictures: ['string'],
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
