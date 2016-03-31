Meteor.subscribe("routes");
Meteor.subscribe("points");
Meteor.subscribe("editingUsers");

Template.navbar.events({
    // add a new document button
    "click .js-add-point":function(event){
        event.preventDefault();
        console.log("Add a new point!");
        if (!Meteor.user()) {// user not available
            alert("You need to login first!");
        }
        else {
            // they are logged in... lets insert a doc
            var id = Meteor.call("addPoint", function(err, res){
                if (!err){// all good
                    console.log("event callback received id: "+res);
                    Session.set("pointid", res);
                }
            });
        }
    },
    // load a document link
    "click .js-load-doc":function(event){
        //console.log(this);
        Session.set("pointid", this._id);
    }
})

Template.navbar.helpers({
    // return a list of all visible documents
    points:function(){
        return Points.find();
    }
})