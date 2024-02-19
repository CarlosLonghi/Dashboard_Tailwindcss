import { ElementType } from 'react'
import { CaretDown } from '@phosphor-icons/react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href="#"
      className="group flex items-center gap-2 rounded px-3 py-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
    >
      <Icon className="h-5 w-5 text-zinc-400" />
      <span className="font-medium text-zinc-600 group-hover:text-emerald-800 dark:text-zinc-200 dark:group-hover:text-emerald-500">
        {title}
      </span>
      <CaretDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-emerald-600 dark:text-zinc-300 dark:group-hover:text-emerald-500" />
    </a>
  )
}
