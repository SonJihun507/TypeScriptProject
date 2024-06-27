import { basicInfo } from "../types/countryTypes";
import styled from "styled-components";

interface CountryCardProps {
  country: basicInfo;
  handleSelctedCountry: (country: basicInfo) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelctedCountry,
}) => {
  return (
    <StCard onClick={() => handleSelctedCountry(country)}>
      <img
        src={country.flags.png}
        style={{ width: "150px", height: "150px" }}
      />
      <h3>{country.name.common}</h3>
      <h3>{country.capital}</h3>
    </StCard>
  );
};

export default CountryCard;

const StCard = styled.div`
  line-height: 1.5;
  background-color: #fcfdff;
  width: 323px;
  height: 323px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  justify-content: center;
  align-items: center;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  box-sizing: border-box;
  color: #000;
`;
