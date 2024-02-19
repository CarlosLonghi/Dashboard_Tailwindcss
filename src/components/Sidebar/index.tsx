'use client'

import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { Button } from '../Button'
import * as Input from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import {
  ChartLineUp,
  CheckSquareOffset,
  Flag,
  Gear,
  House,
  Lifebuoy,
  List,
  ListDashes,
  MagnifyingGlass,
  Users,
} from '@phosphor-icons/react'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-r border-zinc-200 bg-zinc-50 p-4 px-5 py-8 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.CollapsibleTrigger asChild className="lg:hidden">
          <Button type="button" variant="ghost">
            <List className="h-6 w-6" />
          </Button>
        </Collapsible.CollapsibleTrigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-5 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
