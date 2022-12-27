const express = require("express");
const apicache = require("apicache");
const memberController = require("../../controllers/memberController");

const router = express.Router();

let cache = apicache.middleware("60 seconds");

/**
 * @openapi
 * api/v1/members:
 *   get:
 *     tags:
 *       - Members
 *     description: Retrieve a list of members.
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/", cache, memberController.getAllMembers);

router.get("/:memberId", cache, memberController.getOneMember);

module.exports = router;
