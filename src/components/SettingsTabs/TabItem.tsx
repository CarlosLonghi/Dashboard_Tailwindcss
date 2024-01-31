'use client'

import * as Tabs from '@radix-ui/react-tabs'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      className="relative px-1 pb-2 text-sm font-medium text-zinc-500 hover:text-emerald-600 data-[state=active]:text-emerald-600"
      value={value}
    >
      {title}

      {isSelected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-emerald-600" />
      )}
    </Tabs.Trigger>
  )
}
