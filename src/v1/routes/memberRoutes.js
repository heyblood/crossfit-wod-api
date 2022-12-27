const express = require("express");
const apicache = require("apicache");
const memberController = require("../../controllers/memberController");

const router = express.Router();

let cache = apicache.middleware("60 seconds");

router.get("/", cache, memberController.getAllMembers);

router.get("/:memberId", cache, memberController.getOneMember);

module.exports = router;
