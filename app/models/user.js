import Ember from 'ember';

var User = Ember.Object.extend({});

User.reopenClass({
  findAll: function() {
    var url = 'http://api.randomuser.me/?results=20';

    return Ember.$.getJSON(url).then(function(data) {
      return data.results.map(function(result) {
        return User.create(result.user);
      }, function(reason) {
        alert('get data error!');
      });
    });
  }
});

export default User;
