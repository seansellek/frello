Template.list.events({
  "click .list-delete": function() {
    Meteor.call("removeList", this._id);
  },
  "submit .new-task": function() {
    event.preventDefault();
    var name = event.target.text.value;
    Meteor.call("addTask", this._id, name);
    event.target.text.value = "";
  }
});
