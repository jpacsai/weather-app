import styled from "styled-components"
import { ContentProps } from "./Content.types"

const ContentContainer = styled.div`
  display: flex;
  width: 500px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`

const Details = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 25% 25%;
`

const City = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`

const Temperature = styled.div`
  // TODO: add styling
`

const Wind = styled.div`
  // TODO: add styling
`

const Description = styled.div`
  // TODO: add styling
  justify-self: end;
align-self: center;
`

const Humidity = styled.div`
  // TODO: add styling
`

const Icon = styled.img`
  width: 60px;
  height: 60px;
  justify-self: center;
`

const Content = ({ weather }: ContentProps) => {
  if (!weather) return;
  const { cityName, windSpeed, temperature, description, icon, humidity } = weather
  return (<ContentContainer>
    <City>{cityName}</City>
    <Details>
      <div>
        <Temperature>Temperature: {temperature}</Temperature>
        <Wind>Wind speed: {windSpeed}</Wind>
        <Humidity>Humidity: {humidity}</Humidity>
      </div>

      <Description>{description}</Description>
      <Icon src={icon} />

    </Details>

  </ContentContainer>)
}

export default Content