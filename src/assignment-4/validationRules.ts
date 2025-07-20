import Joi from "joi";

const validationRules: Record<string, Joi.ObjectSchema> = {
  "/register": Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
  "/login": Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

export default validationRules;
