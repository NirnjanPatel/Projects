//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = mongoose.Schema({
  _id: Number,
  catname: {
    type: String,
    required: [true,"Category name is required"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  caticonname: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },
});

// Apply the uniqueValidator plugin to RegisterSchema.
CategorySchema.plugin(uniqueValidator);

// compile schema to model
const CategorySchemaModel = mongoose.model('cat_tmp', CategorySchema ,'category');

export default CategorySchemaModel