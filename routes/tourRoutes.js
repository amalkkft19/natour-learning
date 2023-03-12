const express = require("express");
const {getAllTours,createTour,deleteTour,getSingleTour,updateTours,checkId,middlewareTour} = require("../controllers/tourController")

const router = express.Router();
router.param("id",checkId);

router.route('/').get(getAllTours).post(middlewareTour,createTour);
router.route('/:id').delete( deleteTour).patch(updateTours).get(getSingleTour);

module.exports = router;