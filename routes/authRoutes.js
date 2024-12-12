const { signUp, login } = require("../controllers/authController");
const router = require("express").Router();

router.post("/signup", signUp);
router.post("/login", login);

module.exports = router;
