const express = require("express");
const router = express.Router();

// router.use("/", (req, res) => {
//   res.send("App is running");
// });

const apiRouter = require("./routes.api");

router.use("/api/v1", apiRouter);

module.exports = router;
