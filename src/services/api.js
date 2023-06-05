export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 2,
          content: 'Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
  
        {
          id: 3,
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          labels: ['#54e1f7'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },

      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 4,
          content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 5,
          content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          labels: ['#54e1f7'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 6,
          content: 'Proin nibh nisl condimentum id. ',
          labels: ['#54e1f7'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 7,
          content: 'Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. ',
          labels: [],
        },
        {
          id: 8,
          content: 'Suspendisse potenti nullam ac tortor vitae. ',
          labels: ['#54e1f7'],
        },
        {
          id: 9,
          content: 'Auctor elit sed vulputate mi sit amet mauris commodo quis. ',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}