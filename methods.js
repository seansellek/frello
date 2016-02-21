Meteor.methods({
  addList: function(name) {
    if (! Meteor.userId() ){
      throw new Meteor.Error("not-authorized");
    }
    Lists.insert({
      name: name,
      owner: Meteor.userId(),
      createdAt: new Date(),
    });
  },
  fetchLists: function() {
    if (! Meteor.userId() ){
      throw new Meteor.Error("not-authorized");
    }
    return Lists.find({ owner: Meteor.userId() });
  },
  removeList: function(listId) {
    var list = Lists.findOne(listId);
    if (list.owner !==  Meteor.userId() ){
      throw new Meteor.Error("not-authorized");
    }
    Lists.remove(listId);
  },
  addTask: function(listId, name) {
    var list = Lists.findOne(listId);
    if (list.owner !==  Meteor.userId() ){
      throw new Meteor.Error("not-authorized");
    }
    Lists.update(listId, { $push: { tasks: {
      name: name,
      createdAt: new Date()
    }}}); 
  }
})
