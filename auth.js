const express = require("express");
const router = express.Router();

// Fixed login credentials
const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin123";

router.use(express.json()); // Make sure body is parsed

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.json({ success: true, token: "dummy-token-123" });
  }
  return res.status(401).json({ success: false, message: "Invalid email or password" });
});

module.exports = router;
