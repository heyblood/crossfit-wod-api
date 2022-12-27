const express = require("express");
const apicache = require("apicache");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();

let cache = apicache.middleware("60 seconds");

router.get("/", cache, workoutController.getAllWorkouts);

router.get("/:workoutId", cache, workoutController.getOneWorkout);

router.get("/:workoutId/records", cache, recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
