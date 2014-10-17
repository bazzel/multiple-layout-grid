import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['layout'],
  layout: 'list'
});
