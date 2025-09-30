import Joi from "joi";
export const createSchema = Joi.object({
  carModel: Joi.string().min(4).max(30).required(),
  price: Joi.number().min(5).max(7).required(),
  owner: Joi.string().min(4).max(30).required(),
});
