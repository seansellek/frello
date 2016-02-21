Meteor.subscribe("lists");
Template.body.events({
  "submit .new-list": function() {
    event.preventDefault();
    var text = event.target.text.value;
    Meteor.call("addList", text);
    event.target.text.value = "";
  }
});

Template.body.helpers({
  lists: function() {
    return Lists.find({});
  }
});
