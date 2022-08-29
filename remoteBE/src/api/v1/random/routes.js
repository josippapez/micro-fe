const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const { faker } = require("@faker-js/faker");

router.get("/", (req, res) => {
  try {
    const people = [];
    for (let index = 0; index < 20; index++) {
      people.push({
        id: crypto.randomUUID(),
        name: faker.name.firstName() + " " + faker.name.lastName(),
      });
    }
    res.status(200).json(people);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
