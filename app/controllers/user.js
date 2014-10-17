import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['index'],
  layout: Ember.computed.alias('controllers.index.layout'),
  isMale: Ember.computed.equal('gender', 'male'),
  isList: Ember.computed.equal('layout', 'list'),
  isThumbs: Ember.computed.equal('layout', 'thumbs'),
  isBigThumbs: Ember.computed.equal('layout', 'big thumbs')
});
