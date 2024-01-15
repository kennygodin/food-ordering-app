import mongoose, { Schema, model, models } from 'mongoose';

const extraPriceSchema = new Schema({
  name: { type: String },
  price: { type: Number },
});

const menuItemSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    description: { type: String },
    category: { type: mongoose.Types.ObjectId },
    basePrice: { type: Number },
    sizes: { type: [extraPriceSchema] },
    extraIngredientPrices: { type: [extraPriceSchema] },
  },
  { timestamps: true }
);

const MenuItem = models?.MenuItem || model('MenuItem', menuItemSchema);

export default MenuItem;
