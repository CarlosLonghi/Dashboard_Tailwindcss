'use client'
import {
  House,
  ChartLineUp,
  ListDashes,
  CheckSquareOffset,
  Flag,
  Users,
} from '@phosphor-icons/react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-1">
      <NavItem title="Home" icon={House} />
      <NavItem title="Dashboard" icon={ChartLineUp} />
      <NavItem title="Products" icon={ListDashes} />
      <NavItem title="Tasks" icon={CheckSquareOffset} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
