import Joi from "joi";

const validationRules: Record<string, Joi.ObjectSchema> = {
  "/signup": Joi.object({     // Changes this for actual user regitration path = "/signup" from "/register" (this path was uesd in previous ques..).
    firstName: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .required()
      .messages({
        "string.empty": "First name is required",
        "string.min": "First name must be at least 2 characters",
      }),
    lastName: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .required()
      .messages({
        "string.empty": "Last name is required",
        "string.min": "Last name must be at least 2 characters",
      }),
    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.email": "Please enter a valid email address",
        "any.required": "Email is required",
      }),
    password: Joi.string()
      .min(6)
      .max(12)
      .required()
      .messages({
        "string.min": "Password must be at least 6 characters",
        "string.max": "Password cannot exceed 12 characters",
      }),
  }),

  "/signin": Joi.object({
    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.email": "Please enter a valid email address",
        "any.required": "Email is required",
      }),
    password: Joi.string()
      .required()
      .messages({
        "string.empty": "Password is required",
      }),
  }),
};

export default validationRules;
