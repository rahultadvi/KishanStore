import Order from "../model/Order.model.js";


export const placeOrder = async (req, res) => {
  try {
    const { cart, totalPrice, addressData } = req.body;

    if (!cart || cart.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    if (!addressData.name || !addressData.phone || !addressData.address)
      return res.status(400).json({ message: "Incomplete address" });

    const newOrder = new Order({
      items: cart.map((item) => ({
        fertilizerId: item._id || null,
        name: item.name,
        qty: item.qty,
        price: item.price,
      })),
      totalAmount: totalPrice,
      customer: addressData,
    });

    await newOrder.save();
    res.status(201).json({ message: "✅ Order placed successfully", order: newOrder });
  } catch (err) {
    res.status(500).json({ message: "❌ Error placing order", error: err.message });
  }
};
