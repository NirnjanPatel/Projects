//Require Mongoose
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const subCategorySchema = mongoose.Schema({
    _id: Number,
    catname: {
        type: String,
        required: [true, "Category name is required"],
        lowercase: true,
        trim: true,
    },
    subcatname: {
        type: String,
        required: [true, "Sub Category name is required"],
        lowercase: true,
        unique: true,
        trim: true,
    },
    subcaticonname: {
        type: String,
        required: [true, "Sub Category icon is required"],
        trim: true
    }
});

// Apply the uniqueValidator plugin to RegisterSchema.
subCategorySchema.plugin(uniqueValidator);

// compile schema to model
const subCategorySchemaModel = mongoose.model('subcat_tmp', subCategorySchema ,'subcategory');

export default subCategorySchemaModel;
