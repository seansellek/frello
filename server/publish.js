Meteor.startup(function() {
  Meteor.publish("lists", function() {
    return Lists.find({ owner: this.userId });
  })
});
