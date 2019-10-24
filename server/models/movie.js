var mongoose = require("mongoose");

var RatingSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:[3, "Name must be at least 3 characters"]},
    rating: {type: Number, required: true},
    review: {type: String, required: true, minlength:[3, "Review must be at least 3 characters"]},
}, {timestamps: true});

var MovieSchema = new mongoose.Schema({
    movie_title: {type:String, required: true, minlength: [3, "Title must be at least 3 characters"]},
    ratings: [RatingSchema]
}, {timestamps: true });


mongoose.model("Rating", RatingSchema);
mongoose.model("Movie", MovieSchema);
