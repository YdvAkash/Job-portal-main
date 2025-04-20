import {
  companySchema,
  updateCompanySchema,
  validateRequest,
} from "../middlewares/validation.js";
import express from "express";
import isAuthenticated from "../middlewares/auth.js";
import isRecruiter from "../middlewares/recruiterAuth.js";
import {
  registerCompany,
  updateCompany,
  deleteCompany,
  getCompanies,
  getCompanyById,
} from "../controllers/company.controller.js";
import { uploadMiddleware } from "../middlewares/multer.js";

const companyRouter = express.Router();

// Apply middleware to all routes in the router
companyRouter.use(isAuthenticated, isRecruiter);

// Define your routes
companyRouter.post(
  "/register",
  validateRequest(companySchema),
  registerCompany
);
companyRouter.put(
  "/update/:id",
  uploadMiddleware,
  validateRequest(updateCompanySchema),
  updateCompany
);
companyRouter.get("/all", getCompanies);
companyRouter.delete("/delete/:id", deleteCompany);
companyRouter.get("/:id", getCompanyById);

export default companyRouter;
