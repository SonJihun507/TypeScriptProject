import React from "react";
import { getData } from "../api/fetchingData";
import { basicInfo } from "../types/countryTypes";
import CountryCard from "./CountryCard";
import styled from "styled-components";

const CountryList: React.FC = () => {
  const [countryData, setCountryData] = React.useState<basicInfo[]>([]);
  const [selectedCountry, setSelectedCountry] = React.useState<basicInfo[]>([]);
  React.useEffect(() => {
    const getCountry = async () => {
      try {
        const data: basicInfo[] = await getData();
        setCountryData(data);
      } catch (error) {
        alert(error);
      }
    };
    getCountry();
  }, []);

  const handleSelctedCountry = (country: basicInfo): void => {
    if (
      !selectedCountry.find(
        (selected: basicInfo) => selected.name.common === country.name.common
      )
    ) {
      setSelectedCountry([...selectedCountry, country]);
    } else {
      setSelectedCountry(
        selectedCountry.filter((selected: basicInfo) => {
          return selected.name.common !== country.name.common;
        })
      );
    }
  };

  return (
    <StCardsCotainer>
      <StTitle>Selected Countries</StTitle>
      <StCards>
        {selectedCountry.map((country: basicInfo) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelctedCountry={handleSelctedCountry}
            ></CountryCard>
          );
        })}
      </StCards>
      <StTitle>Countries</StTitle>
      <StCards>
        {countryData.map((country: basicInfo) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelctedCountry={handleSelctedCountry}
            ></CountryCard>
          );
        })}
      </StCards>
    </StCardsCotainer>
  );
};

export default CountryList;

const StCardsCotainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  background-color: gray;
  justify-content: center;
  align-items: center;
`;

const StCards = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  grid-template-rows: repeat(5, minmax(35px, auto));
  justify-content: center;
  row-gap: 20px;
  column-gap: 10px;
`;

const StTitle = styled.h1`
  justify-content: center;
  align-items: center;
  text-align: center;
`;
