Template.task.events({
  "click .task-delete": function() {
    Meteor.call("removeTask", this.list._id, this.task._id);
  },
  "click .task": function() {
    Meteor.call("toggleCompleteTask", this.list._id, this.task);
  }
});

Template.task.helpers({
  classes: function() {
    var classes = []
    if (this.task.completed) {
      classes.push("completed");
    }
    return classes.join(" ");
  }
})
