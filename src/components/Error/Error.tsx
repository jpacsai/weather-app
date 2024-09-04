import styled from "styled-components"
import { ErrorProps } from "./Error.types"
import { useState } from "react"

const ErrorContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  background-color: red;
  padding: 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 500px;
  display: flex;
  justify-content: space-between;
`

const CloseIcon = styled.div`
  text-align: end;
  cursor: pointer;
`

const Error = ({ error }: ErrorProps) => {
  const [isOpen, setIsOpen] = useState(!!error)

  if (!isOpen) return;
  return (
    <ErrorContainer isOpen={isOpen}>
      <div>{error}</div>
      <CloseIcon onClick={() => setIsOpen(false)}>X</CloseIcon>
    </ErrorContainer>)
}

export default Error;