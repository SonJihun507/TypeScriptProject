import { basicInfoPick } from "../types/countryTypes";
import axios from "axios";

type info = basicInfoPick;

export const getData = async (): Promise<info[]> => {
  const res = await axios.get("https://restcountries.com/v3.1/all");
  console.log(res);
  return res.data;
};
