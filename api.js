const express = require("express");
const router = express.Router();
const Record = require("../models/Record");

// GET /api/records - supports query filters
router.get("/records", async (req, res) => {
  try {
    const q = {};
    if (req.query.year) q.Year = Number(req.query.year);
    if (req.query.endYear) q.Year = { $lte: Number(req.query.endYear) };
    if (req.query.topics) q.Topics = req.query.topics;
    if (req.query.region) q.Region = req.query.region;
    if (req.query.country) q.Country = req.query.country;
    if (req.query.city) q.City = req.query.city;
    if (req.query.sector) q.Sector = req.query.sector;
    if (req.query.pest) q.PEST = req.query.pest;
    if (req.query.source) q.Source = req.query.source;
    if (req.query.swot) q.SWOT = req.query.swot;

    const limit = Math.min(1000, Number(req.query.limit) || 1000);
    const data = await Record.find(q).limit(limit).lean();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/filters/options - unique filter options
router.get("/filters/options", async (req, res) => {
  try {
    const fields = ["Year", "Topics", "Region", "Country", "City", "Sector", "PEST", "Source", "SWOT"];
    const result = {};
    for (const f of fields) {
      const vals = await Record.distinct(f);
      result[f] = vals.filter(Boolean).sort();
    }
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
