'use client'

import styles from "./page.module.css";
import Input from "@/components/Input/Input";
import Content from "@/components/Content/Content";
import styled from "styled-components";
import { useWeatherData } from "@/hooks/weather";
import { useLocation } from "@/hooks/location";
import Error from "@/components/Error/Error";
import { useEffect, useState } from "react";
import { Unit } from "@/types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 500px;
`

export default function Home() {
  const { fetch, isLoading, data, error } = useWeatherData();
  const { fetch: fetchLocation, data: location, isLoading: isLocationLoading, error: locationError } = useLocation();

  const [unit, setUnit] = useState<Unit>('metric')

  useEffect(() => {
    if (location) {
      fetch(`${location.lat},${location.lon}`)
    }
  }, [location, fetch])

  return (
    <main className={styles.main}>
      <Container>
        <Input onSubmit={fetch} fetchLocation={fetchLocation} isLoading={isLoading} isLocationLoading={isLocationLoading} unit={unit} onUnitChange={(unit) => setUnit(unit)} />
        <Content weather={data} isLoading={isLoading} isLocationLoading={isLocationLoading} unit={unit} />
      </Container>
      <Error error={error || locationError} />
    </main>
  );
}
