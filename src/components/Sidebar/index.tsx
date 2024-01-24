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

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <MagnifyingGlass className="h-5 w-5 fill-zinc-400" />
        <input
          type="text"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-400 outline-none"
          placeholder="Buscar"
        />
      </div>

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
