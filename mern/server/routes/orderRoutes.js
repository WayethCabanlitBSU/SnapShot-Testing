// server/routes/orderRoutes.js
import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// POST /api/orders  → create new order
router.post("/", async (req, res) => {
  try {
    const { items, total, name, email, address, phone } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ error: "Cart items are required" });
    }

    const order = await Order.create({
      items,
      total,
      name,
      email,
      address,
      phone,
    });

    res.status(201).json(order);
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// (Optional) GET /api/orders  → list all orders (for testing)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

export default router;
