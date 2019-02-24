export const sampleData = {
  fences: {
    inside: [
      {
        id: 0,
        title: 'Inside Geofence',
        description: 'You are inside this geofence',
        location: {
          lat: 37.787484,
          lng: -122.396397,
          radius: 200,
        },
        comments: [
          { id: 0, value: 'this is a comment' },
          { id: 1, value: 'second comment' },
        ],
        votes: 10,
      },
      {
        id: 1,
        title: 'Ferry Building',
        description: 'this is the ferry building',
        location: {
          lat: 37.795449,
          lng: -122.393618,
          radius: 400,
        },
        comments: [
          { id: 0, value: 'this is a comment' },
          { id: 1, value: 'second comment' },
        ],
        votes: 10,
      },
    ],
    outside: [
      {
        id: 0,
        title: 'Outside Geofence',
        description: 'You are outside this geofence',
        location: {
          lat: 37.795449,
          lng: -122.393618,
          radius: 200,
        },
        comments: [
          { id: 0, value: 'outside comment' },
          { id: 1, value: 'another outside comment' },
        ],
        votes: 100,
      },
    ],
  },
};
