'use client'
import { ChangeEvent, FormEvent, MouseEvent, useCallback, useState } from 'react'

import styled from "styled-components"
import { InputProps } from "./Input.types"
import { Unit } from '@/types'

const InputContainer = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
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
`

const SubmitButton = styled.button`
  all: unset;
  background-color: blue;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

const Input = ({ onSubmit }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [unit, setUnit] = useState<Unit>('metric')

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  // TODO: add event type
  const handleSubmit = useCallback((e: any) => {
    e.preventDefault()
    // TODO: add unit to onSubmit
    onSubmit(inputValue, unit)
    setInputValue('')
  }, [unit])

  return (
    <InputContainer onSubmit={handleSubmit}>
      <InputArea placeholder="Please type in city name .." value={inputValue} onChange={handleInput} />
      <SubmitButton onClick={handleSubmit} type="submit">Search</SubmitButton>
      {/* // TODO: <LocationSearchButton>TODO allow location search</LocationSearchButton> */}
      {/* // TODO: switch component for unit selection */}
    </InputContainer>
  )
}

export default Input