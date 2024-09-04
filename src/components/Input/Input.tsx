'use client'
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react'

import styled from "styled-components"
import { InputProps } from "./Input.types"

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

const Input = ({ onSubmit }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  // TODO: add event type
  const handleSubmit = (e: any) => {
    e.preventDefault()
    // TODO: add unit to onSubmit
    onSubmit(inputValue)
    setInputValue('')
  }

  return (
    <InputContainer onSubmit={handleSubmit}>
      <InputArea placeholder="Please type in city name .." value={inputValue} onChange={handleInput} />
      <SubmitButton onClick={handleSubmit} type="submit">Search</SubmitButton>
    </InputContainer>
  )
}

export default Input