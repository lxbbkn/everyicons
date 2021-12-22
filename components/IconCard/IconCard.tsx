import React, { memo, SVGProps, useCallback } from 'react'
import FileSaver from 'file-saver'
import styled from 'styled-components'
import { Icon } from 'components'

const StyledIcon = styled.div`
  margin: auto;

  svg {
    transition: ${props => props.theme.transition};
    transition-property: width, height, stroke-width;

    path {
      stroke-width: inherit;
    }
  }
`

const StyledTitle = styled.div`
  overflow: hidden;
  width: 100%;
  color: ${props => props.theme.colors.gray11};
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const StyledIconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 4px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  outline: none;
  transition: ${props => props.theme.transition};
  transition-property: background;

  ${StyledIcon} {
    transition: ${props => props.theme.transition};
    transition-property: transform;
  }

  ${StyledTitle} {
    transition: ${props => props.theme.transition};
    transition-property: color;
  }

  :hover {
    background: ${props => props.theme.colors.gray2};

    ${StyledIcon} {
      transform: scale(1.2);
    }

    ${StyledTitle} {
      color: ${props => props.theme.colors.gray12};
    }
  }
`

export type Props = {
  name: string
  path: string
} & SVGProps<SVGElement>

const IconCard: React.FC<Props> = ({ name, path, ...props }) => {
  const [pack] = path.split('/')

  const handleSave = useCallback(() => {
    FileSaver.saveAs(`/static/icons/${path}.svg`, `${name}.svg`)
  }, [path, name])

  return (
    <StyledIconCard
      title={name}
      tabIndex={0}
      role="button"
      onClick={handleSave}
      onKeyPress={handleSave}
    >
      <StyledIcon>
        <Icon path={path} className={pack} {...props} />
      </StyledIcon>
      <StyledTitle>{name}</StyledTitle>
    </StyledIconCard>
  )
}

export default memo(IconCard)
