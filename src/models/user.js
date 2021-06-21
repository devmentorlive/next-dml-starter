import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'User';

const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

schema.plugin(require('mongoose-autopopulate'));

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, 'users');
