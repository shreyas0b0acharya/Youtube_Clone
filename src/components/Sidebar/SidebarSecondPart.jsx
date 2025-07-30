import React, { useState } from 'react'
import styled from 'styled-components/macro'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { ShowMoreRow } from './ShowMoreRow'
import { ShowLessRow } from './ShowLessRow'
import { SubHeading, SidebarMenuItem } from './FullWidthSidebar'
import { isSidebarDrawerOpenAtom } from '../../store'
import { useAtom } from 'jotai'

export const SidebarSecondPart = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandMenu = () => setIsExpanded(true)
  const collapseMenu = () => setIsExpanded(false)

  const visibleSubscriptions = ['Shreyas', 'Sushma']
  const hiddenSubscriptions = ['MrBeast', 'GreatStack', 'Fireship', 'Tech in Kannada', 'CodeWithHarry']

  return (
    <>
      <SubHeading>SUBSCRIPTIONS</SubHeading>
      {visibleSubscriptions.map((name, index) => (
        <SubscriptionItem key={`sub-${index}`} name={name} />
      ))}
      {isExpanded ? (
        <>
          {hiddenSubscriptions.map((name, index) => (
            <SubscriptionItem key={`hidden-sub-${index}`} name={name} />
          ))}
          <ShowLessRow onClick={collapseMenu} />
        </>
      ) : (
        <ShowMoreRow onClick={expandMenu} />
      )}
    </>
  )
}
const SubscriptionItem = ({ name }) => {
  const [, setIsSidebarDrawerOpen] = useAtom(isSidebarDrawerOpenAtom)
  const initial = name.charAt(0).toUpperCase()

  return (
    <SidebarMenuItem onClick={() => setIsSidebarDrawerOpen(false)}>
      <StyledListItemAvatar>
        <StyledAvatar>{initial}</StyledAvatar>
      </StyledListItemAvatar>
      <ListItemText primary={name} />
    </SidebarMenuItem>
  )
}


const StyledListItemAvatar = styled(ListItemAvatar)`
  && {
    min-width: 0;
    margin-right: 24px;
  }
`
const StyledAvatar = styled(Avatar)`
  && {
    width: 24px;
    height: 24px;
    font-size: 0.75rem;
    background-color: #ef6c00;
  }
`
