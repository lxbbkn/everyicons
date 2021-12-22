import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useStore } from 'store'
import LayoutHeader from './LayoutHeader'
import LayoutSidebar from './LayoutSidebar'

const StyledLayoutContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const StyledLayoutMain = styled.main`
  width: 100%;
  max-width: 1280px;
  min-height: calc(100vh - 48px);
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    overflow: hidden;
    max-width: initial;
    min-height: initial;
    margin: initial;
  }
`

const StyledLayoutPlaceholder = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    min-height: 240px;
  }
`

export type Props = {
  packs: string[]
  children: ReactNode
}

const Layout: React.FC<Props> = ({ packs, children }) => {
  const { sidebar } = useStore()

  return (
    <div>
      <LayoutHeader />
      <StyledLayoutContent>
        <StyledLayoutMain>
          {children || (
            <StyledLayoutPlaceholder>Nothing to show</StyledLayoutPlaceholder>
          )}
        </StyledLayoutMain>
        {sidebar && <LayoutSidebar packs={packs} />}
      </StyledLayoutContent>
    </div>
  )
}

export default Layout
