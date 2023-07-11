const express = require("express");
const router = express.Router();

const apiRouter = require("./routes.api");

router.use("/api/v1", apiRouter);

module.export = router;
