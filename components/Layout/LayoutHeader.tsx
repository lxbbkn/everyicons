import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'components'
import { useStore } from 'store'
import { ThemeMode } from 'styles/themes'

const { Light } = ThemeMode

const StyledLayoutHeader = styled.header<{ sidebar: boolean }>`
  position: sticky;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: flex-end;
  padding: 0 16px;
  border-bottom: 1px solid;
  border-bottom-color: ${props => props.theme.colors.gray6};
  background: ${props => props.theme.colors.gray1};

  button {
    margin-left: 20px;

    .top-icon {
      width: 24px;
      height: 24px;
      color: ${props => props.theme.colors.gray12};
      transition: ${props => props.theme.transition};
      transition-duration: 200ms;

      &-sidebar {
        transform: ${props => `rotate(${props.sidebar ? 0 : 180}deg)`};

        @media screen and (max-width: 768px) {
          transform: ${props => `rotate(${props.sidebar ? -90 : 90}deg)`};
        }
      }
    }

    :hover .top-icon {
      color: ${props => props.theme.colors.orange10};
    }
  }
`

const LayoutHeader: React.FC = () => {
  const { theme, toggleTheme, sidebar, toggleSidebar } = useStore()

  const items = useMemo(() => {
    const handleGitHub = () => {
      window.open('https://github.com', '_blank', 'noopener,noreferrer')
    }

    return [
      {
        key: 'github',
        buttonProps: {
          'aria-label': 'GitHub',
          onClick: handleGitHub,
        },
        iconProps: {
          path: 'tabler/brand-github',
          className: 'top-icon top-icon-github',
        },
      },
      {
        key: 'theme',
        buttonProps: {
          'aria-label': 'Theme',
          onClick: toggleTheme,
        },
        iconProps: {
          path: `tabler/${theme === Light ? 'moon' : 'sun'}`,
          className: 'top-icon top-icon-theme',
        },
      },
      {
        key: 'sidebar',
        buttonProps: {
          'aria-label': 'Sidebar',
          onClick: toggleSidebar,
        },
        iconProps: {
          path: 'tabler/chevron-right',
          className: 'top-icon top-icon-sidebar',
        },
      },
    ]
  }, [theme, toggleTheme, toggleSidebar])

  return (
    <StyledLayoutHeader sidebar={sidebar}>
      {items.map(({ key, buttonProps, iconProps }) => (
        <Button key={key} {...buttonProps}>
          <Icon {...iconProps} />
        </Button>
      ))}
    </StyledLayoutHeader>
  )
}

export default LayoutHeader
