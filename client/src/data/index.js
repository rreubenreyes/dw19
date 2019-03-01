export const sampleData = {
  fences: {
    inside: [
      {
        id: 0,
        title: 'Hackathon Space',
        description: 'Where coding happens.',
        location: {
          lat: 37.787484,
          lng: -122.396397,
          radius: 200
        },
        comments: [
          { id: 0, value: 'These muffins are great!' },
          { id: 1, value: 'Lost my banana again.' }
        ],
        votes: 10
      },
      {
        id: 1,
        title: 'Ferry Building',
        description:
          'Rennovated after the 1989 Earthquake, this historic building now hosts multiple business and restaurants.',
        location: {
          lat: 37.795449,
          lng: -122.393618,
          radius: 400
        },
        comments: [
          { id: 0, value: 'I love the ice cream here!' },
          { id: 1, value: 'Where now brown cow?' }
        ],
        votes: 200
      },
      {
        id: '5dcf61b3-af73-4912-968c-57377ef03fb3',
        title: 'Rithm School',
        distance: -200,
        location: {
          lat: 37.797292,
          lng: -122.40118,
          radius: 200
        },
        votes: 200,
        comments: [
          {
            id: 0,
            value: 'Too many dogs in this place.'
          },
          {
            id: 1,
            value: 'The hummmmans are alrite.'
          }
        ],
        description: 'Rithm 9 rulz the world. and pokemon.'
      }
    ],
    outside: [
      {
        id: 0,
        title: 'Outside Geofence',
        description: 'You are outside this geofence',
        location: {
          lat: 37.795449,
          lng: -122.393618,
          radius: 200
        },
        comments: [
          { id: 0, value: 'outside comment' },
          { id: 1, value: 'another outside comment' }
        ],
        votes: 100
      }
    ]
  }
};
