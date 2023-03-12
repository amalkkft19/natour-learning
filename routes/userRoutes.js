const { getAllUsers,getSingleUser,createUser,deleteUser,updateUser} = require("../controllers/userController");
const express = require("express");


const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getSingleUser).delete(deleteUser).patch(updateUser);

module.exports = router;