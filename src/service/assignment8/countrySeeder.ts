import Country from "../../models/countries";
class CountrySeeder {
  seedCountry = async (reqdata: string[]) => {
    try {
      const contryData = await Country.create(reqdata);
      return {
        status: "country data created",
        countries: "randomly added",
        data: contryData,
      };
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };
}
const seedCountries = new CountrySeeder();
export default seedCountries;
