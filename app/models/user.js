import Ember from 'ember';

var User = Ember.Object.extend({
  fullName: function() {
    return [this.get('name.first'), this.get('name.last')].join(' ');
  }.property('name.first', 'name.last')
});

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
