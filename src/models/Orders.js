import { Schema, model, models } from 'mongoose';

const orderSchema = new Schema(
  {
    userEmail: String,
    phone: String,
    postalCode: String,
    city: String,
    country: String,
    streetAddress: String,
    cartProducts: Object,
    paid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Order = models?.Order || model('Order', orderSchema);
export default Order;
