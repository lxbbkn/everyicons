import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 0;
  border: none;
  margin: 0;
  background: none;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  outline: none;
`

export type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
