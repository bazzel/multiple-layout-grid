import Ember from 'ember';
import User from '../models/user';

export default Ember.Route.extend({
  model: function() {
    return User.findAll();
  }
});
