import { Outlet, useParams } from "react-router-dom";
import { styled } from "styled-components";
import WeatherCard from "./WeatherCard";
import BlankPanel from "./BlankPanel";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  span {
    font-size: 3rem;
  }
`;

const WeatherInfoSection = () => {
  const { period, area } = useParams();

  return (
    <Wrapper>
      <InfoBox>
        <span>📅 날씨예보 : {period === "day" ? "오늘" : "주간"} </span>
        <span>📌 지역 : {area}</span>
      </InfoBox>
      {period !== "day" && period !== "week" ? <BlankPanel /> : <Outlet />}
    </Wrapper>
  );
};

export default WeatherInfoSection;
