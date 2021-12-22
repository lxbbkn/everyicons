import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

const StyledLink = styled.a``

export type Props = {
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Link: React.FC<Props> = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>
}

export default Link
