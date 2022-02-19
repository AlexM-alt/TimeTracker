import express from "express";

import controllers from "../controllers/work.controllers";

const router = express.Router();

// Create Analysis
router.get("/analysis", controllers.analysis);

// Create Work
router.post("/", controllers.createWork);

// End Work
router.patch("/:id", controllers.finishWork);

// Get All Jobs
router.get("/", controllers.getWorks);

// Get Single Job
router.get("/:id", controllers.getWork);


/** Error handling */
router.use((req, res, next) => {
  const error = new Error('not found');
  return res.status(404).json({
      message: error.message
  });
});

export default router;
