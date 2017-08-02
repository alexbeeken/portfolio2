export function initialize(appInstance) {
  let store = appInstance.lookup('service:store')
  var contentBoxes = [
    {
      title: 'Mono Lake Interpretive Display',
      picture: '',
      descriptoon: 'Interpretive display shown in the Mono Lake Committee Bookstore'
    },
    {
      title: 'Mono Lake Bathymetric Data',
      picture: '',
      description: 'Simple react app showing bathymetric data for Mono Lake'
    }
  ]

  contentBoxes.forEach( (contentBox) => {
    store.createRecord('content-box', {
      title: contentBox.title,
      picture: contentBox.picture,
      description: contentBox.description
    })
  })
}

export default {
  name: 'init',
  initialize
};
