import { NextFunction, Request, Response } from "express";
import  CountrySeeder  from "../service/assignment8/countrySeeder";
import { HandleApiError, successResponse } from "../utils/responseHandler";

 class CountryDataSeeder {
  seedCountry = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const countryList = req.body;
      console.log(countryList, "this is countries");
      
      const result = CountrySeeder.seedCountry;
      return successResponse(res, "Countries data created successfully !", result, 200)
    } catch (error) {
      console.log(error);
      next(new HandleApiError(400, "Bad Request"));
    }
  };
}
const CountryData = new CountryDataSeeder();
export default CountryData;