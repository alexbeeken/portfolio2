import Ember from 'ember'

const { computed, inject } = Ember
const { service } = inject

export default Ember.Controller.extend({
  store: service(),
  contentBoxes: computed(function() {
    return this.get('store').peekAll('content-box')
  })
});
