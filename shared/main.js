EditingUsers = new Mongo.Collection("editingUsers");
Locations = new Mongo.Collection("locations");
/*LocationsSchema = new SimpleSchema({
    latitude: {
        type: String,
        optional: true
    },
    longitude: {
        type: String,
        optional: true
    }
});*/

Images = new Mongo.Collection("images");
/*ImagesSchema = new SimpleSchema({
    s3id: {
        type: String
    }
});*/
//Images.attachSchema(ImagesSchema);

Points = new Mongo.Collection("points");
/*PointsSchema = new SimpleSchema({
    title: {
        type: String
    },
    location: {
        type: Locations
    },
    owner: {
        type: EditingUsers
    },
    sharedTo: {
        type: [EditingUsers],
        optional: true
    },
    createdOn: {
        type: Date
    },
    actualAt: {
        type: [Date],
        optional: true
    },
    description: {
        type: String,
        optional: true
    },
    image: {
        type: Images
    }

});
Points.attachSchema(PointsSchema);*/

Directions = new Mongo.Collection("directions");
/*DirectionsSchema = new SimpleSchema({
    from: {
        type: Points,
    },
    to: {
        type: Points,
    }

});
Directions.attachSchema(DirectionsSchema);*/

Routes = new Mongo.Collection("routes");
/*
RouteSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title"
    },
    directions: {
        type: [DirectionsSchema],
        minCount: 1
    }
});
Routes.attachSchema(RouteSchema);*/
