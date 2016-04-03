var Schemas = {};

EditingUsers = new Mongo.Collection("editingUsers");
Schemas.EditingUsers = new SimpleSchema({

});
EditingUsers.attachSchema(Schemas.EditingUsers);

Locations = new Mongo.Collection("locations");
Schemas.LocationsSchema = new SimpleSchema({
    latitude: {
        type: String,
        optional: true
    },
    longitude: {
        type: String,
        optional: true
    }
});
Locations.attachSchema(Schemas.Locations);

Images = new Mongo.Collection("images");
Schemas.ImagesSchema = new SimpleSchema({
    s3id: {
        type: String
    }
});
Images.attachSchema(Schemas.ImagesSchema);

Points = new Mongo.Collection("points");
Schemas.PointsSchema = new SimpleSchema({
    title: {
        type: String
    },
    location: {
        type: Schemas.LocationsSchema
    },
    owner: {
        type: Schemas.EditingUsers
    },
    sharedTo: {
        type: [Schemas.EditingUsers],
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
        type: Schemas.ImagesSchema
    }
});
Points.attachSchema(Schemas.PointsSchema);

Directions = new Mongo.Collection("directions");
Schemas.DirectionsSchema = new SimpleSchema({
    from: {
        type: Schemas.PointsSchema,
    },
    to: {
        type: Schemas.PointsSchema,
    }

});
Directions.attachSchema(Schemas.DirectionsSchema);

Routes = new Mongo.Collection("routes");
Schemas.RoutesSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title"
    },
    directions: {
        type: [Schemas.DirectionsSchema],
        minCount: 1
    }
});
Routes.attachSchema(Schemas.RoutesSchema);
