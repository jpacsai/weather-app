'use client'

import styles from "./page.module.css";
import Input from "@/components/Input/Input";
import Content from "@/components/Content/Content";
import styled from "styled-components";
import { useWeatherData } from "@/hooks/weather";
import Error from "@/components/Error/Error";
import { useState } from "react";
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
  const [unit, setUnit] = useState<Unit>('metric')

  // TODO: display loading on UI eg. Content
  return (
    <main className={styles.main}>
      <Container>
        <Input onSubmit={fetch} isLoading={isLoading} unit={unit} onUnitChange={(unit) => setUnit(unit)} />
        <Content weather={data} isLoading={isLoading} unit={unit} />
      </Container>
      <Error error={error} />
    </main>
  );
}
