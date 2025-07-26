import Country from "../../models/countries";
class CountrySeeder {
  seedCountry = async (reqdata: string[]) => {
    const contryData = await Country.create(reqdata);
    return {
      status: "country data created",
      countries: "randomly added",
      data: contryData,
    };
  };
}
const seedCountries = new CountrySeeder();
export default seedCountries;
