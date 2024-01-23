import { CaretDown } from '@phosphor-icons/react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href="#"
      className="group flex items-center gap-2 rounded px-3 py-2 hover:bg-green-50"
    >
      <Icon className="h-5 w-5 text-zinc-400" />
      <span className="font-medium text-zinc-600 group-hover:text-green-800">
        {title}
      </span>
      <CaretDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-green-600" />
    </a>
  )
}
