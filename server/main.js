Meteor.publish("points", function () {
    return Points.find();
});
Meteor.publish("routes", function () {
    return Routes.find();
});
Meteor.publish("images", function () {
    return Images.find();
});
Meteor.publish("locations", function () {
    return Locations.find();
});
Meteor.publish("directions", function () {
    return Directions.find();
});
Meteor.publish("editingUsers", function () {
    return EditingUsers.find();
});

Meteor.startup(function () {
    Meteor.methods({
        addPoint: function(){
            var point;
            if (!this.userId){// not logged in
                return;
            }
            else {
                point = {
                    owner: this.userId,
                    createdOn: new Date(),
                    title: "my new point"
                };
                var id = Points.insert(point);
                console.log("addPoint method: got an id "+id);
                return id;
            }
        },
        createPoint: function (point) {
            if (this.userId){
                point.createdOn = new Date();
                point.owner = this.userId;
                /*            point.location = {
                 latitude: "test",
                 longitude: "test",
                 }*/
                var id = Points.insert(point);
                console.log("addPoint method: got an id "+id);
                return id;
            }
        },
        // method to change privacy flag on a point
        updatePointPrivacy: function(point){
            console.log("updatePointPrivacy method");
            console.log(point);
            var realPoint = Points.findOne({
                _id: doc._id,
                owner: this.userId
            });
            if (realPoint){
                realPoint.isPrivate = point.isPrivate;
                Documents.update({
                    _id: doc._id
                }, realPoint);
            }
        },
        // method to add editing suers to a document
        addEditingUser:function(){
            var point, user, eusers;
            point = Points.findOne();
            if (!point){return;}// no point give up
            if (!this.userId){return;}// no logged in user give up
            // now I have a point and possibly a user
            user = Meteor.user().profile;
            eusers = EditingUsers.findOne({pointid:point._id});
            if (!eusers){
                eusers = {
                    pointid:point._id,
                    users:{},
                };
            }
            user.lastEdit = new Date();
            eusers.users[this.userId] = user;

            EditingUsers.upsert({_id:eusers._id}, eusers);
        }
    });
});