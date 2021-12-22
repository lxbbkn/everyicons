import React from 'react'
import styled from 'styled-components'
import { Input, Select, Slider } from 'components'
import { useStore } from 'store'

const StyledLayoutSidebar = styled.aside`
  position: sticky;
  top: 48px;
  min-width: 240px;
  height: calc(100vh - 48px);
  padding: 24px 16px;

  @media screen and (max-width: 768px) {
    height: initial;
    border-bottom: 1px solid;
    border-bottom-color: ${props => props.theme.colors.gray6};
    background: ${props => props.theme.colors.gray1};
  }
`

const StyledLayoutSidebarItem = styled.div`
  margin-bottom: 24px;

  :last-child {
    margin-bottom: 0;
  }
`

type Props = {
  packs: string[]
}

const LayoutSidebar: React.FC<Props> = ({ packs }) => {
  const {
    pack,
    setPack,
    search,
    setSearch,
    size,
    setSize,
    strokeWidth,
    setStrokeWidth,
  } = useStore()

  return (
    <StyledLayoutSidebar>
      <StyledLayoutSidebarItem>
        <Input
          title="Search"
          value={search}
          onChange={setSearch}
          placeholder="Search"
        />
      </StyledLayoutSidebarItem>
      <StyledLayoutSidebarItem>
        <Select
          title="Pack"
          value={pack}
          options={packs}
          onChange={value => {
            setPack(value)
            window.scrollTo({ top: 0, behavior: 'auto' })
          }}
        />
      </StyledLayoutSidebarItem>
      <StyledLayoutSidebarItem>
        <Slider
          title="Size"
          value={size}
          onChange={setSize}
          unit="px"
          step={4}
          min={32}
          max={72}
        />
      </StyledLayoutSidebarItem>
      <StyledLayoutSidebarItem>
        <Slider
          title="Stroke width"
          value={strokeWidth}
          onChange={setStrokeWidth}
          unit="px"
          step={0.5}
          min={0.5}
          max={3}
        />
      </StyledLayoutSidebarItem>
    </StyledLayoutSidebar>
  )
}

export default LayoutSidebar
