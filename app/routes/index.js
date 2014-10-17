import Ember from 'ember';
import User from '../models/user';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://api.randomuser.me/?results=20';

    return Ember.$.getJSON(url).then(function(data) {
      return data.results.map(function(result) {
        return User.create(result.user);
      });
    });
  }
});
