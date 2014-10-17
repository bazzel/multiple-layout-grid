import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['index'],
  layout: Ember.computed.alias('controllers.index.layout'),
  isMale: Ember.computed.equal('gender', 'male'),
  isMode1: Ember.computed.equal('layout', 'list'),
  isMode2: Ember.computed.equal('layout', 'thumbs'),
  isMode3: Ember.computed.equal('layout', 'big thumbs')
});
