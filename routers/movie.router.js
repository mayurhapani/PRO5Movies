const { Router } = require("express");
const router = Router();
const {
  movie,
  addmoviepage,
  addmovie,
  deletemovie,
  editmovie,
  editmoviepage,
  movieDetail,
} = require("../controllers/movie.controller");

// ---------------middleware start---------------
const { imageUpload } = require("../middlewares/fileUpload.middleware");
// ---------------middleware end---------------

// ---------------routers start---------------
router.get("/", movie);
router.get("/addmovie", addmoviepage);
router.post("/addmovie", imageUpload, addmovie);
router.get("/deleteData", deletemovie);
router.get("/editData", editmoviepage);
router.post("/editmovie", imageUpload, editmovie);
router.get("/detail", movieDetail);
// ---------------routers end---------------

module.exports = { router };
