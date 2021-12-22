import React from 'react'
import ReactSelect from 'react-select'
import styled from 'styled-components'
import { capitalize } from 'utils'

const StyledWrapper = styled.div`
  position: relative;
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

const StyledSelect = styled(ReactSelect)`
  .rs__control {
    border: 1px solid;
    border-color: ${props => props.theme.colors.gray11};
    background: none;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
    transition: ${props => props.theme.transition};
    transition-property: border-color, background;

    .rs__single-value {
      margin: 0;
      color: ${props => props.theme.colors.gray12};
      font-family: inherit;
      font-size: 16px;
    }

    :active,
    :focus,
    :hover,
    &--is-focused {
      border-color: ${props => props.theme.colors.gray11};
      background: ${props => props.theme.colors.gray4};
      box-shadow: none;
    }
  }

  .rs__indicators {
    display: none;
  }

  .rs__menu {
    z-index: 2;
    overflow: hidden;
    border: 1px solid;
    border-color: ${props => props.theme.colors.gray11};
    background: none;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: none;

    .rs__menu-list {
      overflow: hidden;
      padding: 0;
      background: ${props => props.theme.colors.gray1};
      border-radius: inherit;

      .rs__menu-notice {
        color: ${props => props.theme.colors.gray11};
      }

      .rs__option {
        border-color: ${props => props.theme.colors.gray11};
        border-bottom: 1px solid;
        color: ${props => props.theme.colors.gray12};
        cursor: pointer;
        outline: none;
        transition: ${props => props.theme.transition};
        transition-property: background;

        :last-child {
          border: none;
        }

        :active,
        :focus,
        :hover,
        &--is-focused {
          background: ${props => props.theme.colors.gray4};
        }

        &--is-selected {
          background: ${props => props.theme.colors.gray1};
          font-weight: 600;
        }
      }
    }
  }
`

type Option = {
  label: string
  value: string
}

export type Props = {
  title: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

const Select: React.FC<Props> = ({
  title,
  value,
  options,
  onChange,
  ...props
}) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledSelect
        {...props}
        instanceId={title}
        isSearchable={false}
        classNamePrefix="rs"
        options={options.map(option => ({
          label: option.split('-').map(capitalize).join(' '),
          value: option,
        }))}
        value={{
          label: value.split('-').map(capitalize).join(' '),
          value,
        }}
        onChange={(option: Option) => onChange(option.value)}
      />
    </StyledWrapper>
  )
}

export default Select
