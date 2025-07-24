import Country from "../../models/countries";
export class CountrySeeder {
  static seedCountry = async (reqdata: string[]) => {
    const contryData = await Country.create(reqdata);
    return {
      status: "country data created",
      countries: "randomly added",
      data: contryData
    };
  };
}
