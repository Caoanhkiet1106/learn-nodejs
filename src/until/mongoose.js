
export default {
    mutipleMongooseToObject: function(mongooseArray) {
        return mongooseArray.map(mongoose => mongoose.toObject());
    },
    mongooseTobject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};
