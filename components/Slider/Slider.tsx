import React from 'react'
import ReactSlider, { ReactSliderProps } from 'react-slider'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  position: relative;
  height: 40px;
  transition: all ease 1s;
`

const StyledTitle = styled.div`
  position: absolute;
  z-index: 1;
  background: ${props => props.theme.colors.gray1};
  color: ${props => props.theme.colors.gray12};
  font-size: 14px;
  font-weight: 600;
  user-select: none;

  span {
    color: ${props => props.theme.colors.gray11};
    font-size: 12px;
    font-weight: 400;
  }
`

const StyledSlider = styled(ReactSlider)`
  top: 20px;

  .slider-thumb {
    position: relative;
    width: 16px;
    height: 16px;
    background: ${props => props.theme.colors.gray12};
    border-radius: 50%;
    cursor: pointer;
    outline: none;
  }

  .slider-track {
    top: 7px;
    height: 2px;

    &-0 {
      background: ${props => props.theme.colors.gray12};
      border-radius: 2px;
    }

    &-1 {
      background: ${props => props.theme.colors.gray6};
      border-radius: 2px;
    }
  }
`

export type Props = {
  title: string
  unit: string
} & ReactSliderProps

const Slider: React.FC<Props> = ({ title, unit, value, ...props }) => {
  return (
    <StyledWrapper>
      <StyledTitle>
        {title} <span>{`(${value}${unit})`}</span>
      </StyledTitle>
      <StyledSlider
        ariaLabel="Slider"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        value={value}
        {...props}
      />
    </StyledWrapper>
  )
}

export default Slider
