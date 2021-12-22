import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  position: relative;
  right: 0;
  left: 0;
`

const StyledTitle = styled.div`
  position: absolute;
  z-index: 1;
  top: -10px;
  left: 8px;
  padding: 0 4px;
  background: ${props => props.theme.colors.gray1};
  border-radius: 4px;
  color: ${props => props.theme.colors.gray12};
  font-size: 14px;
  font-weight: 600;
  user-select: none;
`

const StyledInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 0 8px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.gray11};
  margin: 0;
  background: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: none;
  color: ${props => props.theme.colors.gray12};
  font-family: inherit;
  font-size: 16px;
  outline: none;
  transition: ${props => props.theme.transition};
  transition-property: border-color, background;

  ::placeholder {
    color: ${props => props.theme.colors.gray11};
  }

  :active,
  :focus,
  :hover {
    border-color: ${props => props.theme.colors.gray11};
    background: ${props => props.theme.colors.gray4};
    box-shadow: none;
  }
`

export type Props = {
  title: string
  value: string
  onChange: (value: string) => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

const Input: React.FC<Props> = ({ title, value, onChange, ...props }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledInput
        {...props}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </StyledWrapper>
  )
}

export default Input
