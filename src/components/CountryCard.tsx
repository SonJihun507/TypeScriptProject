import { basicInfoPick } from "../types/countryTypes";
import styled from "styled-components";

interface CountryCardProps {
  country: basicInfoPick;
  handleSelctedCountry: (country: basicInfoPick) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelctedCountry,
}) => {
  return (
    <StCards>
      <StCard onClick={() => handleSelctedCountry(country)}>
        <img
          src={country.flags.png}
          style={{ width: "150px", height: "150px" }}
        />
        <h3>{country.name.common}</h3>
        <h3>{country.capital}</h3>
      </StCard>
    </StCards>
  );
};

export default CountryCard;

const StCards = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 320px));
  grid-auto-rows: repeat(auto-fill, minmax(320px, 0));
  justify-content: center;
  row-gap: 60px;
`;

const StCard = styled.div`
  line-height: 1.5;
  background-color: #fcfdff;
  width: 320px;
  height: 323px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  /* margin: 0 auto 0 auto; */
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  box-sizing: border-box;
  color: #000;
`;
