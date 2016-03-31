Meteor.startup(function () {
    // code to run on server at startup
});


Meteor.publish("points", function () {
    return Points.find();
});
Meteor.publish("routes", function () {
    return Routes.find();
});
Meteor.publish("editingUsers", function () {
    return EditingUsers.find();
})