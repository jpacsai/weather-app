'use client'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import styled from "styled-components"
import { InputProps } from "./Input.types"
import { useLocation } from '@/hooks/location'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

const InputForm = styled.form`
  display: flex;
  gap: 10px;
`

const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`

const InputArea = styled.input`
  background-color: white;
  flex: 1;
  padding: 10px;
  width: 200px;
  border: none;
  border-radius: 5px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:disabled {
    background-color: #c4c4c4;
  }
`

const SubmitButton = styled.button`
  all: unset;
  background-color: blue;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 70px;
  text-align: center;

  &:disabled {
    background-color: #9E9E9E;
  }
`

const LocationSearchButton = styled.button`
  all: unset;
  background-color: blue;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const UnitButton = styled.button`
  all: unset;
  background-color: blue;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const UnitButtonLabel = styled.span<{ isActive: boolean }>`
  text-decoration: ${({ isActive }) => isActive ? 'underline' : 'initial'};
`

const Input = ({ onSubmit, fetchLocation, unit, isLoading, isLocationLoading, onUnitChange }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  // TODO: add event type
  const handleSubmit = useCallback((e: any) => {
    e.preventDefault()
    onSubmit(inputValue)
    setInputValue('')
  }, [inputValue, unit, onSubmit])

  const handleUnitChange = useCallback(() => {
    onUnitChange(unit === 'metric' ? 'imperial' : 'metric')
  }, [unit])

  return (<>
    <InputContainer>
      <InputForm onSubmit={handleSubmit}>
        <InputArea placeholder="Please type in city name .." value={inputValue} onChange={handleInput} disabled={isLoading || isLocationLoading} />
        <SubmitButton onClick={handleSubmit} type="submit" disabled={isLoading || !inputValue}>{isLoading ? '...' : 'Search'}</SubmitButton>
      </InputForm>
      <OptionsContainer>
        <UnitButton onClick={handleUnitChange}><UnitButtonLabel isActive={unit === 'metric'}>Metric</UnitButtonLabel> / <UnitButtonLabel isActive={unit === 'imperial'}>Imperial</UnitButtonLabel></UnitButton>
        <LocationSearchButton onClick={fetchLocation}>{isLocationLoading ? '...' : 'Use my location'}</LocationSearchButton>
      </OptionsContainer>
    </InputContainer>
  </>
  )
}

export default Input