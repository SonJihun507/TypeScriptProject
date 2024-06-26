import React from "react";
import { getData } from "../api/fetchingData";
import { basicInfoPick } from "../types/countryTypes";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countryData, setCountryData] = React.useState<basicInfoPick[]>([]);
  const [selectedCountry, setSelectedCountry] = React.useState<basicInfoPick[]>(
    []
  );
  React.useEffect(() => {
    const getCountry = async () => {
      try {
        const data: basicInfoPick[] = await getData();
        setCountryData(data);
      } catch (error) {
        alert(error);
      }
    };
    getCountry();
  }, []);
  console.log(countryData);

  const handleSelctedCountry = (country: basicInfoPick): void => {
    if (
      !selectedCountry.find(
        (selected: basicInfoPick) =>
          selected.name.common === country.name.common
      )
    ) {
      setSelectedCountry([...selectedCountry, country]);
    } else {
      setSelectedCountry(
        selectedCountry.filter((selected: basicInfoPick) => {
          return selected.name.common !== country.name.common;
        })
      );
    }
  };

  return (
    <>
      <div>
        <h1>Selected Countries</h1>
        {selectedCountry.map((country: basicInfoPick) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelctedCountry={handleSelctedCountry}
            ></CountryCard>
          );
        })}
        ;
      </div>
      <div>
        <h1>Countries</h1>
        {countryData.map((country: basicInfoPick) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelctedCountry={handleSelctedCountry}
            ></CountryCard>
          );
        })}
        ;
      </div>
    </>
  );
};

export default CountryList;
