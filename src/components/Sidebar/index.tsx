'use client'
import { Logo } from './Logo'
import {
  ChartLineUp,
  CheckSquareOffset,
  Flag,
  Gear,
  House,
  Lifebuoy,
  ListDashes,
  MagnifyingGlass,
  Users,
} from '@phosphor-icons/react'

import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <MagnifyingGlass className="h-5 w-5 fill-zinc-400" />
        </Input.Prefix>
        <Input.Control placeholder="Buscar" />
      </Input.Root>

      <nav className="space-y-1">
        <NavItem title="Home" icon={House} />
        <NavItem title="Dashboard" icon={ChartLineUp} />
        <NavItem title="Products" icon={ListDashes} />
        <NavItem title="Tasks" icon={CheckSquareOffset} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-1">
          <NavItem title="Support" icon={Lifebuoy} />
          <NavItem title="Settings" icon={Gear} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}
