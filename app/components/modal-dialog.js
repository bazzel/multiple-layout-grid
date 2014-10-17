import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal', 'fade'],
  attributeBindings: ['aria-hidden', 'role', 'tabindex'],
  'aria-hidden': true,
  role: 'dilaog',
  tabindex: -1,
  scheduleFadeIn: function() {
    Ember.run.scheduleOnce('afterRender', this, 'applyFadeIn');
  }.on('didInsertElement'),
  applyFadeIn: function() {
    var _this = this;
    this.$().modal().on('hidden.bs.modal', function() {
      _this.sendAction();
    });
  }
});
