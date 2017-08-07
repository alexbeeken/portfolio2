export function initialize(appInstance) {
  let store = appInstance.lookup('service:store')
  var contentBoxes = [
    {
      title: 'Mono Lake Interpretive Display',
      picture: 'interp.jpeg',
      description: 'Interpretive display shown in the Mono Lake Committee Bookstore',
      target: 'https://mono-lake-changing-levels.herokuapp.com'
    },
    {
      title: 'Mono Lake Bathymetric Data',
      picture: 'bath.jpeg',
      description: 'Simple react app showing bathymetric data for Mono Lake',
      target: 'https://mono-lake-bathymetric.herokuapp.com'
    },
    {
      title: 'Mono Lake Interactive Timeline',
      picture: 'time.jpeg',
      description: 'Interactive Timeline for Exploring Mono Lake Data',
      target: 'https://mono-lake-timeline.herokuapp.com'
    },
    {
      title: 'Cantus Firmus Generator',
      picture: 'cantusfirmus.jpeg',
      description: 'Automatically generate simple musical phrases',
      target: 'https://golfcards.herokuapp.com/'
    },
    {
      title: 'Mr. Beeken',
      picture: 'mrbeeken.jpg',
      description: 'Educational Youtube Channel for budding musicians.',
      target: 'https://www.youtube.com/channel/UCtZ04kW3xThhfO4PCfvGaNQ'
    }
  ]

  contentBoxes.forEach( (contentBox) => {
    store.createRecord('content-box', {
      title: contentBox.title,
      picture: contentBox.picture,
      description: contentBox.description,
      target: contentBox.target
    })
  })
}

export default {
  name: 'init',
  initialize
};
