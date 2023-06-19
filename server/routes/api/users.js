const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/test", (req, res) => res.json({ msg: "Users works!" }));

const { registerUser, loginUser } = require("../../controller/userController");
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
